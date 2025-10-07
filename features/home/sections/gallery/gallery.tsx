import Link from 'next/link'
import Image from 'next/image'
import { Section, Container } from '@/components/layouts'
import { Button } from '@/components/ui/button'
import { H2, Lead, P } from '@/components/ui/typography'
import { getGalleryImages } from '@/lib/gallery'
import { homeGalleryData } from './gallery.data'

export function HomeGallerySection() {
  const images = getGalleryImages(9)

  if (images.length === 0) {
    return null
  }

  return (
    <Section variant="muted">
      <Container>
        <div className="space-y-10">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <H2>{homeGalleryData.title}</H2>
            <Lead>{homeGalleryData.subtitle}</Lead>
            <P className="text-muted-foreground">{homeGalleryData.description}</P>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {images.map((image) => (
              <div
                key={image.filename}
                className="group relative aspect-square overflow-hidden rounded-xl border bg-muted"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href={homeGalleryData.cta.href}>{homeGalleryData.cta.text}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
