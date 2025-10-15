export const journeyData = {
  title: 'Your Treatment Journey',
  subtitle: 'From your first consultation to celebrating your transformation, we\'re with you every step of the way',
  description: 'We guide you through each stage of your wellness journey with care and expertise',
  steps: [
    {
      id: 'consultation',
      phase: 'Your Story Begins',
      title: 'Complimentary Consultation',
      description: 'Share your concerns and goals in a judgment-free environment. We\'ll assess your needs and explain your options.',
      icon: 'MessageSquare',
    },
    {
      id: 'planning',
      phase: 'Your Plan Takes Shape',
      title: 'Treatment Planning & Scheduling',
      description: 'We\'ll create a personalized treatment plan that fits your budget, schedule, and goals.',
      icon: 'Calendar',
    },
    {
      id: 'treatment',
      phase: 'Your Transformation Begins',
      title: 'First Treatment Experience',
      description: 'Experience our professional, compassionate care in a comfortable, welcoming environment.',
      icon: 'Sparkles',
    },
    {
      id: 'results',
      phase: 'Your Results Unfold',
      title: 'Progress & Maintenance',
      description: 'Watch your confidence return as results develop. We\'ll guide you through every stage of your transformation.',
      icon: 'TrendingUp',
    },
  ],
} as const
