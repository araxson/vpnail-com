import { HeroSection } from './sections/hero'
import { HomeGallerySection } from './sections/gallery'
import { FeaturesSection } from './sections/features'
import { ServicesSection } from './sections/services'
import { TeamSection } from './sections/team'
import { TestimonialsSection } from './sections/testimonials'
import { CtaSection } from './sections/cta'
import { StructuredData } from '@/components/seo'
import { generateFAQSchema } from '@/lib/seo/metadata'
import { faqsData as contactFaqs } from '@/features/contact/sections/faqs/faqs.data'

export function HomePage() {
  const selectedQuestions = new Set([
    'Do I need an appointment?',
    'Do you accept walk-ins?',
    'What are your hours and location?',
    'Is parking available?',
  ])

  const qa = (contactFaqs.faqs || [])
    .filter((f) => selectedQuestions.has(f.question))
    .map((f) => ({ question: f.question, answer: f.answer }))

  return (
    <main itemScope itemType="https://schema.org/LocalBusiness">
      {/* FAQPage JSON-LD for common top questions */}
      {qa.length > 0 && (
        <StructuredData type="FAQPage" data={{ mainEntity: generateFAQSchema(qa).mainEntity }} />
      )}
      <HeroSection />
      <HomeGallerySection />
      <FeaturesSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  )
}
