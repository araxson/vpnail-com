import { Section, Container } from '@/components/layouts'
import { HeroSection } from './sections/hero'
import { ContactInfoSection } from './sections/contact-info'
import { HoursSection } from './sections/hours'
import { LocationSection } from './sections/location'
import { FormSection } from './sections/form'
import { FaqsSection } from './sections/faqs'
import { StructuredData } from '@/components/seo'
import { getFAQSchema } from '@/lib/seo/structured-data'
import { faqsData as contactFaqs } from './sections/faqs/faqs.data'

export function ContactPage() {
  const faqEntities = contactFaqs.faqs.map((f) => ({ question: f.question, answer: f.answer }))

  return (
    <main>
      {/* FAQPage JSON-LD for Contact page */}
      <StructuredData schema={getFAQSchema(faqEntities)} />
      <HeroSection />
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactInfoSection />
            <HoursSection />
            <LocationSection />
            <FormSection />
          </div>
        </Container>
      </Section>
      <FaqsSection />
    </main>
  )
}
