// Google Tag Manager Configuration (GTM handles all tracking)
const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? ''
const gtmAuth = process.env.NEXT_PUBLIC_GTM_AUTH ?? ''
const gtmPreview = process.env.NEXT_PUBLIC_GTM_PREVIEW ?? ''
const dataLayerName = process.env.NEXT_PUBLIC_GTM_DATALAYER ?? 'dataLayer'
const allowInDevelopment = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true'

const isProduction = process.env.NODE_ENV === 'production'
const analyticsEnabled = isProduction || allowInDevelopment

const shouldLoadGtm = Boolean(gtmId && analyticsEnabled)

export const analyticsConfig = {
  gtmId,
  gtmAuth,
  gtmPreview,
  dataLayerName,
  allowInDevelopment,
  isProduction,
  analyticsEnabled,
  shouldLoadGtm,
} as const

export type AnalyticsConfig = typeof analyticsConfig
