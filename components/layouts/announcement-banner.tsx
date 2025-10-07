import { cn } from '@/lib/utils'

interface AnnouncementBannerProps {
  message: string
}

export function AnnouncementBanner({ message }: AnnouncementBannerProps) {
  return (
    <div className={cn(
      "relative bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground",
      "border-b border-primary/20"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-3 text-center">
          <p className="text-sm font-bold sm:text-base">
            {message}
          </p>
        </div>
      </div>
    </div>
  )
}
