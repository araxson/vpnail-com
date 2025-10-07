import { galleryData } from '@/features/gallery/sections/gallery/gallery.data'

export function getRandomGalleryImage(): string {
  const images = galleryData.images
  if (!images || images.length === 0) return '/Victoria_Park_Nails_Spa_Logo_Primary_small.png'
  const idx = Math.floor(Math.random() * images.length)
  return images[idx]?.image || '/Victoria_Park_Nails_Spa_Logo_Primary_small.png'
}

