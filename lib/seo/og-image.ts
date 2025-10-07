import { getGalleryImages } from '@/lib/gallery'

const FALLBACK_IMAGE = '/images/gallery/vpnail-gallery-00001.webp'

export function getRandomGalleryImage(): string {
  const images = getGalleryImages()
  if (images.length === 0) {
    return FALLBACK_IMAGE
  }

  const primary = images[0]
  return primary?.src || FALLBACK_IMAGE
}
