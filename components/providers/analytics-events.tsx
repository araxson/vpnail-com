'use client'

import { useEffect } from 'react'

export function AnalyticsEvents() {
  useEffect(() => {
    const w = window as Window & { dataLayer?: Record<string, unknown>[] }
    const dl = w.dataLayer || (w.dataLayer = [])

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
        dl.push({
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

  return null
}
