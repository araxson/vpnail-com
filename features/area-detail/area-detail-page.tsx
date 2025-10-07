import { Section, Container } from '@/components/layouts'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

type AreaDetailPageProps = {
  slug: string
}

export function AreaDetailPage({ slug }: AreaDetailPageProps) {
  return (
    <main>
      <Section>
        <Container>
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl capitalize">{slug.replace(/-/g, ' ')}</CardTitle>
              <CardDescription className="text-xl">
                Conveniently located in Victoria Park, Calgary
              </CardDescription>
            </CardHeader>
          </Card>
        </Container>
      </Section>
    </main>
  )
}
