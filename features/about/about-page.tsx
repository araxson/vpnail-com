import { Section, Container } from '@/components/layouts'
import { HeroSection } from './sections/hero'
import { StorySection } from './sections/story'
import { StatsSection } from './sections/stats'
import { ValuesSection } from './sections/values'
import { LocationSection } from './sections/location'
import { PhilosophySection } from './sections/philosophy'
import { CredentialsSection } from './sections/credentials'
import { WhoWeServeSection } from './sections/who-we-serve'
import { TestimonialsSection } from './sections/testimonials'
import { CtaSection } from './sections/cta'

export function AboutPage() {
  return (
    <main>
      <HeroSection />
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StorySection />
            <StatsSection />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ValuesSection />
            <LocationSection />
          </div>
        </Container>
      </Section>
      <PhilosophySection />
      <CredentialsSection />
      <WhoWeServeSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  )
}
