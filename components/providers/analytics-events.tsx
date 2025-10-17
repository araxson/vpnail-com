'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { analyticsConfig } from '@/lib/config/analytics.config'

type DataLayerEvent = Record<string, unknown>

type DataLayerWindow = typeof window & {
  gtag?: (...args: unknown[]) => void
  [key: string]: unknown
}

function ensureDataLayer(layerName: string): Array<DataLayerEvent> {
  const win = window as unknown as DataLayerWindow
  const current = win[layerName]

  if (Array.isArray(current)) {
    return current as Array<DataLayerEvent>
  }

  const dataLayer: Array<DataLayerEvent> = []
  win[layerName] = dataLayer
  return dataLayer
}

function pushAnalyticsEvent(eventName: string, params: Record<string, unknown>) {
  const win = window as unknown as DataLayerWindow

  if (typeof win.gtag === 'function') {
    win.gtag('event', eventName, params)
    return
  }

  const dataLayer = ensureDataLayer(analyticsConfig.dataLayerName)
  dataLayer.push({
    event: eventName,
    ...params,
  })
}

export function AnalyticsEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams?.toString()
  const analyticsActive = analyticsConfig.shouldLoadAnalytics

  useEffect(() => {
    if (!analyticsConfig.shouldLoadAnalytics) return

    ensureDataLayer(analyticsConfig.dataLayerName)

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      const anchor = target.closest('a') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href') || ''
      const text = (anchor.textContent || '').trim()
      const pagePath = window.location.pathname
      const pageTitle = document.title

      let eventName: string | null = null

      if (href.startsWith('tel:')) eventName = 'call_click'
      else if (href.startsWith('mailto:')) eventName = 'email_click'
      else if (/setmore\.com/i.test(href)) eventName = 'book_now_click'
      else if (/maps\.google\.com/i.test(href) || href.startsWith('#location')) eventName = 'map_click'

      if (eventName) {
        pushAnalyticsEvent(eventName, {
          link_url: href,
          link_text: text,
          page_path: pagePath,
          page_title: pageTitle,
          page_location: window.location.href,
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    if (!analyticsActive) return

    const pagePath = search ? `${pathname}?${search}` : pathname
    pushAnalyticsEvent('page_view', {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [analyticsActive, pathname, search])

  return null
}
