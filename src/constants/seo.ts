import { Metadata } from 'next';

export const seo = {
  siteName: 'LeaniTech',
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  title: 'LeaniTech - Innovative Software Solutions for Your Business',
  description:
    'LeaniTech is a leading software development company that delivers innovative and efficient solutions to help businesses thrive in the digital age. Our team of experts specializes in custom software development, web and mobile applications, and cutting-edge technologies to drive your business forward.',
  keywords: [
    'LeaniTech',
    'software development',
    'custom software',
    'web applications',
    'mobile applications',
    'innovative solutions',
    'digital transformation',
    'technology consulting',
    'software engineering',
    'IT services',
  ],
};

export function siteMetadata(title?: string): Metadata {
  return {
    title: {
      absolute: title ? `${title} | ${seo.title}` : seo.title,
    },
    description: seo.description,
    keywords: seo.keywords.join(', '),
    metadataBase: seo.baseURL,
    openGraph: {
      type: 'website',
      siteName: seo.siteName,
      locale: 'en_US',
      url:
        title === 'Home'
          ? seo.baseURL
          : `${seo.baseURL}/${title?.toLocaleLowerCase().replace(/\s+/g, '-')}`,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: '/favicons/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'LeaniTech Open Graph Image',
        },
      ],
    },
    authors: [
      {
        name: 'Shobana R.',
        url: 'https://leanitech.com',
      },
      {
        name: 'Abhijit K.',
        url: 'https://abhijitdev.tech',
      },
    ],
    creator: 'Abhijit K.',
    icons: [
      {
        rel: 'icon',
        url: '/favicons/favicon.svg',
      },
      {
        rel: 'apple-touch-icon',
        url: '/favicons/favicon.svg',
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicons/favicon.svg',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicons/favicon.svg',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicons/favicon.svg',
        sizes: '192x192',
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicons/favicon.svg',
        sizes: '512x512',
      },
    ],
    robots: {
      index: true,
      follow: true,
    },
    manifest: '/favicons/site.webmanifest',
  };
}
