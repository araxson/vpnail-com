import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AreaDetailPage, AREA_SLUGS, generateAreaMetadata } from '@/features/area-detail'

export const dynamic = 'force-static'
export const revalidate = false
export const dynamicParams = false

type AreaPageProps = {
  params: { slug: string }
}

const VALID_AREA_SLUGS = new Set(AREA_SLUGS)

const resolveAreaSlug = (slug: string) => {
  if (!VALID_AREA_SLUGS.has(slug)) {
    notFound()
  }

  return slug
}

export function generateStaticParams() {
  return AREA_SLUGS.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: AreaPageProps): Metadata {
  const slug = resolveAreaSlug(params.slug)
  return generateAreaMetadata(slug)
}

export default function AreaRoute({ params }: AreaPageProps) {
  const slug = resolveAreaSlug(params.slug)
  return <AreaDetailPage slug={slug} />
}
