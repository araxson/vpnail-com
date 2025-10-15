import { siteConfig } from '@/lib/config/site.config'

export const SEO_BRAND_NAME = siteConfig.name
export const SEO_BASE_URL = siteConfig.url
export const SEO_DEFAULT_DESCRIPTION = siteConfig.description
export const SEO_DEFAULT_OG_IMAGE = siteConfig.ogImage
export const SEO_DEFAULT_CREATOR = siteConfig.creator
export const SEO_AUTHORS = [...siteConfig.authors]
export const SEO_DEFAULT_KEYWORDS = [...siteConfig.keywords]

export const SEO_NAVIGATION_ITEMS = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Gallery', url: '/gallery' },
  { name: 'Areas', url: '/areas' },
  { name: 'About', url: '/about' },
  { name: 'Consultation', url: '/consultation' },
  { name: 'Contact', url: '/contact' },
]

export const SEO_SOCIAL_LINKS = {
  instagram: siteConfig.social.instagram,
  facebook: siteConfig.social.facebook,
  tiktok: siteConfig.social.tiktok,
}

export const SEO_BUSINESS = siteConfig.business
