import type { Metadata } from 'next'
import { siteConfig } from './site.config'
import { getRandomGalleryImage } from '@/lib/seo/og-image'

const verification: Metadata['verification'] = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
  yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || undefined,
  other: {}
}

if (process.env.NEXT_PUBLIC_MSVALIDATE) {
  (verification.other as Record<string, string>)['msvalidate.01'] = process.env.NEXT_PUBLIC_MSVALIDATE
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
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: getRandomGalleryImage(),
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
    images: [getRandomGalleryImage()],
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
