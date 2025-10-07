import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site.config'
import { defaultSEO } from '@/lib/config/seo.config'

export const termsMetadata: Metadata = {
  ...defaultSEO,
  title: 'Terms of Service | Victoria Park Nails & Spa Calgary',
  description: 'Review the terms of service for Victoria Park Nails & Spa in Calgary, including booking policies and website use.',
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
}
