import { AreasHeroSection } from './sections/hero'
import { StructuredData } from '@/components/seo'

export function AreasPage() {
  return (
    <main>
      {/* Article schema for Areas page */}
      <StructuredData
        type="Article"
        data={{
          title: 'Calgary Service Areas | Victoria Park Nails & Spa',
          description:
            'Victoria Park Nails & Spa proudly serves Calgary communities including Victoria Park, Beltline, Mission, Downtown, Inglewood, East Village, and surrounding areas.',
          url: '/areas',
          publishedTime: '2015-01-01T00:00:00Z',
          authorName: 'Victoria Park Nails and Spa',
        }}
      />
      <AreasHeroSection />
    </main>
  )
}
