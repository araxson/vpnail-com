export type ServiceDetailData = {
  slug: string
  hero: HeroData
  treatmentInfo: TreatmentInfoData
  treatmentSteps: TreatmentStepsData
  ingredients: IngredientsData
  research: ResearchData
  results: ResultsData
  beforeAfter?: BeforeAfterData
  pricing: PricingData
  faqs: FAQsData
  testimonials: TestimonialsData
  cta: CTAData
  seo: SEOData
}

export type HeroData = {
  badge: string
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
}

export type TreatmentInfoData = {
  duration: string
  sessions?: string
  maintenance?: string
  satisfaction?: string
}

export type TreatmentStepsData = {
  title: string
  description: string
  steps: Array<{
    title: string
    description: string
    icon?: string
  }>
}

export type IngredientsData = {
  title: string
  description?: string
  ingredients: Array<{
    name: string
    grade?: string
    benefit: string
    details?: string
  }>
}

export type ResearchData = {
  title: string
  studies: Array<{
    title: string
    authors?: string
    journal: string
    methodology: string
    results: string
  }>
}

export type ResultsData = {
  title: string
  description: string
  stats?: Array<{
    label: string
    value: string
  }>
}

export type BeforeAfterCase = {
  id: string
  category: string
  title: string
  description: string
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export type BeforeAfterData = {
  title: string
  description?: string
  cases: BeforeAfterCase[]
}

export type PricingOption = {
  title: string
  price: string
  description: string
  features?: string[]
  highlighted?: boolean
}

export type PricingData = {
  title: string
  options: PricingOption[]
  financing?: {
    available: boolean
    startingAt?: string
  }
  notes?: string[]
}

export type FAQ = {
  category: string
  question: string
  answer: string
}

export type FAQsData = {
  title: string
  categories: Array<{
    name: string
    faqs: FAQ[]
  }>
}

export type Testimonial = {
  name: string
  role: string
  title: string
  content: string
  rating?: number
}

export type TestimonialsData = {
  title: string
  testimonials: Testimonial[]
}

export type CTAData = {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  phone?: string
}

export type SEOData = {
  title: string
  description: string
  ogImage?: string
  keywords?: string[]
}
