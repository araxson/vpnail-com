import { Section, Container } from '@/components/layouts'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Calendar, Clock } from 'lucide-react'
import { methodsData } from './methods.data'

const iconMap = {
  Phone,
  Mail,
  MapPin,
  Calendar,
} as const

export function MethodsSection() {
  return (
    <Section variant="muted">
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">{methodsData.title}</h2>
              <p className="text-muted-foreground text-lg">{methodsData.description}</p>
            </div>
          </Container>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {methodsData.methods.map((method, index) => {
            const IconComponent = iconMap[method.icon as keyof typeof iconMap]
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-medium text-sm">{method.contact}</p>
                  <p className="text-xs text-muted-foreground">{method.hours}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="flex justify-center">
          <Card className="max-w-2xl w-full bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">{methodsData.availability.title}</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                {methodsData.availability.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
