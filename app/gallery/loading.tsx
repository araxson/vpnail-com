import { Section, Container } from '@/components/layouts'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <Section size="lg">
      <Container className="space-y-8">
        <Skeleton className="h-12 w-2/3" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="aspect-square" />
          ))}
        </div>
      </Container>
    </Section>
  )
}
