'use client'

import * as React from 'react'
import { Section, Container } from '@/components/layouts'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel'
import { Sparkles } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import { combinationsData } from './combinations.data'
import { H2, Lead } from '@/components/ui/typography'

export function CombinationsSection() {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <Section variant="muted" size="lg" id="packages">
      <Container noPaddingMobile>
        <div className="mb-16 space-y-4 px-4 text-center md:px-0">
          <Badge variant="outline" className="text-sm">
            {combinationsData.badge}
          </Badge>
          <H2>{combinationsData.title}</H2>
          <Lead className="mx-auto max-w-2xl text-muted-foreground">
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
                  className="basis-[calc(85%-1rem)] pl-4 pr-4 sm:basis-[calc(70%-1rem)] md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <Card className="relative flex h-full flex-col gap-0 overflow-hidden rounded-xl border border-border/70 bg-background py-0">
                      {pkg.popular && (
                        <>
                          <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
                          <Badge
                            variant="secondary"
                            className="absolute right-6 top-6 gap-2 bg-primary/10 text-primary"
                          >
                            <Sparkles className="h-3 w-3" /> Popular
                          </Badge>
                        </>
                      )}

                      <CardHeader className="space-y-4 pb-4 pt-5">
                        <div className="flex items-start gap-3">
                          <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                              <Icon className="h-5 w-5" />
                            </span>
                            <div className="space-y-1">
                              <CardTitle className="text-lg font-semibold tracking-tight">
                                {pkg.name}
                              </CardTitle>
                              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                {pkg.duration}
                              </p>
                            </div>
                          </div>
                        </div>

                        <CardDescription className="text-sm leading-relaxed">
                          {pkg.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="flex-1 space-y-4 px-6 pb-4">
                        <div className="text-center">
                          <div className="mx-auto inline-flex flex-col items-center justify-center gap-2 px-5 py-4">
                            <span className="text-4xl font-semibold leading-none text-emerald-600 sm:text-5xl">
                              ${pkg.price}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              ${pkg.originalPrice}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            What&apos;s Included
                          </p>
                          <ol className="list-decimal space-y-2 pl-4 text-sm leading-relaxed text-foreground marker:text-emerald-500 marker:font-medium">
                            {pkg.services.map((service, idx) => (
                              <li key={idx} className="text-sm leading-relaxed text-foreground">
                                {service.name}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </CardContent>

                      <CardFooter className="border-t border-border/70 pb-5 pt-4">
                        <Button
                          asChild
                          size="lg"
                          variant={pkg.popular ? 'default' : 'outline'}
                        >
                          <a
                            href={pkg.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center"
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
