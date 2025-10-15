import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { LocationMap } from '@/components/shared/location-map'
import { locationData } from './location.data'

export function LocationSection() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle>{locationData.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-6">
          {locationData.description}
        </p>
        <LocationMap />
      </CardContent>
    </Card>
  )
}
