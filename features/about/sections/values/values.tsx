import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { valuesData } from './values.data'

export function ValuesSection() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle>{valuesData.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="grid grid-cols-2 gap-4">
          {valuesData.values.map((value, index) => (
            <div key={index} className="p-4 rounded-md border bg-card">
              <h3 className="font-medium text-lg mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
