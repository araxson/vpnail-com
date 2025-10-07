import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { valuesData } from './values.data'
import { H3, H4, P } from '@/components/ui/typography'

export function ValuesSection() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle>
          <H3>{valuesData.title}</H3>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="grid grid-cols-2 gap-4">
          {valuesData.values.map((value, index) => (
            <div key={index} className="p-4 rounded-md border bg-card">
              <H4 className="text-base font-semibold mb-2">{value.title}</H4>
              <P className="text-sm text-muted-foreground">{value.description}</P>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
