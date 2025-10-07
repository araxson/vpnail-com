import Link from 'next/link'
import { Section, Container } from '@/components/layouts'
import { Button } from '@/components/ui/button'
import { H2, Lead, P } from '@/components/ui/typography'
import { getGalleryImages } from '@/lib/gallery'
import { homeGalleryData } from './gallery.data'
import { HomeGalleryGrid } from './gallery-grid'

export function HomeGallerySection() {
  const images = getGalleryImages(9)

  if (images.length === 0) {
    return null
  }

  return (
    <Section variant="muted" size="lg">
      <Container>
        <div className="space-y-8 sm:space-y-10">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <H2>{homeGalleryData.title}</H2>
            <Lead>{homeGalleryData.subtitle}</Lead>
            <P className="text-muted-foreground">{homeGalleryData.description}</P>
          </div>

          <HomeGalleryGrid images={images} />

          <div className="flex justify-center pt-2">
            <Button size="lg" variant="outline" asChild>
              <Link href={homeGalleryData.cta.href}>{homeGalleryData.cta.text}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
