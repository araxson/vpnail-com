import { Metadata } from 'next';
import { siteConfig } from '@/lib/config/site.config';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

export function generateMetaTags({
  title,
  description,
  keywords = [],
  image = '/images/ui/placeholder.svg',
  url = siteConfig.url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Victoria Park Nails and Spa',
  noindex = false,
}: MetaTagsProps): Metadata {
  const fullTitle = `${title} | Victoria Park Nails and Spa Calgary`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`;
  
  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords].join(', '),
    authors: [{ name: author }],
    creator: siteConfig.creator,
    publisher: 'Victoria Park Nails and Spa Incorporated',
    metadataBase: new URL(siteConfig.url),
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Victoria Park Nails and Spa Calgary',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_CA',
      type: type === 'article' ? 'article' : 'website',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImageUrl],
      creator: '@Victoria Park Nails and Spahealth',
    },
    
    // Additional meta tags
    alternates: {
      canonical: url,
    },
    
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Verification tags
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? 'ui2QmsBUe9UxFkSEGhEoVgoy_V2K-qRywpR7hLEMZko',
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    },
  };
}

// Service-specific meta tags generator
export function generateServiceMetaTags(service: {
  name: string;
  shortDescription: string;
  slug: string;
  image?: string;
  pricing?: { basePrice: { displayPrice: string } };
}): Metadata {
  const price = service.pricing?.basePrice.displayPrice || '';
  const title = `${service.name} Calgary${price ? ` - ${price}` : ''}`;
  
  return generateMetaTags({
    title,
    description: service.shortDescription,
    keywords: [
      service.name.toLowerCase(),
      `${service.name.toLowerCase()} Calgary`,
      'Calgary aesthetic treatment',
      'Victoria Park Nails and Spa Calgary',
    ],
    image: service.image,
    url: `${siteConfig.url}/services/${service.slug}`,
    type: 'article',
  });
}

// Location-specific meta tags for area pages
export function generateAreaMetaTags(area: string): Metadata {
  const formattedArea = area.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return generateMetaTags({
    title: `${formattedArea} Nail Salon`,
    description: `Professional nail salon and spa services in ${formattedArea}. Manicures, pedicures, nail extensions, and custom nail art at Victoria Park Nails and Spa.`,
    keywords: [
      `${formattedArea} nail salon`,
      `${formattedArea} manicure`,
      `${formattedArea} pedicure`,
      'nail services Calgary',
    ],
    url: `${siteConfig.url}/areas/${area}`,
  });
}
