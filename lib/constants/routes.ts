/**
 * Centralized route constants for the application
 * All application routes should be defined here
 */

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  AREAS: '/areas',
  ARTICLES: '/articles',
  CONSULTATION: '/consultation',
  CONTACT: '/contact',
  GALLERY: '/gallery',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  ACCESSIBILITY: '/accessibility',
} as const

export type RouteKey = keyof typeof ROUTES
export type RouteValue = typeof ROUTES[RouteKey]
