'use client';

import Script from 'next/script';
import { analyticsConfig } from '@/lib/config/analytics.config';

interface GoogleAnalyticsProps {
  gaId?: string;
}

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const resolvedGaId = gaId?.trim() || analyticsConfig.gaId;
  if (!resolvedGaId || !analyticsConfig.shouldLoadGa) {
    return null;
  }

  const dataLayerName = analyticsConfig.dataLayerName;
  const gtagBootstrap = `
    window['${dataLayerName}'] = window['${dataLayerName}'] || [];
    window.dataLayer = window['${dataLayerName}'];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${resolvedGaId}', {
      page_path: window.location.pathname,
      send_page_view: false,
      anonymize_ip: true,
    });
  `;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${resolvedGaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {gtagBootstrap}
      </Script>
    </>
  );
}

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

// Types for Google Analytics
interface GtagWindow extends Window {
  gtag?: (command: string, action: string, parameters?: Record<string, unknown>) => void;
}

const getPageMetadata = () => {
  if (typeof window === 'undefined') {
    return { page_location: undefined, page_title: undefined };
  }

  return {
    page_location: window.location.href,
    page_title: typeof document !== 'undefined' ? document.title : undefined,
  };
};

// Enhanced Analytics Event Tracking
export const gtag = {
  event: (action: string, parameters?: Record<string, unknown>) => {
    if (typeof window === 'undefined') return;

    const gtagWindow = window as GtagWindow & { dataLayer?: Array<Record<string, unknown>> };
    if (gtagWindow.gtag) {
      gtagWindow.gtag('event', action, parameters);
    }
  },
  
  // Track conversions
  conversion: (conversionId: string, value?: number, currency?: string) => {
    gtag.event('conversion', {
      send_to: conversionId,
      value,
      currency: currency || 'CAD',
    });
  },
  
  // Track page views
  pageview: (url: string) => {
    const metadata = getPageMetadata();
    gtag.event('page_view', {
      page_path: url,
      ...metadata,
    });
  },
  
  // Track form submissions
  formSubmit: (formName: string, formType: string) => {
    gtag.event('form_submit', {
      form_name: formName,
      form_type: formType,
      event_category: 'engagement',
      event_label: formName,
    });
  },
  
  // Track service inquiries
  serviceInquiry: (serviceName: string, price: number) => {
    gtag.event('view_item', {
      currency: 'CAD',
      value: price,
      items: [
        {
          item_id: serviceName.toLowerCase().replace(/\s+/g, '-'),
          item_name: serviceName,
          item_category: 'Service',
          price,
          quantity: 1,
        },
      ],
    });
  },
  
  // Track booking clicks
  bookingClick: (serviceName?: string) => {
    gtag.event('begin_checkout', {
      currency: 'CAD',
      items: serviceName
        ? [{
            item_name: serviceName,
            item_category: 'Service Booking',
          }]
        : [],
    });
  },
  
  // Track phone clicks
  phoneClick: (phoneNumber: string) => {
    gtag.event('click', {
      event_category: 'Contact',
      event_label: 'Phone Call',
      value: phoneNumber,
    });
  },
  
  // Track location clicks
  locationClick: (address: string) => {
    gtag.event('click', {
      event_category: 'Contact',
      event_label: 'Get Directions',
      value: address,
    });
  },
};
