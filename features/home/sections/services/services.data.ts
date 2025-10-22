export const servicesData = {
  subtitle: 'Exceptional Treatments',
  title: 'From Quick Lunch-Break Manicures to 2-Hour Spa Escapes',
  description:
    'Victoria Park Nails & Spa pairs meticulous nail care with restorative spa treatments, making it easy to fit confidence-boosting self-care into any Calgary schedule.',
  categories: [
    {
      id: 'nail-services',
      title: 'Nail Services',
      description:
        'Manicures, resilient gel polish, intricate nail art, and sculpted extensions - all tailored to keep your hands and feet photo-ready for workdays, weddings, and Stampede nights.',
      serviceCount: 29,
      href: '/services#nail-services',
    },
    {
      id: 'massage-spa',
      title: 'Massage & Spa',
      description:
        'Reset between meetings with relaxation massage, hot stone therapy, and glow-boosting facials designed to melt away stress in the middle of downtown.',
      serviceCount: 7,
      href: '/services#massage-spa',
    },
    {
      id: 'waxing',
      title: 'Waxing',
      description:
        'Face and body waxing delivered with gentle techniques, premium hard wax, and detailed finishing so you can step out smooth and confident.',
      serviceCount: 10,
      href: '/services#waxing',
    },
  ],
  cta: { text: 'View All Services & Pricing', href: '/services' },
} as const
