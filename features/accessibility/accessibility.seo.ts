import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site.config'
import { defaultSEO } from '@/lib/config/seo.config'

export const accessibilityMetadata: Metadata = {
  ...defaultSEO,
  title: 'Accessibility Statement | Victoria Park Nails & Spa Calgary',
  description: 'Accessibility statement for Victoria Park Nails & Spa, covering our Calgary salon and website experience.',
  alternates: {
    canonical: `${siteConfig.url}/accessibility`,
  },
}
