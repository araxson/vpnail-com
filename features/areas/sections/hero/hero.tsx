import { Section, Container } from '@/components/layouts'
import { areasHeroData } from './hero.data'

export function AreasHeroSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{areasHeroData.title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {areasHeroData.description}
          </p>
        </div>
      </Container>
    </Section>
  )
}
