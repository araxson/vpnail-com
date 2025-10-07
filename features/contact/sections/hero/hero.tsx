import { Section, Container } from '@/components/layouts'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Clock } from 'lucide-react'
import { heroData } from './hero.data'

export function HeroSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-6">
          <Alert className="bg-primary/5 border-primary/20">
            <Clock className="h-4 w-4 text-primary" />
            <AlertDescription className="text-sm">
              <strong>Response Time:</strong> We typically respond to all inquiries within 24 hours during business days.
              For urgent matters, please call us directly at (250) 423-1400.
            </AlertDescription>
          </Alert>

          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {heroData.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {heroData.subtitle}
              </p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                {heroData.description}
              </p>
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
