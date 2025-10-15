import fs from 'node:fs'
import path from 'node:path'

export interface GalleryImage {
  src: string
  alt: string
  title: string
  caption: string
  description: string
  filename: string
}

const GALLERY_DIR = path.join(process.cwd(), 'public', 'images', 'gallery')
const GALLERY_FILE_PATTERN = /^([a-z0-9]+(?:-[a-z0-9]+)*)-(\d+)\.(webp|jpg|jpeg|png)$/i
const BRAND_PREFIX = ['victoria', 'park', 'nails']
const LOCATION_TOKENS = new Set(['calgary', 'yyc', 'alberta', 'ab'])

interface ParsedFilename {
  slug: string
  sequence: number
}

function parseFilename(filename: string): ParsedFilename | null {
  const match = filename.match(GALLERY_FILE_PATTERN)
  if (!match) return null
  const [, rawSlug, sequencePart] = match

  return {
    slug: rawSlug.toLowerCase(),
    sequence: Number.parseInt(sequencePart, 10) || -1,
  }
}

function titleCase(value: string) {
  return value.replace(/(^|\s|[-/])\w/g, (segment) => segment.toUpperCase())
}

function buildImageMetadata({ slug, sequence }: ParsedFilename) {
  const parts = slug.split('-')
  let descriptorParts = parts

  if (descriptorParts.slice(0, BRAND_PREFIX.length).join('-') === BRAND_PREFIX.join('-')) {
    descriptorParts = descriptorParts.slice(BRAND_PREFIX.length)
  }

  const serviceParts: string[] = []
  const locationParts: string[] = []

  descriptorParts.forEach((part) => {
    if (LOCATION_TOKENS.has(part)) {
      locationParts.push(part)
    } else {
      serviceParts.push(part)
    }
  })

  const sequenceLabel = sequence > 0 ? sequence.toString().padStart(2, '0') : ''
  const serviceTitle = serviceParts.length ? titleCase(serviceParts.join(' ')) : titleCase(descriptorParts.join(' ')) || 'Signature Design'
  const locationTitle = locationParts.length ? titleCase(locationParts.join(' ')) : ''
  const locationSuffix = locationTitle ? ` in ${locationTitle}` : ''
  const designLabel = sequenceLabel ? `Design ${sequenceLabel}` : 'Gallery Design'

  const alt = `${serviceTitle}${locationSuffix} at Victoria Park Nails – ${designLabel}`
  const title = `${serviceTitle}${locationTitle ? ` | ${locationTitle}` : ''} | Victoria Park Nails`
  const description = `Gallery ${designLabel} featuring a ${serviceTitle.toLowerCase()} created at Victoria Park Nails${locationSuffix}.`
  const caption = `${designLabel}: ${serviceTitle}${locationTitle ? ` – ${locationTitle}` : ''}`

  return { alt, title, description, caption }
}

export function getGalleryImages(limit?: number): GalleryImage[] {
  let files: string[] = []

  try {
    files = fs.readdirSync(GALLERY_DIR)
  } catch (error) {
    console.error('[gallery] Failed to read gallery directory', error)
    return []
  }

  const parsedFiles = files
    .map((filename) => ({ filename, parsed: parseFilename(filename) }))
    .filter((item): item is { filename: string; parsed: ParsedFilename } => Boolean(item.parsed))

  const sorted = parsedFiles
    .sort((a, b) => {
      const sequenceDiff = b.parsed.sequence - a.parsed.sequence
      if (sequenceDiff !== 0) return sequenceDiff
      return b.filename.localeCompare(a.filename)
    })
    .map((item) => item.filename)

  const selected = typeof limit === 'number' ? sorted.slice(0, limit) : sorted

  return selected.map((filename) => {
    const parsed = parseFilename(filename)

    if (!parsed) {
      return {
        filename,
        src: `/images/gallery/${filename}`,
        alt: 'Victoria Park Nails gallery design',
        title: 'Victoria Park Nails Gallery',
        caption: 'Gallery design',
        description: 'Gallery design from Victoria Park Nails in Calgary.',
      }
    }

    const { alt, title, description, caption } = buildImageMetadata(parsed)

    return {
      filename,
      src: `/images/gallery/${filename}`,
      alt,
      title,
      caption,
      description,
    }
  })
}
