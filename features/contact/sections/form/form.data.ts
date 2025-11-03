export const formData = {
  title: 'Ready to Start Your Journey?',
  description: 'Fill out the form below and a member of our team will get back to you shortly. We\'re excited to be a part of your wellness journey.',
  badge: 'Contact Us',
  fields: {
    name: {
      label: 'Name',
      placeholder: 'Your name',
      required: true,
    },
    email: {
      label: 'Email',
      placeholder: 'your@email.com',
      required: true,
    },
    phone: {
      label: 'Phone',
      placeholder: '(403) 719-3600',
      required: false,
    },
    service: {
      label: 'Service Interest',
      placeholder: 'Select a service',
      options: [
        'Manicures',
        'Pedicures',
        'Nail Extensions',
        'Nail Art',
        'Massage',
        'Waxing',
        'Other',
      ],
      required: false,
    },
    message: {
      label: 'Message',
      placeholder: 'Tell us about your goals and any questions you have...',
      required: true,
    },
  },
  submitButton: 'Send Message',
} as const
