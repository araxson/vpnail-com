import { Crown, Award, Star, Gem } from 'lucide-react'

export const combinationsData = {
  badge: 'Nail Care Packages',
  title: 'Service Combinations That Save You More',
  description:
    'Choose from our curated service combinations designed to give you the perfect nail care experience at unbeatable value. Each package combines complementary services for maximum savings and beauty.',
  packages: [
    {
      name: 'Deluxe',
      price: '85',
      originalPrice: '90',
      duration: '2 hrs',
      popular: true,
      icon: Crown,
      bookingUrl:
        'https://victoriaparknailsspa.setmore.com/book?step=staff&products=33278099-dbf1-454a-b169-30b2ff093286&type=service',
      services: [
        { name: 'Shellac Manicure', included: true },
        { name: 'Deluxe Spa Pedicure', included: true },
      ],
      description: 'Your ultimate spa retreat to melt away stress.',
    },
    {
      name: 'Refresh',
      price: '60',
      originalPrice: '65',
      duration: '1 hr 15 mins',
      popular: false,
      icon: Award,
      bookingUrl:
        'https://victoriaparknailsspa.setmore.com/book?step=staff&products=d95a021e-d7ca-4e44-b065-f22a634955ea&type=service',
      services: [
        { name: 'Manicure with regular polish', included: true },
        { name: 'Pedicure with regular polish', included: true },
      ],
      description: 'The essential for a timeless, elegant look.',
    },
    {
      name: 'Essential',
      price: '70',
      originalPrice: '75',
      duration: '1 hr 35 mins',
      popular: false,
      icon: Star,
      bookingUrl:
        'https://victoriaparknailsspa.setmore.com/book?step=staff&products=e23a8336-3303-4193-a9dc-47025c307144&type=service',
      services: [
        { name: 'Shellac Manicure', included: true },
        { name: 'Pedicure with regular polish', included: true },
      ],
      description: 'The smart choice for long-lasting hands and beautiful feet.',
    },
    {
      name: 'Perfection',
      price: '75',
      originalPrice: '80',
      duration: '1 hr 45 mins',
      popular: false,
      icon: Gem,
      bookingUrl:
        'https://victoriaparknailsspa.setmore.com/book?step=staff&products=cae22bc2-9fa6-4555-a560-67adb65db4ae&type=service',
      services: [
        { name: 'Shellac Manicure', included: true },
        { name: 'Shellac Pedicure', included: true },
      ],
      description: 'Worry-free, chip-proof shine from head to toe.',
    },
  ],
}
