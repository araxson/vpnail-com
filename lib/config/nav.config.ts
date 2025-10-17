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

export type NavChildItem = {
  label: string
  href: string
  description?: string
  serviceCount?: number
  ctaLabel?: string
}

export type NavItem = {
  label: string
  href?: string
  external?: boolean
  meta?: string
  children?: NavChildItem[]
}

export type NavSection = {
  title: string
  links: NavLink[]
}

// Primary navigation (header)
export const primaryNav: NavItem[] = [
  { label: 'Home', href: ROUTES.HOME },
  {
    label: 'Services',
    href: ROUTES.SERVICES,
    meta: '29 services',
    children: [
      {
        label: 'Nail Services',
        href: `${ROUTES.SERVICES}#nail-services`,
        description:
          '29 services for the nails including classic manicures, resilient gel polish, intricate nail art, and sculpted enhancements that keep hands and feet photo-ready for any occasion.',
        serviceCount: 29,
        ctaLabel: 'View Details',
      },
      {
        label: 'Massage & Spa',
        href: `${ROUTES.SERVICES}#massage-spa`,
        description:
          'Reset between meetings with relaxation massage, hot stone therapy, and glow-boosting facials that melt away downtown stress.',
        serviceCount: 10,
        ctaLabel: 'View Details',
      },
      {
        label: 'Waxing',
        href: `${ROUTES.SERVICES}#waxing`,
        description:
          'Face and body waxing with gentle techniques, premium hard wax, and meticulous finishing so you can step out smooth and confident.',
        serviceCount: 12,
        ctaLabel: 'View Details',
      },
    ],
  },
  { label: 'Gallery', href: ROUTES.GALLERY },
  { label: 'About', href: ROUTES.ABOUT },
  { label: 'Contact', href: ROUTES.CONTACT },
]

// CTA button in header
export const headerCTA: NavLink = {
  label: 'Book Now',
  href: ROUTES.SERVICES,
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
      { label: 'Book Appointment', href: ROUTES.SERVICES },
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
