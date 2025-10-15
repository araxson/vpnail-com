'use client';

import Script from 'next/script';
import { analyticsConfig } from '@/lib/config/analytics.config';

interface GoogleTagManagerProps {
  gtmId?: string;
  dataLayerName?: string;
  gtmAuth?: string;
  gtmPreview?: string;
}

export function GoogleTagManager({
  gtmId,
  dataLayerName = analyticsConfig.dataLayerName,
  gtmAuth,
  gtmPreview,
}: GoogleTagManagerProps) {
  const resolvedGtmId = gtmId?.trim() || analyticsConfig.gtmId;
  if (!resolvedGtmId || !analyticsConfig.shouldLoadGtm) {
    return null;
  }

  const params = new URLSearchParams({ id: resolvedGtmId });
  if (gtmAuth?.trim() && gtmPreview?.trim()) {
    params.set('gtm_auth', gtmAuth.trim());
    params.set('gtm_preview', gtmPreview.trim());
    params.set('gtm_cookies_win', 'x');
  }

  const gtmSrc = `https://www.googletagmanager.com/gtm.js?${params.toString()}`;
  const gtmSnippet = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='${dataLayerName}'?'&l='+l:'';j.async=true;j.src='${gtmSrc}'+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','${dataLayerName}','${resolvedGtmId}');
  `;

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {gtmSnippet}
      </Script>
    </>
  );
}

export function GoogleTagManagerNoScript({
  gtmId,
  gtmAuth,
  gtmPreview,
}: GoogleTagManagerProps) {
  const resolvedGtmId = gtmId?.trim() || analyticsConfig.gtmId;
  if (!resolvedGtmId || !analyticsConfig.shouldLoadGtm) {
    return null;
  }

  const params = new URLSearchParams({ id: resolvedGtmId });
  if (gtmAuth?.trim() && gtmPreview?.trim()) {
    params.set('gtm_auth', gtmAuth.trim());
    params.set('gtm_preview', gtmPreview.trim());
    params.set('gtm_cookies_win', 'x');
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?${params.toString()}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
