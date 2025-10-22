'use client'

import * as React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from '@/components/ui/carousel'
import { Section, Container } from '@/components/layouts'
import { Star, GraduationCap, Calendar } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import { teamData } from './team.data'
import { H2, H4, Lead, P, Small } from '@/components/ui/typography'

export function TeamSection() {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  return (
    <Section variant="muted" id="team">
      <Container noPaddingMobile>
        <div className="text-center mb-16 px-4 md:px-0">
          <Container size="sm">
            <div className="space-y-4">
              <H2>{teamData.title}</H2>
              <Lead>{teamData.description}</Lead>
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
              {teamData.members.map((member) => (
                <CarouselItem key={member.id} className="pl-4 pr-4 basis-[calc(85%-1rem)] sm:basis-[calc(70%-1rem)] md:basis-1/2">
                  <Card className="flex flex-col overflow-hidden p-0 border border-border h-full">
                    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/1 p-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-20 h-20 border border-background flex-shrink-0">
                          <AvatarImage
                            src={member.image ?? '/avatar-placeholder.webp'}
                            alt={member.name}
                          />
                          <AvatarFallback className="text-lg bg-secondary text-background">
                            {member.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <H4 className="text-lg font-semibold text-primary mb-1">
                            {member.name}
                          </H4>
                          <Small className="text-muted-foreground mb-2 block">
                            {member.position}
                          </Small>

                          <div className="flex items-center gap-1 mb-3">
                            <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                            <span className="text-xs text-muted-foreground">{member.experience}</span>
                          </div>

                          <div>
                            <div className="flex flex-wrap gap-1">
                              {member.specialties.map((specialty, index) => (
                                <Badge key={index} variant="outline" className="text-xs font-normal">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <CardContent className="flex-grow p-4 pt-3 pb-2">
                      <div className="space-y-4">
                        {member.certifications && member.certifications.length > 0 && (
                          <div>
                            <Small className="text-muted-foreground uppercase tracking-wide mb-2 block">
                              <span className="flex items-center gap-1">
                                <GraduationCap className="h-3.5 w-3.5 text-primary" />
                                Certifications
                              </span>
                            </Small>
                            <div className="flex flex-wrap gap-1.5">
                              {member.certifications.map((cert, index) => (
                                <Badge key={index} variant="secondary" className="text-xs font-normal">
                                  {cert}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <Small className="text-muted-foreground uppercase tracking-wide mb-2 block">
                            About
                          </Small>
                          <P className="text-xs text-foreground/80">
                            {member.bio}
                          </P>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="p-4 pt-2">
                      <Button variant="outline" size="lg" asChild>
                        <Link
                          href={member.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          Book with {member.name}
                        </Link>
                      </Button>
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
