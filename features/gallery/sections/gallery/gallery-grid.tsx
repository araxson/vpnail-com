'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import type { GalleryImage } from '@/lib/gallery'

interface GalleryGridProps {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-5 xl:grid-cols-6">
        {images.map((image) => (
          <button
            key={image.filename}
            onClick={() => setSelectedImage(image)}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg border bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-all duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </button>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl overflow-hidden p-0">
          <DialogTitle className="sr-only">Gallery image preview</DialogTitle>
          {selectedImage && (
            <div className="relative h-[75vh] w-full bg-background">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 70vw"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
