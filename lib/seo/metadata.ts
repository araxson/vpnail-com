/**
 * SEO Metadata Utilities
 * Provides helpers for building consistent meta information across pages
 */

import type { Metadata } from 'next'
import {
  SEO_AUTHORS,
  SEO_BASE_URL,
  SEO_BRAND_NAME,
  SEO_DEFAULT_CREATOR,
  SEO_DEFAULT_DESCRIPTION,
  SEO_DEFAULT_KEYWORDS,
  SEO_DEFAULT_OG_IMAGE,
} from './constants'
import { PageSEOConfig } from './types'
import { getRandomGalleryImage } from './og-image'

const TITLE_MAX_LENGTH = 60
const DESCRIPTION_MIN = 150
const DESCRIPTION_MAX = 160

function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SEO_BASE_URL}${normalized === '/' ? '' : normalized}`
}

function formatTitle(title: string): string {
  return optimizeTextLength(title, TITLE_MAX_LENGTH)
}

function formatDescription(description: string): string {
  if (description.length >= DESCRIPTION_MIN && description.length <= DESCRIPTION_MAX) {
    return description
  }

  if (description.length > DESCRIPTION_MAX) {
    return optimizeTextLength(description, DESCRIPTION_MAX)
  }

  return description
}

function optimizeTextLength(value: string, maxLength: number): string {
  if (value.length <= maxLength) {
    return value
  }

  return `${value.slice(0, maxLength - 3)}...`
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
  type = 'website',
  noindex = false,
  publishedTime,
  modifiedTime,
  twitterDescription,
  openGraphDescription,
}: PageSEOConfig): Metadata {
  const canonicalUrl = absoluteUrl(path)
  const metaTitle = formatTitle(title)
  const metaDescription = formatDescription(description)
  const image = ogImage || getPrimaryOgImage()
  const ogImageUrl = absoluteUrl(image)
  const defaultKeywords = keywords && keywords.length > 0 ? keywords : SEO_DEFAULT_KEYWORDS

  return {
    metadataBase: new URL(SEO_BASE_URL),
    title: { absolute: metaTitle },
    description: metaDescription,
    keywords: defaultKeywords,
    authors: SEO_AUTHORS,
    creator: SEO_DEFAULT_CREATOR,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noindex
      ? {
          index: false,
          follow: true,
        }
      : {
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
      title: metaTitle,
      description: openGraphDescription ? formatDescription(openGraphDescription) : metaDescription,
      url: canonicalUrl,
      siteName: SEO_BRAND_NAME,
      locale: 'en_CA',
      type,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: twitterDescription ? formatDescription(twitterDescription) : metaDescription,
      images: [ogImageUrl],
      creator: SEO_DEFAULT_CREATOR,
    },
  }
}

function getPrimaryOgImage(): string {
  const images = getRandomGalleryImage()
  if (images) {
    return images
  }
  return SEO_DEFAULT_OG_IMAGE
}

export function optimizeTitle(value: string): string {
  return formatTitle(value)
}

export function optimizeMetaDescription(value: string): string {
  return formatDescription(value || SEO_DEFAULT_DESCRIPTION)
}
