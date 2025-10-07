import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Award, Smile, ThumbsUp, Clock } from 'lucide-react'
import { statsData } from './stats.data'

const iconMap = { Award, Smile, ThumbsUp, Clock } as const

export function StatsSection() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle>{statsData.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="grid grid-cols-2 gap-4 h-full">
          {statsData.stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="text-center p-4 rounded-md border bg-card flex flex-col items-center justify-center"
              >
                <IconComponent className="h-6 w-6 text-primary mb-2" />
                <div className="text-2xl font-bold text-primary mb-2">
                  {stat.value}{stat.suffix || ''}
                </div>
                <div className="text-xs text-muted-foreground uppercase">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
