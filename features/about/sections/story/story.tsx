import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon } from 'lucide-react'
import { storyData } from './story.data'

export function StorySection() {
  const currentYear = new Date().getFullYear()
  const yearsInBusiness = currentYear - parseInt(storyData.founded)

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle>{storyData.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow">
        <p className="text-muted-foreground">
          {storyData.description}
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center pt-4 border-t gap-4 mt-auto">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">
              Established {storyData.founded}
            </span>
          </div>
          <Badge variant="secondary">
            {yearsInBusiness}+ Years of Excellence
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
