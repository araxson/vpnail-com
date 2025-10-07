export type MetadataType = 'website' | 'article'

export interface PageSEOConfig {
  /** Page title without brand suffix */
  title: string
  description: string
  /** Path relative to the domain root, e.g. `/services` or `/` */
  path: string
  keywords?: string[]
  ogImage?: string
  type?: MetadataType
  noindex?: boolean
  publishedTime?: string
  modifiedTime?: string
  /** Optional custom Twitter description override */
  twitterDescription?: string
  /** Optional override for Open Graph description */
  openGraphDescription?: string
}
