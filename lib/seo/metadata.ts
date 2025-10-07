/**
 * SEO Metadata Utilities
 * Helper functions for generating consistent, optimized metadata across pages
 */

import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site.config'

interface GenerateMetadataProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: Array<{ name: string; url?: string }>
  noindex?: boolean
}

/**
 * Generate complete metadata object with OpenGraph, Twitter, and other SEO tags
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  noindex = false,
}: GenerateMetadataProps): Metadata {
  const pageUrl = url ? `${siteConfig.url}${url}` : siteConfig.url
  const ogImage = image || siteConfig.ogImage

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : [...siteConfig.keywords],
    authors: authors || [...siteConfig.authors],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: 'en_CA',
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: siteConfig.creator,
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
  }
}

/**
 * Generate JSON-LD breadcrumb schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

/**
 * Generate JSON-LD article schema
 */
export function generateArticleSchema({
  title,
  description,
  publishedTime,
  modifiedTime,
  authorName,
  image,
  url,
}: {
  title: string
  description: string
  publishedTime: string
  modifiedTime?: string
  authorName: string
  image?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image || siteConfig.ogImage,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/assets/images/brand/Victoria Park Nails and Spahealth-logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}${url}`,
    },
  }
}

/**
 * Generate JSON-LD FAQ schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate JSON-LD Service schema
 */
export function generateServiceSchema({
  name,
  description,
  price,
  url,
  areaServed = 'Calgary, Alberta',
}: {
  name: string
  description: string
  price?: string
  url: string
  areaServed?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      '@id': `${siteConfig.url}/#localbusiness`,
    },
    areaServed,
    serviceType: name,
    url: `${siteConfig.url}${url}`,
    ...(price && {
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
      },
    }),
  }
}

/**
 * Truncate text to specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - 3) + '...'
}

/**
 * Ensure meta description is within optimal length (150-160 chars)
 */
export function optimizeMetaDescription(description: string): string {
  const minLength = 150
  const maxLength = 160

  if (description.length >= minLength && description.length <= maxLength) {
    return description
  }

  if (description.length > maxLength) {
    return truncateText(description, maxLength)
  }

  // If too short, return as is (better to be short than padded)
  return description
}

/**
 * Ensure title is within optimal length (50-60 chars)
 */
export function optimizeTitle(title: string, includeBrand = true): string {
  const maxLength = includeBrand ? 50 : 60 // Leave room for brand suffix

  if (title.length <= maxLength) {
    return title
  }

  return truncateText(title, maxLength)
}
