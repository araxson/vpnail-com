import { Section, Container } from '@/components/layouts'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ctaData } from './cta.data'
import { H2, Lead, P } from '@/components/ui/typography'

export function CtaSection() {
  return (
    <Section variant="primary" size="lg">
      <Container>
        <div className="text-center space-y-6">
          <Container size="sm">
            <div className="space-y-4">
              <H2>{ctaData.title}</H2>
              <Lead>{ctaData.subtitle}</Lead>
              <P className="text-muted-foreground">{ctaData.description}</P>
            </div>
          </Container>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href={ctaData.cta.primary.href} target="_blank" rel="noopener noreferrer">
                {ctaData.cta.primary.text}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              {ctaData.cta.secondary.href.startsWith('/') ? (
                <Link href={ctaData.cta.secondary.href}>{ctaData.cta.secondary.text}</Link>
              ) : (
                <a href={ctaData.cta.secondary.href}>{ctaData.cta.secondary.text}</a>
              )}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
