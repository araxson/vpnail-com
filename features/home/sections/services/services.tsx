import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Section, Container } from '@/components/layouts'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { servicesData } from './services.data'

export function ServicesSection() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm">{servicesData.subtitle}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">{servicesData.title}</h2>
              <p className="text-muted-foreground text-lg">{servicesData.description}</p>
            </div>
          </Container>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servicesData.categories.map((category) => (
            <Card key={category.id} className="flex flex-col h-full border">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  {category.serviceCount} services
                </Badge>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href={category.href} className="flex items-center justify-center">
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
