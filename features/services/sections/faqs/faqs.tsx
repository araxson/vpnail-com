import { Section, Container } from '@/components/layouts'
import { faqsData } from './faqs.data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FaqsSection() {
  return (
    <Section variant="muted" size="lg">
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary uppercase tracking-wider">
                {faqsData.subtitle}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {faqsData.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {faqsData.description}
              </p>
            </div>
          </Container>
        </div>

        <div className="space-y-12">
          {faqsData.categories.map((category) => (
            <div key={category.id}>
              <h3 className="text-xl font-semibold mb-6">
                {category.title}
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="bg-card border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-medium">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
