import { AnnouncementBanner } from '@/components/layouts'
import { StructuredData } from '@/components/seo'
import { HeroSection } from './sections/hero'
import { CombinationsSection } from './sections/combinations'
import { HomeGallerySection } from './sections/gallery'
import { FeaturesSection } from './sections/features'
import { LocalSeoSection } from './sections/local-seo'
import { ServicesSection } from './sections/services'
import { TeamSection } from './sections/team'
import { TestimonialsSection } from './sections/testimonials'
import { CtaSection } from './sections/cta'
import { homeFaqData, homeBreadcrumbData } from './home.data'

export function HomePage() {
  return (
    <>
      {/* FAQ Schema for Google's "People Also Ask" sections */}
      <StructuredData type="FAQPage" data={{ items: homeFaqData }} />
      {/* Breadcrumb Schema for better search appearance */}
      <StructuredData type="BreadcrumbList" data={{ items: homeBreadcrumbData }} />

      <main itemScope itemType="https://schema.org/LocalBusiness">
        <AnnouncementBanner
          message="NEW! Reward & Redeem Points Program - Earn points with every visit - Ask us how to start earning today!"
        />
        <HeroSection />
        <CombinationsSection />
        <HomeGallerySection />
        <FeaturesSection />
        <LocalSeoSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
    </>
  )
}
