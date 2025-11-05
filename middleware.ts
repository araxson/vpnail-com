import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const areaSlugRedirects: Record<string, string> = {
  '/areas/victoria-park': '/areas/victoria-park-calgary',
  '/areas/downtown': '/areas/downtown-calgary',
  '/areas/beltline': '/areas/beltline-calgary',
  '/areas/mission': '/areas/mission-calgary',
  '/areas/mount-royal': '/areas/mount-royal-calgary',
  '/areas/inglewood': '/areas/inglewood-calgary',
  '/areas/east-village': '/areas/east-village-calgary',
  '/areas/erlton': '/areas/erlton-calgary',
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = url.hostname.toLowerCase();
  const isLocalLikeHost = hostname === 'localhost' || hostname.endsWith('.vercel.app');

  if (!isLocalLikeHost) {
    const forwardedProto = request.headers.get('x-forwarded-proto') ?? url.protocol.replace(':', '');

    // Enforce HTTPS
    if (forwardedProto !== 'https') {
      url.protocol = 'https:';
      return NextResponse.redirect(url, 308);
    }

    // Canonical host redirect to www.vpnail.com
    if (hostname === 'vpnail.com') {
      url.hostname = 'www.vpnail.com';
      return NextResponse.redirect(url, 308);
    }

    // Trim trailing slash (except for root path)
    if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
      url.pathname = url.pathname.replace(/\/+$/, '');
      return NextResponse.redirect(url, 308);
    }
  }

  const areaRedirectTarget = areaSlugRedirects[url.pathname];
  if (areaRedirectTarget) {
    url.pathname = areaRedirectTarget;
    return NextResponse.redirect(url, 308);
  }

  // Handle plural to singular redirects
  if (request.nextUrl.pathname === '/consultations') {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/consultation';
    return NextResponse.redirect(redirectUrl, 308);
  }

  const response = NextResponse.next();

  // Security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // Content Security Policy - mirror next.config.ts for consistency
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://tagmanager.google.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: blob: https: http:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://tagmanager.google.com https://api.web3forms.com",
    "frame-src 'self' https://www.google.com https://www.googletagmanager.com https://tagmanager.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://api.web3forms.com",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);

  // Performance headers
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-store');
  } else if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (request.nextUrl.pathname.match(/\.(css|js)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
