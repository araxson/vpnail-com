import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site.config'
import { defaultSEO } from '@/lib/config/seo.config'
import { getRandomGalleryImage } from '@/lib/seo/og-image'

export const aboutMetadata: Metadata = {
  ...defaultSEO,
  title: 'About Victoria Park Nails & Spa | Calgary Nail Salon',
  description: 'Discover Victoria Park Nails & Spa in Calgary\'s Victoria Park offering manicures, pedicures, custom nail art, extensions, massage, and waxing since 2015.',
  keywords: [
    'about Victoria Park Nails and Spa',
    'nail salon Calgary',
    'Victoria Park nail salon',
    'Calgary nail spa',
    'professional nail care Calgary',
    'custom nail art Calgary',
    'luxury nail salon Calgary',
    'nail salon near Calgary Stampede',
    'Victoria Park beauty salon',
    'trusted nail salon Calgary',
    'best nail salon Calgary',
    'established nail salon Calgary',
    'experienced nail technicians Calgary',
    'nail salon Downtown Calgary',
    'nail salon Beltline Calgary',
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    ...defaultSEO.openGraph,
    title: 'About Victoria Park Nails & Spa | Calgary Nail Salon',
    description: 'Learn about our Calgary nail salon in Victoria Park providing manicures, pedicures, nail art, gel/acrylic extensions, massage, and spa services since 2015.',
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: getRandomGalleryImage(),
        width: 1200,
        height: 630,
        alt: 'Victoria Park Nails and Spa - Calgary\'s Premier Nail Salon',
      },
    ],
  },
  twitter: {
    ...defaultSEO.twitter,
    title: 'About Victoria Park Nails & Spa | Calgary Nail Salon',
    description: 'Calgary nail salon sharing our story, hygiene standards, and team behind manicures, pedicures, custom nail art, extensions, massage, and spa care.',
    images: [getRandomGalleryImage()],
  },
}
