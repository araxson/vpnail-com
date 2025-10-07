import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site.config'
import { defaultSEO } from '@/lib/config/seo.config'
import { getRandomGalleryImage } from '@/lib/seo/og-image'

export const contactMetadata: Metadata = {
  ...defaultSEO,
  title: 'Contact Victoria Park Nails & Spa | Calgary Appointments',
  description: 'Book Calgary manicures, pedicures, nail art, extensions, massage, and waxing at 1411 1st Street SE. Free parking and Victoria Park/Stampede CTrain access. Call (403) 719-3600.',
  keywords: [
    'contact Victoria Park Nails and Spa',
    'book nail appointment Calgary',
    'nail salon contact Calgary',
    'Victoria Park nail salon contact',
    'book manicure Calgary',
    'book pedicure Calgary',
    'book gel nails Calgary',
    'book acrylic nails Calgary',
    'nail salon appointment Calgary',
    'nail salon booking Calgary',
    'Victoria Park beauty services',
    'nail salon hours Calgary',
    'nail salon near Calgary Stampede',
    'online booking nail salon Calgary',
    'walk-in nail salon Calgary',
  ],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    ...defaultSEO.openGraph,
    title: 'Contact Victoria Park Nails & Spa | Calgary Appointments',
    description: 'Connect with us in Calgary for manicures, pedicures, nail art, extensions, massage, and waxing at 1411 1st Street SE near the Stampede with free parking & CTrain access.',
    url: `${siteConfig.url}/contact`,
    images: [
      {
        url: getRandomGalleryImage(),
        width: 1200,
        height: 630,
        alt: 'Contact Victoria Park Nails and Spa - Premier Calgary Nail Salon',
      },
    ],
  },
  twitter: {
    ...defaultSEO.twitter,
    title: 'Contact Victoria Park Nails & Spa | Calgary Appointments',
    description: 'Book Calgary manicures, pedicures, extensions, custom nail art, massage, and spa services. Free parking & Victoria Park/Stampede CTrain. Call (403) 719-3600.',
    images: [getRandomGalleryImage()],
  },
}
