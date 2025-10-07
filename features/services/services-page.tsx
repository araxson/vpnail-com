import { HeroSection } from './sections/hero'
import { CombinationsSection } from './sections/combinations'
import { ServicesGridSection } from './sections/services-grid'
import { TestimonialsSection } from './sections/testimonials'
import { FaqsSection } from './sections/faqs'
import { CtaSection } from './sections/cta'
import { StructuredData } from '@/components/seo'
import { generateFAQSchema } from '@/lib/seo/metadata'
import { faqsData } from './sections/faqs/faqs.data'

export function ServicesPage() {
  const mainEntity = faqsData.categories.flatMap((category) =>
    category.faqs.map((f) => ({ question: f.question, answer: f.answer }))
  )

  return (
    <main>
      {/* FAQPage JSON-LD for rich results */}
      <StructuredData type="FAQPage" data={{ mainEntity: generateFAQSchema(mainEntity).mainEntity }} />
      <HeroSection />
      <CombinationsSection />
      <ServicesGridSection />
      <TestimonialsSection />
      <FaqsSection />
      <CtaSection />
    </main>
  )
}
