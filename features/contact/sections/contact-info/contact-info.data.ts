import { siteConfig } from '@/lib/config/site.config'

export const contactInfoData = {
  title: 'Get in Touch',
  description: 'We\'d love to hear from you. Reach out to us for appointments or inquiries.',
  methods: [
    {
      icon: 'Phone',
      label: 'Phone',
      value: siteConfig.business.phone,
      href: siteConfig.links.phone,
    },
    {
      icon: 'Mail',
      label: 'Email',
      value: siteConfig.business.email,
      href: `mailto:${siteConfig.business.email}`,
    },
    {
      icon: 'MapPin',
      label: 'Address',
      value: `${siteConfig.business.address.street}, ${siteConfig.business.address.city}, ${siteConfig.business.address.province} ${siteConfig.business.address.postalCode}`,
      href: siteConfig.business.address.mapUrl,
    },
  ],
} as const
