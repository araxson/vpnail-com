export const servicesData = {
  subtitle: 'Exceptional Treatments',
  title: 'Our Premium Services',
  description: 'Victoria Nails Calgary delivers downtown nail salon near me care with spa treatments designed for wellness, relaxation, and radiance in Victoria Park.',
  categories: [
    {
      id: 'nail-services',
      title: 'Nail Services',
      description: 'From classic manicures and pedicures to stunning custom nail art, gel nails, shellac manicures, and acrylic extensions. We deliver Beltline- and Downtown-friendly appointments that keep your hands and feet camera-ready for workdays, weddings, and Calgary Stampede outings.',
      serviceCount: 29,
      href: '/services#nail-services',
    },
    {
      id: 'massage-spa',
      title: 'Massage & Spa',
      description: 'Indulge in relaxing massage therapies and luxury spa treatments. From hot stone massages to rejuvenating facials, reset between meetings or events at Calgary\'s Victoria Park spa retreat.',
      serviceCount: 7,
      href: '/services#massage-spa',
    },
    {
      id: 'waxing',
      title: 'Waxing',
      description: 'Professional waxing services for all areas including facial waxing, Brazilian waxing, and full body waxing. Expect fast, meticulous results from Calgary technicians using professional-grade products.',
      serviceCount: 10,
      href: '/services#waxing',
    },
  ],
  cta: { text: 'View All Services & Pricing', href: '/services' },
} as const
