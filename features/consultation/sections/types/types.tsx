import { Section, Container } from '@/components/layouts'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle } from 'lucide-react'
import { typesData } from './types.data'

export function TypesSection() {
  return (
    <Section variant="muted">
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">{typesData.title}</h2>
              <p className="text-muted-foreground text-lg">{typesData.description}</p>
            </div>
          </Container>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {typesData.types.map((type, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>{type.title}</span>
                  </CardTitle>
                  <Badge variant="secondary" className="flex-shrink-0">
                    {type.duration}
                  </Badge>
                </div>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-medium mb-3">What&apos;s Included:</h4>
                  <ul className="space-y-2">
                    {type.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
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
