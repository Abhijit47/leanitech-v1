'use client';

import Clarity from '@microsoft/clarity';
import { GoogleAnalytics, sendGAEvent } from '@next/third-parties/google';
import { addScript, setup } from 'meta-pixel';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function setupMetaPixel(pixelId = '') {
  if (typeof window === 'undefined') return;
  const fbq = addScript(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js',
  );
  setup(fbq).init(pixelId).pageView();

  return fbq;
}

const isDev = process.env.NODE_ENV === 'development';

export default function Analytics() {
  const pixelId = '1713584576065166';

  const projectId = process.env.NEXT_PUBLIC_CLARITY_ID;

  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    sendGAEvent({
      action: 'page_view',
      category: 'Page View',
      label: window.location.pathname,
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const fbq = setupMetaPixel(pixelId);

    return () => {
      fbq?.('track', 'PageView');
    };
  }, [pixelId]);

  // initialize clarity
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!projectId) return;

    Clarity.init(projectId);

    Clarity.identify(
      crypto.randomUUID(), // custom-id
      'leanitech-session',
      pathname,
      'Leanitech Analytics',
    ); // only custom-id is required
  }, [projectId, pathname]);

  // useEffect(() => {
  //   // Clarity Project ID from your snippet
  //   const clarityId = 'x4fqp7y89x';

  //   // Check if Clarity is already loaded to prevent duplicates
  //   if (window.clarity) return;

  //   // Create the script element
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.async = true;
  //   script.src = `https://www.clarity.ms/tag/${clarityId}`;

  //   // Set up the global clarity queue function as required by the snippet
  //   // This mimics: (c,a,r,i,t,y){ c[a]=c[a]||function(){...} }
  //   window.clarity =
  //     window.clarity ||
  //     function () {
  //       (window.clarity.q = window.clarity.q || []).push(arguments);
  //     };

  //   // Append to head
  //   const head = document.head || document.getElementsByTagName('head');
  //   head.appendChild(script);

  //   // Cleanup function to remove script on unmount (optional, but good practice)
  //   return () => {
  //     head.removeChild(script);
  //   };
  // }, []);

  return (
    <>
      <GoogleAnalytics
        dataLayerName='leanitech'
        gaId={'G-8XESHQVKX5'}
        debugMode={isDev}
      />

      <noscript>
        {/* eslint-disable-next-line */}
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
