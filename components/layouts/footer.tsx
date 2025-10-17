import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { siteConfig, CONTACT_INFO, SOCIAL_LINKS } from '@/lib/config/site.config'
import { footerNav } from '@/lib/config/nav.config'
import { ROUTES } from '@/lib/constants/routes'

import { Container } from './container'

export function Footer({ id }: { id?: string }) {
  return (
    <footer id={id} className="border-t bg-muted/30">
      <Container className="py-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-4">Victoria Park Nails and Spa</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Calgary&apos;s premier nail salon and spa in Victoria Park. Book online 24/7 or walk-ins welcome.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Navigation */}
          {footerNav.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SOCIAL_LINKS.phone}
                  className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.email}
                  className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.business.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="text-xs leading-relaxed">
                    {CONTACT_INFO.fullAddress.street}<br />
                    {CONTACT_INFO.fullAddress.city}, {CONTACT_INFO.fullAddress.province}<br />
                    {CONTACT_INFO.fullAddress.postalCode}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
          <p className="text-center md:text-left">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <a
            href="https://zss.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center md:text-left hover:text-primary transition-colors"
          >
            Website built by <span className="font-semibold text-primary">zss.ca</span>
          </a>
          <div className="flex gap-4">
            <Link href={ROUTES.ACCESSIBILITY} className="hover:text-primary transition-colors">
              Accessibility
            </Link>
            <Link href={ROUTES.PRIVACY} className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href={ROUTES.TERMS} className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
