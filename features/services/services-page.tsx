import { HeroSection } from './sections/hero'
import { CombinationsSection } from './sections/combinations'
import { ServicesGridSection } from './sections/services-grid'
import { TestimonialsSection } from './sections/testimonials'
import { FaqsSection } from './sections/faqs'
import { CtaSection } from './sections/cta'
import { StructuredData } from '@/components/seo'
import { getFAQSchema } from '@/lib/seo/structured-data'
import { faqsData } from './sections/faqs/faqs.data'

export function ServicesPage() {
  const mainEntity = faqsData.categories.flatMap((category) =>
    category.faqs.map((f) => ({ question: f.question, answer: f.answer }))
  )

  return (
    <main>
      {/* FAQPage JSON-LD for rich results */}
      <StructuredData schema={getFAQSchema(mainEntity)} />
      {/* Service schema for professional nail services */}
      <StructuredData
        type="Service"
        data={{
          name: 'Professional Nail Services',
          description:
            'Expert nail care services in Calgary including manicures, pedicures, gel and acrylic nails, custom nail art, massage therapy, and waxing services',
          url: '/services',
          areaServed: 'Calgary, Alberta',
        }}
      />
      <HeroSection />
      <CombinationsSection />
      <ServicesGridSection />
      <TestimonialsSection />
      <FaqsSection />
      <CtaSection />
    </main>
  )
}
