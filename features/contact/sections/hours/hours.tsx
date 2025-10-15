import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Clock } from 'lucide-react'
import { hoursData } from './hours.data'

export function HoursSection() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          {hoursData.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">
          {hoursData.description}
        </p>
        <div className="space-y-2">
          {hoursData.schedule.map((item, index) => (
            <div key={index} className="flex justify-between p-3 rounded-md border bg-card">
              <span className="font-medium">{item.day}</span>
              <span className="text-muted-foreground">{item.hours}</span>
            </div>
          ))}
        </div>
        {hoursData.holiday?.hours && (
          <div className="mt-6 rounded-md border bg-primary/5 p-4">
            <p className="font-semibold">{hoursData.holiday.title}</p>
            <p className="text-muted-foreground">{hoursData.holiday.hours}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
