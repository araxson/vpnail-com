'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Calendar, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ROUTES } from '@/lib/constants/routes'
import { siteConfig } from '@/lib/config/site.config'

import { Container } from './container'

export function StickyBottomNav() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide nav
        setIsVisible(false)
      } else {
        // Scrolling up - show nav
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar, { passive: true })

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 lg:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-background/95 backdrop-blur-sm border-t border-border shadow-none">
        <Container className="max-w-screen-2xl px-3 py-3 md:px-4" noPaddingMobile>
          <div className="grid grid-cols-2 gap-3">
            <Button asChild size="lg">
              <Link
                href={ROUTES.SERVICES}
                className="flex w-full items-center justify-center gap-2"
              >
                <Calendar className="mr-2 h-5 w-5" />
                <span className="font-semibold">Book Online</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={siteConfig.social.phone}
                className="flex w-full items-center justify-center gap-2"
              >
                <Phone className="mr-2 h-5 w-5" />
                <span className="font-semibold hidden sm:inline">Call Us</span>
                <span className="font-semibold sm:hidden">{siteConfig.business.phone}</span>
              </a>
            </Button>
          </div>
        </Container>
      </div>
    </div>
  )
}
