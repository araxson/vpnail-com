import { Section, Container } from '@/components/layouts'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { heroData } from './hero.data'
import { H1, Lead, P } from '@/components/ui/typography'

export function HeroSection() {
  return (
    <Section>
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-auto rounded-lg overflow-hidden">
            <Image
              src={heroData.image}
              alt={heroData.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className="w-fit" variant="outline">{heroData.badge}</Badge>
              <H1>{heroData.title}</H1>
              <Lead>{heroData.subtitle}</Lead>
              <P className="text-muted-foreground">{heroData.description}</P>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href={heroData.cta.primary.href}>{heroData.cta.primary.text}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={heroData.cta.secondary.href}>{heroData.cta.secondary.text}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
