'use client'

import Script from 'next/script'
import { analyticsConfig } from '@/lib/config/analytics.config'

interface GoogleAnalyticsProps {
  measurementId?: string
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const resolvedMeasurementId = measurementId?.trim() || analyticsConfig.measurementId
  if (!resolvedMeasurementId || !analyticsConfig.shouldLoadAnalytics) {
    return null
  }

  const dataLayerName = analyticsConfig.dataLayerName
  const configOptions = JSON.stringify(analyticsConfig.defaultConfig)

  const initSnippet = `
    window['${dataLayerName}'] = window['${dataLayerName}'] || [];
    function gtag(){window['${dataLayerName}'].push(arguments);}
    gtag('js', new Date());
    gtag('config', '${resolvedMeasurementId}', ${configOptions});
  `

  return (
    <>
      <Script
        id="ga-gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${resolvedMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-gtag-init" strategy="afterInteractive">
        {initSnippet}
      </Script>
    </>
  )
}
