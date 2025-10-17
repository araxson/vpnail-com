// Google Analytics (gtag.js) configuration
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? ''
const dataLayerName = 'dataLayer'
const allowInDevelopment = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true'
const debugMode = process.env.NEXT_PUBLIC_GA_DEBUG_MODE === 'true'
const anonymizeIp = process.env.NEXT_PUBLIC_GA_ANONYMIZE_IP === 'true'

const isProduction = process.env.NODE_ENV === 'production'
const shouldLoadAnalytics = Boolean(measurementId) && (isProduction || allowInDevelopment)

const defaultConfig: Record<string, unknown> = {
  send_page_view: false,
}

if (debugMode) {
  defaultConfig.debug_mode = true
}

if (anonymizeIp) {
  defaultConfig.anonymize_ip = true
}

export const analyticsConfig = {
  measurementId,
  dataLayerName,
  allowInDevelopment,
  isProduction,
  shouldLoadAnalytics,
  debugMode,
  anonymizeIp,
  defaultConfig,
} as const

export type AnalyticsConfig = typeof analyticsConfig
