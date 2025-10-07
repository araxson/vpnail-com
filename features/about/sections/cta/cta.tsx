import { Section, Container } from '@/components/layouts'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ctaData } from './cta.data'

export function CtaSection() {
  return (
    <Section variant="primary" size="lg">
      <Container>
        <div className="text-center space-y-6">
          <Container size="sm">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">{ctaData.title}</h2>
              <p className="text-lg text-muted-foreground">{ctaData.subtitle}</p>
              <p className="text-muted-foreground">{ctaData.description}</p>
            </div>
          </Container>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={ctaData.cta.primary.href}>{ctaData.cta.primary.text}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={ctaData.cta.secondary.href}>{ctaData.cta.secondary.text}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
