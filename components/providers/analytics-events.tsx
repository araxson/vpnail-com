'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { analyticsConfig } from '@/lib/config/analytics.config'

type DataLayerEvent = Record<string, unknown>

type DataLayerWindow = typeof window & {
  [key: string]: Array<DataLayerEvent> | undefined
}

function ensureDataLayer(layerName: string): Array<DataLayerEvent> {
  const win = window as unknown as DataLayerWindow
  if (!win[layerName]) {
    win[layerName] = []
  }
  return win[layerName] as Array<DataLayerEvent>
}

export function AnalyticsEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams?.toString()
  const analyticsActive = analyticsConfig.shouldLoadGtm

  useEffect(() => {
    if (!analyticsConfig.shouldLoadGtm) return

    const dataLayer = ensureDataLayer(analyticsConfig.dataLayerName)

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
        dataLayer.push({
          event: eventName,
          href,
          link_text: text,
          page_path: pagePath,
          page_title: pageTitle,
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    if (!analyticsActive) return

    const pagePath = search ? `${pathname}?${search}` : pathname
    const dataLayer = ensureDataLayer(analyticsConfig.dataLayerName)

    dataLayer.push({
      event: 'page_view',
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [analyticsActive, pathname, search])

  return null
}
