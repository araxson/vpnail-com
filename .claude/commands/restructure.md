# Project Restructure Command

## 🎯 OBJECTIVE
Restructure the entire project to strictly follow the CLAUDE.md architecture guidelines, using ONLY existing shadcn/ui components (47 installed in `/components/ui/`) for ALL styling.

## 🚨 CRITICAL CONSTRAINTS

### DO NOT:
- ❌ Create ANY new UI component files
- ❌ Create new custom components for styling
- ❌ Modify or touch `app/globals.css` in ANY way
- ❌ Install ANY packages (no `npm install`, no `pnpm add`, etc.)
- ❌ Add inline styles or className styling beyond shadcn variants
- ❌ Create custom styled components
- ❌ Use any CSS modules or styled-components
- ❌ Add Tailwind classes for layout/styling (use shadcn components instead)

### MUST DO:
- ✅ Use ONLY the 47 existing shadcn/ui components from `/components/ui/`
- ✅ Follow CLAUDE.md architecture 100%
- ✅ Replace ALL custom styling with shadcn components
- ✅ Keep `globals.css` completely unchanged
- ✅ Maintain all existing functionality
- ✅ Preserve all data and content

## 📋 RESTRUCTURING STEPS

### Phase 1: Analyze Current State
1. List all existing pages and their sections
2. Identify all components that need restructuring
3. Map out which shadcn components to use for each custom styled element
4. Create restructuring plan with todo list

### Phase 2: Create Feature Architecture
For each page, create proper feature structure:

```
features/
  [page-name]/
    sections/
      [section-name]/
        [section-name].tsx        ← Component using ONLY shadcn/ui components
        [section-name].data.ts    ← All data/content
        [section-name].types.ts   ← Types (if needed)
        index.ts                  ← Export component + data
    [page-name]-page.tsx          ← Page component (max 200 lines)
    [page-name].seo.ts            ← SEO metadata
    [page-name].types.ts          ← Feature-wide types (if needed)
    index.ts                      ← Export page + sections
```

### Phase 3: Convert All Styling to shadcn Components

#### Available shadcn Components to Use:
Reference all 47 components in `/components/ui/`. Use them for:

**Layout & Structure:**
- `Card` - for content containers, sections, panels
- `Separator` - for dividers
- `ScrollArea` - for scrollable content
- `Accordion` - for collapsible sections
- `Tabs` - for tabbed interfaces
- `Collapsible` - for expandable content

**Typography & Content:**
- `Typography` components (if available)
- `Badge` - for labels, tags, status indicators
- `Avatar` - for profile images
- Use semantic HTML with shadcn styling

**Navigation:**
- `NavigationMenu` - for main navigation
- `Menubar` - for menu bars
- `DropdownMenu` - for dropdowns
- `Breadcrumb` - for breadcrumb navigation
- `Pagination` - for pagination

**Forms & Inputs:**
- `Button` - for ALL buttons (with variants)
- `Input` - for text inputs
- `Textarea` - for multi-line inputs
- `Select` - for dropdowns
- `Checkbox` - for checkboxes
- `RadioGroup` - for radio buttons
- `Switch` - for toggles
- `Slider` - for range inputs
- `Label` - for form labels
- `Form` - for form containers

**Feedback & Overlays:**
- `Dialog` - for modals
- `AlertDialog` - for confirmation dialogs
- `Sheet` - for slide-out panels
- `Popover` - for popovers
- `HoverCard` - for hover cards
- `Tooltip` - for tooltips
- `Toast` - for notifications
- `Alert` - for alerts
- `Skeleton` - for loading states
- `Progress` - for progress bars

**Data Display:**
- `Table` - for tables
- `DataTable` - for data tables (if available)
- `Calendar` - for date displays
- `Command` - for command palettes
- `ContextMenu` - for context menus

**Conversion Rules:**
1. Replace `<div className="container">` → `<Card>` or appropriate shadcn component
2. Replace custom buttons → `<Button variant="...">` with proper variants
3. Replace custom cards → `<Card><CardHeader><CardTitle>...<CardContent>`
4. Replace custom forms → `<Form>` with shadcn form components
5. Replace custom modals → `<Dialog>` or `<Sheet>`
6. Replace custom dropdowns → `<DropdownMenu>` or `<Select>`
7. Replace custom tabs → `<Tabs><TabsList><TabsTrigger>...<TabsContent>`
8. Replace custom accordions → `<Accordion><AccordionItem>...`
9. Replace custom navigation → `<NavigationMenu>` with items
10. Replace ALL custom styled elements with equivalent shadcn components

### Phase 4: Restructure Data Layer

**For each section:**
1. Extract ALL data to `[section-name].data.ts`
2. Remove inline data from components
3. Import data in component: `import { sectionData } from './section.data'`
4. Define types in `[section-name].types.ts` (only if complex)

**Example:**
```typescript
// features/home/sections/hero/hero.data.ts
export const heroData = {
  title: "Welcome to Victoria Park Nails and Spa",
  subtitle: "Compassionate Healthcare",
  cta: {
    primary: { text: "Book Consultation", href: "/consultation" },
    secondary: { text: "Learn More", href: "/about" }
  }
} as const

// features/home/sections/hero/hero.tsx
import { heroData } from './hero.data'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export function HeroSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{heroData.title}</CardTitle>
        <CardDescription>{heroData.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild>
          <a href={heroData.cta.primary.href}>{heroData.cta.primary.text}</a>
        </Button>
        <Button variant="outline" asChild>
          <a href={heroData.cta.secondary.href}>{heroData.cta.secondary.text}</a>
        </Button>
      </CardContent>
    </Card>
  )
}

// features/home/sections/hero/index.ts
export { HeroSection } from './hero'
export { heroData } from './hero.data'
```

### Phase 5: Create Global Config
Move site-wide configuration to proper locations:

```
lib/
  config/
    site.config.ts    ← Site name, URL, description, social links
    nav.config.ts     ← Navigation structure
    seo.config.ts     ← Default SEO settings
  constants/
    routes.ts         ← All route paths
  types/
    global.types.ts   ← Global types
```

### Phase 6: Update App Routes
Make ALL app routes minimal - ONLY import and render feature pages:

```typescript
// app/page.tsx
import { HomePage } from '@/features/home'
import { homeMetadata } from '@/features/home/home.seo'

export const metadata = homeMetadata
export default HomePage
```

### Phase 7: Create SEO Files
For each feature, create `[page-name].seo.ts`:

```typescript
// features/home/home.seo.ts
import type { Metadata } from 'next'

export const homeMetadata: Metadata = {
  title: "Home - Victoria Park Nails and Spa",
  description: "Compassionate healthcare services...",
  // ... other metadata
}
```

### Phase 8: Validation
After restructuring, verify:

1. ✅ All pages follow feature pattern
2. ✅ All sections in `sections/` folder
3. ✅ All components use ONLY shadcn/ui components
4. ✅ No custom styling (except globals.css)
5. ✅ All data in `.data.ts` files
6. ✅ SEO at feature root
7. ✅ App routes are minimal
8. ✅ No components over 150 lines
9. ✅ No data files over 500 lines
10. ✅ All imports follow CLAUDE.md patterns
11. ✅ globals.css is unchanged
12. ✅ No new packages installed

## 🎯 COMPONENT REPLACEMENT STRATEGY

### Before (Custom Styled):
```typescript
<div className="hero-section bg-blue-500 p-8 rounded-lg shadow-none">
  <h1 className="text-4xl font-bold text-white">Welcome</h1>
  <p className="text-lg text-gray-200">Description</p>
  <button className="px-6 py-3 bg-white text-blue-500 rounded-md hover:bg-gray-100">
    Click me
  </button>
</div>
```

### After (Pure shadcn):
```typescript
<Card>
  <CardHeader>
    <CardTitle>Welcome</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <Button>Click me</Button>
  </CardContent>
</Card>
```

## 📊 EXECUTION ORDER

1. **Create todo list** with all pages and sections to restructure
2. **Start with smallest page** (e.g., About, Contact)
3. **Work through each page:**
   - Create feature structure
   - Convert styling to shadcn components
   - Extract data
   - Create SEO file
   - Update app route
   - Mark todo as complete
4. **Create global config** once patterns are clear
5. **Final validation pass**

## 🔍 QUALITY CHECKS

After each page:
- Run `npm run build` to ensure no errors
- Verify visual appearance matches original
- Check that all shadcn components are used correctly
- Ensure no custom styling leaked in
- Validate file size limits

## ⚡ SUCCESS CRITERIA

Project is successfully restructured when:
1. Every page follows CLAUDE.md feature pattern
2. 100% of styling uses shadcn components
3. Zero custom styled components
4. globals.css unchanged
5. No new packages installed
6. Build succeeds with no errors
7. All functionality preserved
8. Visual appearance maintained

---

**Start by creating a detailed todo list breaking down every page and section that needs restructuring, then work through them systematically.**
