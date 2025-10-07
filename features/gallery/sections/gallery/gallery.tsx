'use client'

import { useState } from 'react'
import { Section, Container } from '@/components/layouts'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import Image from 'next/image'
import { galleryData } from './gallery.data'
import { H2, Lead, P } from '@/components/ui/typography'

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{ image: string; alt: string } | null>(null)

  return (
    <Section variant="muted">
      <Container>
        <div className="text-center mb-16">
          <Container size="sm">
            <div className="space-y-4">
              <H2>{galleryData.title}</H2>
              <Lead>{galleryData.subtitle}</Lead>
              <P className="text-muted-foreground">{galleryData.description}</P>
            </div>
          </Container>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4">
          {galleryData.images.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage({ image: image.image, alt: image.alt })}
              className="relative aspect-square overflow-hidden rounded-lg bg-muted group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Image
                src={image.image}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden">
            {selectedImage && (
              <div className="relative w-full aspect-square md:aspect-video">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Section>
  )
}
