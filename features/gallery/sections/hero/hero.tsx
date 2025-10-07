import { Section, Container } from '@/components/layouts'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { heroData } from './hero.data'

export function HeroSection() {
  return (
    <Section>
      <Container>
        <div className="text-center space-y-6">
          <Container size="sm">
            <div className="space-y-4">
              <div className="flex justify-center">
                <Badge variant="outline">{heroData.badge}</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {heroData.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {heroData.subtitle}
              </p>
              <p className="text-base text-muted-foreground">
                {heroData.description}
              </p>
            </div>
          </Container>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={heroData.cta.primary.href}>{heroData.cta.primary.text}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={heroData.cta.secondary.href}>{heroData.cta.secondary.text}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
