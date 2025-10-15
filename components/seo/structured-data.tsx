import {
  getArticleSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  getLocalBusinessSchema,
  getOrganizationSchema,
  getServiceSchema,
  getSiteNavigationSchema,
  getWebsiteSchema,
  toJsonLd,
} from '@/lib/seo/structured-data'

export type StructuredDataType =
  | 'LocalBusiness'
  | 'Organization'
  | 'WebSite'
  | 'BreadcrumbList'
  | 'FAQPage'
  | 'Service'
  | 'Article'
  | 'SiteNavigationElement'

export interface StructuredDataProps {
  type?: StructuredDataType
  data?: Record<string, unknown>
  schema?: Record<string, unknown>
}

const builders: Record<StructuredDataType, (data?: Record<string, unknown>) => Record<string, unknown>> = {
  LocalBusiness: (data) => getLocalBusinessSchema(data ?? {}),
  Organization: (data) => getOrganizationSchema(data ?? {}),
  WebSite: (data) => getWebsiteSchema(data ?? {}),
  BreadcrumbList: (data) => {
    const items = (data?.items ?? data?.itemListElement) as Array<{ name: string; url: string }> | undefined
    return getBreadcrumbSchema(items ?? [])
  },
  FAQPage: (data) => {
    const faqs = (data?.items ?? data?.faqs) as Array<{ question: string; answer: string }> | undefined
    const prebuilt = data?.mainEntity
    if (Array.isArray(prebuilt)) {
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: prebuilt,
      }
    }
    return getFAQSchema(faqs ?? [])
  },
  Service: (data) =>
    getServiceSchema({
      name: String(data?.name ?? ''),
      description: String(data?.description ?? ''),
      url: String(data?.url ?? '/services'),
      price: data?.price ? String(data.price) : undefined,
      areaServed: data?.areaServed ? String(data.areaServed) : undefined,
    }),
  Article: (data) =>
    getArticleSchema({
      title: String(data?.title ?? ''),
      description: String(data?.description ?? ''),
      url: String(data?.url ?? '/'),
      publishedTime: String(data?.publishedTime ?? new Date().toISOString()),
      modifiedTime: data?.modifiedTime ? String(data.modifiedTime) : undefined,
      authorName: String(data?.authorName ?? 'Victoria Park Nails & Spa'),
      image: data?.image ? String(data.image) : undefined,
    }),
  SiteNavigationElement: (data) =>
    getSiteNavigationSchema(
      Array.isArray(data?.items) ? (data?.items as Array<{ name: string; url: string }>) : undefined,
      data ?? {}
    ),
}

export function StructuredData({ type, data = {}, schema }: StructuredDataProps) {
  const payload = schema || (type ? builders[type]?.(data) : null)

  if (!payload) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toJsonLd(payload) }}
    />
  )
}
