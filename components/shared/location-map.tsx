'use client'

import { MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config/site.config'

interface LocationMapProps {
  className?: string
}

export function LocationMap({ className }: LocationMapProps) {
  return (
    <div className={className}>
      <div className="rounded-lg overflow-hidden border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.777223694119!2d-114.06388202340791!3d51.03873517171058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170049b78cad1%3A0xf36de94f8f653d9a!2sVictoria%20Park%20Nails%20and%20Spa!5e0!3m2!1sen!2sca!4v1749870644294!5m2!1sen!2sca"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${siteConfig.name} Location`}
          className="w-full"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Button variant="outline" size="lg" asChild>
          <a
            href="https://maps.app.goo.gl/Bybt5QQfCJKHycm86"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 text-sm"
          >
            <MapPin className="h-4 w-4" />
            Get Directions
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="flex w-full items-center justify-center gap-2 text-sm"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </Button>
      </div>
    </div>
  )
}
