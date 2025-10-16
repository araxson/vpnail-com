import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon } from 'lucide-react'
import { storyData } from './story.data'
import { H4, P } from '@/components/ui/typography'

export function StorySection() {
  const currentYear = new Date().getFullYear()
  const yearsInBusiness = currentYear - parseInt(storyData.founded)

  return (
    <Card className="flex flex-col" id="our-story">
      <CardHeader className="flex-shrink-0">
        <CardTitle>{storyData.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 flex-grow">
        <P className="text-muted-foreground">
          {storyData.intro}
        </P>
        <div className="space-y-5">
          {storyData.sections.map((section) => (
            <div key={section.id} className="space-y-2">
              <H4 className="text-base font-semibold">{section.title}</H4>
              <P className="text-sm text-muted-foreground">
                {section.body}
              </P>
            </div>
          ))}
        </div>
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
