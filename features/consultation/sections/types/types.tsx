import { Section, Container } from '@/components/layouts'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle } from 'lucide-react'
import { typesData } from './types.data'
import { H2, Lead, H4, P, Small } from '@/components/ui/typography'

export function TypesSection() {
  return (
    <Section variant="muted">
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <H2>{typesData.title}</H2>
              <Lead>{typesData.description}</Lead>
            </div>
          </Container>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {typesData.types.map((type, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <H4 className="text-lg font-semibold">{type.title}</H4>
                  </CardTitle>
                  <Badge variant="secondary" className="flex-shrink-0">
                    <Small className="font-medium">{type.duration}</Small>
                  </Badge>
                </div>
                <CardDescription>
                  <P className="text-sm sm:text-base text-muted-foreground">
                    {type.description}
                  </P>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Small className="font-semibold uppercase tracking-wide mb-3 block">
                    What&apos;s Included:
                  </Small>
                  <ul className="space-y-2">
                    {type.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <P className="text-sm leading-relaxed">{item}</P>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
