"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

import { Container } from "./container"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"
import { primaryNav, headerCTA, type NavItem } from "@/lib/config/nav.config"
import { siteConfig } from "@/lib/config/site.config"

interface HeaderProps {
  items?: NavItem[]
}

export function Header({ items = primaryNav }: HeaderProps) {
  const pathname = usePathname()
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(true)
  const [lastScrollY, setLastScrollY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300",
      !isVisible && "-translate-y-full"
    )}>
      <Container className="flex h-16 items-center justify-between gap-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 rounded-lg p-1 sm:p-2 -ml-1 sm:-ml-2 touch-manipulation flex-shrink-0"
        >
          <Image
            src="/Victoria_Park_Nails_Spa_Logo_Primary_small.png"
            alt={siteConfig.name}
            width={180}
            height={60}
            className="h-8 w-auto sm:h-10 lg:h-12 transition-all duration-200 dark:invert dark:brightness-110"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="gap-1">
              {items.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="p-0">
                        <div className="w-[360px] sm:w-[420px] md:w-[520px] lg:w-[600px] p-4">
                          {item.meta && (
                            <div className="mb-4 flex items-center justify-between rounded-lg border border-border/70 bg-muted/40 px-4 py-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                {item.label}
                              </span>
                              <span className="text-sm font-semibold text-foreground">
                                {item.meta}
                              </span>
                            </div>
                          )}
                          <ul className="grid gap-3 md:grid-cols-2">
                            {item.children.map((child) => (
                              <ListItem
                                key={child.label}
                                title={child.label}
                                href={child.href}
                                serviceCount={child.serviceCount}
                                ctaLabel={child.ctaLabel}
                              >
                                {child.description}
                              </ListItem>
                            ))}
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href || "#"}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === item.href && "bg-accent text-accent-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <AnimatedThemeToggler variant="secondary" />
          <Button asChild>
            <Link href={headerCTA.href}>
              {headerCTA.label}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <AnimatedThemeToggler variant="secondary" />
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} direction="right">
            <DrawerTrigger asChild>
              <Button
                variant="secondary"
                size="sm"
                aria-expanded={isDrawerOpen}
                aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
              >
                Menu
              </Button>
            </DrawerTrigger>
            <DrawerContent className="!w-80 sm:!w-96 !max-w-[85vw] !h-full !rounded-l-xl !rounded-r-none !border-l !border-r-0 !shadow-none">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="px-6 py-6 border-b border-border/50 flex items-center justify-between">
                  <div>
                    <DrawerTitle className="text-xl font-bold text-foreground">Menu</DrawerTitle>
                    <p className="text-sm text-muted-foreground mt-1">Explore our services</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsDrawerOpen(false)}
                    aria-label="Close menu"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 overflow-y-auto p-4">
                  <Accordion type="multiple" className="space-y-2">
                    {items.map((item) => (
                      item.children ? (
                        <AccordionItem key={item.label} value={item.label} className="border border-border/30 rounded-lg overflow-hidden">
                          <AccordionTrigger className="px-4 py-3 hover:bg-accent/50 hover:no-underline rounded-t-lg data-[state=open]:bg-accent/30 data-[state=open]:rounded-b-none">
                            <span className="font-semibold text-base text-foreground">{item.label}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-0 pb-0">
                            <div className="space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="block px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors touch-manipulation border-b border-border/20 last:border-b-0"
                                  onClick={() => setIsDrawerOpen(false)}
                                >
                                  <div>
                                    <div className="font-medium text-foreground">{child.label}</div>
                                    {child.description && (
                                      <div className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                                        {child.description}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <div key={item.label} className="border border-border/30 rounded-lg overflow-hidden">
                          <Link
                            href={item.href || "#"}
                            className={cn(
                              "block px-4 py-3 text-base font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors touch-manipulation",
                              pathname === item.href && "bg-accent text-accent-foreground"
                            )}
                            onClick={() => setIsDrawerOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </div>
                      )
                    ))}
                  </Accordion>
                </div>

                {/* Mobile Footer with CTA */}
                <div className="border-t border-border/50 p-6">
                  <Button
                    asChild
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <Link
                      href={headerCTA.href}
                      className="block w-full text-center"
                    >
                      {headerCTA.label}
                    </Link>
                  </Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </Container>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string
    serviceCount?: number
    ctaLabel?: string
  }
>(({ className, title, children, serviceCount, ctaLabel, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block h-full select-none space-y-3 rounded-lg border border-border/60 bg-background/95 p-4 leading-none no-underline outline-none transition-colors hover:border-primary/50 hover:bg-primary/5 focus:border-primary/50 focus:bg-primary/5",
            className
          )}
          {...props}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="text-base font-semibold leading-none">{title}</div>
            {typeof serviceCount === "number" && (
              <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                {serviceCount} {serviceCount === 1 ? "service" : "services"}
              </span>
            )}
          </div>
          {children && (
            <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
          {ctaLabel && (
            <div className="flex items-center gap-1 text-sm font-semibold text-primary">
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </div>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
