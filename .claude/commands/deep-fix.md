# Deep Fix - Complete Error & Compliance Fix

Fix ALL errors, warnings, and CLAUDE.md violations. Comprehensive project health check.

## Execution Order (Do NOT skip steps)

### 1. Build Analysis (5 min)
```bash
npm run lint 2>&1 > lint-errors.txt
npm run build 2>&1 > build-errors.txt
```
Parse output, categorize:
- TypeScript errors (type mismatches, missing types)
- ESLint errors (syntax, unused vars, react rules)
- Build failures (import errors, module resolution)

### 2. Fix Critical Errors (Priority: Errors > Warnings)
**TypeScript Errors:**
- Missing imports → Add proper import statements
- Type mismatches → Add type annotations or fix types
- Module resolution → Fix import paths

**ESLint Errors:**
- React entities (`'` → `&apos;`, `"` → `&quot;`)
- Missing dependencies in hooks
- Invalid component patterns

### 3. Clean Warnings
- Remove ALL unused imports (check each file)
- Remove unused variables or prefix with `_`
- Fix deprecated patterns

### 4. CLAUDE.md Compliance Check
- File naming: kebab-case for files, PascalCase for components
- Section structure: all under `sections/` directory
- Data co-location: each section owns its `.data.ts`
- No SSG anti-patterns (no 'use server', no fetch in components)
- File size limits: components < 150, data < 500 lines

### 5. Final Verification
```bash
npm run lint    # Expect: 0 errors, 0 warnings
npm run build   # Expect: SUCCESS, all pages generated
```

## Output Summary
```
✅ TypeScript Errors Fixed: X
✅ ESLint Errors Fixed: X
✅ Warnings Cleaned: X
✅ CLAUDE.md Violations Fixed: X
✅ Build: SUCCESS - X/X pages
📦 Bundle Size: X kB (unchanged/reduced)
```

**Work systematically. Fix one error, verify, move to next. Never batch fixes.**
