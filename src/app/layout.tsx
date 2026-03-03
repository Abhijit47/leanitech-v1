import type { Metadata } from 'next';
import { IBM_Plex_Mono, Lato, Nunito } from 'next/font/google';

import AIBot from '@/components/shared/ai-bot';
import { WhatsAppWidget } from '@/components/whatsapp-widget/whatsapp-widget';
import Providers from '@/providers';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--display-family',
});
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--body-family',
});
const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
});

// dynamic metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    icons: {
      icon: '/favicons/favicon.svg',
    },
  };
}

// static metadata
// export const metadata: Metadata = {
//   icons: {
//     icon: '/favicons/favicon.svg', // Points to public/favicons/favicon.svg
//     // You can also add more specific types:
//     // apple: '/favicons/apple-touch-icon.png',
//   },
// };

// export const metadata: Metadata = {
//   title: 'PureLanding - Beautiful Shadcn UI Landing Page',
//   description:
//     'A beautiful landing page built with Shadcn UI, Next.js 15, Tailwind CSS, and Shadcn UI Blocks.',
//   keywords: [
//     'PureLanding',
//     'PureLanding Landing Page',
//     'PureLanding Landing Page Template',
//     'PureLanding Page',
//     'Shadcn UI Landing Page',
//     'Shadcn UI Blocks',
//     'Shadcn UI',
//     'Landing Page',
//     'Tailwind CSS Landing Page',
//     'Beautiful Shadcn UI Landing Page',
//     'Next.js 15 Landing Page',
//     'Simple Landing Page',
//     'Landing Page Template',
//     'Landing Page Design',
//   ],
//   openGraph: {
//     type: 'website',
//     siteName: 'PureLanding',
//     locale: 'en_US',
//     url: 'https://shadcn-landing-page.vercel.app',
//     title: 'PureLanding - Beautiful Shadcn UI Landing Page',
//     description:
//       'A beautiful landing page built with Shadcn UI, Next.js 15, Tailwind CSS, and Shadcn UI Blocks.',
//     images: [
//       {
//         url: '/favicons/og-image.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'PureLanding Preview',
//       },
//     ],
//   },
//   authors: [
//     {
//       name: 'Akash Moradiya',
//       url: 'https://shadcnui-blocks.com',
//     },
//   ],
//   creator: 'Akash Moradiya',
//   icons: [
//     {
//       rel: 'icon',
//       url: '/favicons/favicon.ico',
//     },
//     {
//       rel: 'apple-touch-icon',
//       url: '/favicons/favicon.svg',
//     },
//     {
//       rel: 'icon',
//       type: 'image/png',
//       url: '/favicons/favicon.svg',
//       sizes: '32x32',
//     },
//     {
//       rel: 'icon',
//       type: 'image/png',
//       url: '/favicons/favicon.svg',
//       sizes: '16x16',
//     },
//     {
//       rel: 'icon',
//       type: 'image/png',
//       url: '/favicons/favicon.svg',
//       sizes: '192x192',
//     },
//     {
//       rel: 'icon',
//       type: 'image/png',
//       url: '/favicons/favicon.svg',
//       sizes: '512x512',
//     },
//   ],
//   robots: {
//     index: true,
//     follow: true,
//   },
//   manifest: '/favicons/site.webmanifest',
// };

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const geminiKey = process.env.GEMINI_KEY;

  return (
    <html
      lang='en'
      className={`${lato.variable} ${nunito.variable} ${ibm_plex_mono.variable}`}
      suppressHydrationWarning>
      {/* <link rel='icon' href='/favicons/favicon.svg' /> */}
      <body className={`font-body antialiased`}>
        <Providers>{children}</Providers>
        <WhatsAppWidget
          number='12345'
          message='Hello! I have a question about your services.'
          title='Chat with us'
          subtitle='Typically replies in minutes'
          companyName='Support Team'
          avatar='/favicons/favicon.svg'
          placeholder='Type your message...'
        />
        <AIBot apiKey={geminiKey} />
      </body>
    </html>
  );
}
