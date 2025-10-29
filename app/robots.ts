import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config/site.config'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '*.json$'],
      },
      // Special rules for Google bot
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Special rules for Googlebot Image
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: new URL(baseUrl).host,
  }
}
