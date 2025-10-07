/**
 * Default SEO Configuration
 * Base SEO settings used across the site
 */

import type { Metadata } from 'next'
import { siteConfig } from './site.config'

export const defaultSEO: Partial<Metadata> = {
  metadataBase: new URL(siteConfig.url),
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
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
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.creator,
  },
} as const
