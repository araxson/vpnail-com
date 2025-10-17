import type { Metadata, Viewport } from 'next'
import { siteConfig } from './site.config'
import { getRandomGalleryImage } from '@/lib/seo/og-image'

function getAbsoluteOgImage(): string {
  const image = getRandomGalleryImage()
  try {
    return new URL(image, siteConfig.url).toString()
  } catch {
    return `${siteConfig.url}/images/gallery/victoria-park-nails-calgary-luxury-gel-manicure-1.webp`
  }
}

const defaultGoogleSiteVerification = 'ui2QmsBUe9UxFkSEGhEoVgoy_V2K-qRywpR7hLEMZko'

const verification: Metadata['verification'] = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || defaultGoogleSiteVerification,
  yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
  yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || undefined,
  other: {}
}

if (process.env.NEXT_PUBLIC_MSVALIDATE) {
  (verification.other as Record<string, string>)['msvalidate.01'] = process.env.NEXT_PUBLIC_MSVALIDATE
}

export const rootViewport: Viewport = {
  themeColor: '#ffffff',
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: '%s | Victoria Park Nails and Spa Calgary',
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  manifest: '/favicons/manifest.json',
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicons/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicons/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicons/android-icon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicons/favicon.ico' },
    ],
    apple: [
      { url: '/favicons/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicons/favicon.ico'],
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/favicons/ms-icon-144x144.png',
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: getAbsoluteOgImage(),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.creator,
    images: [getAbsoluteOgImage()],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification,
  alternates: {
    languages: {
      'en-CA': siteConfig.url,
      'x-default': siteConfig.url,
    },
  },
}
