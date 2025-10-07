import { Section, Container } from '@/components/layouts'
import { Badge } from '@/components/ui/badge'
import { heroData } from './hero.data'

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

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {heroData.title}
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground">
                {heroData.subtitle}
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {heroData.description}
              </p>
            </div>
          </Container>
        </div>
      </Container>
    </Section>
  )
}
