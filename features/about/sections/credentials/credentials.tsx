import { Section, Container } from '@/components/layouts'
import { credentialsData } from './credentials.data'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { H2, H4, Lead, P } from '@/components/ui/typography'

export function CredentialsSection() {
  return (
    <Section variant="muted">
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <Badge>{credentialsData.badge}</Badge>
              <H2>{credentialsData.title}</H2>
              <Lead>{credentialsData.description}</Lead>
            </div>
          </Container>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentialsData.credentials.map((credential, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  <H4 className="text-balance text-lg">{credential.title}</H4>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <P className="text-sm sm:text-base text-muted-foreground">
                    {credential.description}
                  </P>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
