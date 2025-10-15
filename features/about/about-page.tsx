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
import { StructuredData } from '@/components/seo'

export function AboutPage() {
  return (
    <main>
      {/* Article schema for About page */}
      <StructuredData
        type="Article"
        data={{
          title: 'About Victoria Park Nails & Spa',
          description:
            "Learn about Calgary's trusted nail salon since 2015. Discover our story, values, and commitment to excellence in nail care and spa services.",
          url: '/about',
          publishedTime: '2015-01-01T00:00:00Z',
          authorName: 'Victoria Park Nails and Spa',
        }}
      />
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
