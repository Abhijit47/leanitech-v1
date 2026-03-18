import openAIConfig from '@/configs/open-ai-config';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const OPENAI_API_BASE_URL = openAIConfig.baseUrl;

type OpenAIPayload = Record<string, unknown> & {
  stream?: boolean;
};

const parsePayload = async (req: NextRequest): Promise<OpenAIPayload> => {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    throw { status: 400, message: 'Invalid JSON body.' };
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw { status: 400, message: 'Request body must be a JSON object.' };
  }

  return body as OpenAIPayload;
};

const ensureApiKey = (): string => {
  if (!openAIConfig.apiKey) {
    throw { status: 403, message: 'OpenAI API key not configured.' };
  }
  return openAIConfig.apiKey;
};

const fetchOpenaiResponse = async (
  payload: OpenAIPayload,
  organizationId?: string,
): Promise<unknown> => {
  const apiKey = ensureApiKey();

  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  if (organizationId) {
    headers['OpenAI-Organization'] = organizationId;
  }

  const response = await fetch(`${OPENAI_API_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw {
      status: response.status,
      message: `OpenAI API error ${response.status}: ${errorText}`,
    };
  }

  return response.json();
};

const fetchOpenaiStream = async (
  payload: OpenAIPayload,
  organizationId?: string,
): Promise<ReadableStream> => {
  const apiKey = ensureApiKey();

  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  if (organizationId) {
    headers['OpenAI-Organization'] = organizationId;
  }

  const response = await fetch(`${OPENAI_API_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  if (!response.ok || !response.body) {
    const errorText = await response.text();
    throw {
      status: response.status,
      message: `OpenAI API error ${response.status}: ${errorText}`,
    };
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  const encoder = new TextEncoder();

  const { readable, writable } = new TransformStream<Uint8Array, Uint8Array>();
  const writer = writable.getWriter();

  void (async () => {
    let buffer = '';

    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith('data: ')) {
            await writer.write(encoder.encode(`${trimmed}\n\n`));
          }
        }
      }

      const tail = buffer.trim();
      if (tail.startsWith('data: ')) {
        await writer.write(encoder.encode(`${tail}\n\n`));
      }
    } finally {
      await writer.close();
      reader.releaseLock();
    }
  })();

  return readable;
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

export async function POST(req: NextRequest) {
  try {
    const payload = await parsePayload(req);
    const stream = payload.stream === true;

    const organizationId = req.headers.get('openai-organization') ?? undefined;

    if (stream) {
      const sseStream = await fetchOpenaiStream(payload, organizationId);

      return new Response(sseStream, {
        status: 200,
        headers: {
          'Content-Type': 'text/event-stream; charset=utf-8',
          'Cache-Control': 'no-cache, no-transform',
          Connection: 'keep-alive',
        },
      });
    }

    const json = await fetchOpenaiResponse(payload, organizationId);
    return NextResponse.json(json);
  } catch (err) {
    console.error('OpenAI proxy error:', err);
    return toErrorResponse(err);
  }
}
