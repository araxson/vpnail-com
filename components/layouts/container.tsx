import { cn } from '@/lib/utils'

type ContainerProps = {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  noPaddingMobile?: boolean
}

const sizeStyles = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
}

export function Container({
  children,
  className,
  size = 'xl',
  noPaddingMobile = false
}: ContainerProps) {
  return (
    <div className={cn(
      sizeStyles[size],
      'mx-auto',
      noPaddingMobile ? 'md:px-4' : 'px-4',
      className
    )}>
      {children}
    </div>
  )
}
