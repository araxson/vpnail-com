import { Section, Container } from '@/components/layouts'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Info } from 'lucide-react'
import { heroData } from './hero.data'
import { H1, Lead, P } from '@/components/ui/typography'

export function HeroSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-6">
          <Alert className="bg-primary/5 border-primary/20">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription className="text-sm">
              <strong>Walk-Ins Welcome:</strong> While we recommend booking online for your preferred time, we also welcome walk-in clients based on availability at our Victoria Park location.
            </AlertDescription>
          </Alert>

          <div className="text-center space-y-6">
            <div className="space-y-4">
              <div className="flex justify-center">
                <Badge variant="outline">{heroData.badge}</Badge>
              </div>
              <H1>{heroData.title}</H1>
              <Lead>{heroData.subtitle}</Lead>
              <P className="text-muted-foreground max-w-2xl mx-auto">{heroData.description}</P>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={heroData.cta.primary.href} target="_blank" rel="noopener noreferrer">
                  {heroData.cta.primary.text}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={heroData.cta.secondary.href}>{heroData.cta.secondary.text}</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
