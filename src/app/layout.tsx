import type { Metadata } from 'next';
import { IBM_Plex_Mono, Lato, Nunito } from 'next/font/google';

// import AIBot from '@/components/shared/ai-bot';
import { WhatsAppWidget } from '@/components/whatsapp-widget/whatsapp-widget';
import { siteMetadata } from '@/constants/seo';
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

export const metadata: Metadata = siteMetadata();

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${lato.variable} ${nunito.variable} ${ibm_plex_mono.variable} overflow-x-hidden`}
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
        {/* <AIBot type='gemini' /> */}
      </body>
    </html>
  );
}
