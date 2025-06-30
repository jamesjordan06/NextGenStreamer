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

export function getFeaturedProducts(limit: number = 6): Product[] {
  // Featured premium products: Shure, Elgato, and quality monitors
  const featuredSlugs = [
    'shure-sm7b',                        // Shure SM7B - Industry standard microphone
    'elgato-stream-deck-xl',             // Elgato Stream Deck XL - Premium streaming controller
    'lg-ultragear-27-gaming-monitor',    // LG UltraGear 27" - High-refresh gaming monitor
    'elgato-stream-deck-plus',           // Elgato Stream Deck + - Audio mixer
    'alienware-aw3225qf-gaming-monitor', // Alienware 4K QD-OLED - Premium monitor
    'elgato-stream-deck'                 // Elgato Stream Deck MK.2 - Standard option
  ]
  
  const featuredProducts = featuredSlugs
    .map(slug => products.find(product => product.slug === slug))
    .filter(product => product !== undefined) as Product[]
  
  return featuredProducts.slice(0, limit)
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