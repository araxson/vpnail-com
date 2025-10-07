import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Section, Container } from '@/components/layouts'
import { Heart, Sparkles, Shield, Microscope, Users, Leaf, Award } from 'lucide-react'
import { featuresData } from './features.data'

const iconMap = { Heart, Sparkles, Shield, Microscope, Users, Leaf, Award } as const

export function FeaturesSection() {
  return (
    <Section variant="muted">
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">{featuresData.title}</h2>
              <p className="text-xl text-muted-foreground">{featuresData.subtitle}</p>
              <p className="text-muted-foreground">{featuresData.description}</p>
            </div>
          </Container>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
