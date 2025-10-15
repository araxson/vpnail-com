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
            'Victoria Park Nails & Spa proudly serves eight Calgary neighborhoods: Victoria Park, Downtown Calgary, Beltline, Mission, Mount Royal, Inglewood, East Village, and Erlton with professional manicures, pedicures, gel nails, acrylics, custom nail art, spa pedicures, massage, and waxing services.',
          url: '/areas',
          publishedTime: '2015-01-01T00:00:00Z',
          authorName: 'Victoria Park Nails and Spa',
        }}
      />
      <AreasHeroSection />
    </main>
  )
}
