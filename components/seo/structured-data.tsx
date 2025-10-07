'use client';

import { siteConfig } from '@/lib/config/site.config';

interface StructuredDataProps {
  type?: 'LocalBusiness' | 'Service' | 'Article' | 'FAQPage' | 'BreadcrumbList' | 'WebSite' | 'Organization' | 'ItemList' | 'ServiceAreaBusiness' | 'SiteNavigationElement' | 'HowTo';
  data?: Record<string, unknown>;
}

export function StructuredData({ type = 'LocalBusiness', data = {} }: StructuredDataProps) {
  const baseUrl = siteConfig.url;
  const logoUrl = `${baseUrl}/Victoria_Park_Nails_Spa_Logo_Primary_small.png`;

  const baseStructuredData = {
    LocalBusiness: {
      '@context': 'https://schema.org',
      // Use multi-typed entity to better classify the business
      '@type': ['LocalBusiness', 'HealthAndBeautyBusiness', 'NailSalon'],
      '@id': `${baseUrl}/#localbusiness`,
      name: 'Victoria Park Nails and Spa',
      alternateName: 'Victoria Park Nails and Spa Calgary',
      description: siteConfig.description,
      url: baseUrl,
      telephone: siteConfig.business.phone,
      email: siteConfig.business.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.business.address.street,
        addressLocality: siteConfig.business.address.city,
        addressRegion: siteConfig.business.address.province,
        postalCode: siteConfig.business.address.postalCode,
        addressCountry: 'CA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '51.0447',
        longitude: '-114.0719',
      },
      hasMap: siteConfig.business.address.mapUrl,
      openingHoursSpecification: siteConfig.business.hours.map(hour => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: hour.day,
        opens: '10:00',
        closes: hour.day === 'Saturday' || hour.day === 'Sunday' ? '17:30' : '19:00',
        description: hour.hours,
      })),
      priceRange: '$$',
      image: [
        `${baseUrl}/Victoria_Park_Nails_Spa_Logo_Primary_small.png`,
      ],
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
      foundingDate: '2015',
      areaServed: [
        {
          '@type': 'City',
          name: 'Calgary',
          containedInPlace: {
            '@type': 'State',
            name: 'Alberta',
          },
        },
        { '@type': 'Place', name: 'Victoria Park, Calgary' },
        { '@type': 'Place', name: 'Beltline, Calgary' },
        { '@type': 'Place', name: 'Downtown Calgary' },
        { '@type': 'Place', name: 'Inglewood, Calgary' },
        { '@type': 'Place', name: 'Mission, Calgary' },
        { '@type': 'Place', name: 'East Village, Calgary' },
        { '@type': 'Place', name: 'Erlton, Calgary' },
      ],
      serviceArea: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.business.address.city,
          addressRegion: siteConfig.business.address.province,
          addressCountry: 'CA',
        },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Nail & Spa Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Manicures',
              description: 'Professional manicure services including classic, shellac, and gel overlays',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Victoria Park Nails and Spa',
              },
              areaServed: 'Calgary, Alberta',
              serviceType: 'Manicure',
              url: `${baseUrl}/services`,
            },
            price: '35',
            priceCurrency: 'CAD',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Pedicures',
              description: 'Relaxing pedicure services including regular and deluxe spa treatments',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Victoria Park Nails and Spa Calgary',
              },
              areaServed: 'Calgary, Alberta',
              serviceType: 'Pedicure',
              url: `${baseUrl}/services`,
            },
            price: '55',
            priceCurrency: 'CAD',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Nail Extensions',
              description: 'Professional gel and acrylic nail extensions with custom designs',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Victoria Park Nails and Spa Calgary',
              },
              areaServed: 'Calgary, Alberta',
              serviceType: 'Nail Extension',
              url: `${baseUrl}/services`,
            },
            price: '75',
            priceCurrency: 'CAD',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Dip Powder Manicure',
              description: 'Durable, lightweight color with minimal odor',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Victoria Park Nails and Spa Calgary',
              },
              areaServed: 'Calgary, Alberta',
              serviceType: 'Manicure',
              url: `${baseUrl}/services`,
            },
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Gel-X Extensions',
              description: 'Lightweight full-cover tips with soft gel overlay',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Victoria Park Nails and Spa Calgary',
              },
              areaServed: 'Calgary, Alberta',
              serviceType: 'Nail Extension',
              url: `${baseUrl}/services`,
            },
            availability: 'https://schema.org/InStock',
          },
        ],
      },
      sameAs: [
        siteConfig.social.instagram,
        siteConfig.social.facebook,
        siteConfig.social.tiktok,
      ].filter(Boolean),
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: siteConfig.business.phone,
          email: siteConfig.business.email,
          url: `${baseUrl}/contact`,
          areaServed: 'CA',
          availableLanguage: ['en'],
        },
      ],
      potentialAction: [
        {
          '@type': 'ScheduleAction',
          target: `${baseUrl}/contact`,
          name: 'Book an appointment',
          actionStatus: 'https://schema.org/PotentialActionStatus',
        },
        {
          '@type': 'CommunicateAction',
          target: `tel:${siteConfig.business.phone.replace(/[^+\d]/g, '')}`,
          name: 'Call clinic',
          actionStatus: 'https://schema.org/PotentialActionStatus',
        }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
          author: {
            '@type': 'Person',
            name: 'Jaylyn Oliver',
          },
          reviewBody: 'This was my second time at this salon and I am so positive that I will become a regular here! Yvonne did my nails both times and she is so sweet, knowledgeable, and incredibly talented. Her shaping skills are second to none and i was in and out for a cat eye nail fill in about 40 mins. I typically don\'t write reviews but this salon truly is so so great & I\'m in love with my nails every time!',
          datePublished: '2025-09-25',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
          author: {
            '@type': 'Person',
            name: 'Katherine Joy',
          },
          reviewBody: 'I had a wonderful time at Victoria Park Nails salon. Sami was so kind and gentle with my nails, she gave me good advice on the shape and made sure she gave me all the options for the perfect red! She was so warm and friendly with me the whole time and we had a great conversation. The place is neat, cosy and calm - and those massage chairs are so good!',
          datePublished: '2025-09-20',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
          author: {
            '@type': 'Person',
            name: 'Tavous Jalilian',
          },
          reviewBody: 'Sami is truly the best! I\'ve been getting my nails done by her for over a year now, and I couldn\'t be happier. She\'s incredibly talented, consistent, and always makes sure my nails look perfect. Her attention to detail and creativity shine through every time. Highly recommend Sami if you\'re looking for flawless nails and great vibes.',
          datePublished: '2025-08-15',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
          author: {
            '@type': 'Person',
            name: 'Melina Sadjadi',
          },
          reviewBody: 'Samie is absolutely the best nail tech ever! She\'s incredibly talented, detail-oriented, and always nails exactly what I want. Her space is cozy and spotless, and she\'s so kind and professional. I always leave feeling amazing, and my nails get endless compliments.',
          datePublished: '2025-07-10',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
          author: {
            '@type': 'Person',
            name: 'Maria Rusu',
          },
          reviewBody: 'Sami does an amazing work, she is patient and very detailed oriented. Went in without booking in advance and she stayed over closing time to finish my manicure. Professional and passionate, I recommend Sami if you want your nails done the right way!!',
          datePublished: '2025-07-05',
        },
      ],
      currenciesAccepted: 'CAD',
      paymentAccepted: 'Cash, Credit Card, Debit, e-Transfer',
      parentOrganization: {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
      },
      brand: {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
      },
      knowsAbout: siteConfig.keywords.slice(0, 8),
      ...data,
    },
    Service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      ...data,
    },
    Article: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      ...data,
    },
    FAQPage: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      ...data,
    },
    BreadcrumbList: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      ...data,
    },
    WebSite: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      name: siteConfig.name,
      url: baseUrl,
      inLanguage: 'en-CA',
      potentialAction: {
        '@type': 'SearchAction',
        target: `https://www.google.com/search?q=site:${new URL(baseUrl).hostname}+{search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
      publisher: {
        '@id': `${baseUrl}/#organization`,
      },
      ...data,
    },
    Organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: siteConfig.name,
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
      sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(Boolean),
      ...data,
    },
    ItemList: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      ...data,
    },
    ServiceAreaBusiness: {
      '@context': 'https://schema.org',
      '@type': 'ServiceAreaBusiness',
      name: siteConfig.business.name,
      url: baseUrl,
      areaServed: {
        '@type': 'City',
        name: 'Calgary',
      },
      ...data,
    },
    SiteNavigationElement: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'SiteNavigationElement', name: 'Home', url: `${baseUrl}/` },
        { '@type': 'SiteNavigationElement', name: 'Services', url: `${baseUrl}/services` },
        { '@type': 'SiteNavigationElement', name: 'Articles', url: `${baseUrl}/articles` },
        { '@type': 'SiteNavigationElement', name: 'Gallery', url: `${baseUrl}/gallery` },
        { '@type': 'SiteNavigationElement', name: 'Areas', url: `${baseUrl}/areas` },
        { '@type': 'SiteNavigationElement', name: 'About', url: `${baseUrl}/about` },
        { '@type': 'SiteNavigationElement', name: 'Consultation', url: `${baseUrl}/consultation` },
        { '@type': 'SiteNavigationElement', name: 'Contact', url: `${baseUrl}/contact` },
      ],
      ...data,
    },
    HowTo: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      ...data,
    },
  } as const;

  const structuredData = (baseStructuredData as Record<string, unknown>)[type];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
