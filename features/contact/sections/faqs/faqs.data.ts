export const faqsData = {
  title: 'Common Questions',
  description: 'Get quick answers to frequently asked questions about our services, scheduling, and what to expect.',
  badge: 'FAQs',
  faqs: [
    {
      question: 'Do I need an appointment?',
      answer: 'While we accept walk-ins when possible, we highly recommend booking an appointment to ensure availability and avoid waiting. You can book online, call us, or visit the salon.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit cards (Visa, MasterCard, American Express), debit cards, and contactless payments including Apple Pay and Google Pay.',
    },
    {
      question: 'Is parking available?',
      answer: 'Yes, we have free parking available in front of our salon and in the adjacent parking lot. Street parking is also available on 1st Street SE. We\'re conveniently located near Calgary Transit stops in Victoria Park.',
    },
    {
      question: 'Do you accept walk-ins?',
      answer: 'Yes, we welcome walk-ins! However, appointments are recommended to ensure availability and minimize wait times, especially during busy periods, weekends, and Calgary Stampede season. Book online or call us to secure your spot.',
    },
    {
      question: 'What sanitation practices do you follow?',
      answer: 'We follow strict Health Canada guidelines. All tools are sterilized in hospital-grade autoclaves, disposable items are used when possible, and stations are disinfected between clients.',
    },
    {
      question: 'Do you offer group discounts?',
      answer: 'Yes! We offer special rates for groups of 4 or more, bridal parties, Calgary Stampede groups, and special events. We customize pricing using our regular service menu—like Shellac Manicure and Deluxe Spa Pedicure combinations—so every guest receives the treatments they want. Contact us to arrange your group booking. Advanced booking required.',
    },
    {
      question: 'What\'s your cancellation policy?',
      answer: 'We require 24-hour notice for cancellations or rescheduling. Same-day cancellations may incur a fee. No-shows will be charged 50% of the service cost.',
    },
    {
      question: 'Are your services safe during pregnancy?',
      answer: 'Yes, our nail services are generally safe during pregnancy. We use well-ventilated areas and pregnancy-safe products. Please inform us if you\'re pregnant so we can take extra precautions.',
    },
  ],
  cta: {
    title: 'Have More Questions?',
    description: 'Can\'t find what you\'re looking for? We\'re here to help!',
    buttons: {
      primary: {
        text: 'Call Us Now',
        href: 'tel:+14037193600',
      },
      secondary: {
        text: 'Send Us a Message',
        href: '#contact-form',
      },
    },
  },
} as const
