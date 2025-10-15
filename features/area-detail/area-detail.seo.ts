import { buildMetadata } from '@/lib/seo/metadata'

export function generateAreaMetadata(slug: string) {
  const formattedTitle = slug
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ')

  const path = `/areas/${slug}`

  return buildMetadata({
    title: `${formattedTitle} | Victoria Park Nails & Spa Calgary`,
    description: `Serving ${formattedTitle} with manicures, pedicures, nail art, extensions, massage, and waxing from our Victoria Park studio in Calgary.`,
    path,
    keywords: [
      `${formattedTitle} nail salon Calgary`,
      `${formattedTitle} manicure Calgary`,
      `${formattedTitle} pedicure Calgary`,
      `${formattedTitle} nail art Calgary`,
    ],
    openGraphDescription: `Professional manicures, pedicures, nail art, extensions, massage, and waxing for ${formattedTitle} from our Victoria Park salon in Calgary.`,
  })
}
