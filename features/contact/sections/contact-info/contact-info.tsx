import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin } from 'lucide-react'
import { contactInfoData } from './contact-info.data'

const iconMap = { Phone, Mail, MapPin } as const

export function ContactInfoSection() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle>{contactInfoData.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-6">
        <p className="text-muted-foreground">
          {contactInfoData.description}
        </p>
        <div className="space-y-4">
          {contactInfoData.methods.map((method, index) => {
            const IconComponent = iconMap[method.icon as keyof typeof iconMap]
            return (
              <a
                key={index}
                href={method.href}
                className="flex items-start gap-3 p-3 rounded-md border bg-card hover:bg-accent transition-colors"
              >
                <IconComponent className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{method.label}</div>
                  <div className="text-sm text-muted-foreground">{method.value}</div>
                </div>
              </a>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
