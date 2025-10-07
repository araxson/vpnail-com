import { Section, Container } from '@/components/layouts'
import { credentialsData } from './credentials.data'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function CredentialsSection() {
  return (
    <Section variant="muted">
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <Badge>{credentialsData.badge}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">{credentialsData.title}</h2>
              <p className="text-xl md:text-2xl text-muted-foreground">{credentialsData.description}</p>
            </div>
          </Container>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentialsData.credentials.map((credential, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{credential.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{credential.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
