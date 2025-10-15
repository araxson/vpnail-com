export const methodsData = {
  title: 'Multiple Ways to Connect',
  description: 'We\'re here to help Calgary guests—choose the best way to get in touch with our Victoria Park team.',
  methods: [
    {
      icon: 'Phone',
      title: 'Call Us',
      description: 'Quick questions or immediate booking',
      contact: '(403) 719-3600',
      href: 'tel:+14037193600',
      hours: 'Mon-Fri 10:00 AM - 7:00 PM',
    },
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Detailed questions or inquiries',
      contact: 'calgaryvpark@gmail.com',
      href: 'mailto:calgaryvpark@gmail.com',
      hours: 'Response within 24-48 hours',
    },
    {
      icon: 'MapPin',
      title: 'Visit Our Salon',
      description: 'Come see us in Victoria Park',
      contact: '1411 1st Street SE, Calgary',
      href: '#location',
      hours: 'Walk-ins welcome, appointments recommended',
    },
    {
      icon: 'Calendar',
      title: 'Book Online',
      description: 'Schedule your appointment',
      contact: 'Online Booking System',
      href: '/services',
      hours: '24/7 online booking',
    },
  ],
  availability: {
    title: 'Hours of Operation',
    description: 'Monday-Friday: 10:00 AM - 7:00 PM | Saturday-Sunday: 10:00 AM - 5:30 PM | Holidays: 10:00 AM - 5:30 PM',
  },
} as const
