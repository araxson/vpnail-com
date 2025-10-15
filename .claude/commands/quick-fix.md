# Quick Fix - Fast Error Resolution

Quickly fix common TypeScript and ESLint errors. Use when build is mostly working.

## Process
1. Run `npm run lint && npm run build` to identify errors
2. Fix in this exact order:
   - Unused imports (most common)
   - React entity escaping
   - Type annotations
   - Missing exports

## Common Patterns

**Unused Imports**
```typescript
// ❌ Remove
import { Unused } from '@/components'

// ✅ Keep only used
import { Used } from '@/components'
```

**React Entities**
```typescript
// ❌ Wrong
<h4>What's Included:</h4>

// ✅ Correct
<h4>What&apos;s Included:</h4>
```

**Missing Types**
```typescript
// ❌ Implicit any
export const data = { }

// ✅ Explicit type
export const data = { } as const
```

## Verification
```bash
npm run lint   # 0 errors, 0 warnings
npm run build  # SUCCESS
```

Quick, focused fixes only. For complex issues, use `/fix-all` or `/deep-fix`.
