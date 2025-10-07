import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site.config'
import { defaultSEO } from '@/lib/config/seo.config'
import { getRandomGalleryImage } from '@/lib/seo/og-image'

export const consultationMetadata: Metadata = {
  ...defaultSEO,
  title: 'Book Online | Victoria Park Nails & Spa Calgary',
  description: 'Book Calgary manicures, pedicures, nail art, extensions, massage, and waxing online. Free parking & Victoria Park/Stampede CTrain. Walk-ins welcome.',
  keywords: [
    'book nail appointment Calgary',
    'online nail booking Calgary',
    'Victoria Park nail salon booking',
    'manicure appointment Calgary',
    'pedicure appointment Calgary',
    'nail extension appointment',
    'nail art booking Calgary',
    'walk-in nail salon Calgary',
    'same-day nail appointment Calgary',
    'book pedicure Calgary',
  ],
  alternates: {
    canonical: `${siteConfig.url}/consultation`,
  },
  openGraph: {
    ...defaultSEO.openGraph,
    title: 'Book Online | Victoria Park Nails & Spa Calgary',
    description: 'Reserve Calgary manicures, pedicures, nail art, extensions, and spa services online. Free parking & Victoria Park/Stampede CTrain access.',
    url: `${siteConfig.url}/consultation`,
    images: [
      {
        url: getRandomGalleryImage(),
        width: 1200,
        height: 630,
        alt: 'Book Appointment - Victoria Park Nails and Spa Calgary',
      },
    ],
  },
  twitter: {
    ...defaultSEO.twitter,
    title: 'Book Online | Victoria Park Nails & Spa Calgary',
    description: 'Book Calgary manicures, pedicures, extensions, nail art, and spa appointments. Free parking & Victoria Park/Stampede CTrain. Walk-ins welcome.',
    images: [getRandomGalleryImage()],
  },
}
