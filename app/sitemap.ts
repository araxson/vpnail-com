import fs from 'node:fs';
import path from 'node:path';
import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config/site.config';

function getLastModified(...segments: string[]) {
  try {
    const targetPath = path.join(process.cwd(), ...segments);
    const stats = fs.statSync(targetPath);
    return stats.mtime.toISOString();
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticContentSources: Record<string, string[]> = {
    '/': ['features', 'home', 'home-page.tsx'],
    '/about': ['features', 'about', 'about-page.tsx'],
    '/services': ['features', 'services', 'services-page.tsx'],
    '/consultation': ['features', 'consultation', 'consultation-page.tsx'],
    '/contact': ['features', 'contact', 'contact-page.tsx'],
    '/gallery': ['features', 'gallery', 'gallery-page.tsx'],
    '/areas': ['features', 'areas', 'areas-page.tsx'],
  };

  const staticPages: MetadataRoute.Sitemap = Object.entries(staticContentSources).map(
    ([route, source]) => {
      const lastModified = getLastModified(...source);
      return {
        url: route === '/' ? baseUrl : `${baseUrl}${route}`,
        ...(lastModified ? { lastModified } : {}),
      };
    }
  );

  const areaContentSource = ['features', 'area-detail', 'area-detail.data.ts'];
  const areaLastModified = getLastModified(...areaContentSource);

  const areaPages: MetadataRoute.Sitemap = [
    'victoria-park-calgary',
    'downtown-calgary',
    'beltline-calgary',
    'mission-calgary',
    'mount-royal-calgary',
    'inglewood-calgary',
    'east-village-calgary',
    'erlton-calgary',
  ].map((area) => ({
    url: `${baseUrl}/areas/${area}`,
    ...(areaLastModified ? { lastModified: areaLastModified } : {}),
  }));

  return [...staticPages, ...areaPages];
}
