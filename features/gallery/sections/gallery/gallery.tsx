import { Section, Container } from '@/components/layouts'
import { galleryData } from './gallery.data'
import { H2, Lead, P } from '@/components/ui/typography'
import { GalleryGrid } from './gallery-grid'
import { getGalleryImages } from '@/lib/gallery'

export function GallerySection() {
  const images = getGalleryImages()

  return (
    <Section variant="muted">
      <Container>
        <div className="mb-16 text-center">
          <Container size="sm">
            <div className="space-y-4">
              <H2>{galleryData.title}</H2>
              <Lead>{galleryData.subtitle}</Lead>
              <P className="text-muted-foreground">{galleryData.description}</P>
            </div>
          </Container>
        </div>

        <GalleryGrid images={images} />
      </Container>
    </Section>
  )
}
