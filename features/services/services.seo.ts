import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site.config'
import { defaultSEO } from '@/lib/config/seo.config'
import { getRandomGalleryImage } from '@/lib/seo/og-image'

export const servicesMetadata: Metadata = {
  ...defaultSEO,
  title: 'Calgary Nail Services & Pricing | Victoria Park Nails & Spa',
  description:
    'See pricing for manicures, pedicures, gel/acrylic nails, nail art, massage, and waxing at Victoria Park Nails & Spa in Victoria Park, Calgary.',
  keywords: [
    'nail services Calgary',
    'manicure Calgary',
    'pedicure Calgary',
    'gel manicure Calgary',
    'shellac manicure Calgary',
    'acrylic nails Calgary',
    'gel nail extensions Calgary',
    'custom nail art Calgary',
    'nail art design Calgary',
    'spa pedicure Calgary',
    'hot stone pedicure Calgary',
    'deluxe pedicure Calgary',
    'massage therapy Calgary',
    'hot stone massage Calgary',
    'relaxation massage Calgary',
    'waxing services Calgary',
    'facial waxing Calgary',
    'Brazilian waxing Calgary',
    'nail salon Victoria Park Calgary',
    'professional nail care Calgary',
    'luxury nail salon Calgary',
    'nail salon pricing Calgary',
    'best manicure Calgary',
    'best pedicure Calgary',
  ],
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    ...defaultSEO.openGraph,
    title: 'Calgary Nail Services & Pricing | Victoria Park Nails & Spa',
    description:
      'Service menu featuring manicures, pedicures, gel/acrylic extensions, custom nail art, massage therapy, and waxing in Victoria Park, Calgary.',
    images: [getRandomGalleryImage()],
  },
}
