import type { Metadata } from 'next'
import { AreaDetailPage, generateAreaMetadata } from '@/features/area-detail'

export const dynamic = 'force-static'
export const revalidate = false

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return [
    { slug: 'victoria-park-calgary' },
    { slug: 'downtown-calgary' },
    { slug: 'beltline-calgary' },
    { slug: 'mission-calgary' },
    { slug: 'mount-royal-calgary' },
    { slug: 'inglewood-calgary' },
    { slug: 'east-village-calgary' },
    { slug: 'erlton-calgary' }
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return generateAreaMetadata(slug)
}

export default async function AreaRoute({ params }: Props) {
  const { slug } = await params
  return <AreaDetailPage slug={slug} />
}
