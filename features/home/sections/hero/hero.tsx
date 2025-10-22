import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Section, Container } from '@/components/layouts'
import Link from 'next/link'
import Image from 'next/image'
import { heroData } from './hero.data'
import { H1, Lead, P } from '@/components/ui/typography'
import { LocationMap } from '@/components/shared/location-map'

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
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href={heroData.cta.primary.href}>{heroData.cta.primary.text}</Link>
              </Button>
              {heroData.cta.secondary && (
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                >
                  {heroData.cta.secondary.href.startsWith('/') ? (
                    <Link href={heroData.cta.secondary.href}>{heroData.cta.secondary.text}</Link>
                  ) : (
                    <a href={heroData.cta.secondary.href}>{heroData.cta.secondary.text}</a>
                  )}
                </Button>
              )}
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

        <div className="mt-10 grid md:grid-cols-2 gap-6 items-start">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/images/victoria-park-nails-street-shot.webp"
              alt="Street view of Victoria Park Nails and Spa with free parking available"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-4 bottom-4 md:bottom-6 md:left-6 md:right-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
                Free parking available
              </span>
            </div>
          </div>
          <LocationMap />
        </div>
      </Container>
    </Section>
  )
}
