import { cn } from '@/lib/utils'

import { Container } from './container'

interface AnnouncementBannerProps {
  message: string
}

export function AnnouncementBanner({ message }: AnnouncementBannerProps) {
  const separators = [' - ', ' – ', ' — ', ' | ']
  const divider = separators.find((separator) => message.includes(separator))
  const segments = divider
    ? message
        .split(divider)
        .map((segment) => segment.trim())
        .filter(Boolean)
    : [message]

  const highlight = segments[0] ?? message
  const supportingSegments = segments.slice(1)
  const supporting = supportingSegments.length
    ? supportingSegments.join(divider?.trim() ? ` ${divider.trim()} ` : ' ')
    : ''

  return (
    <div
      className={cn(
        'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground',
        'border-b border-primary/30'
      )}
    >
      <Container className="px-4 py-3 sm:px-6" noPaddingMobile>
        <div className="flex items-center justify-center text-center">
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
            <span className="font-semibold text-sm sm:text-base">
              {highlight}
            </span>
            {supporting && (
              <span className="text-xs text-primary-foreground/90 sm:text-sm">
                {supporting}
              </span>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
