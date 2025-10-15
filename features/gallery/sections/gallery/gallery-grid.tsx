'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import type { GalleryImage } from '@/lib/gallery'
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { ButtonGroup } from '@/components/ui/button-group'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface GalleryGridProps {
  images: GalleryImage[]
}

const ITEMS_PER_PAGE = 30

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [activePage, setActivePage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(images.length / ITEMS_PER_PAGE))
  const startIndex = (activePage - 1) * ITEMS_PER_PAGE
  const paginatedImages = images.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)
  const disablePrevious = activePage === 1
  const disableNext = activePage === totalPages

  useEffect(() => {
    setActivePage(1)
  }, [images.length])

  useEffect(() => {
    setActivePage((page) => Math.min(Math.max(page, 1), totalPages))
  }, [totalPages])

  const handlePageChange = (page: number) => {
    setActivePage(page)
    setSelectedImage(null)
  }

  const handlePrevious = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (disablePrevious) return
    handlePageChange(activePage - 1)
  }

  const handleNext = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (disableNext) return
    handlePageChange(activePage + 1)
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-5 xl:grid-cols-6">
        {paginatedImages.map((image) => (
          <figure
            key={image.filename}
            itemScope
            itemType="https://schema.org/ImageObject"
            className="flex"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-square h-full w-full cursor-pointer overflow-hidden rounded-lg border bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={image.alt}
              title={image.title}
            >
              <Image
                src={image.src}
                alt={image.alt}
                title={image.title}
                fill
                itemProp="contentUrl"
                className="object-cover transition-all duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </button>
            <figcaption className="sr-only" itemProp="caption">
              {image.caption}
            </figcaption>
            <meta itemProp="name" content={image.title} />
            <meta itemProp="description" content={image.description} />
          </figure>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-10 flex-col items-center gap-4">
          <PaginationContent className="flex flex-wrap items-center justify-center gap-3">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={handlePrevious}
                aria-disabled={disablePrevious}
                className={cn(disablePrevious && 'pointer-events-none opacity-50')}
              />
            </PaginationItem>
            <PaginationItem>
              <ButtonGroup className="bg-background">
                {pageNumbers.map((pageNumber) => (
                  <Button
                    key={pageNumber}
                    type="button"
                    size="lg"
                    variant={pageNumber === activePage ? 'default' : 'ghost'}
                    onClick={() => handlePageChange(pageNumber)}
                    aria-current={pageNumber === activePage ? 'page' : undefined}
                  >
                    {pageNumber}
                  </Button>
                ))}
              </ButtonGroup>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={handleNext}
                aria-disabled={disableNext}
                className={cn(disableNext && 'pointer-events-none opacity-50')}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl overflow-hidden p-0">
          <DialogTitle className="sr-only">Gallery image preview</DialogTitle>
          {selectedImage && (
            <figure
              className="relative h-[75vh] w-full bg-background"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                title={selectedImage.title}
                fill
                itemProp="contentUrl"
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 70vw"
                priority
              />
              <figcaption className="sr-only" itemProp="caption">
                {selectedImage.caption}
              </figcaption>
              <meta itemProp="name" content={selectedImage.title} />
              <meta itemProp="description" content={selectedImage.description} />
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
