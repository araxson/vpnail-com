import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site.config'
import { getRandomGalleryImage } from '@/lib/seo/og-image'

export const areasMetadata: Metadata = {
  title: 'Calgary Service Areas | Victoria Park Nails & Spa',
  description: 'Serving Victoria Park, Downtown, Beltline, Inglewood, Mission, and East Village with manicures, pedicures, nail art, extensions, massage, and waxing services.',
  keywords: [
    'nail salon Victoria Park Calgary',
    'nail salon Downtown Calgary',
    'nail salon Beltline Calgary',
    'nail salon Inglewood Calgary',
    'nail salon Mission Calgary',
    'nail salon East Village Calgary',
    'nail salon Calgary SE',
    'manicure downtown Calgary',
    'manicure Victoria Park',
    'pedicure Beltline Calgary',
    'pedicure Inglewood Calgary',
    'gel nails downtown Calgary',
    'acrylic nails Victoria Park',
    'nail salon near Calgary Stampede',
    'Victoria Park nail spa',
    'Calgary nail salon',
    'nail services Calgary',
    'nail salon near me Calgary',
    'best nail salon Calgary',
  ],
  alternates: {
    canonical: `${siteConfig.url}/areas`,
  },
  openGraph: {
    title: 'Calgary Service Areas | Victoria Park Nails & Spa',
    description: 'Serving Victoria Park, Downtown, Beltline, Inglewood, Mission, and East Village with professional manicures, pedicures, nail art, extensions, massage, and waxing.',
    images: [getRandomGalleryImage()],
  },
}
