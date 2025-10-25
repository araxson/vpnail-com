import { Suspense } from 'react';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider, ToastProvider, AnalyticsEvents } from '@/components/providers';
import { Header } from '@/components/layouts/header';
import { Breadcrumbs } from '@/components/layouts/breadcrumbs';
import { Footer } from '@/components/layouts/footer';
import { StickyBottomNav } from '@/components/layouts/sticky-bottom-nav';
import { GoogleAnalytics } from '@/components/seo';
import { StructuredData } from '@/components/seo';
import { rootMetadata, rootViewport } from '@/lib/config/metadata.config';
import { analyticsConfig } from '@/lib/config/analytics.config';
import { siteConfig } from '@/lib/config/site.config';
import { lato, playfair } from '@/lib/config/fonts.config';
import { buttonVariants } from '@/components/ui/button';

const localBusinessStructuredDataOverrides = {
  areaServed: [
    { '@type': 'Place', name: 'Victoria Park, Calgary' },
    { '@type': 'Place', name: 'Beltline, Calgary' },
    { '@type': 'Place', name: 'Mission, Calgary' },
    { '@type': 'City', name: 'Calgary, Alberta' },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '51.0447',
      longitude: '-114.0719',
    },
    geoRadius: '6000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Victoria Park Nails & Spa Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Manicures & Pedicures in Downtown Calgary',
          url: `${siteConfig.url}/services#nail-services`,
          areaServed: 'Calgary Beltline',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gel & Acrylic Nail Enhancements',
          url: `${siteConfig.url}/services#nail-services`,
          areaServed: 'Victoria Park, Calgary',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Spa Massage & Relaxation Treatments',
          url: `${siteConfig.url}/services#massage-spa`,
          areaServed: 'Downtown Calgary & Mission',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Professional Waxing Services',
          url: `${siteConfig.url}/services#waxing`,
          areaServed: 'Calgary Stampede District',
        },
      },
    ],
  },
} as const;

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Prefetch likely navigation */}
        <link rel="prefetch" href="/services" />
        <link rel="prefetch" href="/contact" />
        <link rel="prefetch" href="/consultation" />
        
        {/* Geo & Local business meta for local SEO */}
        <meta name="geo.region" content="CA-AB" />
        <meta name="geo.placename" content="Calgary" />
        <meta name="geo.position" content="51.0447;-114.0719" />
        <meta name="ICBM" content="51.0447, -114.0719" />
        
        {/* Structured Data for Local Business */}
        <StructuredData type="LocalBusiness" data={localBusinessStructuredDataOverrides} />
        {/* Structured Data for Organization */}
        <StructuredData type="Organization" />
        {/* WebSite structured data (enables richer understanding, sitelinks eligibility) */}
        <StructuredData type="WebSite" data={{ inLanguage: 'en-CA' }} />
        {/* SiteNavigationElement structured data */}
        <StructuredData type="SiteNavigationElement" />
      </head>
      <body className={cn(
        'min-h-screen bg-background antialiased',
        lato.variable,
        playfair.variable
      )}>
        {/* Google Analytics (gtag.js) */}
        {analyticsConfig.shouldLoadAnalytics && analyticsConfig.measurementId && (
          <GoogleAnalytics measurementId={analyticsConfig.measurementId} />
        )}
        
        {/* Skip Links */}
        <a
          href="#main-content"
          className={cn(
            buttonVariants({ variant: 'default', size: 'sm' }),
            'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[900]'
          )}
        >
          Skip to main content
        </a>
        <a
          href="#footer"
          className={cn(
            buttonVariants({ variant: 'default', size: 'sm' }),
            'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-40 z-[900]'
          )}
        >
          Skip to footer
        </a>
        
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ToastProvider>
            <div className="min-h-screen flex flex-col">
              <Suspense fallback={null}>
                <AnalyticsEvents />
              </Suspense>
              <Header />
              <Breadcrumbs />
              <main id="main-content" className="flex-1 pb-20 lg:pb-0" tabIndex={-1}>{children}</main>
              <Footer id="footer" />
              <StickyBottomNav />
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
