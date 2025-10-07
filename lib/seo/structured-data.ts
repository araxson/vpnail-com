import {
  SEO_BASE_URL,
  SEO_BRAND_NAME,
  SEO_BUSINESS,
  SEO_NAVIGATION_ITEMS,
  SEO_SOCIAL_LINKS,
  SEO_DEFAULT_OG_IMAGE,
} from './constants'

export type BreadcrumbItem = { name: string; url: string }
export type FAQItem = { question: string; answer: string }

const LOGO_URL = `${SEO_BASE_URL}/Victoria_Park_Nails_Spa_Logo_Primary_small.png`

const sanitizeUrl = (url: string) => (url.startsWith('http') ? url : `${SEO_BASE_URL}${url}`)

export function getOrganizationSchema(overrides: Record<string, unknown> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SEO_BASE_URL}/#organization`,
    name: SEO_BRAND_NAME,
    url: SEO_BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
    sameAs: Object.values(SEO_SOCIAL_LINKS).filter(Boolean),
    ...overrides,
  }
}

export function getLocalBusinessSchema(overrides: Record<string, unknown> = {}) {
  const hours = SEO_BUSINESS.hours.map((entry) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: entry.day,
    opens: entry.hours.split(' - ')[0],
    closes: entry.hours.split(' - ')[1],
    description: entry.hours,
  }))

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness', 'NailSalon'],
    '@id': `${SEO_BASE_URL}/#localbusiness`,
    name: SEO_BUSINESS.name,
    description: overrides.description ?? SEO_BUSINESS.tagline,
    url: SEO_BASE_URL,
    telephone: SEO_BUSINESS.phone,
    email: SEO_BUSINESS.email,
    image: [LOGO_URL],
    logo: LOGO_URL,
    priceRange: '$$',
    sameAs: Object.values(SEO_SOCIAL_LINKS).filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SEO_BUSINESS.address.street,
      addressLocality: SEO_BUSINESS.address.city,
      addressRegion: SEO_BUSINESS.address.province,
      postalCode: SEO_BUSINESS.address.postalCode,
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.0447',
      longitude: '-114.0719',
    },
    hasMap: SEO_BUSINESS.address.mapUrl,
    openingHoursSpecification: hours,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    ...overrides,
  }
}

export function getWebsiteSchema(overrides: Record<string, unknown> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO_BASE_URL}/#website`,
    url: SEO_BASE_URL,
    name: SEO_BRAND_NAME,
    inLanguage: 'en-CA',
    potentialAction: {
      '@type': 'SearchAction',
      target: `https://www.google.com/search?q=site:${new URL(SEO_BASE_URL).hostname}+{search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@id': `${SEO_BASE_URL}/#organization`,
    },
    ...overrides,
  }
}

export function getSiteNavigationSchema(
  items: BreadcrumbItem[] = SEO_NAVIGATION_ITEMS,
  overrides: Record<string, unknown> = {}
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'SiteNavigationElement',
      position: index + 1,
      name: item.name,
      url: sanitizeUrl(item.url),
    })),
    ...overrides,
  }
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: sanitizeUrl(item.url),
    })),
  }
}

export function getFAQSchema(faqs: FAQItem[]) {
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

export function getServiceSchema({
  name,
  description,
  url,
  price,
  areaServed = 'Calgary, Alberta',
}: {
  name: string
  description: string
  url: string
  price?: string
  areaServed?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    areaServed,
    provider: {
      '@type': 'LocalBusiness',
      name: SEO_BRAND_NAME,
      '@id': `${SEO_BASE_URL}/#localbusiness`,
    },
    url: sanitizeUrl(url),
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

export function getArticleSchema({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
  authorName,
  image = SEO_DEFAULT_OG_IMAGE,
}: {
  title: string
  description: string
  url: string
  publishedTime: string
  modifiedTime?: string
  authorName: string
  image?: string
}) {
  const normalizedUrl = sanitizeUrl(url)

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: getOrganizationSchema(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': normalizedUrl,
    },
  }
}

export function toJsonLd(schema: unknown): string {
  return JSON.stringify(schema)
}
