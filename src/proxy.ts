import { findIp } from '@arcjet/ip';
import { Logger } from '@arcjet/logger';
import arcjet, { createMiddleware, detectBot } from '@arcjet/next';
import type { NextRequest, ProxyConfig } from 'next/server';
import { NextResponse } from 'next/server';
import { filter } from './lib/arcjet';

const log = new Logger({ level: 'info' });

// Get your Arcjet key at <https://app.arcjet.com>.
// Set it as an environment variable instead of hard coding it.
const arcjetKey = process.env.ARCJET_KEY;

if (!arcjetKey) {
  throw new Error('Cannot find `ARCJET_KEY` environment variable');
}

const isDev = process.env.NODE_ENV === 'development';

const aj = arcjet({
  characteristics: ['http.request.headers["user-agent"]', 'ip.src'],
  key: arcjetKey,
  rules: [
    filter({
      // This will deny any traffic using a VPN, Tor, that matches the curl
      // user agent, or that has no user agent
      deny: [
        'ip.src.hosting or ip.src.proxy or ip.src.relay or ip.src.vpn or lower(http.request.headers["user-agent"]) matches "curl" or len(http.request.headers["user-agent"]) eq 0',
        // 'ip.src.vpn or ip.src.tor or lower(http.request.headers["user-agent"]) matches "curl" or len(http.request.headers["user-agent"]) eq 0',
      ],
      // Block requests with `LIVE`, use `DRY_RUN` to log only.
      mode: isDev ? 'DRY_RUN' : 'LIVE',
      // mode: 'LIVE',
    }),
    detectBot({
      mode: 'LIVE', // will block requests. Use "DRY_RUN" to log only
      // configured with a list of bots to allow from
      // https://arcjet.com/bot-list
      allow: [
        // 'BAIDU_CLOUD_WATCH',
        // 'BAIDU_CRAWLER',
        // 'FACEBOOK_CATALOG',
        // 'FACEBOOK_CRAWLER',
        // 'FACEBOOK_SHARE_CRAWLER',
        // 'GOOGLE_ADS_CONVERSIONS',
        // 'GOOGLE_ADSBOT',
        // 'GOOGLE_ADSBOT_MOBILE',
        // 'GOOGLE_ADSENSE',
        // 'GOOGLE_ADSENSE_GOOGLEBOT',
        // 'GOOGLE_ADWORDS',
        // 'GOOGLE_APPENGINE',
        // 'GOOGLE_CERTIFICATES_BRIDGE',
        // 'GOOGLE_CRAWLER',
        // 'GOOGLE_CRAWLER_CLOUDVERTEX',
        // 'GOOGLE_CRAWLER_IMAGE',
        // 'GOOGLE_CRAWLER_MOBILE',
        // 'GOOGLE_CRAWLER_NEWS',
        // 'GOOGLE_CRAWLER_OTHER',
        // 'GOOGLE_CRAWLER_SAFETY',
        // 'GOOGLE_CRAWLER_STORE',
        // 'GOOGLE_CRAWLER_VIDEO',
        // 'GOOGLE_FAVICON',
        // 'GOOGLE_FEEDFETCHER',
        // 'GOOGLE_INSPECTION_TOOL',
        // 'GOOGLE_LIGHTHOUSE',
        // 'GOOGLE_PHYSICAL_WEB',
        // 'GOOGLE_PREVIEW',
        // 'GOOGLE_PUSH_NOTIFICATIONS',
        // 'GOOGLE_READ_ALOUD',
        // 'GOOGLE_SITE_VERIFICATION',
        // 'GOOGLE_STRUCTURED_DATA_TESTING_TOOL',
        // 'GOOGLE_WEB_SNIPPET',
        // 'GOOGLE_XRAWLER',
        // 'OPENAI_CRAWLER',
        // 'OPENAI_CRAWLER_SEARCH',
        // 'OPENAI_CRAWLER_USER',
        // 'SENTRY_CRAWLER',
        // 'SENTRY_UPTIME_MONITOR',
        // 'TWITTER_CRAWLER',
        // 'VERCEL_CRAWLER',
        // 'VERCEL_MONITOR_PREVIEW',
        // 'WELLKNOWN_CRAWLER',
        // 'WHATSAPP_CRAWLER',
        // 'YANDEX_CRAWLER',
        // 'YANDEX_CRAWLER_JAVASCRIPT',
        // 'CATEGORY:ARCHIVE',
        // 'CATEGORY:UNKNOWN',
        // 'CATEGORY:VERCEL',
        // 'CATEGORY:MICROSOFT',
        'CATEGORY:SEARCH_ENGINE',
        'CATEGORY:PREVIEW',
        'CATEGORY:MONITOR',
        'CATEGORY:WEBHOOK',
        'CATEGORY:GOOGLE',
        'CATEGORY:META',
        'CATEGORY:MICROSOFT',
        'CATEGORY:AI',
        'CATEGORY:VERCEL',
        'CATEGORY:ARCHIVE',
      ], // blocks all automated clients
    }),
  ],
});

// This function can be marked `async` if using `await` inside
function proxy(request: NextRequest) {
  // return NextResponse.redirect(new URL('/home', request.url));
  const ip = request.headers.get('x-forwarded-for') || findIp(request);
  // console.log('Client IP:', ip);
  log.debug('Client IP:', ip);

  return NextResponse.next();
}

// now we need to combine the Arcjet middleware with our handler
export default createMiddleware(aj, proxy);

export const config: ProxyConfig = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
