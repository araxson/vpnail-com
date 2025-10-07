# Fix All Errors

Systematically fix all TypeScript, ESLint, and build errors in the project.

## Phase 1: Identify Errors
1. Run `npm run lint` to capture all ESLint errors
2. Run `npm run build` to capture TypeScript and build errors
3. Categorize errors by type (imports, types, syntax, unused vars)

## Phase 2: Fix Critical Errors (Priority Order)
1. **Missing Imports** - Add missing import statements
2. **Type Errors** - Fix type mismatches, add proper type annotations
3. **Export/Import Mismatches** - Ensure named exports match imports
4. **Syntax Errors** - Fix React escaping (`&apos;`, `&quot;`)

## Phase 3: Clean Warnings
1. **Unused Imports** - Remove all unused imports
2. **Unused Variables** - Remove or prefix with `_` if needed for APIs
3. **React Warnings** - Fix hooks dependencies, key props

## Phase 4: Verification
1. Run `npm run lint` - expect 0 errors, 0 warnings
2. Run `npm run build` - expect SUCCESS with all pages generated
3. Check bundle size hasn't increased significantly

## Rules
- Fix errors ONE AT A TIME and verify after each fix
- NEVER skip reading files before editing
- Use exact string matching in Edit tool
- Preserve existing functionality - only fix errors
- Follow CLAUDE.md architecture patterns
- Keep components < 150 lines, data files < 500 lines

## Common Fixes
**Unused Imports:** Delete the import line
**Type Errors:** Add proper type annotations or `as const`
**Missing Exports:** Add to index.ts barrel export
**React Entities:** Replace `'` with `&apos;`, `"` with `&quot;`

## Output Format
Provide summary:
- Errors Fixed: [count] (list by category)
- Warnings Cleaned: [count]
- Build Status: SUCCESS/FAILED
- Files Modified: [list with reason]

Start immediately without asking for permission.
