import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Section, Container } from '@/components/layouts'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { servicesData } from './services.data'
import { H2, H4, Lead, P, Small } from '@/components/ui/typography'

export function ServicesSection() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm">{servicesData.subtitle}</Badge>
              <H2>{servicesData.title}</H2>
              <Lead>{servicesData.description}</Lead>
            </div>
          </Container>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servicesData.categories.map((category) => (
            <Card key={category.id} className="flex flex-col h-full border">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  <Small className="tracking-wide uppercase text-xs">
                    {category.serviceCount} services
                  </Small>
                </Badge>
                <CardTitle>
                  <H4 className="text-lg">{category.title}</H4>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <P className="text-muted-foreground text-sm sm:text-base">
                  {category.description}
                </P>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="lg">
                  <Link href={category.href} className="flex w-full items-center justify-center">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href={servicesData.cta.href}>{servicesData.cta.text}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
