export interface Product {
  asin: string
  slug: string
  name: string
  description: string
  amazonUrl: string
  imageUrl: string
  features: string[]
  pros: string[]
  cons: string[]
  categories: string[]
  priceNote: string
  isAffiliate: boolean
}

export interface ProductList {
  slug: string
  title: string
  description: string
  products: string[] // Array of product slugs
  category: string
} 