import { galleryData } from '@/features/gallery/sections/gallery/gallery.data'

export function getRandomGalleryImage(): string {
  const defaultImage = galleryData.images[0]?.image || '/images/gallery/vpnail-gallery-00001.webp'
  // Widen tuple type to a regular array for safe length/index ops
  const list = Array.from(galleryData.images)
  const n = list.length
  if (n < 1) return defaultImage
  const idx = Math.floor(Math.random() * n)
  return list[idx]?.image || defaultImage
}
