/**
 * SEO Constants
 * Centralized SEO-related constants and configuration values
 */

/**
 * Character limits for SEO elements (based on Google 2025 standards)
 */
export const SEO_LIMITS = {
  TITLE_MIN: 30,
  TITLE_MAX: 60,
  TITLE_OPTIMAL: 55,
  DESCRIPTION_MIN: 120,
  DESCRIPTION_MAX: 160,
  DESCRIPTION_OPTIMAL: 155,
  KEYWORDS_MIN: 5,
  KEYWORDS_MAX: 15,
  H1_MAX: 70,
  IMAGE_ALT_MAX: 125,
} as const

/**
 * Priority levels for pages in sitemap
 */
export const SITEMAP_PRIORITY = {
  HOME: 1.0,
  SERVICES: 0.95,
  CONTACT: 0.9,
  ABOUT: 0.9,
  CONSULTATION: 0.85,
  SERVICE_DETAIL: 0.85,
  ARTICLES: 0.8,
  ARTICLE_DETAIL: 0.7,
  GALLERY: 0.7,
  AREAS: 0.6,
  AREA_DETAIL: 0.5,
  LEGAL: 0.3,
} as const

/**
 * Change frequency for pages in sitemap
 */
export const SITEMAP_CHANGE_FREQ = {
  ALWAYS: 'always',
  HOURLY: 'hourly',
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  YEARLY: 'yearly',
  NEVER: 'never',
} as const

/**
 * Default Open Graph image sizes
 */
export const OG_IMAGE_SIZES = {
  WIDTH: 1200,
  HEIGHT: 630,
  RATIO: '1.91:1',
} as const

/**
 * Twitter card types
 */
export const TWITTER_CARD_TYPES = {
  SUMMARY: 'summary',
  SUMMARY_LARGE: 'summary_large_image',
  APP: 'app',
  PLAYER: 'player',
} as const

/**
 * Schema.org types commonly used
 */
export const SCHEMA_TYPES = {
  LOCAL_BUSINESS: 'LocalBusiness',
  ORGANIZATION: 'Organization',
  WEBSITE: 'WebSite',
  ARTICLE: 'Article',
  SERVICE: 'Service',
  FAQ_PAGE: 'FAQPage',
  BREADCRUMB_LIST: 'BreadcrumbList',
  PERSON: 'Person',
  OFFER: 'Offer',
  REVIEW: 'Review',
  AGGREGATE_RATING: 'AggregateRating',
} as const

/**
 * Common SEO-related HTML attributes
 */
export const SEO_ATTRIBUTES = {
  LANG: 'en-CA',
  DIR: 'ltr',
  CHARSET: 'utf-8',
} as const

/**
 * Robots meta directives
 */
export const ROBOTS_DIRECTIVES = {
  INDEX: 'index',
  NOINDEX: 'noindex',
  FOLLOW: 'follow',
  NOFOLLOW: 'nofollow',
  NOARCHIVE: 'noarchive',
  NOSNIPPET: 'nosnippet',
  NOIMAGEINDEX: 'noimageindex',
  NOCACHE: 'nocache',
} as const

/**
 * Geographic coordinates for Calgary
 */
export const GEO_LOCATION = {
  LATITUDE: '51.0447',
  LONGITUDE: '-114.0719',
  REGION: 'CA-AB',
  PLACENAME: 'Calgary',
  ICBM: '51.0447, -114.0719',
} as const

/**
 * Local SEO: Areas served
 */
export const AREAS_SERVED = [
  'Calgary',
  'Airdrie',
  'Cochrane',
  'Okotoks',
  'Chestermere',
  'Mission Calgary',
  'Beltline Calgary',
  'Mount Royal Calgary',
  'Kensington Calgary',
  'Inglewood Calgary',
] as const

/**
 * Business categories for schema markup
 */
export const BUSINESS_CATEGORIES = [
  'Nail Salon',
  'Beauty Salon',
  'Spa',
  'Health and Beauty Business',
  'Wellness Center',
  'Personal Care Services',
] as const
