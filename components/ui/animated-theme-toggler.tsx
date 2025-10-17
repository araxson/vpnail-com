"use client"

import {
  useCallback,
  useEffect,
  useState,
  type MouseEvent,
} from "react"
import { flushSync } from "react-dom"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ViewTransition = {
  ready: Promise<void>
}

type StartViewTransition = (callback: () => void) => ViewTransition

type AnimatedThemeTogglerProps = React.ComponentProps<typeof Button> & {
  duration?: number
}

const getViewTransition = () => {
  if (typeof document === "undefined") return null

  return (document as unknown as { startViewTransition?: StartViewTransition })
    .startViewTransition
}

export function AnimatedThemeToggler({
  className,
  duration = 400,
  variant = "ghost",
  size = "icon",
  onClick,
  ...props
}: AnimatedThemeTogglerProps) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (typeof document === "undefined") return

    const updateThemeState = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    updateThemeState()

    const observer = new MutationObserver(updateThemeState)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget
      const targetIsDark = !isDark

      const applyTheme = () => {
        setIsDark(targetIsDark)
        document.documentElement.classList.toggle("dark", targetIsDark)
        localStorage.setItem("theme", targetIsDark ? "dark" : "light")
      }

      const startViewTransition = getViewTransition()

      if (startViewTransition) {
        try {
          const transition = startViewTransition(() => {
            flushSync(applyTheme)
          })
          await transition.ready

          const { top, left, width, height } = button.getBoundingClientRect()
          const x = left + width / 2
          const y = top + height / 2
          const maxRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
          )

          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${maxRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration,
              easing: "ease-in-out",
              pseudoElement: "::view-transition-new(root)",
            }
          )
        } catch {
          applyTheme()
        }
      } else {
        applyTheme()
      }

      onClick?.(event)
    },
    [isDark, duration, onClick]
  )

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn("rounded-full", className)}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      {...props}
    >
      <span aria-hidden className="flex items-center justify-center">
        {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
