import { Section, Container } from '@/components/layouts'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { heroData } from './hero.data'
import { H1, Lead, P } from '@/components/ui/typography'

export function HeroSection() {
  return (
    <Section size="lg">
      <Container>
        <div className="space-y-8 text-center">
          <div className="flex justify-center">
            <Badge variant="outline">{heroData.badge}</Badge>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            <H1>{heroData.title}</H1>
            <Lead>{heroData.subtitle}</Lead>
            <P className="text-muted-foreground">{heroData.description}</P>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={heroData.cta.primary.href}>{heroData.cta.primary.text}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={heroData.cta.secondary.href}>{heroData.cta.secondary.text}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
