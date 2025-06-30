import { Product } from '@/types/product'
import productsData from '@/data/products.json'

export const products: Product[] = productsData

export function getAllProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug)
}

export function getProductByAsin(asin: string): Product | undefined {
  return products.find(product => product.asin === asin)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => 
    product.categories.some(cat => 
      cat.toLowerCase() === category.toLowerCase()
    )
  )
}

export function getFeaturedProducts(limit: number = 3): Product[] {
  // For now, return first few products. In the future, this could be based on a featured flag
  return products.slice(0, limit)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.features.some(feature => feature.toLowerCase().includes(lowercaseQuery)) ||
    product.categories.some(category => category.toLowerCase().includes(lowercaseQuery))
  )
}

export function getRelatedProducts(currentProduct: Product, limit: number = 3): Product[] {
  // Get products from same categories, excluding current product
  const related = products.filter(product => 
    product.slug !== currentProduct.slug &&
    product.categories.some(category => 
      currentProduct.categories.indexOf(category) !== -1
    )
  )
  
  return related.slice(0, limit)
} 