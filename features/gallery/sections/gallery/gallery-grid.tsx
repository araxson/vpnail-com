'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import type { GalleryImage } from '@/lib/gallery'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

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
  const getPageHref = (page: number) => `/gallery?page=${page}`
  const previousPageHref = getPageHref(Math.max(activePage - 1, 1))
  const nextPageHref = getPageHref(Math.min(activePage + 1, totalPages))

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
            <Button
              type="button"
              onClick={() => setSelectedImage(image)}
              variant="ghost"
              className="group relative flex aspect-square h-full w-full cursor-pointer overflow-hidden rounded-lg border bg-muted p-0 hover:bg-transparent"
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
            </Button>
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
                href={previousPageHref}
                onClick={handlePrevious}
                aria-disabled={disablePrevious}
                className={cn(disablePrevious && 'pointer-events-none opacity-50')}
              />
            </PaginationItem>
            {pageNumbers.map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href={getPageHref(pageNumber)}
                  isActive={pageNumber === activePage}
                  size="default"
                  className="min-w-10 justify-center"
                  onClick={(event) => {
                    event.preventDefault()
                    if (pageNumber !== activePage) {
                      handlePageChange(pageNumber)
                    }
                  }}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href={nextPageHref}
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
          <DialogHeader className="sr-only">
            <DialogTitle>Gallery image preview</DialogTitle>
            <DialogDescription>Use escape to close the lightbox.</DialogDescription>
          </DialogHeader>
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
