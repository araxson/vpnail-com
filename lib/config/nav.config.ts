import { ROUTES } from '@/lib/constants/routes'

/**
 * Navigation Configuration
 * Central definition for all navigation menus
 */

export type NavLink = {
  label: string
  href: string
  external?: boolean
}

export type NavSection = {
  title: string
  links: NavLink[]
}

// Primary navigation (header)
export const primaryNav: NavLink[] = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'Services', href: ROUTES.SERVICES },
  { label: 'Gallery', href: ROUTES.GALLERY },
  { label: 'About', href: ROUTES.ABOUT },
  { label: 'Contact', href: ROUTES.CONTACT },
]

// CTA button in header
export const headerCTA: NavLink = {
  label: 'Book Now',
  href: '/',
  external: true,
}

// Footer navigation sections
export const footerNav: NavSection[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Services', href: ROUTES.SERVICES },
      { label: 'Gallery', href: ROUTES.GALLERY },
      { label: 'About', href: ROUTES.ABOUT },
      { label: 'Contact', href: ROUTES.CONTACT },
    ],
  },
  {
    title: 'Book Online',
    links: [
      { label: 'Book Appointment', href: '/', external: true },
      { label: 'Call Us', href: 'tel:+14037193600', external: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: ROUTES.PRIVACY },
      { label: 'Terms of Service', href: ROUTES.TERMS },
      { label: 'Accessibility', href: ROUTES.ACCESSIBILITY },
    ],
  },
]
