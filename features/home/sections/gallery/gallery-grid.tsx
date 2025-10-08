'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import type { GalleryImage } from '@/lib/gallery'

interface HomeGalleryGridProps {
  images: GalleryImage[]
}

export function HomeGalleryGrid({ images }: HomeGalleryGridProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null)

  if (images.length === 0) {
    return null
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-5 lg:gap-4">
        {images.map((image) => (
          <figure
            key={image.filename}
            itemScope
            itemType="https://schema.org/ImageObject"
            className="flex"
          >
            <button
              type="button"
              onClick={() => setSelected(image)}
              className="group relative aspect-square h-full w-full overflow-hidden rounded-xl border bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={image.alt}
              title={image.title}
            >
              <Image
                src={image.src}
                alt={image.alt}
                title={image.title}
                fill
                itemProp="contentUrl"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
            </button>
            <figcaption className="sr-only" itemProp="caption">
              {image.caption}
            </figcaption>
            <meta itemProp="name" content={image.title} />
            <meta itemProp="description" content={image.description} />
          </figure>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl overflow-hidden p-0">
          <DialogTitle className="sr-only">Gallery image preview</DialogTitle>
          {selected && (
            <figure
              className="relative h-[65vh] w-full bg-background"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                title={selected.title}
                fill
                itemProp="contentUrl"
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
              <figcaption className="sr-only" itemProp="caption">
                {selected.caption}
              </figcaption>
              <meta itemProp="name" content={selected.title} />
              <meta itemProp="description" content={selected.description} />
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
