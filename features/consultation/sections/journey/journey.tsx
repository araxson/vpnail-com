import { Section, Container } from '@/components/layouts'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { MessageSquare, Calendar, Sparkles, TrendingUp } from 'lucide-react'
import { journeyData } from './journey.data'
import { H2, Lead, P, Small, H4 } from '@/components/ui/typography'

const iconMap = {
  MessageSquare,
  Calendar,
  Sparkles,
  TrendingUp,
} as const

export function JourneySection() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <H2>{journeyData.title}</H2>
              <Lead>{journeyData.subtitle}</Lead>
              <P className="text-muted-foreground">{journeyData.description}</P>
            </div>
          </Container>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {journeyData.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap]
            return (
              <Card key={step.id} className="relative">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <Small className="text-primary font-semibold uppercase tracking-wide">
                        {step.phase}
                      </Small>
                      <CardTitle>
                        <H4 className="text-base font-semibold">{step.title}</H4>
                      </CardTitle>
                    </div>
                    <div className="absolute -top-3 -left-3 rounded-full bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <P className="text-sm sm:text-base text-muted-foreground">
                      {step.description}
                    </P>
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
