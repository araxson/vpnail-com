import { AnnouncementBanner } from '@/components/layouts'
import { HeroSection } from './sections/hero'
import { CombinationsSection } from './sections/combinations'
import { HomeGallerySection } from './sections/gallery'
import { FeaturesSection } from './sections/features'
import { ServicesSection } from './sections/services'
import { TeamSection } from './sections/team'
import { TestimonialsSection } from './sections/testimonials'
import { CtaSection } from './sections/cta'

export function HomePage() {
  return (
    <main itemScope itemType="https://schema.org/LocalBusiness">
      <AnnouncementBanner
        message="NEW! Reward & Redeem Points Program - Earn points with every visit - Ask us how to start earning today!"
      />
      <HeroSection />
      <CombinationsSection />
      <HomeGallerySection />
      <FeaturesSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  )
}
