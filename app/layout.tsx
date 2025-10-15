import { Suspense } from 'react';
import { Lato, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider, ToastProvider, AnalyticsEvents } from '@/components/providers';
import { Header } from '@/components/layouts/header';
import { Breadcrumbs } from '@/components/layouts/breadcrumbs';
import { Footer } from '@/components/layouts/footer';
import { StickyBottomNav } from '@/components/layouts/sticky-bottom-nav';
import { GoogleTagManager, GoogleTagManagerNoScript } from '@/components/seo';
import { StructuredData } from '@/components/seo';
import { rootMetadata, rootViewport } from '@/lib/config/metadata.config';
import { analyticsConfig } from '@/lib/config/analytics.config';

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'], // Reduced to essential weights only
  display: 'swap', // Add font-display
  preload: true, // Preload critical font
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  display: 'swap',
  preload: false,
  fallback: ['Georgia', 'serif'],
});

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
        <StructuredData type="LocalBusiness" />
        {/* Structured Data for Organization */}
        <StructuredData type="Organization" />
        {/* WebSite structured data (enables richer understanding, sitelinks eligibility) */}
        <StructuredData type="WebSite" data={{ inLanguage: 'en-CA' }} />
        {/* SiteNavigationElement structured data */}
        <StructuredData type="SiteNavigationElement" />

        {/* Google Tag Manager - Handles all tracking including GA4 */}
        {analyticsConfig.shouldLoadGtm && analyticsConfig.gtmId && (
          <GoogleTagManager
            gtmId={analyticsConfig.gtmId}
            dataLayerName={analyticsConfig.dataLayerName}
            gtmAuth={analyticsConfig.gtmAuth}
            gtmPreview={analyticsConfig.gtmPreview}
          />
        )}
      </head>
      <body className={cn(
        'min-h-screen bg-background antialiased',
        lato.variable,
        playfair.variable
      )}>
        {/* Google Tag Manager (noscript) */}
        {analyticsConfig.shouldLoadGtm && analyticsConfig.gtmId && (
          <GoogleTagManagerNoScript
            gtmId={analyticsConfig.gtmId}
            gtmAuth={analyticsConfig.gtmAuth}
            gtmPreview={analyticsConfig.gtmPreview}
          />
        )}
        
        {/* Skip Links */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-[900] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <a 
          href="#footer" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-40 bg-primary text-primary-foreground px-4 py-2 rounded-md z-[900] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
