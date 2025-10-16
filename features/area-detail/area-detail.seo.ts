import { buildMetadata } from '@/lib/seo/metadata'
import { AREA_CONTENT } from './area-detail.data'

const AREA_SPECIFIC_KEYWORDS: Record<string, string[]> = {
  'victoria-park-calgary': [
    'Victoria Park nail salon Calgary',
    'nail salon near Stampede grounds Calgary',
    'Victoria Park manicure pedicure',
    'nail salon Victoria Park Stampede station',
    'gel nails Victoria Park Calgary',
    'acrylic nails near Saddledome Calgary',
    'Victoria Park spa services Calgary',
    'nail salon 1st Street SE Calgary',
  ],
  'downtown-calgary': [
    'downtown Calgary nail salon',
    'nail salon Stephen Avenue Calgary',
    'downtown Calgary manicure pedicure',
    'lunch time manicure downtown Calgary',
    'nail salon near downtown office towers',
    'gel nails downtown Calgary',
    'downtown Calgary spa services',
    'executive pedicure Calgary downtown',
  ],
  'beltline-calgary': [
    'Beltline nail salon Calgary',
    'nail salon 17th Avenue Calgary',
    'Beltline manicure pedicure',
    'nail salon 12th Avenue Calgary',
    'gel nails Beltline Calgary',
    'Beltline spa services Calgary',
    'nail art Beltline Calgary',
    'acrylic nails Beltline Calgary',
  ],
  'mission-calgary': [
    'Mission nail salon Calgary',
    'nail salon 4th Street SW Calgary',
    'Mission manicure pedicure Calgary',
    'nail salon Elbow Drive Calgary',
    'gel nails Mission Calgary',
    'Mission spa services Calgary',
    'nail art Mission Calgary',
    'luxury nail salon Mission Calgary',
  ],
  'mount-royal-calgary': [
    'Mount Royal nail salon Calgary',
    'luxury nail salon Mount Royal Calgary',
    'Mount Royal manicure pedicure',
    'premium nail services Mount Royal',
    'gel nails Mount Royal Calgary',
    'Mount Royal spa services Calgary',
    'bridal nails Mount Royal Calgary',
    'French manicure Mount Royal Calgary',
  ],
  'inglewood-calgary': [
    'Inglewood nail salon Calgary',
    'nail salon 9th Avenue SE Calgary',
    'Inglewood manicure pedicure',
    'artistic nail designs Inglewood Calgary',
    'gel nails Inglewood Calgary',
    'Inglewood spa services Calgary',
    'custom nail art Inglewood Calgary',
    'eco-friendly nail salon Calgary',
  ],
  'east-village-calgary': [
    'East Village nail salon Calgary',
    'nail salon near National Music Centre Calgary',
    'East Village manicure pedicure',
    'nail salon Bow River Calgary',
    'gel nails East Village Calgary',
    'East Village spa services Calgary',
    'nail salon Studio Bell Calgary',
    'modern nail salon East Village Calgary',
  ],
  'erlton-calgary': [
    'Erlton nail salon Calgary',
    'nail salon near Erlton Calgary',
    'Erlton manicure pedicure',
    'neighborhood nail salon Erlton',
    'gel nails Erlton Calgary',
    'Erlton spa services Calgary',
    'family nail salon Erlton Calgary',
    'nail salon Macleod Trail Calgary',
  ],
}

export function generateAreaMetadata(slug: string) {
  const formattedTitle = slug
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ')

  const path = `/areas/${slug}`
  const content = AREA_CONTENT[slug]

  const description = content
    ? content.metaDescription
    : `Serving ${formattedTitle} with professional manicures, pedicures, gel nails, acrylics, nail art, extensions, massage, and waxing from Victoria Park Nails & Spa in Calgary.`

  const keywords = AREA_SPECIFIC_KEYWORDS[slug] || [
    `${formattedTitle} nail salon Calgary`,
    `${formattedTitle} manicure Calgary`,
    `${formattedTitle} pedicure Calgary`,
    `${formattedTitle} gel nails Calgary`,
    `${formattedTitle} acrylic nails Calgary`,
    `${formattedTitle} nail art Calgary`,
    `${formattedTitle} spa services Calgary`,
  ]

  return buildMetadata({
    title: `${formattedTitle} Nail Salon | Victoria Park Nails & Spa Calgary`,
    description,
    path,
    keywords,
    openGraphDescription: content
      ? content.intro
      : `Professional manicures, pedicures, gel nails, acrylics, nail art, extensions, massage, and waxing for ${formattedTitle} from Victoria Park Nails & Spa in Calgary.`,
  })
}
