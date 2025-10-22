import Link from 'next/link'
import { Section, Container } from '@/components/layouts'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { H2, Lead, P, Small } from '@/components/ui/typography'
import { localSeoData } from './local-seo.data'

export function LocalSeoSection() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <Container size="sm">
            <div className="space-y-4">
              <H2>{localSeoData.title}</H2>
              <Lead>{localSeoData.subtitle}</Lead>
              <P className="text-muted-foreground">{localSeoData.description}</P>
            </div>
          </Container>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {localSeoData.areas.map((area) => (
            <Card key={area.id} className="h-full">
              <CardHeader>
                <CardTitle>
                  <Small className="text-base font-semibold">{area.title}</Small>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <P className="text-muted-foreground">{area.copy}</P>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link">
                  <Link href={area.href}>Plan your visit</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" asChild>
            <Link href={localSeoData.cta.href}>{localSeoData.cta.text}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={localSeoData.secondaryCta.href}>{localSeoData.secondaryCta.text}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
