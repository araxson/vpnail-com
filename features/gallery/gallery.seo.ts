import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site.config'
import { defaultSEO } from '@/lib/config/seo.config'
import { getRandomGalleryImage } from '@/lib/seo/og-image'

export const galleryMetadata: Metadata = {
  ...defaultSEO,
  title: 'Calgary Nail Art Gallery | Victoria Park Nails & Spa',
  description: 'Explore Calgary nail art, manicures, pedicures, and custom designs from our Victoria Park studio near the Stampede. Free parking & CTrain access.',
  keywords: [
    'nail art gallery Calgary',
    'nail design gallery Calgary',
    'manicure gallery Calgary',
    'pedicure photos Calgary',
    'custom nail art Calgary',
    'nail transformation Calgary',
    'Victoria Park Nails and Spa gallery',
    'nail salon portfolio Calgary',
    'bridal nails Calgary',
    'wedding nails Calgary',
    'Stampede nails Calgary',
    'Gel-X nails Calgary',
    'dip powder nails Calgary',
  ],
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
  openGraph: {
    ...defaultSEO.openGraph,
    title: 'Calgary Nail Art Gallery | Victoria Park Nails & Spa',
    description: 'See Calgary nail art, manicures, pedicures, and custom designs created at our Victoria Park studio near the Stampede with free parking & CTrain access.',
    url: `${siteConfig.url}/gallery`,
    images: [
      {
        url: getRandomGalleryImage(),
        width: 1200,
        height: 630,
        alt: 'Victoria Park Nails and Spa Calgary Gallery - Nail Art & Manicure Photos',
      },
    ],
  },
  twitter: {
    ...defaultSEO.twitter,
    title: 'Calgary Nail Art Gallery | Victoria Park Nails & Spa',
    description: 'Browse Calgary nail art and manicure inspiration from our Victoria Park studio near the Stampede.',
    images: [getRandomGalleryImage()],
  },
}
