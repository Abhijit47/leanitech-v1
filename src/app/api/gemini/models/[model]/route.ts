import geminiConfig from '@/configs/gemini-config';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const GEMINI_API_BASE_URL = geminiConfig.baseUrl;

type RouteContextType = {
  params: Promise<{ model: string }>;
};

type GeminiPayload = {
  model: string;
  contents: unknown[];
};

const validateGeminiPayload = async (
  req: NextRequest,
  model: string,
): Promise<GeminiPayload> => {
  if (!geminiConfig.apiKey) {
    throw { status: 403, message: 'Gemini API key not configured.' };
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    throw { status: 400, message: 'Invalid JSON body.' };
  }

  const contents = (body as { contents?: unknown }).contents;
  if (!Array.isArray(contents)) {
    throw { status: 400, message: 'contents array is required.' };
  }

  return { model, contents };
};

const streamGemini = async (
  payload: GeminiPayload,
): Promise<ReadableStream> => {
  const { model, contents } = payload;

  if (!geminiConfig.apiKey) {
    throw new Error('Gemini API key is not configured.');
  }

  const url =
    GEMINI_API_BASE_URL +
    '/models/' +
    encodeURIComponent(model) +
    ':streamGenerateContent' +
    '?alt=sse&key=' +
    geminiConfig.apiKey;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents }),
  });

  if (!response.ok || !response.body) {
    const errorText = await response.text();
    throw {
      status: response.status,
      message: 'Gemini API error ' + response.status + ': ' + errorText,
    };
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  const encoder = new TextEncoder();
  const transform = new TransformStream<Uint8Array, Uint8Array>();
  const writer = transform.writable.getWriter();

  void (async () => {
    let buffer = '';

    try {
      while (true) {
        const chunk = await reader.read();
        if (chunk.done) break;

        buffer += decoder.decode(chunk.value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('data: ')) {
            await writer.write(encoder.encode(trimmedLine + '\n\n'));
          }
        }
      }

      const tail = buffer.trim();
      if (tail.startsWith('data: ')) {
        await writer.write(encoder.encode(tail + '\n\n'));
      }
    } finally {
      await writer.close();
      reader.releaseLock();
    }
  })();

  return transform.readable;
};

const batchGemini = async (payload: GeminiPayload): Promise<unknown> => {
  const { model, contents } = payload;

  if (!geminiConfig.apiKey) {
    throw new Error('Gemini API key is not configured.');
  }

  const url =
    GEMINI_API_BASE_URL +
    '/models/' +
    encodeURIComponent(model) +
    ':generateContent?key=' +
    geminiConfig.apiKey;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw {
      status: response.status,
      message: 'Gemini API error ' + response.status + ': ' + errorText,
    };
  }

  return response.json();
};

const handleGeminiStream = async (
  req: NextRequest,
  model: string,
): Promise<Response> => {
  const payload = await validateGeminiPayload(req, model);
  const stream = await streamGemini(payload);

  return new Response(stream, {
    status: 200,
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
};

const handleGeminiBatch = async (
  req: NextRequest,
  model: string,
): Promise<NextResponse> => {
  const payload = await validateGeminiPayload(req, model);
  const data = await batchGemini(payload);
  return NextResponse.json(data);
};

const toErrorResponse = (err: unknown): NextResponse => {
  const status =
    typeof err === 'object' &&
    err !== null &&
    'status' in err &&
    typeof (err as { status: unknown }).status === 'number'
      ? (err as { status: number }).status
      : 500;

  const message =
    err instanceof Error
      ? err.message
      : typeof err === 'object' &&
          err !== null &&
          'message' in err &&
          typeof (err as { message: unknown }).message === 'string'
        ? (err as { message: string }).message
        : 'Internal server error';

  return NextResponse.json({ error: message }, { status });
};

export async function POST(req: NextRequest, ctx: RouteContextType) {
  try {
    const params = await ctx.params;
    const rawModel = params.model.trim();

    if (rawModel.endsWith(':generateContent')) {
      const model = rawModel.slice(0, -':generateContent'.length);
      return await handleGeminiBatch(req, model);
    }

    if (rawModel.endsWith(':streamGenerateContent')) {
      const model = rawModel.slice(0, -':streamGenerateContent'.length);
      return await handleGeminiStream(req, model);
    }

    return NextResponse.json(
      { error: 'Unsupported Gemini operation' },
      { status: 404 },
    );
  } catch (err) {
    console.error('Gemini route error:', err);
    return toErrorResponse(err);
  }
}
