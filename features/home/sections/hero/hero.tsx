import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Section, Container } from '@/components/layouts'
import Link from 'next/link'
import Image from 'next/image'
import { heroData } from './hero.data'
import { H1, Lead, P } from '@/components/ui/typography'

export function HeroSection() {
  return (
    <Section>
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="w-fit" variant="outline">{heroData.badge}</Badge>
            <H1>{heroData.title}</H1>
            <Lead>{heroData.subtitle}</Lead>
            <P className="text-muted-foreground">{heroData.description}</P>
            {heroData.loyalty && (
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <span className="inline-flex w-fit items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground sm:text-sm">
                    {heroData.loyalty.badge}
                  </span>
                  <div className="space-y-1 text-left">
                    <p className="text-base font-semibold sm:text-lg">
                      {heroData.loyalty.title}
                    </p>
                    <p className="text-sm text-muted-foreground sm:text-base">
                      {heroData.loyalty.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-10 py-6 text-lg font-semibold" asChild>
                <Link href={heroData.cta.primary.href}>{heroData.cta.primary.text}</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-muted">
            <Image
              src="/images/home-hero-001.webp"
              alt="Victoria Park Nails and Spa - Calgary's Premier Nail Salon"
              fill
              className="object-contain md:object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
