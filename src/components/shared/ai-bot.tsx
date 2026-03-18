'use client';

import LlmConnector, {
  GeminiProvider,
  OpenaiProvider,
  type LlmConnectorBlock,
} from '@rcb-plugins/llm-connector';
import ChatBot, { Flow, Params, type Settings } from 'react-chatbotify';
// import { Block,Flow,Message,Params,Plugin,Settings,Styles,Toast,Theme } from "react-chatbotify";

const settings: Settings = {
  header: {
    title: 'Leanitech AI Bot',
  },
  footer: {
    text: 'Powered by Leanitech',
  },
};

type AIBotProps = {
  type: 'gemini' | 'openai';
};

export default function AIBot(props: AIBotProps) {
  const helpOptions = [
    'Quickstart',
    'Services',
    'API Docs',
    'Github',
    'WhatsApp',
  ];

  const plugins = [LlmConnector()];

  const llmProvider =
    props.type === 'gemini'
      ? new GeminiProvider({
          mode: 'proxy',
          model: 'gemini-2.5-flash:streamGenerateContent',
          responseFormat: 'stream',
          baseUrl: '/api/gemini/models',
          debug: false,
        })
      : new OpenaiProvider({
          mode: 'proxy',
          model: 'gpt-4o',
          responseFormat: 'stream',
          baseUrl: '/api/openai/chat/completions',
          debug: false,
        });

  const flow = {
    start: {
      message:
        "Hello! I'm your AI assistant. How can I help you today? Here are some options to get you started:",
      options: ['I am ready!'],
      chatDisabled: false,
      path: async (params: Params) => {
        // if (!apiKey) {
        //   await params.simulateStreamMessage('You have not set your API key!');
        //   return 'start';
        // }
        await params.simulateStreamMessage('Ask away!');
        return 'gemini';
      },
    },
    gemini: {
      llmConnector: {
        provider: llmProvider,
        outputType: 'character',
      } satisfies LlmConnectorBlock['llmConnector'],
    },
  } as Flow;
  return <ChatBot flow={flow} settings={settings} plugins={plugins} />;
}
