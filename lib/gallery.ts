import fs from 'node:fs'
import path from 'node:path'

export interface GalleryImage {
  src: string
  alt: string
  filename: string
}

const GALLERY_DIR = path.join(process.cwd(), 'public', 'images', 'gallery')
const GALLERY_FILE_PATTERN = /^vpnail-gallery-(\d+)\.(webp|jpg|jpeg|png)$/i

function parseSequence(filename: string) {
  const match = filename.match(GALLERY_FILE_PATTERN)
  if (!match) return -1
  return Number.parseInt(match[1], 10) || -1
}

function buildAltText(sequence: number) {
  if (sequence > 0) {
    return `Victoria Park Nails gallery design ${sequence.toString().padStart(2, '0')}`
  }
  return 'Victoria Park Nails gallery design'
}

export function getGalleryImages(limit?: number): GalleryImage[] {
  let files: string[] = []

  try {
    files = fs.readdirSync(GALLERY_DIR)
  } catch (error) {
    console.error('[gallery] Failed to read gallery directory', error)
    return []
  }

  const sorted = files
    .filter((file) => GALLERY_FILE_PATTERN.test(file))
    .sort((a, b) => parseSequence(b) - parseSequence(a) || b.localeCompare(a))

  const selected = typeof limit === 'number' ? sorted.slice(0, limit) : sorted

  return selected.map((filename) => {
    const sequence = parseSequence(filename)
    return {
      filename,
      src: `/images/gallery/${filename}`,
      alt: buildAltText(sequence),
    }
  })
}
