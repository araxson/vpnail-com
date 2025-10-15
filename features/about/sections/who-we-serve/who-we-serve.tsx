import { Section, Container } from '@/components/layouts'
import { whoWeServeData } from './who-we-serve.data'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { H2, Lead, P, H4 } from '@/components/ui/typography'

export function WhoWeServeSection() {
  return (
    <Section variant="muted">
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <Badge>{whoWeServeData.badge}</Badge>
              <H2>{whoWeServeData.title}</H2>
              <Lead>{whoWeServeData.description}</Lead>
            </div>
          </Container>
        </div>

        <div className="space-y-6 mb-12">
          <P className="text-muted-foreground text-lg">{whoWeServeData.content.paragraph1}</P>
          <P className="text-muted-foreground text-lg">{whoWeServeData.content.paragraph2}</P>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoWeServeData.clientTypes.map((type, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  <H4 className="text-base font-semibold">{type.title}</H4>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <P className="text-sm text-muted-foreground">{type.description}</P>
                </CardDescription>
              </CardContent>
            </Card>
         ))}
        </div>
      </Container>
    </Section>
  )
}
