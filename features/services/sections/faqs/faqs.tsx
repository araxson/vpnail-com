import { Section, Container } from '@/components/layouts'
import { faqsData } from './faqs.data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { H2, H3, Lead, Small } from '@/components/ui/typography'

export function FaqsSection() {
  return (
    <Section variant="muted" size="lg">
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <Small className="text-primary uppercase tracking-[0.3em]">
                {faqsData.subtitle}
              </Small>
              <H2>{faqsData.title}</H2>
              <Lead>{faqsData.description}</Lead>
            </div>
          </Container>
        </div>

        <div className="space-y-12">
          {faqsData.categories.map((category) => (
            <div key={category.id}>
              <H3 className="mb-6">{category.title}</H3>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="bg-card border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-semibold">
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
