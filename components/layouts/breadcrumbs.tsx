"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ROUTES } from "@/lib/constants/routes"

import { Container } from "./container"

interface BreadcrumbSegment {
  label: string
  href: string
  isCurrentPage: boolean
}

/**
 * Generate breadcrumb label from route segment
 */
function generateLabel(segment: string): string {
  // Handle special cases
  const specialCases: Record<string, string> = {
    'shellac-manicure': 'Shellac Manicure',
    'gel-extensions': 'Gel Extensions',
    'deluxe-pedicure': 'Deluxe Pedicure',
  }

  if (specialCases[segment]) {
    return specialCases[segment]
  }

  // Convert kebab-case to Title Case
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Generate breadcrumb segments from pathname
 */
function generateBreadcrumbs(pathname: string): BreadcrumbSegment[] {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbSegment[] = [
    {
      label: 'Home',
      href: ROUTES.HOME,
      isCurrentPage: pathname === ROUTES.HOME,
    },
  ]

  let currentPath = ''
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === segments.length - 1

    breadcrumbs.push({
      label: generateLabel(segment),
      href: currentPath,
      isCurrentPage: isLast,
    })
  })

  return breadcrumbs
}

export function Breadcrumbs() {
  const pathname = usePathname()

  // Don't show breadcrumbs on home page
  if (pathname === ROUTES.HOME) {
    return null
  }

  const breadcrumbs = generateBreadcrumbs(pathname)

  return (
    <div className="border-b bg-background">
      <Container className="py-3">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={breadcrumb.href}>
                <BreadcrumbItem>
                  {breadcrumb.isCurrentPage ? (
                    <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={breadcrumb.href}>
                        {breadcrumb.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </Container>
    </div>
  )
}
