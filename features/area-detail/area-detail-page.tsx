import Link from 'next/link'
import { Section, Container } from '@/components/layouts'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { H1, Lead, P } from '@/components/ui/typography'
import { StructuredData } from '@/components/seo'
import { getBreadcrumbSchema } from '@/lib/seo/structured-data'
import { AREA_CONTENT } from './area-detail.data'

const DEFAULT_AREA_CONTENT = {
  headline: 'Premium nail care close to downtown Calgary',
  intro:
    'Visit Victoria Park Nails & Spa for manicures, pedicures, and custom nail art delivered with meticulous sanitation, welcoming service, and easy parking.',
  highlights: [
    'Same-day bookings for manicures, pedicures, and Gel or Acrylic New Sets',
    'Custom nail art inspired by downtown Calgary events',
    'Massage and waxing services to complete your self-care visit',
  ],
  closing:
    'Reserve your appointment and experience why Calgary clients trust Victoria Park Nails & Spa for polished looks that last.',
}

type AreaDetailPageProps = {
  slug: string
}

export function AreaDetailPage({ slug }: AreaDetailPageProps) {
  const normalizedName = slug
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ')

  const content = AREA_CONTENT[slug] ?? DEFAULT_AREA_CONTENT
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Calgary Service Areas', url: '/areas' },
    { name: normalizedName, url: `/areas/${slug}` },
  ]

  return (
    <main>
      <StructuredData schema={getBreadcrumbSchema(breadcrumbs)} />
      {/* Article schema for area page */}
      <StructuredData
        type="Article"
        data={{
          title: `${normalizedName} | Victoria Park Nails & Spa Calgary`,
          description: content.intro,
          url: `/areas/${slug}`,
          publishedTime: '2015-01-01T00:00:00Z',
          authorName: 'Victoria Park Nails and Spa',
        }}
      />
      <Section size="lg">
        <Container size="md" className="space-y-10">
          <header className="space-y-4 text-center">
            <H1>{content.headline}</H1>
            <Lead>{content.intro}</Lead>
          </header>

          <Card>
            <CardContent className="space-y-6 p-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  Serving {normalizedName}
                </p>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {content.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <P>{content.closing}</P>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="/consultation">Check Availability Online</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+14037193600">Call (403) 719-3600</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </main>
  )
}
