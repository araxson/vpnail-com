import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site.config'
import { defaultSEO } from '@/lib/config/seo.config'

export const privacyMetadata: Metadata = {
  ...defaultSEO,
  title: 'Privacy Policy | Victoria Park Nails & Spa Calgary',
  description: 'Read the privacy policy for Victoria Park Nails & Spa in Calgary, including how we collect, use, and protect your information.',
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
}
