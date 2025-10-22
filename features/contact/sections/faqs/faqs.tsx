import { Section, Container } from '@/components/layouts'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { faqsData } from './faqs.data'
import { H2, Lead, Small, P } from '@/components/ui/typography'

export function FaqsSection() {
  return (
    <Section variant="muted" size="lg">
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <Badge variant="outline">{faqsData.badge}</Badge>
              <H2>{faqsData.title}</H2>
              <Lead>{faqsData.description}</Lead>
            </div>
          </Container>
        </div>

        <div className="space-y-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqsData.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
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

          <Card className="bg-muted/30">
            <CardHeader>
              <div className="flex items-center justify-center mb-2">
                <MessageCircle className="h-6 w-6 text-primary mr-2" />
                <CardTitle>
                  <Small className="text-base font-semibold uppercase tracking-wide">
                    {faqsData.cta.title}
                  </Small>
                </CardTitle>
              </div>
              <CardDescription className="text-center">
                <P className="text-sm text-muted-foreground">
                  {faqsData.cta.description}
                </P>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" size="sm" asChild>
                <Link href={faqsData.cta.buttons.secondary.href}>
                  {faqsData.cta.buttons.secondary.text}
                </Link>
              </Button>
              <Button size="sm" asChild>
                <a href={faqsData.cta.buttons.primary.href}>
                  {faqsData.cta.buttons.primary.text}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
