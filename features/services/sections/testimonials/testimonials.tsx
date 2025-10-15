'use client'

import * as React from 'react'
import { Section, Container } from '@/components/layouts'
import { testimonialsData } from './testimonials.data'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from '@/components/ui/carousel'
import { Star } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import { H2, Lead, Small } from '@/components/ui/typography'

export function TestimonialsSection() {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  return (
    <Section variant="muted" size="lg">
      <Container noPaddingMobile>
        <div className="text-center mb-16 px-4 md:px-0">
          <Container size="sm">
            <div className="space-y-4">
              <Small className="text-primary uppercase tracking-[0.3em]">
                {testimonialsData.subtitle}
              </Small>
              <H2>{testimonialsData.title}</H2>
              <Lead>{testimonialsData.description}</Lead>
            </div>
          </Container>
        </div>

        <div className="relative">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-0 md:-ml-4">
              {testimonialsData.testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 pr-4 basis-[calc(85%-1rem)] sm:basis-[calc(70%-1rem)] md:basis-1/2 lg:basis-1/3">
                  <Card className="flex flex-col h-full p-5">
                    <CardHeader className="p-0 pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-0 pb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {testimonial.content}
                      </p>
                    </CardContent>
                    <CardFooter className="p-0 pt-3 border-t">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback className="bg-primary/10 text-primary font-medium text-xs">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-sm leading-tight">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="mt-8 px-4 md:px-0" />
          </Carousel>
        </div>
      </Container>
    </Section>
  )
}
