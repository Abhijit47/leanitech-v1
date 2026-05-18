import type { Metadata } from 'next';
import { IBM_Plex_Mono, Lato, Nunito } from 'next/font/google';

import Analytics from '@/components/analytics';
import { WhatsAppWidget } from '@/components/whatsapp-widget/whatsapp-widget';
import { seo, siteMetadata } from '@/constants/seo';
import Providers from '@/providers';
import { Organization, WithContext } from 'schema-dts';
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
  const jsonLd: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Leanitech',
    url: seo.baseURL,
    logo: `${seo.baseURL}/logo.svg`,
    foundingDate: '2024-08-26',
    sameAs: [
      'https://www.facebook.com/leanitechsolutions',
      'https://www.linkedin.com/company/leanitech',
      'https://www.instagram.com/leanitech',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11th cross road, West of Chord Road, 2nd Stage, Nagapura',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
      postOfficeBoxNumber:
        '11th cross road, West of Chord Road, 2nd Stage, Nagapura, Bengaluru, Karnataka, IN - 560086',
      postalCode: '560086',
    },
    keywords: seo.keywords.join(', '),
  };

  return (
    <html
      lang='en'
      className={`${lato.variable} ${nunito.variable} ${ibm_plex_mono.variable}`}
      suppressHydrationWarning>
      {/* <link rel='icon' href='/favicons/favicon.svg' /> */}
      <body className={`font-body antialiased overflow-x-hidden relative`}>
        <Providers>{children}</Providers>
        <WhatsAppWidget
          number='+918870238256'
          message='Hello! I have a question about your services.'
          title='Chat with us'
          subtitle='Typically replies in minutes'
          companyName='Leanitech'
          avatar='/favicons/favicon.svg'
          placeholder='Type your message...'
        />
        {/* <AIBot type='gemini' /> */}
        <Analytics />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
