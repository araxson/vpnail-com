import { Section, Container } from '@/components/layouts'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Clock } from 'lucide-react'
import { heroData } from './hero.data'
import { H1, Lead, P } from '@/components/ui/typography'

export function HeroSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-6">
          <Alert className="bg-primary/5 border-primary/20">
            <Clock className="h-4 w-4 text-primary" />
            <AlertDescription className="text-sm">
              <strong>Response Time:</strong> We typically respond to all inquiries within 24 hours during business days.
              For urgent matters, please call us directly at +1 (403) 510-3050.
            </AlertDescription>
          </Alert>

          <div className="text-center space-y-6">
            <div className="space-y-4">
              <H1>{heroData.title}</H1>
              <Lead>{heroData.subtitle}</Lead>
              <P className="text-muted-foreground max-w-2xl mx-auto">{heroData.description}</P>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={heroData.cta.primary.href}>{heroData.cta.primary.text}</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={heroData.cta.secondary.href} target="_blank" rel="noopener noreferrer">
                  {heroData.cta.secondary.text}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
