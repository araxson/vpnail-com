import { Section, Container } from '@/components/layouts'
import { Badge } from '@/components/ui/badge'
import { heroData } from './hero.data'
import { H1, Lead, P } from '@/components/ui/typography'

export function HeroSection() {
  return (
    <Section size="lg">
      <Container>
        <div className="text-center space-y-6">
          <Container size="sm">
            <div className="space-y-4">
              <div className="flex justify-center">
                <Badge variant="outline">
                  {heroData.badge}
                </Badge>
              </div>

              <H1>{heroData.title}</H1>
              <Lead>{heroData.subtitle}</Lead>
              <P className="text-muted-foreground">{heroData.description}</P>
            </div>
          </Container>
        </div>
      </Container>
    </Section>
  )
}
