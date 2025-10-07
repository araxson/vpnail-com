'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  gaId: string;
}

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

interface GoogleTagManagerProps {
  gtmId: string;
}

export function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}
      </Script>
    </>
  );
}

export function GoogleTagManagerNoScript({ gtmId }: GoogleTagManagerProps) {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

// Types for Google Analytics
interface GtagWindow extends Window {
  gtag?: (command: string, action: string, parameters?: Record<string, unknown>) => void;
}

// Enhanced Analytics Event Tracking
export const gtag = {
  event: (action: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      const gtagWindow = window as GtagWindow;
      if (gtagWindow.gtag) {
        gtagWindow.gtag('event', action, parameters);
      }
    }
  },
  
  // Track conversions
  conversion: (conversionId: string, value?: number, currency?: string) => {
    gtag.event('conversion', {
      send_to: conversionId,
      value: value,
      currency: currency || 'CAD',
    });
  },
  
  // Track page views
  pageview: (url: string) => {
    gtag.event('page_view', {
      page_path: url,
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
          price: price,
          quantity: 1,
        },
      ],
    });
  },
  
  // Track booking clicks
  bookingClick: (serviceName?: string) => {
    gtag.event('begin_checkout', {
      currency: 'CAD',
      items: serviceName ? [{
        item_name: serviceName,
        item_category: 'Service Booking',
      }] : [],
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