import { cn } from '@/lib/utils'

import { Container } from './container'

interface AnnouncementBannerProps {
  message: string
}

export function AnnouncementBanner({ message }: AnnouncementBannerProps) {
  return (
    <div className={cn(
      "relative bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground",
      "border-b border-primary/20"
    )}>
      <Container className="py-3" noPaddingMobile>
        <div className="flex items-center justify-center text-center">
          <p className="text-sm font-bold sm:text-base">
            {message}
          </p>
        </div>
      </Container>
    </div>
  )
}
