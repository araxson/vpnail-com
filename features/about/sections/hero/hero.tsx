import { Section, Container } from '@/components/layouts'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { heroData } from './hero.data'

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {heroData.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {heroData.subtitle}
              </p>
              <p className="text-base text-muted-foreground">
                {heroData.description}
              </p>
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
