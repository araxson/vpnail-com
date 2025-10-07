const gaId = process.env.NEXT_PUBLIC_GA_ID ?? ''
const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? ''
const gtmAuth = process.env.NEXT_PUBLIC_GTM_AUTH ?? ''
const gtmPreview = process.env.NEXT_PUBLIC_GTM_PREVIEW ?? ''
const dataLayerName = process.env.NEXT_PUBLIC_GTM_DATALAYER ?? 'dataLayer'
const allowInDevelopment = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true'
const loadDirectGoogleAnalytics = process.env.NEXT_PUBLIC_LOAD_GA_DIRECT === 'true'

const isProduction = process.env.NODE_ENV === 'production'
const analyticsEnabled = isProduction || allowInDevelopment

const shouldLoadGtm = Boolean(gtmId && analyticsEnabled)
const shouldLoadGa = Boolean(
  gaId &&
  analyticsEnabled &&
  (loadDirectGoogleAnalytics || !shouldLoadGtm)
)

export const analyticsConfig = {
  gaId,
  gtmId,
  gtmAuth,
  gtmPreview,
  dataLayerName,
  allowInDevelopment,
  loadDirectGoogleAnalytics,
  isProduction,
  analyticsEnabled,
  shouldLoadGtm,
  shouldLoadGa,
} as const

export type AnalyticsConfig = typeof analyticsConfig
