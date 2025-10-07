import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site.config'

export function generateAreaMetadata(slug: string): Metadata {
  const title = slug.replace(/-/g, ' ').split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')

  return {
    title: `${title} | Victoria Park Nails & Spa Calgary`,
    description: `Serving ${title} with manicures, pedicures, nail art, extensions, massage, and waxing from our Victoria Park studio in Calgary.`,
    keywords: [
      `${title} nail salon Calgary`,
      `${title} manicure`,
      `${title} pedicure`,
      `${title} nail art Calgary`,
    ],
    alternates: {
      canonical: `${siteConfig.url}/areas/${slug}`,
    },
  }
}
