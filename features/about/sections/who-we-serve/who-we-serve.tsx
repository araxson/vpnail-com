import { Section, Container } from '@/components/layouts'
import { whoWeServeData } from './who-we-serve.data'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function WhoWeServeSection() {
  return (
    <Section variant="muted">
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <Badge>{whoWeServeData.badge}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">{whoWeServeData.title}</h2>
              <p className="text-xl md:text-2xl text-muted-foreground">{whoWeServeData.description}</p>
            </div>
          </Container>
        </div>

        <div className="space-y-6 mb-12">
          <p className="text-lg text-muted-foreground">{whoWeServeData.content.paragraph1}</p>
          <p className="text-lg text-muted-foreground">{whoWeServeData.content.paragraph2}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoWeServeData.clientTypes.map((type, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{type.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
