# Enforce shadcn/ui Components & Layout System

## Purpose
Enforce architectural patterns: ONLY use shadcn/ui components, layout primitives, and typography components. NO manual div/h1/p tags with Tailwind classes.

---

## ✅ REQUIRED PATTERNS

### 1. Layout Components (MANDATORY)
**ALWAYS use these instead of manual divs:**

```tsx
import { Section, Container, Stack, Grid, Center } from '@/components/layout'

<Section>           {/* Replaces: <div className="py-16"> */}
  <Container>       {/* Replaces: <div className="max-w-7xl mx-auto px-4"> */}
    <Stack gap="lg"> {/* Replaces: <div className="space-y-8"> */}
      <Grid cols={{ base: 1, md: 2, lg: 3 }}> {/* Replaces: <div className="grid grid-cols-3"> */}
        <Card>Content</Card>
      </Grid>
    </Stack>
  </Container>
</Section>
```

**Available Layout Components:**
- `<Section>` - Page section with vertical padding
- `<Container size="sm|md|lg|xl">` - Max-width wrapper
- `<Stack gap="sm|md|lg|xl|2xl">` - Vertical spacing
- `<Grid cols={{base:1, md:2, lg:3}} gap="sm|md|lg">` - Responsive grid
- `<Center>` - Center content
- `<Cluster gap="sm|md|lg">` - Horizontal flex layout
- `<Divider />` - Visual separator
- `<AspectRatio ratio={16/9}>` - Aspect ratio container

### 2. Typography Components (MANDATORY)
**ALWAYS use these instead of manual h1/h2/p tags:**

```tsx
import { H1, H2, H3, H4, P, Lead, Muted, Small, Code, Blockquote } from '@/components/ui/typography'

<H1>Main Title</H1>         {/* Replaces: <h1 className="text-4xl font-bold"> */}
<Lead>Intro text</Lead>     {/* Replaces: <p className="text-xl text-gray-600"> */}
<H2>Section</H2>            {/* Replaces: <h2 className="text-3xl"> */}
<P>Body text</P>            {/* Replaces: <p className="leading-7"> */}
<Muted>Secondary</Muted>    {/* Replaces: <p className="text-sm text-gray-500"> */}
```

**Available Typography Components:**
- `<H1>`, `<H2>`, `<H3>`, `<H4>` - Headings
- `<P>` - Paragraph
- `<Lead>` - Larger intro text
- `<Large>` - Slightly larger text
- `<Small>` - Caption text
- `<Muted>` - Subtle secondary text
- `<Blockquote>` - Quote blocks
- `<Code>` - Inline code

### 3. shadcn/ui Components (MANDATORY)
**ALWAYS use existing shadcn components:**

```tsx
import { Button, Card, Badge, Tabs, Accordion, Dialog, Sheet } from '@/components/ui'

<Button variant="default">Click</Button>
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
<Badge>New</Badge>
```

---

## ❌ FORBIDDEN PATTERNS

### ❌ NO Manual Spacing
```tsx
// WRONG - Manual div spacing
<div className="py-16 px-4">
<div className="space-y-8">
<div className="mt-12">

// CORRECT - Layout components
<Section>
<Stack gap="xl">
```

### ❌ NO Manual Typography
```tsx
// WRONG - Manual heading/text
<h1 className="text-4xl font-bold">
<h2 className="text-3xl">
<p className="text-lg text-gray-600">

// CORRECT - Typography components
<H1>
<H2>
<P>
```

### ❌ NO Manual Grid/Flex
```tsx
// WRONG - Manual grid
<div className="grid grid-cols-3 gap-6">
<div className="flex items-center justify-between">

// CORRECT - Layout components
<Grid cols={{ base: 1, md: 3 }} gap="md">
<Cluster gap="md">
```

### ❌ NO Recreating Existing Components
```tsx
// WRONG - Recreating card
<div className="rounded-lg border p-4">

// CORRECT - Use shadcn Card
<Card>
  <CardContent>...</CardContent>
</Card>

// WRONG - Recreating button
<button className="bg-primary text-white px-4 py-2 rounded">

// CORRECT - Use shadcn Button
<Button variant="default">Click</Button>
```

---

## 🔍 VALIDATION CHECKLIST

Before submitting any component, verify:

- [ ] **ZERO** `<div className="py-*">` - Use `<Section>` or `<Stack>`
- [ ] **ZERO** `<div className="space-y-*">` - Use `<Stack gap="*">`
- [ ] **ZERO** `<div className="grid grid-cols-*">` - Use `<Grid cols={{...}}>`
- [ ] **ZERO** `<h1 className="*">` - Use `<H1>`
- [ ] **ZERO** `<h2 className="*">` - Use `<H2>`
- [ ] **ZERO** `<p className="*">` - Use `<P>`, `<Lead>`, or `<Muted>`
- [ ] **ZERO** recreated components - Use shadcn/ui
- [ ] **ALL** imports from `@/components/layout` or `@/components/ui`

---

## 📋 QUICK REFERENCE

### Common Replacements

| ❌ WRONG | ✅ CORRECT |
|---------|-----------|
| `<div className="py-16">` | `<Section>` |
| `<div className="max-w-7xl mx-auto px-4">` | `<Container>` |
| `<div className="space-y-8">` | `<Stack gap="xl">` |
| `<div className="grid grid-cols-3 gap-6">` | `<Grid cols={{base:1, lg:3}} gap="md">` |
| `<h1 className="text-4xl font-bold">` | `<H1>` |
| `<p className="text-xl text-gray-600">` | `<Lead>` |
| `<p className="text-sm text-gray-500">` | `<Muted>` |
| `<div className="rounded-lg border p-4">` | `<Card><CardContent>` |
| `<button className="bg-primary...">` | `<Button>` |

### Import Template

```tsx
// Layout (ALWAYS import these)
import { Section, Container, Stack, Grid, Center } from '@/components/layout'

// Typography (ALWAYS import these)
import { H1, H2, H3, H4, P, Lead, Muted } from '@/components/ui/typography'

// shadcn UI (import as needed)
import { Button, Card, CardHeader, CardContent, Badge, Tabs } from '@/components/ui'
```

---

## 🎯 COMPONENT TEMPLATE

**Standard page section structure:**

```tsx
import { Section, Container, Stack, Grid, Center } from '@/components/layout'
import { H1, H2, P, Muted } from '@/components/ui/typography'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function MySection() {
  return (
    <Section>
      <Container size="lg">
        <Stack gap="xl">
          {/* Header */}
          <Center>
            <Stack gap="md" className="text-center max-w-2xl">
              <H2>Section Title</H2>
              <Muted>Section description text</Muted>
            </Stack>
          </Center>

          {/* Content Grid */}
          <Grid cols={{ base: 1, md: 2, lg: 3 }} gap="lg">
            <Card>
              <CardHeader>
                <H3>Card Title</H3>
              </CardHeader>
              <CardContent>
                <P>Card content</P>
                <Button>Action</Button>
              </CardContent>
            </Card>
          </Grid>
        </Stack>
      </Container>
    </Section>
  )
}
```

---

## 🚨 ENFORCEMENT RULES

1. **REJECT** any code with manual `<div className="py-*">` - Require `<Section>` or `<Stack>`
2. **REJECT** any code with `<h1>`, `<h2>`, `<p>` + className - Require typography components
3. **REJECT** any code recreating shadcn components - Require `import from '@/components/ui'`
4. **REQUIRE** all layout components imported from `@/components/layout`
5. **REQUIRE** all typography components imported from `@/components/ui/typography`

---

## 💡 WHY THIS MATTERS

**Consistency**: All spacing follows design tokens
**Maintainability**: Change `<Stack gap="lg">` globally, not in 50 files
**Readability**: `<Section>` is clearer than `<div className="py-16">`
**Design System**: All components follow the same patterns
**Developer Experience**: Import components, not remember Tailwind classes

---

## ✅ SUCCESS CRITERIA

**Your component is correct when:**
- Every import is from `@/components/layout` or `@/components/ui`
- ZERO manual divs with spacing classes
- ZERO manual heading/paragraph tags
- Code reads like semantic HTML, not Tailwind soup
- Any developer can understand structure at a glance
