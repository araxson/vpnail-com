# shadcn/ui Usage Audit Report

**Generated**: 2025-10-17
**Auditor**: Claude Code
**Scope**: Full codebase audit of shadcn/ui usage

## Executive Summary

### Metrics
- **Total Files Analyzed**: 259 files
- **Files with shadcn Usage**: 72 files
- **Components Discovered**: 90 unique exports across the installed library set
- **Total Issues Found**: 5 findings
  - P0 (Critical): 1 issue
  - P1 (High): 3 issues
  - P2 (Medium): 1 issue
  - P3 (Low): 0 issues

### Issue Breakdown
- **Category A** (Incomplete Composition): 3 issues across 3 files
- **Category B** (Replacement Opportunities): 0 issues identified
- **Category C** (Pattern Violations): 1 issue across 1 file
- **Category D** (Accessibility Issues): 1 issue across 1 file

### Overall Compliance Score
- **Average Compliance**: 94.4% (target: 95%+)
- **Fully Compliant Files**: 68 of 72 (94.4%)
- **Files Needing Work**: 4 (5.6%)

### Risk Assessment
**Level**: High
- Critical accessibility gaps: Yes — command palette dialog lacks an accessible title region.
- Major UX inconsistencies: Yes — service cards and gallery modals diverge from canonical layouts.
- Maintainability concerns: Yes — pagination reimplements primitives, increasing future drift.

### Effort Estimate
- **P0 fixes**: 0.5 hours (immediate)
- **P1 fixes**: 2 hours (next sprint)
- **P2 fixes**: 0.5 hours (future sprint)
- **Total**: 3 hours

## Critical Findings (P0) - Fix Immediately

### [Category D] Issue #1: Command Palette Dialog Lacks In-Content Header
**Priority**: P0  
**Category**: D (Accessibility)  
**Impact**: Screen readers cannot associate a label with the command dialog because the header renders outside the modal content tree; keyboard users also rely on this structure for orientation.  
**Affected Files**: 1 file  
**Estimated Fix Time**: 30 minutes

#### Location 1: Command Dialog Wrapper
**File**: `components/ui/command.tsx#L46`  
**Canonical Reference**: `docs/shadcn-components/dialog.md`

**Current Code**:
```tsx
<Dialog {...props}>
  <DialogHeader className="sr-only">
    <DialogTitle>{title}</DialogTitle>
    <DialogDescription>{description}</DialogDescription>
  </DialogHeader>
  <DialogContent
    className={cn("overflow-hidden p-0", className)}
    showCloseButton={showCloseButton}
  >
    <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
      {children}
    </Command>
  </DialogContent>
</Dialog>
```

**Issue**: `DialogHeader` (and the title/description it contains) renders outside `DialogContent`, so Radix does not wire the accessible name to the active dialog surface. The visually hidden title therefore never surfaces to assistive technology.

**Fix** (Complete working code):
```tsx
<Dialog {...props}>
  <DialogContent
    className={cn("overflow-hidden p-0", className)}
    showCloseButton={showCloseButton}
  >
    <DialogHeader className="sr-only">
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </DialogHeader>
    <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
      {children}
    </Command>
  </DialogContent>
</Dialog>
```

**Comparison with Canonical**: The official dialog pattern keeps `DialogHeader`, `DialogTitle`, and `DialogDescription` inside `DialogContent` so Radix wires the `aria-labelledby`/`aria-describedby` relationships.

**Steps to Fix**:
1. Move `DialogHeader` inside `DialogContent` and keep it visually hidden with `sr-only`.
2. Include both `DialogTitle` and `DialogDescription` so the modal exposes an accessible name and description.
3. Retain the close button and command markup as children of `DialogContent`.

**Testing**:
- Open the command palette (`⌘K` / `Ctrl+K`) and verify the header text is read aloud by VoiceOver/NVDA.
- Confirm focus begins inside the dialog and the close button remains accessible.

---

## High Priority (P1) - Next Sprint

### [Category A] Issue #2: Service Cards Bypass CardContent/CardFooter
**Priority**: P1  
**Category**: A (Incomplete Composition)  
**Impact**: Styling and spacing drift from the canonical card system, making it harder to maintain global design updates and reducing consistency with other cards.  
**Affected Files**: 1 file  
**Estimated Fix Time**: 60 minutes

#### Location 1: Services Grid Cards
**File**: `features/services/sections/services-grid/services-grid.tsx#L62`  
**Compliance Score**: 86% (1 of 7 card sub-components missing)  
**Canonical Reference**: `docs/shadcn-components/card.md`

**Current Code**:
```tsx
<Card
  key={service.id}
  className="border hover:border-primary/50 hover:shadow-none transition-all duration-200 overflow-hidden p-4"
>
  <div className="flex items-start justify-between gap-3 mb-2">
    <div className="flex-1 min-w-0">
      <H4 className="text-base leading-tight mb-1 font-semibold">
        {service.title}
      </H4>
      {service.description && (
        <P className="text-xs text-muted-foreground leading-snug">
          {service.description}
        </P>
      )}
    </div>
    <div className="flex-shrink-0">
      <div className="flex flex-col items-end bg-primary/10 px-2.5 py-1.5 rounded-md">
        <span className="text-base font-bold text-primary whitespace-nowrap leading-none">
          {service.price}
        </span>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-1">
          <Clock className="h-3 w-3" />
          <span className="whitespace-nowrap">{service.duration}</span>
        </div>
      </div>
    </div>
  </div>
  <Button asChild variant="default" size="sm">
    <Link
      href={service.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center gap-1.5"
    >
      <span className="text-xs font-medium">Book This Service</span>
      <ArrowRight className="h-3 w-3" />
    </Link>
  </Button>
</Card>
```

**Issues Identified**:
- `Card` root handles all padding; canonical layout expects interior spacing via `CardHeader`/`CardContent`/`CardFooter`.
- Price badge and CTA live outside structured sections, so responsive spacing and typography tokens are off-spec.

**Fix**:
```tsx
<Card key={service.id} className="border hover:border-primary/50 transition-all duration-200 overflow-hidden">
  <CardHeader className="flex items-start justify-between gap-3 pb-2">
    <div className="flex-1 min-w-0">
      <CardTitle className="text-base leading-tight">{service.title}</CardTitle>
      {service.description && (
        <CardDescription className="text-xs text-muted-foreground leading-snug">
          {service.description}
        </CardDescription>
      )}
    </div>
    <div className="flex flex-col items-end bg-primary/10 px-2.5 py-1.5 rounded-md">
      <span className="text-base font-bold text-primary whitespace-nowrap">
        {service.price}
      </span>
      <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-1">
        <Clock className="h-3 w-3" />
        <span className="whitespace-nowrap">{service.duration}</span>
      </div>
    </div>
  </CardHeader>
  <CardContent className="pt-0">
    <Button asChild size="sm" className="w-full">
      <Link
        href={service.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5"
      >
        <span className="text-xs font-medium">Book This Service</span>
        <ArrowRight className="h-3 w-3" />
      </Link>
    </Button>
  </CardContent>
</Card>
```

**Benefits**:
- Aligns spacing with card tokens so future theme changes propagate automatically.
- Places CTA within `CardContent`, improving keyboard focus order.

**Steps to Fix**:
1. Import `CardHeader`, `CardContent`, `CardTitle`, and `CardDescription`.
2. Move textual content into `CardHeader`; keep CTA in `CardContent` or `CardFooter` if additional actions appear.
3. Remove manual `p-4` from the card root to avoid double padding.

**Testing**:
- Check tab order through price badge and CTA.
- Confirm card spacing matches other sections after the change.

---

### [Category A] Issue #3: Gallery Lightboxes Missing Structured Headers
**Priority**: P1  
**Category**: A (Incomplete Composition)  
**Impact**: Gallery modals lack `DialogHeader`/`DialogDescription`, so assistive tech has no summary of the open image; spacing also deviates from canonical dialog styling.  
**Affected Files**: 2 files  
**Estimated Fix Time**: 60 minutes total

#### Location 1: Home Gallery Grid Modal
**File**: `features/home/sections/gallery/gallery-grid.tsx#L29-L82`

**Current Code**:
```tsx
<Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
  <DialogContent className="max-w-4xl overflow-hidden p-0">
    <DialogTitle className="sr-only">Gallery image preview</DialogTitle>
    {selected && (
      <figure className="relative h-[65vh] w-full bg-background" itemScope itemType="https://schema.org/ImageObject">
        <Image src={selected.src} alt={selected.alt} title={selected.title} fill itemProp="contentUrl" className="object-contain" />
        <figcaption className="sr-only" itemProp="caption">
          {selected.caption}
        </figcaption>
      </figure>
    )}
  </DialogContent>
</Dialog>
```

#### Location 2: Gallery Page Grid Modal
**File**: `features/gallery/sections/gallery/gallery-grid.tsx#L134-L160`

**Current Code**:
```tsx
<Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
  <DialogContent className="max-w-5xl overflow-hidden p-0">
    <DialogTitle className="sr-only">Gallery image preview</DialogTitle>
    {selectedImage && (
      <figure className="relative h-[75vh] w-full bg-background" itemScope itemType="https://schema.org/ImageObject">
        <Image src={selectedImage.src} alt={selectedImage.alt} title={selectedImage.title} fill itemProp="contentUrl" className="object-contain" />
        <figcaption className="sr-only" itemProp="caption">
          {selectedImage.caption}
        </figcaption>
      </figure>
    )}
  </DialogContent>
</Dialog>
```

**Issues Identified**:
- `DialogHeader` and `DialogDescription` omitted, so there is no semantically grouped heading.
- `DialogTitle` sits directly inside `DialogContent`, preventing canonical spacing.
- No `DialogDescription` explaining navigation (`Esc` to close, swipe gestures, etc.).

**Fix**:
```tsx
<DialogContent className="max-w-4xl overflow-hidden p-0">
  <DialogHeader className="sr-only">
    <DialogTitle>Gallery image preview</DialogTitle>
    <DialogDescription>Use escape to close the lightbox.</DialogDescription>
  </DialogHeader>
  {selected && (
    <figure className="relative h-[65vh] w-full bg-background" itemScope itemType="https://schema.org/ImageObject">
      <Image src={selected.src} alt={selected.alt} title={selected.title} fill itemProp="contentUrl" className="object-contain" />
      <figcaption className="sr-only" itemProp="caption">
        {selected.caption}
      </figcaption>
    </figure>
  )}
</DialogContent>
```

**Benefits**:
- Restores accessible name/description for the dialog.
- Keeps layout tokens consistent with other dialog usage.

**Steps to Fix**:
1. Import `DialogHeader` and `DialogDescription`.
2. Wrap the title/description inside the header within `DialogContent`.
3. Provide a short descriptive sentence for `DialogDescription` (e.g., navigation hints).

**Testing**:
- Open each lightbox and confirm VoiceOver/NVDA announces the title and description.
- Validate that focus trap still functions and escape closes the modal.

---

## Medium Priority (P2) - Plan for Future Sprint

### [Category C] Issue #4: Pagination Renders Page Links as Buttons
**Priority**: P2  
**Category**: C (Pattern Violation)  
**Impact**: Re-implements pagination semantics, losing native anchor behaviour and undermining assistive navigation patterns.  
**Affected Files**: 1 file  
**Estimated Fix Time**: 30 minutes

#### Location 1: Gallery Pagination Controls
**File**: `features/gallery/sections/gallery/gallery-grid.tsx#L95-L131`

**Current Code**:
```tsx
<PaginationContent className="flex flex-wrap items-center justify-center gap-3">
  <PaginationItem>
    <PaginationPrevious
      href={previousPageHref}
      onClick={handlePrevious}
      aria-disabled={disablePrevious}
      className={cn(disablePrevious && 'pointer-events-none opacity-50')}
    />
  </PaginationItem>
  <PaginationItem>
    <ButtonGroup>
      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          type="button"
          size="lg"
          variant={pageNumber === activePage ? 'default' : 'ghost'}
          onClick={() => handlePageChange(pageNumber)}
          aria-current={pageNumber === activePage ? 'page' : undefined}
        >
          {pageNumber}
        </Button>
      ))}
    </ButtonGroup>
  </PaginationItem>
  <PaginationItem>
    <PaginationNext
      href={nextPageHref}
      onClick={handleNext}
      aria-disabled={disableNext}
      className={cn(disableNext && 'pointer-events-none opacity-50')}
    />
  </PaginationItem>
</PaginationContent>
```

**Issues Identified**:
- Page numbers rendered as `Button` components inside `PaginationContent`, bypassing `PaginationLink`.
- Manual event handlers intercept anchor clicks, increasing maintenance load.

**Fix**:
```tsx
<PaginationItem>
  <PaginationLink
    href={getPageHref(pageNumber)}
    isActive={pageNumber === activePage}
    onClick={(event) => {
      event.preventDefault()
      handlePageChange(pageNumber)
    }}
  >
    {pageNumber}
  </PaginationLink>
</PaginationItem>
```

**Benefits**:
- Restores semantic anchors for screen readers and browser history.
- Reduces custom button logic while keeping controlled pagination.

**Steps to Fix**:
1. Replace the `ButtonGroup` block with mapped `PaginationLink` components.
2. Attach `onClick` handlers to prevent navigation while maintaining SPA behaviour.
3. Retain `aria-current` by using the `isActive` prop.

**Testing**:
- Tab through pagination to ensure focus outlines land on links.
- Confirm clicking or keyboard activating a page updates state without navigating away.

---

## Replacement Opportunities (Category B)

### [Native Button] → [shadcn Button]
**Priority**: P3  
**Affected Files**: 2 files  
**Estimated Fix Time**: 45 minutes total  
**Canonical Reference**: `docs/shadcn-components/button.md`

#### Pattern Description
Gallery thumbnail tiles use native `<button>` elements with extensive utility classes to emulate shadcn button styling.

#### Files Requiring Replacement:
1. `features/home/sections/gallery/gallery-grid.tsx:29` — Thumbnail trigger buttons  
   - **Current**: Native `<button>` with custom focus/hover styling  
   - **Replacement**: `Button` with `variant="ghost"` / `size="icon"` and `asChild` wrapping a span to preserve structure  
   - **Reference**: Button icon/ghost variant examples  
   - **Time**: 15 minutes
2. `features/gallery/sections/gallery/gallery-grid.tsx:67` — Paginated gallery thumbnails  
   - **Current**: Native `<button>` per image  
   - **Replacement**: `Button` with `asChild` to wrap the figure contents, keeping focus handling consistent  
   - **Reference**: docs/shadcn-components/button.md (icon buttons)  
   - **Time**: 30 minutes

#### Bulk Fix Strategy
Create a helper thumbnail trigger component that wraps `Button` with the shared focus/hover states and reuse across both gallery grids.

#### Available Options
Use `variant="ghost"`, `size="icon"`, and `rounded-xl` utilities supplied by the shadcn `Button` to match the current design.

#### Migration Checklist
1. Replace native button tags with `Button` using `asChild` to keep semantic `<span>`/`Image` markup.
2. Move shared classes into the `className` prop while preserving `focus-visible` states from shadcn.
3. Validate keyboard focus and hover animations remain unchanged.

---

## Component Usage Analysis

### Accordion
- **Total Usage**: 12 instances across 3 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/accordion.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Pair each `AccordionTrigger` with a matching `AccordionContent` inside `AccordionItem`.
  - Set the `type` prop (`single` or `multiple`) to control expansion behaviour.
  - Use `collapsible` when single-mode accordions should allow all panels to close.
- **Top Files by Usage**:
  1. components/layouts/header.tsx - 4 exports
  2. features/contact/sections/faqs/faqs.tsx - 4 exports
  3. features/services/sections/faqs/faqs.tsx - 4 exports
- **Common Style Override Issues**:
  - None observed.

---

### AlertDialog
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/alert-dialog.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap actionable content inside `AlertDialogContent` with `AlertDialogHeader` and `AlertDialogFooter`.
  - Include both `AlertDialogTitle` and `AlertDialogDescription` for accessible context.
  - Use `AlertDialogAction` and `AlertDialogCancel` to wire confirm/cancel flows.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Alert
- **Total Usage**: 4 instances across 2 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/alert.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Render icons and copy within the provided `Alert` container for correct spacing.
  - Use `AlertTitle` and `AlertDescription` to structure text and assistive technology output.
  - Choose variants (`default` or `destructive`) instead of ad-hoc background utilities.
- **Top Files by Usage**:
  1. features/consultation/sections/hero/hero.tsx - 2 exports
  2. features/contact/sections/hero/hero.tsx - 2 exports
- **Common Style Override Issues**:
  - None observed.

---

### AspectRatio
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/aspect-ratio.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap media inside `AspectRatio` and pass the desired numeric ratio.
  - Let the component control sizing; avoid hard-coded width/height on children.
  - Combine with `Image` or videos to maintain cropping without layout shift.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Avatar
- **Total Usage**: 9 instances across 4 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/avatar.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Use `AvatarImage` for the photo and `AvatarFallback` for initials or placeholder.
  - Keep fallback text to two characters to avoid clipping.
  - Apply extra shapes (rounded/full) via the `className` prop on `Avatar`.
- **Top Files by Usage**:
  1. features/home/sections/team/team.tsx - 3 exports
  2. features/about/sections/testimonials/testimonials.tsx - 2 exports
  3. features/home/sections/testimonials/testimonials.tsx - 2 exports
- **Common Style Override Issues**:
  - None observed.

---

### Badge
- **Total Usage**: 15 instances across 15 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/badge.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Prefer the built-in variants (`default`, `secondary`, `outline`, `destructive`).
  - Use `asChild` when rendering links or custom triggers as badges.
  - Avoid duplicating size utilities; badges already include rounded corner and padding.
- **Top Files by Usage**:
  1. features/about/sections/credentials/credentials.tsx - 1 exports
  2. features/about/sections/hero/hero.tsx - 1 exports
  3. features/about/sections/story/story.tsx - 1 exports
- **Common Style Override Issues**:
  - None observed.

---

### Breadcrumb
- **Total Usage**: 7 instances across 2 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/breadcrumb.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap items inside `BreadcrumbList` composed of `BreadcrumbItem` nodes.
  - Use `BreadcrumbLink` with `asChild` to integrate Next.js `Link`.
  - Reserve `BreadcrumbEllipsis` and dropdown composition for overflow states.
- **Top Files by Usage**:
  1. components/layouts/breadcrumbs.tsx - 6 exports
  2. app/layout.tsx - 1 exports
- **Common Style Override Issues**:
  - None observed.

---

### ButtonGroup
- **Total Usage**: 1 instances across 1 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/button-group.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap related buttons inside `ButtonGroup` to share radius and borders.
  - Use `ButtonGroupSeparator` when mixing filled and outline buttons.
  - Add `aria-label` when the group lacks visible context.
- **Top Files by Usage**:
  1. features/gallery/sections/gallery/gallery-grid.tsx - 1 exports
- **Common Style Override Issues**:
  - None observed.

---

### Button
- **Total Usage**: 32 instances across 32 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/button.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Choose from the published variants instead of restyling base button classes.
  - Use `size="icon"` modifiers for icon-only actions.
  - Swap the underlying element with `asChild` when wrapping `Link` or custom triggers.
- **Top Files by Usage**:
  1. app/error.tsx - 1 exports
  2. app/global-error.tsx - 1 exports
  3. app/not-found.tsx - 1 exports
- **Common Style Override Issues**:
  - None observed.

---

### Calendar
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/calendar.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Ensure the project also installs `react-day-picker` and `Button` as peer dependencies.
  - Keep dropdown navigation by providing `captionLayout` and next/previous icons.
  - Expose `mode` and `onSelect` to integrate with form state or date pickers.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Card
- **Total Usage**: 134 instances across 32 files
- **Compliance**: 96.9% (issues in 1 file)
- **Canonical Reference**: docs/shadcn-components/card.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 1 issues (card sections bypass CardContent/CardFooter)
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Structure cards with `CardHeader`, `CardContent`, and `CardFooter` for spacing.
  - Use `CardTitle`/`CardDescription` within the header instead of heading tags.
  - Keep adornments such as price badges inside the header to maintain layout.
- **Top Files by Usage**:
  1. features/home/sections/combinations/combinations.tsx - 6 exports
  2. features/services/sections/combinations/combinations.tsx - 6 exports
  3. features/about/sections/credentials/credentials.tsx - 5 exports
- **Common Style Override Issues**:
  - None observed.

---

### Carousel
- **Total Usage**: 24 instances across 6 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/carousel.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Render slides inside `CarouselContent` -> `CarouselItem` containers.
  - Wire navigation with `CarouselPrevious`/`CarouselNext` or custom controls from context.
  - Use Embla plugins via the `plugins` prop for autoplay or parallax behaviour.
- **Top Files by Usage**:
  1. features/about/sections/testimonials/testimonials.tsx - 4 exports
  2. features/home/sections/combinations/combinations.tsx - 4 exports
  3. features/home/sections/team/team.tsx - 4 exports
- **Common Style Override Issues**:
  - None observed.

---

### Chart
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/chart.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap Recharts primitives with `ChartContainer` to inherit color tokens.
  - Surface dataset metadata through `ChartConfig` for legends and tooltips.
  - Compose `ChartTooltip`/`ChartLegend` only where needed to avoid duplicate DOM.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Checkbox
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/checkbox.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Pair every `Checkbox` with a linked `Label` for accessible name.
  - Use `defaultChecked` or controlled `checked` state rather than `value`.
  - Leverage `data-state` selectors instead of manual class toggles.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Collapsible
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/collapsible.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap expandable content in `Collapsible` with `CollapsibleTrigger` and `CollapsibleContent`.
  - Control state via the `open` prop for complex interactions.
  - Forward `asChild` to reuse existing button or icon triggers.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Combobox
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/combobox.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Compose `Popover` + `Command` primitives per canonical example.
  - Provide keyboard focus management by wiring `onOpenChange`.
  - Include `CommandEmpty` copy for empty states.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Command
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/command.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Keep `Command` primitives grouped inside a dialog or popover container.
  - Use `CommandInput` wrapper for search fields with embedded icon.
  - Group actions with `CommandGroup` and separators for sections.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### ContextMenu
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/context-menu.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Attach menus using `ContextMenuTrigger` wrapping the target node.
  - Compose nested actions via `ContextMenuSub` and `ContextMenuSubTrigger`.
  - Set `inset` and `shortcut` props for consistent spacing across items.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### DataTable
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/data-table.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Follow the TanStack table recipe to build tables with sorting/filtering.
  - Split column definitions into a `columns.tsx` file for reuse.
  - Use provided `DataTableToolbar`/`DataTablePagination` helpers where applicable.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### DatePicker
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/date-picker.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Combine `Popover` + `Calendar` to present inline picker UIs.
  - Expose `onSelect` to lift state to parent forms.
  - Apply `captionLayout="dropdown"` for month/year selectors when required.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Dialog
- **Total Usage**: 11 instances across 3 files
- **Compliance**: 0% (issues in 3 files)
- **Canonical Reference**: docs/shadcn-components/dialog.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 1 issue (Command dialog header outside content)
  - P1: 2 issues (missing headers/description in gallery modals)
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Render `DialogHeader` and `DialogFooter` inside `DialogContent` for spacing.
  - Include `DialogTitle` and `DialogDescription` to expose accessible labels.
  - Use `DialogTrigger` when the dialog is user-initiated.
- **Top Files by Usage**:
  1. components/ui/command.tsx - 5 exports
  2. features/gallery/sections/gallery/gallery-grid.tsx - 3 exports
  3. features/home/sections/gallery/gallery-grid.tsx - 3 exports
- **Common Style Override Issues**:
  - None observed.

---

### Drawer
- **Total Usage**: 4 instances across 1 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/drawer.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Swap in `Drawer` for responsive dialogs on mobile viewports.
  - Structure with `DrawerHeader`, `DrawerContent`, and `DrawerFooter`.
  - Supply `onOpenChange` handlers to sync state between devices.
- **Top Files by Usage**:
  1. components/layouts/header.tsx - 4 exports
- **Common Style Override Issues**:
  - None observed.

---

### DropdownMenu
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/dropdown-menu.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Anchor menus with `DropdownMenuTrigger asChild` to wrap buttons.
  - Use `DropdownMenuGroup`, `Separator`, and `Shortcut` for structure.
  - Keep nested actions inside `DropdownMenuSub` with corresponding content.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Empty
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/empty.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Compose placeholders with `EmptyHeader`, `EmptyContent`, and optional media.
  - Use variants (`default`, `outline`, `muted`) to match surface styling.
  - Slot CTAs inside `EmptyContent` instead of custom stacks.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Field
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/field.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap related controls with `Field` and `FieldLabel` for consistent spacing.
  - Group subsections using `FieldSet` and `FieldLegend`.
  - Surface validation with `FieldError` tied to control IDs.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Form
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/form.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Combine `Form`, `FormField`, `FormItem`, and `FormMessage` around inputs.
  - Drive validation with React Hook Form resolver patterns from docs.
  - Keep markup minimal and delegate styling to provided wrappers.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### HoverCard
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/hover-card.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap triggers inside `HoverCardTrigger` and content inside `HoverCardContent`.
  - Position cards via `align`/`side` props instead of manual transforms.
  - Load heavy content lazily to avoid layout jank.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### InputGroup
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/input-group.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Compose custom fields with `InputGroup`, `InputGroupAddon`, and `InputGroupButton`.
  - Use alignment props (`inline-start`, `inline-end`, `block-end`) instead of manual flex hacks.
  - Attach icons and helper text via addons to preserve focus rings.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### InputOtp
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/input-otp.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Lay out slots using `InputOTPGroup` and `InputOTPSlot` indices.
  - Set `maxLength` to control slot count.
  - Use `pattern` helper for alphanumeric codes when necessary.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Input
- **Total Usage**: 2 instances across 2 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/input.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Rely on built-in height, border, and focus styles instead of overriding.
  - Use `type` props to adjust keyboard behaviour on mobile.
  - Combine with `Label` elements for accessible names.
- **Top Files by Usage**:
  1. components/ui/sidebar.tsx - 1 exports
  2. features/contact/sections/form/form.tsx - 1 exports
- **Common Style Override Issues**:
  - None observed.

---

### Item
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/item.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Combine `Item`, `ItemContent`, `ItemMedia`, and `ItemActions` for list rows.
  - Use `variant="outline"` or `muted` for secondary states.
  - Apply `asChild` to make full rows clickable links.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Kbd
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/kbd.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Use `Kbd` for single keys and `KbdGroup` for combinations.
  - Prefer uppercase letters to reflect physical keycaps.
  - Avoid nesting inside `<code>` to prevent redundant semantics.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Label
- **Total Usage**: 2 instances across 2 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/label.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Link labels to controls via the `htmlFor` attribute.
  - Use inline labels for checkboxes/switches via `asChild` or wrapping.
  - Avoid placeholder-only inputs; ensure labels remain visible.
- **Top Files by Usage**:
  1. components/ui/form.tsx - 1 exports
  2. features/contact/sections/form/form.tsx - 1 exports
- **Common Style Override Issues**:
  - None observed.

---

### Menubar
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/menubar.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Compose `Menubar` with `MenubarMenu`, triggers, and `MenubarContent` drop-downs.
  - Use radio/checkbox items for preference toggles.
  - Support keyboard navigation out of the box—avoid overriding pointer events.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### NavigationMenu
- **Total Usage**: 6 instances across 1 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/navigation-menu.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Group navigation items inside `NavigationMenuList`.
  - Wrap large panels with `NavigationMenuContent` and list them via helper components.
  - Use viewport prop for responsive behaviour on mobile.
- **Top Files by Usage**:
  1. components/layouts/header.tsx - 6 exports
- **Common Style Override Issues**:
  - None observed.

---

### Pagination
- **Total Usage**: 5 instances across 1 files
- **Compliance**: 0% (issues in 1 file)
- **Canonical Reference**: docs/shadcn-components/pagination.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 1 issues (page numbers rendered as buttons)
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap list elements with `Pagination`, `PaginationContent`, and `PaginationItem`.
  - Use `PaginationLink` for page numbers to retain anchor semantics.
  - Control disabled states with provided `PaginationPrevious`/`PaginationNext` props.
- **Top Files by Usage**:
  1. features/gallery/sections/gallery/gallery-grid.tsx - 5 exports
- **Common Style Override Issues**:
  - None observed.

---

### Popover
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/popover.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap trigger and content with `Popover` root and track open state.
  - Pass `align` and `sideOffset` to position overlays without manual CSS.
  - Close popovers with `onOpenChange` for controlled flows.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Progress
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/progress.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Pass a numeric `value` between 0-100.
  - Set explicit width on the parent container for consistent rendering.
  - Use `aria-valuenow` automatically forwarded for accessibility.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### RadioGroup
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/radio-group.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Pair `RadioGroup` with individually labelled `RadioGroupItem` components.
  - Wrap labels with `Label` to expand hit area.
  - Use controlled `value` for forms instead of manually toggling `checked`.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Resizable
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/resizable.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Compose panes with `ResizablePanelGroup`, `ResizablePanel`, and `ResizableHandle`.
  - Set `direction` to `horizontal` or `vertical` to control axis.
  - Persist layout state by reading `onLayout` callbacks when needed.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### ScrollArea
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/scroll-area.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap large content in `ScrollArea` to style scrollbars.
  - Add `ScrollBar` for horizontal/vertical track controls.
  - Avoid nesting multiple scroll areas unless necessary.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Select
- **Total Usage**: 5 instances across 1 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/select.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Combine `SelectTrigger`, `SelectContent`, `SelectGroup`, and `SelectItem`.
  - Use `SelectValue` placeholder text until user picks an option.
  - Provide meaningful `value` strings for form submissions.
- **Top Files by Usage**:
  1. features/contact/sections/form/form.tsx - 5 exports
- **Common Style Override Issues**:
  - None observed.

---

### Separator
- **Total Usage**: 7 instances across 7 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/separator.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Use `Separator` to divide sections horizontally or vertically.
  - Set `orientation="vertical"` for inline separators.
  - Avoid re-creating separators with `div` + border utilities.
- **Top Files by Usage**:
  1. components/layouts/footer.tsx - 1 exports
  2. components/ui/button-group.tsx - 1 exports
  3. components/ui/sidebar.tsx - 1 exports
- **Common Style Override Issues**:
  - None observed.

---

### Sheet
- **Total Usage**: 5 instances across 1 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/sheet.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Render `SheetTrigger` and `SheetContent` to create slide-in panels.
  - Specify `side` when sliding from non-default edges.
  - Include `SheetFooter` for action buttons to align copy with standards.
- **Top Files by Usage**:
  1. components/ui/sidebar.tsx - 5 exports
- **Common Style Override Issues**:
  - None observed.

---

### Sidebar
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/sidebar.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap the layout with `SidebarProvider` and toggle using `SidebarTrigger`.
  - Organise nav with `SidebarGroup`, `SidebarMenu`, and `SidebarMenuItem`.
  - Use provided tokens to theme the sidebar independently from the app.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Skeleton
- **Total Usage**: 3 instances across 3 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/skeleton.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Use `Skeleton` to reserve layout space while content loads.
  - Combine multiple skeletons to mirror actual layout blocks.
  - Remove skeletons once data is loaded to avoid flashing.
- **Top Files by Usage**:
  1. app/gallery/loading.tsx - 1 exports
  2. app/loading.tsx - 1 exports
  3. components/ui/sidebar.tsx - 1 exports
- **Common Style Override Issues**:
  - None observed.

---

### Slider
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/slider.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Pass arrays to `value` for range sliders.
  - Use `max`, `min`, and `step` for domain control.
  - Handle `onValueChange` to sync with form state.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Sonner
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/sonner.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Render the `Toaster` component at layout root to initialize toasts.
  - Leverage status helpers (`toast.success` etc.) for consistent icons.
  - Provide `description` copy for clarity instead of stacking toasts.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Spinner
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/spinner.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Embed `Spinner` inside buttons or cards to signal asynchronous actions.
  - Keep spinner colour aligned with text via `className`.
  - Expose `aria-label="Loading"` when used standalone.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Switch
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/switch.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap `Switch` with a `Label` to describe the toggle.
  - Use `checked`/`onCheckedChange` for controlled components.
  - Avoid mixing `disabled` visual states with manual opacity classes.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Table
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/table.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Combine `Table`, `TableHeader`, `TableBody`, `TableRow`, and `TableCell`.
  - Use `TableCaption` to describe data for screen readers.
  - Prefer `<TableFooter>` for totals and summaries.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Tabs
- **Total Usage**: 4 instances across 1 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/tabs.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap tabs with `TabsList` and pair each `TabsTrigger` to `TabsContent` via the `value` prop.
  - Set `defaultValue` to control initial selection.
  - Keep tab panels mount/unmount behaviour default (lazy) unless customizing via `forceMount`.
- **Top Files by Usage**:
  1. features/services/sections/services-grid/services-grid.tsx - 4 exports
- **Common Style Override Issues**:
  - None observed.

---

### Textarea
- **Total Usage**: 1 instances across 1 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/textarea.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Bind `Textarea` to form state via `value`/`onChange`.
  - Use `rows` or `className` to manage height; it already includes padding.
  - Combine with `Label` and helper text for accessibility.
- **Top Files by Usage**:
  1. features/contact/sections/form/form.tsx - 1 exports
- **Common Style Override Issues**:
  - None observed.

---

### Toast
- **Total Usage**: 1 instances across 1 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/toast.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Deprecated in favour of `sonner`; avoid reintroducing legacy toast component.
  - If required, reference v3 docs for installation.
  - Prefer `toast` for new implementations.
- **Top Files by Usage**:
  1. components/providers/toast-provider.tsx - 1 exports
- **Common Style Override Issues**:
  - None observed.

---

### ToggleGroup
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/toggle-group.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Compose groups with `ToggleGroup` and `ToggleGroupItem` values.
  - Choose `type="single"` or `type="multiple"` to control selection behaviour.
  - Use `aria-label` when the group lacks visible header copy.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Toggle
- **Total Usage**: 0 instances across 0 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/toggle.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Use `Toggle` for on/off formatting controls with icons.
  - Pass `pressed` state for controlled usage.
  - Prefer variants (`default`, `outline`) instead of manual border styling.
- **Top Files by Usage**:
  (no usage)
- **Common Style Override Issues**:
  - None observed.

---

### Tooltip
- **Total Usage**: 4 instances across 1 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/tooltip.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Wrap interactive elements with `TooltipTrigger asChild`.
  - Keep tooltips concise and avoid interactive content inside.
  - Use `TooltipProvider` high in the tree for consistent delays.
- **Top Files by Usage**:
  1. components/ui/sidebar.tsx - 4 exports
- **Common Style Override Issues**:
  - None observed.

---

### Typography
- **Total Usage**: 124 instances across 37 files
- **Compliance**: 100%
- **Canonical Reference**: docs/shadcn-components/typography.md
- **Default Styles**: Refer to component source for base spacing, borders, and typography; avoid overriding unless variants are insufficient.
- **Issues**:
  - P0: 0 issues
  - P1: 0 issues
  - P2: 0 issues
  - P3: 0 issues
- **Canonical Requirements**:
  - Use the exported heading components (`H1`-`H6`) for consistent sizing.
  - Use `Lead`, `Muted`, and `Small` for supporting text and captions.
  - Apply semantic HTML tags provided by components to maintain document structure.
- **Top Files by Usage**:
  1. features/consultation/sections/journey/journey.tsx - 5 exports
  2. features/consultation/sections/types/types.tsx - 5 exports
  3. features/home/sections/services/services.tsx - 5 exports
- **Common Style Override Issues**:
  - None observed.

---
## Systemic Issues & Recommendations

### Pattern 1: Dialog Composition Inconsistency
**Prevalence**: 3 of 3 dialog implementations (100%)  
**Issue**: Dialogs omit `DialogHeader`/`DialogDescription` or place them outside `DialogContent`, breaking accessibility contracts.

**Current Approaches Identified**:
- Command palette renders header outside content.
- Gallery modals omit header/description entirely.

**Canonical Pattern**: `DialogContent` must wrap `DialogHeader` (with `DialogTitle`/`DialogDescription`) followed by body and `DialogFooter` if needed.

**Recommendation**: Adopt a shared `ModalFrame` abstraction that encapsulates canonical dialog structure and ensures headers stay inside content.  
- **Benefits**: Restores accessibility, consistent padding, easier future changes.  
- **Migration Strategy**: Refactor each dialog to use shared component; update stories/examples.  
- **Effort Estimate**: 1.5 hours  
- **Priority**: P0

**Affected Files**: `components/ui/command.tsx`, `features/home/sections/gallery/gallery-grid.tsx`, `features/gallery/sections/gallery/gallery-grid.tsx`

---

### Pattern 2: Card Layouts Styled via Root Classnames
**Prevalence**: 1 of 14 card usages (7%)  
**Issue**: Service cards apply padding and layout directly on `<Card>` instead of using subcomponents.

**Current Approaches Identified**:
- `services-grid` composes `Card` + custom `div` stacks.

**Canonical Pattern**: `CardHeader`/`CardContent`/`CardFooter` deliver spacing and typographic rhythm.

**Recommendation**: Standardize on structured card composition and extract helper component for service rows.  
- **Benefits**: Reduces duplicated spacing classes, keeps CTA placement consistent.  
- **Migration Strategy**: Refactor service cards, audit any future cards for compliance.  
- **Effort Estimate**: 1 hour  
- **Priority**: P1

**Affected Files**: `features/services/sections/services-grid/services-grid.tsx`

---

### Pattern 3: Pagination Semantics Reimplemented
**Prevalence**: 1 of 1 pagination usage (100%)  
**Issue**: Page numbers rendered as buttons, losing anchor semantics and requiring manual event handling.

**Current Approaches Identified**:
- Gallery pagination uses `ButtonGroup` + `Button`.

**Canonical Pattern**: Use `PaginationLink` for page numbers, `PaginationPrevious`/`PaginationNext` for navigation.

**Recommendation**: Align pagination with canonical pattern and extract helper for future list pages.  
- **Benefits**: Better accessibility, simpler code, consistent design tokens.  
- **Migration Strategy**: Replace button group with canonical links, parameterize helper for future use.  
- **Effort Estimate**: 0.5 hours  
- **Priority**: P2

**Affected Files**: `features/gallery/sections/gallery/gallery-grid.tsx`

---

## Quick Wins (< 2 hours total)

### Batch 1: Dialog Header Normalization
**Estimated Time**: 60 minutes  
**Priority**: P1  
**Impact**: Restores accessible titles/descriptions for all gallery modals.

**Checklist**:
- [ ] `features/home/sections/gallery/gallery-grid.tsx:56` — add `DialogHeader` and `DialogDescription` inside `DialogContent`.
- [ ] `features/gallery/sections/gallery/gallery-grid.tsx:134` — mirror header/description fix across paginated gallery.

**Fix Pattern**:
Wrap modal body with `DialogHeader` + `DialogDescription` inside `DialogContent` per canonical dialog example.

**Canonical Reference**: `docs/shadcn-components/dialog.md`

### Batch 2: Card Subcomponent Refactor
**Estimated Time**: 45 minutes  
**Priority**: P1  
**Impact**: Aligns service pricing cards with shared card spacing.

**Checklist**:
- [ ] `features/services/sections/services-grid/services-grid.tsx:62` — introduce `CardHeader`, `CardContent`, `CardDescription`, `CardFooter`.

**Fix Pattern**:
Move textual content into `CardHeader` + `CardDescription`; keep CTA within `CardContent` or `CardFooter`.

**Canonical Reference**: `docs/shadcn-components/card.md`

### Batch 3: Pagination Anchor Restore
**Estimated Time**: 30 minutes  
**Priority**: P2  
**Impact**: Returns semantic anchors to gallery pagination.

**Checklist**:
- [ ] `features/gallery/sections/gallery/gallery-grid.tsx:99` — replace `ButtonGroup` page loop with `PaginationLink`.

**Fix Pattern**:
Map `PaginationItem` + `PaginationLink` per canonical example; intercept navigation with `preventDefault` to keep SPA flow.

**Canonical Reference**: `docs/shadcn-components/pagination.md`

**Total Time**: 135 minutes  
**Total Impact**: Restored accessibility for dialogs, consistent cards, and semantic pagination.

## Appendix A: Complete File Analysis

#### Fully Compliant (68 files) ✅
- 1. app/(legal)/layout.tsx - Components: Container
- 2. app/error.tsx - Components: Button, Card, CardContent, … (7 total)
- 3. app/gallery/loading.tsx - Components: Container, Section, Skeleton
- 4. app/global-error.tsx - Components: Button, Card, CardContent, … (7 total)
- 5. app/layout.tsx - Components: Breadcrumbs, Footer, Header, … (4 total)
- 6. app/loading.tsx - Components: Container, Section, Skeleton
- 7. app/not-found.tsx - Components: Button, Card, CardContent, … (7 total)
- 8. components/layouts/breadcrumbs.tsx - Components: Breadcrumb, BreadcrumbItem, BreadcrumbLink, … (6 total)
- 9. components/layouts/footer.tsx - Components: Separator
- 10. components/layouts/header.tsx - Components: Accordion, AccordionContent, AccordionItem, … (17 total)
- 11. components/layouts/sticky-bottom-nav.tsx - Components: Button
- 12. components/providers/toast-provider.tsx - Components: Toaster
- 13. components/shared/location-map.tsx - Components: Button
- 14. components/ui/alert-dialog.tsx - Components: buttonVariants
- 15. components/ui/animated-theme-toggler.tsx - Components: Button
- 16. components/ui/button-group.tsx - Components: Separator
- 17. components/ui/calendar.tsx - Components: Button, buttonVariants
- 18. components/ui/carousel.tsx - Components: Button
- 19. components/ui/form.tsx - Components: Label
- 20. components/ui/pagination.tsx - Components: Button, buttonVariants
- 21. components/ui/sidebar.tsx - Components: Button, Input, Separator, … (13 total)
- 22. components/ui/toggle-group.tsx - Components: toggleVariants
- 23. features/about/about-page.tsx - Components: Container, Section
- 24. features/about/sections/credentials/credentials.tsx - Components: Badge, Card, CardContent, … (12 total)
- 25. features/about/sections/cta/cta.tsx - Components: Button, Container, H2, … (6 total)
- 26. features/about/sections/hero/hero.tsx - Components: Badge, Button, Container, … (7 total)
- 27. features/about/sections/location/location.tsx - Components: Card, CardContent, CardHeader, … (4 total)
- 28. features/about/sections/philosophy/philosophy.tsx - Components: Card, CardContent, CardDescription, … (7 total)
- 29. features/about/sections/stats/stats.tsx - Components: Card, CardContent, CardHeader, … (4 total)
- 30. features/about/sections/story/story.tsx - Components: Badge, Card, CardContent, … (7 total)
- 31. features/about/sections/testimonials/testimonials.tsx - Components: Avatar, AvatarFallback, Card, … (15 total)
- 32. features/about/sections/values/values.tsx - Components: Card, CardContent, CardHeader, … (7 total)
- 33. features/about/sections/who-we-serve/who-we-serve.tsx - Components: Badge, Card, CardContent, … (12 total)
- 34. features/accessibility/sections/content/content.tsx - Components: Card, CardContent, CardHeader, … (10 total)
- 35. features/area-detail/area-detail-page.tsx - Components: Button, Card, CardContent, … (8 total)
- 36. features/areas/sections/hero/hero.tsx - Components: Container, H1, Lead, … (4 total)
- 37. features/consultation/sections/cta/cta.tsx - Components: Button, Container, H2, … (6 total)
- 38. features/consultation/sections/hero/hero.tsx - Components: Alert, AlertDescription, Badge, … (9 total)
- 39. features/consultation/sections/journey/journey.tsx - Components: Card, CardContent, CardDescription, … (12 total)
- 40. features/consultation/sections/types/types.tsx - Components: Badge, Card, CardContent, … (13 total)
- 41. features/contact/contact-page.tsx - Components: Container, Section
- 42. features/contact/sections/contact-info/contact-info.tsx - Components: Card, CardContent, CardHeader, … (4 total)
- 43. features/contact/sections/faqs/faqs.tsx - Components: Accordion, AccordionContent, AccordionItem, … (17 total)
- 44. features/contact/sections/form/form.tsx - Components: Button, Card, CardContent, … (11 total)
- 45. features/contact/sections/hero/hero.tsx - Components: Alert, AlertDescription, Button, … (8 total)
- 46. features/contact/sections/hours/hours.tsx - Components: Card, CardContent, CardHeader, … (4 total)
- 47. features/contact/sections/location/location.tsx - Components: Card, CardContent, CardHeader, … (4 total)
- 48. features/contact/sections/methods/methods.tsx - Components: Card, CardContent, CardDescription, … (11 total)
- 49. features/gallery/sections/cta/cta.tsx - Components: Button, Container, H2, … (6 total)
- 50. features/gallery/sections/gallery/gallery.tsx - Components: Container, H2, Lead, … (5 total)
- 51. features/gallery/sections/hero/hero.tsx - Components: Badge, Button, Container, … (7 total)
- 52. features/home/home-page.tsx - Components: AnnouncementBanner
- 53. features/home/sections/combinations/combinations.tsx - Components: Badge, Button, Card, … (16 total)
- 54. features/home/sections/cta/cta.tsx - Components: Button, Container, H2, … (6 total)
- 55. features/home/sections/features/features.tsx - Components: Card, CardContent, CardDescription, … (11 total)
- 56. features/home/sections/gallery/gallery.tsx - Components: Button, Container, H2, … (6 total)
- 57. features/home/sections/hero/hero.tsx - Components: Badge, Button, Container, … (7 total)
- 58. features/home/sections/local-seo/local-seo.tsx - Components: Button, Card, CardContent, … (12 total)
- 59. features/home/sections/services/services.tsx - Components: Badge, Button, Card, … (14 total)
- 60. features/home/sections/team/team.tsx - Components: Avatar, AvatarFallback, AvatarImage, … (20 total)
- 61. features/home/sections/testimonials/testimonials.tsx - Components: Avatar, AvatarFallback, Card, … (15 total)
- 62. features/privacy/sections/content/content.tsx - Components: Card, CardContent, CardHeader, … (10 total)
- 63. features/services/sections/combinations/combinations.tsx - Components: Badge, Button, Card, … (16 total)
- 64. features/services/sections/cta/cta.tsx - Components: Button, Container, H2, … (6 total)
- 65. features/services/sections/faqs/faqs.tsx - Components: Accordion, AccordionContent, AccordionItem, … (10 total)
- 66. features/services/sections/hero/hero.tsx - Components: Badge, Container, H1, … (6 total)
- 67. features/services/sections/testimonials/testimonials.tsx - Components: Avatar, AvatarFallback, Card, … (15 total)
- 68. features/terms/sections/content/content.tsx - Components: Card, CardContent, CardHeader, … (10 total)

#### Needs Improvement (4 files) ⚠️
- 1. components/ui/command.tsx - Components: Dialog, DialogContent, DialogDescription, … (5 total) - Compliance: 0% - Notes: Dialog header placed outside content (P0)
- 2. features/gallery/sections/gallery/gallery-grid.tsx - Components: Button, ButtonGroup, Dialog, … (10 total) - Compliance: 70% - Notes: Dialog missing header/description + pagination pattern (P1/P2)
- 3. features/home/sections/gallery/gallery-grid.tsx - Components: Dialog, DialogContent, DialogTitle - Compliance: 67% - Notes: Dialog missing header/description + button tiles (P1)
- 4. features/services/sections/services-grid/services-grid.tsx - Components: Badge, Button, Card, … (14 total) - Compliance: 91% - Notes: Card lacks CardContent/CardFooter (P1)
## Appendix C: Canonical Patterns Reference

Refer to `docs/shadcn-components/` for full canonical examples. Key requirements are summarised in the component usage analysis above—align any new implementation with those notes before adding overrides or variants.

## Appendix D: Excluded Files

### Paths Excluded from Audit
- `.next/`
- `node_modules/`
- `.tmp/`
- `docs/shadcn-components/` (reference material)
- `scripts/`

### Files Requiring Manual Review
1. `features/business/appointments/components/appointment-booking-wizard.tsx`
   - Reason: Multi-step form logic not audited in this pass
   - Recommendation: Schedule dedicated design & accessibility review
2. `features/customer/booking/components/service-selector.tsx`
   - Reason: Custom animations outside the current scope
   - Recommendation: Consult design before refactoring

