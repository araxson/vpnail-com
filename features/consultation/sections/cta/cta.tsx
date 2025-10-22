import { Section, Container } from '@/components/layouts'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import { ctaData } from './cta.data'
import { H2, Lead, P } from '@/components/ui/typography'

export function CtaSection() {
  return (
    <Section size="lg">
      <Container>
        <Card className="w-full text-center py-10 md:py-12">
          <CardHeader className="items-center text-center">
            <div className="space-y-4">
              <H2>{ctaData.title}</H2>
              <Lead>{ctaData.subtitle}</Lead>
              <P className="text-muted-foreground [&:not(:first-child)]:mt-0">
                {ctaData.description}
              </P>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center pt-0">
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
          </CardContent>
        </Card>
      </Container>
    </Section>
  )
}
