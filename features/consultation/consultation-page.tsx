import { HeroSection } from './sections/hero'
import { TypesSection } from './sections/types'
import { JourneySection } from './sections/journey'
import { CtaSection } from './sections/cta'

export function ConsultationPage() {
  return (
    <main>
      <HeroSection />
      <TypesSection />
      <JourneySection />
      <CtaSection />
    </main>
  )
}
