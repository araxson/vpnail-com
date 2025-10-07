import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Section, Container } from '@/components/layouts'
import Link from 'next/link'
import Image from 'next/image'
import { heroData } from './hero.data'

export function HeroSection() {
  return (
    <Section>
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="w-fit" variant="outline">{heroData.badge}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {heroData.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {heroData.subtitle}
            </p>
            <p className="text-base text-muted-foreground">
              {heroData.description}
            </p>
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
