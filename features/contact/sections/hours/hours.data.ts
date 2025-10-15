import { siteConfig } from '@/lib/config/site.config'

export const hoursData = {
  title: 'Business Hours',
  description: 'We\'re open 7 days a week to serve you better.',
  schedule: siteConfig.business.hours,
  holiday: {
    title: 'Holiday Hours',
    hours: siteConfig.business.holidayHours,
  },
} as const
