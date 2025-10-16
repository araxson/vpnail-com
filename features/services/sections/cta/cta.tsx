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
              <P className="text-primary-foreground/90">
                {ctaData.description}
              </P>
            </div>
          </Container>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              {ctaData.primaryButton.href.startsWith('/') ? (
                <Link href={ctaData.primaryButton.href}>
                  {ctaData.primaryButton.text}
                </Link>
              ) : (
                <a href={ctaData.primaryButton.href}>{ctaData.primaryButton.text}</a>
              )}
            </Button>
            <Button size="lg" variant="outline" asChild>
              {ctaData.secondaryButton.href.startsWith('/') ? (
                <Link href={ctaData.secondaryButton.href}>
                  {ctaData.secondaryButton.text}
                </Link>
              ) : (
                <a href={ctaData.secondaryButton.href}>{ctaData.secondaryButton.text}</a>
              )}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
