import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site.config'
import { defaultSEO } from '@/lib/config/seo.config'
import { getRandomGalleryImage } from '@/lib/seo/og-image'

export const homeMetadata: Metadata = {
  ...defaultSEO,
  title: 'Victoria Park Nails & Spa | Calgary Nail Salon',
  description: 'Victoria Park nail salon for manicures, pedicures, gel/acrylic nails, custom nail art, massage, and waxing near the Calgary Stampede.',
  keywords: [
    'Victoria Park Nails and Spa',
    'best nail salon Calgary',
    'nail salon Calgary',
    'Victoria Park nails',
    'manicure Calgary',
    'pedicure Calgary',
    'custom nail art Calgary',
    'gel nails Calgary',
    'acrylic nails Calgary',
    'shellac manicure Calgary',
    'spa pedicure Calgary',
    'luxury nail salon Calgary',
    'nail extensions Calgary',
    'nail salon Victoria Park',
    'nail salon Downtown Calgary',
    'nail salon Beltline Calgary',
    'Calgary Stampede nails',
    'professional nail care Calgary',
    'hot stone massage Calgary',
    'nail salon near me Calgary',
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    ...defaultSEO.openGraph,
    title: 'Victoria Park Nails & Spa | Calgary Nail Salon',
    description: 'Calgary nail salon in Victoria Park for manicures, pedicures, nail art, gel/acrylic extensions, massage, and waxing near the Stampede grounds.',
    url: siteConfig.url,
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
    title: 'Victoria Park Nails & Spa | Calgary Nail Salon',
    description: 'Calgary nail salon for manicures, pedicures, gel/acrylic nails, extensions, nail art, massage, and waxing in Victoria Park.',
    images: [getRandomGalleryImage()],
  },
}
