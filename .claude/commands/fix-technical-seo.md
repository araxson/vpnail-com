# 🔍 Technical SEO Audit & Fix Command

## Mission
Perform a comprehensive technical SEO audit of the entire website and fix ALL issues according to the latest Google SEO standards (2025). Focus ONLY on existing pages - do NOT create new pages, blog posts, or location pages.

## 🎯 Critical Instructions
- ✅ FIX existing pages and components
- ✅ OPTIMIZE existing content for SEO
- ✅ IMPROVE technical implementation
- ❌ DO NOT create new pages (blogs, locations, articles, etc.)
- ❌ DO NOT add dynamic routes or API endpoints
- ❌ MAINTAIN SSG architecture (force-static)

## 📋 SEO Audit Checklist

### 1. META TAGS & OPEN GRAPH (Per Page)
**Audit & Fix:**
- [ ] **Title Tags**: Unique, descriptive, 50-60 characters, includes primary keyword
- [ ] **Meta Descriptions**: Unique, compelling, 150-160 characters, includes CTA
- [ ] **Open Graph Tags**: og:title, og:description, og:image (1200x630), og:url, og:type
- [ ] **Twitter Cards**: twitter:card, twitter:title, twitter:description, twitter:image
- [ ] **Canonical URLs**: Self-referencing canonical tags on all pages
- [ ] **Meta Viewport**: Proper mobile viewport configuration
- [ ] **Meta Robots**: Appropriate indexing directives (index,follow vs noindex)

**Implementation Pattern:**
```typescript
// app/[page]/page.tsx or layout.tsx
export const metadata: Metadata = {
  title: 'Unique Page Title | Brand Name',
  description: 'Compelling 150-160 char description with keywords and value prop',
  keywords: ['primary keyword', 'secondary keyword', 'long-tail keyword'],
  authors: [{ name: 'Company Name' }],
  openGraph: {
    title: 'Unique Page Title',
    description: 'Compelling description',
    url: 'https://domain.com/page-url',
    siteName: 'Site Name',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Descriptive alt text',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unique Page Title',
    description: 'Compelling description',
    images: ['/images/twitter-card.jpg'],
  },
  alternates: {
    canonical: 'https://domain.com/page-url',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

### 2. STRUCTURED DATA (JSON-LD Schema)
**Audit & Fix:**
- [ ] **Organization Schema**: Company info, logo, social profiles
- [ ] **LocalBusiness Schema**: If applicable (address, phone, hours)
- [ ] **Service Schema**: For each service offered
- [ ] **BreadcrumbList Schema**: Navigation breadcrumbs
- [ ] **WebSite Schema**: Site search potential
- [ ] **FAQPage Schema**: If FAQ sections exist
- [ ] **Review/Rating Schema**: If testimonials exist

**Implementation Pattern:**
```typescript
// Create: lib/seo/structured-data.ts
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Company Name',
    url: 'https://domain.com',
    logo: 'https://domain.com/logo.png',
    description: 'Company description',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Street',
      addressLocality: 'City',
      addressRegion: 'State',
      postalCode: '12345',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-XXX-XXX-XXXX',
      contactType: 'customer service',
    },
    sameAs: [
      'https://facebook.com/...',
      'https://twitter.com/...',
      'https://linkedin.com/...',
    ],
  }
}

// Add to layout.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(generateOrganizationSchema()),
  }}
/>
```

### 3. HTML SEMANTIC STRUCTURE
**Audit & Fix:**
- [ ] **Heading Hierarchy**: Single H1 per page, proper H2-H6 nesting (no skipping levels)
- [ ] **Semantic HTML5**: Use `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- [ ] **ARIA Labels**: Proper ARIA landmarks and labels for accessibility
- [ ] **Alt Text**: All images have descriptive, keyword-rich alt text
- [ ] **Internal Links**: Descriptive anchor text (no "click here")
- [ ] **Skip to Content**: Skip navigation link for accessibility

**Fix Pattern:**
```tsx
// ❌ BAD
<div className="header">
  <h2>Main Title</h2>
  <img src="/image.jpg" />
</div>

// ✅ GOOD
<header role="banner">
  <h1>Main Title - Primary Keyword</h1>
  <img
    src="/image.jpg"
    alt="Descriptive keyword-rich alt text"
    width={800}
    height={600}
  />
</header>
```

### 4. IMAGE OPTIMIZATION
**Audit & Fix:**
- [ ] **Format**: Use WebP with fallbacks, AVIF when possible
- [ ] **Sizing**: Proper width/height attributes (prevent CLS)
- [ ] **Lazy Loading**: Use `loading="lazy"` for below-fold images
- [ ] **Priority Loading**: Use `priority` for LCP images (hero images)
- [ ] **Alt Text**: Descriptive, keyword-optimized alt text on ALL images
- [ ] **File Names**: Descriptive file names (not IMG_1234.jpg)
- [ ] **Compression**: Optimize file sizes (use next/image)
- [ ] **Responsive Images**: Proper srcset for different screen sizes

**Implementation Pattern:**
```tsx
// For hero/LCP images
<Image
  src="/images/hero-home.jpg"
  alt="Professional website development services in [City]"
  width={1920}
  height={1080}
  priority
  quality={90}
  placeholder="blur"
/>

// For below-fold images
<Image
  src="/images/service-1.jpg"
  alt="Custom web design showcasing modern UI/UX"
  width={800}
  height={600}
  loading="lazy"
  quality={85}
/>
```

### 5. MOBILE OPTIMIZATION
**Audit & Fix:**
- [ ] **Viewport**: Proper viewport meta tag
- [ ] **Touch Targets**: Minimum 48x48px touch targets
- [ ] **Font Size**: Minimum 16px base font size
- [ ] **Tap Delay**: Remove 300ms tap delay
- [ ] **Responsive Images**: Serve appropriate image sizes
- [ ] **Mobile Navigation**: Touch-friendly navigation
- [ ] **Mobile Speed**: Fast mobile page load (<3s)

### 6. URL STRUCTURE & NAVIGATION
**Audit & Fix:**
- [ ] **URL Structure**: Clean, descriptive, keyword-rich URLs (no IDs or parameters)
- [ ] **Breadcrumbs**: Implement breadcrumb navigation with Schema
- [ ] **Internal Linking**: Strategic internal links with descriptive anchor text
- [ ] **XML Sitemap**: Generate and submit sitemap.xml
- [ ] **Robots.txt**: Proper robots.txt configuration
- [ ] **404 Page**: Custom 404 with helpful navigation
- [ ] **URL Consistency**: Trailing slashes consistent

**Pattern:**
```
✅ GOOD URLs:
- /
- /about
- /services
- /services/web-development
- /contact

❌ BAD URLs:
- /page?id=123
- /services/web-development/
- /services/WebDevelopment
```

### 7. CONTENT OPTIMIZATION
**Audit & Fix:**
- [ ] **Unique Content**: Each page has unique, valuable content (300+ words)
- [ ] **Keyword Optimization**: Target keywords in title, H1, first paragraph, naturally throughout
- [ ] **Content Structure**: Use headings, lists, short paragraphs
- [ ] **Internal Links**: Link to related pages with descriptive anchor text
- [ ] **Outbound Links**: Quality external links where appropriate
- [ ] **Content Freshness**: Add "last updated" dates if applicable
- [ ] **Reading Level**: Clear, accessible language

### 8. TECHNICAL FUNDAMENTALS
**Audit & Fix:**
- [ ] **SSL/HTTPS**: Ensure all resources use HTTPS
- [ ] **Security Headers**: Add Content-Security-Policy, X-Frame-Options, etc.
- [ ] **Compression**: Enable Gzip/Brotli compression
- [ ] **Caching**: Proper cache headers for static assets
- [ ] **Minification**: Minify CSS, JS (Next.js handles this)
- [ ] **Console Errors**: Fix all console errors and warnings
- [ ] **Valid HTML**: No HTML validation errors

## 🚀 Implementation Workflow

### Step 1: Initial Audit
1. Read all page files in `app/` directory
2. Check existing metadata implementations
3. Identify missing or incomplete SEO elements
4. Document all issues found

### Step 2: Create SEO Infrastructure
```bash
lib/seo/
├── metadata.ts          # Metadata generation utilities
├── structured-data.ts   # JSON-LD schema generators
├── constants.ts         # SEO constants (site name, base URL, etc.)
└── types.ts            # TypeScript types for SEO data
```

### Step 3: Fix Each Page
For each page in the app:
1. Update metadata export with complete SEO data
2. Add appropriate JSON-LD structured data
3. Verify heading hierarchy
4. Optimize images
5. Check internal linking
6. Ensure mobile responsiveness

### Step 4: Global Improvements
1. Update root layout.tsx with global metadata
2. Add structured data for Organization
3. Verify/update sitemap.xml
4. Verify/update robots.txt
5. Add security headers (next.config.js)


## 📊 Success Metrics

After fixes, the site should achieve:
- ✅ **Lighthouse SEO Score**: 100/100
- ✅ **Mobile-Friendly**: Pass Google Mobile-Friendly Test
- ✅ **Structured Data**: All schemas valid and error-free

## 🔧 Key Files to Review/Update

```
Priority Files:
├── app/layout.tsx                  # Global metadata & structured data
├── app/page.tsx                    # Homepage SEO
├── app/about/page.tsx             # About page SEO
├── app/services/page.tsx          # Services page SEO
├── app/contact/page.tsx           # Contact page SEO
├── lib/seo/                       # SEO utilities (CREATE IF MISSING)
├── public/robots.txt              # Crawling directives
├── public/sitemap.xml             # XML sitemap
└── next.config.js                 # Headers, redirects, optimization
```

## ⚠️ Important Constraints

1. **DO NOT** create new pages, routes, blog posts, location pages, or article pages
2. **DO NOT** add dynamic rendering (keep `export const dynamic = 'force-static'`)
3. **DO NOT** add server-side features or API routes
4. **DO NOT** run testing commands or performance tests
5. **DO** maintain SSG architecture
6. **DO** keep components under 150 lines
7. **DO** use existing UI components
8. **DO** follow existing project structure
9. **DO** only work with existing pages

## 📝 Deliverables

At completion, provide:
1. ✅ Summary of all SEO issues found
2. ✅ List of all changes made
3. ✅ Recommendations for ongoing SEO maintenance
4. ✅ Note any issues that require client action (e.g., creating OG images, Search Console verification)

---

## 🎯 Start Command

To execute this audit and fix:
```
Review all pages in the app/ directory, identify technical SEO issues according to this checklist, and systematically fix them while maintaining SSG architecture and existing page structure. Do not create new pages.
```