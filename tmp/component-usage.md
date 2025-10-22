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
