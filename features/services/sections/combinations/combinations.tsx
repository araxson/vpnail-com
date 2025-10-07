'use client'

import * as React from 'react'
import { Section, Container } from '@/components/layouts'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from '@/components/ui/carousel'
import { Check, Sparkles } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import { combinationsData } from './combinations.data'
import { H2, H4, Lead, P, Small } from '@/components/ui/typography'

export function CombinationsSection() {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <Section variant="muted" size="lg" id="packages">
      <Container noPaddingMobile>
        <div className="text-center space-y-4 mb-16 px-4 md:px-0">
          <Badge variant="outline" className="text-sm">
            {combinationsData.badge}
          </Badge>
          <H2>{combinationsData.title}</H2>
          <Lead className="text-muted-foreground max-w-2xl mx-auto">
            {combinationsData.description}
          </Lead>
        </div>

        <Carousel
          plugins={[plugin.current]}
          opts={{ align: 'start', loop: true }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-0 md:-ml-4">
            {combinationsData.packages.map((pkg) => {
              const Icon = pkg.icon
              return (
                <CarouselItem
                  key={pkg.name}
                  className="pl-4 pr-4 basis-[calc(85%-1rem)] sm:basis-[calc(70%-1rem)] md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <Card className="h-full flex flex-col relative overflow-hidden group hover:shadow-none transition-shadow">
                      {pkg.popular && (
                        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary" />
                      )}

                      <CardHeader className="space-y-6 pb-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <H4 className="text-lg font-semibold">{pkg.name}</H4>
                              <Small className="text-muted-foreground text-xs sm:text-sm">
                                {pkg.duration}
                              </Small>
                            </div>
                          </div>
                          {pkg.popular && (
                            <Badge className="gap-1">
                              <Sparkles className="h-3 w-3" />
                              Popular
                            </Badge>
                          )}
                        </div>

                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold">${pkg.price}</span>
                            <span className="text-lg text-muted-foreground line-through">
                              ${pkg.originalPrice}
                            </span>
                          </div>
                        </div>

                        <P className="text-sm text-muted-foreground leading-relaxed">
                          {pkg.description}
                        </P>
                      </CardHeader>

                      <Separator />

                      <CardContent className="flex-1 pt-6">
                        <div className="space-y-3">
                          <Small className="text-muted-foreground font-semibold uppercase tracking-wide">
                            Included Services
                          </Small>
                          <ul className="space-y-3">
                            {pkg.services.map((service, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                  <Check className="h-3.5 w-3.5 text-primary" />
                                </span>
                                <P className="text-sm leading-relaxed mt-0">{service.name}</P>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>

                      <CardFooter className="pt-6">
                        <Button
                          asChild
                          className="w-full"
                          size="lg"
                          variant={pkg.popular ? 'default' : 'outline'}
                        >
                          <a
                            href={pkg.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Book {pkg.name}
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselDots className="mt-8 px-4 md:px-0" />
        </Carousel>
      </Container>
    </Section>
  )
}
