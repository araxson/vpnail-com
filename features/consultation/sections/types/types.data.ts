export const typesData = {
  title: 'Book Your Service',
  description: 'We offer a wide range of nail care and spa services. Book online 24/7 or call us to schedule your appointment.',
  types: [
    {
      title: 'Nail Services',
      description: 'Manicures, pedicures, nail extensions, and custom nail art. Choose from our full range of professional nail care treatments.',
      duration: 'Varies by service',
      includes: [
        'Manicures with Shellac upgrades',
        'Regular and Deluxe Spa Pedicures',
        'Gel and acrylic new sets',
        'Custom nail art and designs',
      ],
    },
    {
      title: 'Spa & Wellness',
      description: 'Relax and rejuvenate with our massage, facial, and waxing services designed for your comfort and well-being.',
      duration: 'Varies by service',
      includes: [
        'Massage therapy',
        'Facial treatments',
        'Full body and facial waxing',
        'Shellac Manicure + Deluxe Spa Pedicure combinations',
      ],
    },
    {
      title: 'Walk-Ins Welcome',
      description: 'No appointment? No problem! We welcome walk-in clients based on availability.',
      duration: 'Same day service',
      includes: [
        'Quick polish changes',
        'Manicures with regular polish',
        'Same-day nail repairs',
        'Last-minute appointments',
      ],
    },
    {
      title: 'Our Booking Process',
      description: 'Simple and convenient online booking available 24/7',
      duration: 'Book anytime',
      includes: [
        'Select your service',
        'Choose your preferred time',
        'Confirm your appointment',
        'Receive booking confirmation',
      ],
    },
  ],
} as const
