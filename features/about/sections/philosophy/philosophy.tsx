import { Section, Container } from '@/components/layouts'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import { philosophyData } from './philosophy.data'

export function PhilosophySection() {
  return (
    <Section>
      <Container>
        <div className="space-y-12">
          <Card>
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-3xl md:text-4xl font-bold">
                {philosophyData.title}
              </CardTitle>
              <CardDescription className="text-lg">
                {philosophyData.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {philosophyData.description}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-2xl md:text-3xl font-bold">
                {philosophyData.credentials.title}
              </CardTitle>
              <CardDescription>
                {philosophyData.credentials.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {philosophyData.credentials.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
