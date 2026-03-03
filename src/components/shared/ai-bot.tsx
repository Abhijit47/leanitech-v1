'use client';

import LlmConnector, { GeminiProvider } from '@rcb-plugins/llm-connector';
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

export default function AIBot({
  apiKey,
}: Readonly<{
  apiKey: string | undefined;
}>) {
  const helpOptions = [
    'Quickstart',
    'Services',
    'API Docs',
    'Github',
    'WhatsApp',
  ];
  const plugins = [LlmConnector()];
  const flow = {
    start: {
      message:
        "Hello! Make sure you've set your API key before getting started!",
      options: ['I am ready!'],
      chatDisabled: false,
      path: async (params: Params) => {
        if (!apiKey) {
          await params.simulateStreamMessage('You have not set your API key!');
          return 'start';
        }
        await params.simulateStreamMessage('Ask away!');
        return 'gemini';
      },
    },
    gemini: {
      llmConnector: {
        // provider configuration guide:
        // https://github.com/React-ChatBotify-Plugins/llm-connector/blob/main/docs/providers/Gemini.md
        provider: new GeminiProvider({
          mode: 'proxy',
          model: 'gemini-2.5-flash',
          responseFormat: 'stream',
          // apiKey: apiKey!,
          baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
        }),
        outputType: 'character',
      },
    },
  } as Flow;
  return <ChatBot flow={flow} settings={settings} plugins={plugins} />;
}
