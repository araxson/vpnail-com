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

        <div className="mt-10 relative overflow-hidden rounded-lg">
          <Image
            src="/images/victoria-park-nails-street-shot.webp"
            alt="Street view of Victoria Park Nails and Spa with free parking available"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-x-4 bottom-4 md:bottom-6 md:left-6 md:right-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30">
              <span className="inline-block h-2 w-2 rounded-full bg-primary-foreground/80" aria-hidden />
              Free parking available
            </span>
          </div>
        </div>
      </Container>
    </Section>
  )
}
