# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## ⚠️ CRITICAL: PROJECT ARCHITECTURE

### 🛑 THIS IS A STATIC SITE - NO BACKEND!
**All data comes from `.ts` files. There is NO database, NO API, NO server-side operations.**

```typescript
// CORRECT ARCHITECTURE FOR SSG PROJECTS
export const dynamic = 'force-static'  // ✅ KEEP THIS
export const revalidate = false        // ✅ KEEP THIS
```

## 🎯 Project Type: Static Site Generation (SSG)

This is a **100% Static Generated** website optimized for:
- **Maximum Performance** (10-30ms load times)
- **Perfect SEO** (Pre-rendered HTML)
- **Minimal Cost** ($0-5/month hosting)
- **Maximum Security** (No server = No vulnerabilities)

## 📁 FILE ORGANIZATION PATTERN

### ✅ Feature Pattern (Pages)

```
features/
  [page-name]/
    sections/
      [section-name]/
        [section-name].tsx
        [section-name].data.ts
        [section-name].types.ts     ← section-specific types (optional)
        index.ts                    ← export component + data
    [page-name]-page.tsx
    [page-name].seo.ts              ← SEO metadata
    [page-name].types.ts            ← feature-wide types (optional)
    index.ts                        ← export page + sections
```

### ✅ Global Config & Shared Data Pattern

```
lib/
  config/
    site.config.ts        ← Site-wide settings (name, URL, social links)
    nav.config.ts         ← Navigation structure
    seo.config.ts         ← Default SEO settings
  constants/
    routes.ts             ← Route paths
    breakpoints.ts        ← Responsive breakpoints
    theme.ts              ← Theme constants (if not in CSS)
  types/
    global.types.ts       ← Truly global types used everywhere
  utils/
    helpers.ts            ← Utility functions
```

### Complete Example

```
# Feature example
features/home/
  sections/
    hero/
      hero.tsx
      hero.data.ts
      hero.types.ts       # Optional: types used only in hero section
      index.ts
  home-page.tsx
  home.seo.ts
  home.types.ts           # Optional: types shared across home feature
  index.ts

# Global config/data example
lib/
  config/
    site.config.ts        # { name: "My Site", url: "https://..." }
    nav.config.ts         # Navigation menu structure
  constants/
    routes.ts             # { HOME: "/", ABOUT: "/about" }
  types/
    global.types.ts       # Types used across multiple features
```

## 🎯 KEY PRINCIPLES

1. **Feature Folders**: Each page = one feature folder
2. **Sections Directory**: All sections under `sections/` folder
3. **Self-Contained**: Each section owns its component + data + types + exports
4. **Named Exports**: Section `index.ts` exports component AND data (types imported where needed)
5. **Page Naming**: `[page-name]-page.tsx` (e.g., `home-page.tsx`)
6. **SEO at Root**: `[page-name].seo.ts` at feature root (not in data folder)
7. **Types Co-located**:
   - Section types: `[section-name].types.ts` (section-specific only)
   - Feature types: `[page-name].types.ts` (shared across feature)
   - Global types: `lib/types/global.types.ts` (used everywhere)
8. **Config/Constants Centralized**: Site-wide config and constants in `lib/config/` and `lib/constants/`
9. **Barrel Exports**: Feature `index.ts` exports page + all sections
10. **Routes Render Features Only**: `app/page.tsx` should ONLY import and render the feature page component, nothing else

## 📝 IMPORT PATTERNS

### ✅ CORRECT

```typescript
// Section types (optional)
// features/home/sections/hero/hero.types.ts
export type HeroData = {
  title: string
  subtitle: string
  cta: { primary: string; secondary: string }
}

// Section data uses types
// features/home/sections/hero/hero.data.ts
import type { HeroData } from './hero.types'

export const heroData: HeroData = {
  title: "Welcome",
  subtitle: "To our site",
  cta: { primary: "Get Started", secondary: "Learn More" }
}

// Section exports component + data (NOT types)
// features/home/sections/hero/index.ts
export { HeroSection } from './hero'
export { heroData } from './hero.data'
// Note: Types are imported directly where needed, not re-exported

// Section component uses its own data and types
// features/home/sections/hero/hero.tsx
import { heroData } from './hero.data'
import type { HeroData } from './hero.types'

export function HeroSection() {
  return <div>{heroData.title}</div>
}

// Page composes sections
// features/home/home-page.tsx
import { HeroSection } from './sections/hero'
import { FeaturesSection } from './sections/features'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  )
}

// Route ONLY renders feature (minimal, clean)
// app/page.tsx
import { HomePage } from '@/features/home'
import { homeMetadata } from '@/features/home/home.seo'

export const metadata = homeMetadata
export default HomePage  // Just render the feature, nothing else

// Global config usage
// lib/config/site.config.ts
export const siteConfig = {
  name: "My Site",
  url: "https://mysite.com",
  description: "My awesome site",
  social: {
    twitter: "@mysite",
    github: "mysite"
  }
} as const

// Using global config in components
// components/layouts/main-header.tsx
import { siteConfig } from '@/lib/config/site.config'
import { ROUTES } from '@/lib/constants/routes'

export function MainHeader() {
  return (
    <header>
      <Link href={ROUTES.HOME}>{siteConfig.name}</Link>
    </header>
  )
}
```

### ❌ WRONG

```typescript
// ❌ App route doing too much (composing sections, adding logic)
// app/page.tsx
import { HeroSection, FeaturesSection } from '@/features/home'
export default function Page() {
  return (
    <>
      <HeroSection />  // ❌ Route should NOT compose sections
      <FeaturesSection />  // ❌ This belongs in feature page component
    </>
  )
}

// ❌ Sections at root level
features/home/hero/  // Should be: features/home/sections/hero/

// ❌ SEO in data folder
features/home/data/seo.data.ts  // Should be: features/home/home.seo.ts

// ❌ Section data centralized
features/home/data/hero.data.ts  // Should be: features/home/sections/hero/hero.data.ts

// ❌ Cross-section imports
import { heroData } from '../hero/hero.data'  // Each section uses only its own data

// ❌ Cross-feature imports
import { heroData } from '@/features/about/sections/hero/hero.data'

// ❌ Inline data
const heroData = { title: "..." }  // Should be in hero.data.ts

// ❌ Types in wrong location
features/home/types/hero.types.ts  // Should be: features/home/sections/hero/hero.types.ts

// ❌ Global types for section-specific data
lib/types/hero.types.ts  // Section types belong in section folder

// ❌ Config data in feature folders
features/home/config/site.config.ts  // Site config belongs in lib/config/

// ❌ Shared constants in section data
features/home/sections/hero/routes.ts  // Routes belong in lib/constants/
```

## 📏 FILE SIZE LIMITS

| File Type | Maximum | Action if Exceeded |
|-----------|---------|-------------------|
| Components | 150 lines | Split into smaller components |
| Page Components | 200 lines | Extract sections |
| Hooks | 80 lines | Split logic |
| Data Files | 500 lines | Organize into modules |
| Type Files | 200 lines | Split into feature/section types |
| Config Files | 300 lines | Split by concern (site, nav, seo, etc.) |
| Constants Files | 200 lines | Split by category |
| UI Components | No limit | Infrastructure files exempt |
| globals.css | No limit | Main CSS file exempt |

## ❌ SSG ANTI-PATTERNS - DO NOT DO

### 1. NO Server-Side Features
```typescript
// ❌ NEVER in SSG
'use server'
export const revalidate = 3600
export const dynamic = 'force-dynamic'
async function fetchData() {}
const data = await fetch()
```

### 2. NO These Directories
```
❌ app/api/          # NO API routes
❌ app/actions/      # NO Server Actions
❌ lib/db/           # NO database
❌ lib/repositories/ # NO data layer
❌ tailwind.config.* # Using Tailwind v4 CSS config
```

### 3. NO Dynamic Features
```typescript
// ❌ WRONG for SSG
const data = await fetch('/api/...')
<Suspense fallback={...}>
cookies().get()
headers()
```

## ✅ CORRECT SSG PATTERNS

### Data Management
```typescript
// ✅ Direct imports from .ts files
import { heroData } from './hero.data'

export function HeroSection() {
  return <div>{heroData.title}</div>
}
```

### Page Structure
```typescript
// ✅ Simple, static composition
export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </>
  )
}
```

## 🔄 COMMON WORKFLOWS

### Adding a New Page
1. Create `features/[page-name]/`
2. Add `[page-name]-page.tsx`
3. Add `[page-name].seo.ts`
4. Add `index.ts`
5. Create `sections/` folder
6. Add sections: `sections/[name]/[name].tsx`, `[name].data.ts`, `index.ts`
7. Compose sections in page component
8. Create route in `app/[page-name]/page.tsx`

### Adding a New Section
1. Create `features/[page]/sections/[section-name]/`
2. Add `[section-name].tsx` (component)
3. Add `[section-name].data.ts` (data)
4. Add `[section-name].types.ts` (types - optional, only if needed)
5. Add `index.ts` (exports component + data, NOT types)
6. Import in page component

### Updating Content
- Edit `.data.ts` files in `features/[page]/sections/[section]/`
- Edit SEO in `features/[page]/[page].seo.ts`
- Hot reload in dev, rebuild for production

## 🚨 RED FLAGS - STOP IF YOU SEE

1. Writing `'use server'` anywhere
2. Creating `/api` routes
3. Adding `async` to page components
4. Using `fetch()` for data in components
5. Setting up databases or auth
6. Components over 150 lines (except UI library)
7. Data files over 500 lines
8. Using `revalidate` or ISR
9. Creating `tailwind.config.*` files

## 🎯 GOLDEN RULES

1. **If it needs a server, it doesn't belong here**
2. **All data must be available at build time**
3. **Keep components small and focused**
4. **Each section owns its own data**
5. **SEO metadata at feature root, not in data folder**
6. **All sections under sections/ directory**
7. **App routes ONLY render features** - No composition, no logic in routes
8. **Maximum 150 lines per component**
9. **Maximum 500 lines per data file**

## 💡 THE SSG MANTRA

> **"Build once, serve everywhere, load instantly"**

This is a STATIC SITE. It displays information only. All content is in `.ts` files. There is no backend, no database, no API. Keep it simple, keep it static, keep it fast.

---

**When in doubt:** If it can't be done at build time, it shouldn't be in this project.
