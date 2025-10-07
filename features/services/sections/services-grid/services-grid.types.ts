export type Service = {
  id: string
  title: string
  description: string
  price: string
  duration: string
  href: string
}

export type ServiceSubcategory = {
  name: string
  services: Service[]
}

export type ServiceCategory = {
  id: string
  title: string
  subcategories: ServiceSubcategory[]
}

export type ServicesGridData = {
  categories: ServiceCategory[]
}
