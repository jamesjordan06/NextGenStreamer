/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nextgenstreamer.com',
  generateRobotsTxt: true,
  outDir: './public',
  generateIndexSitemap: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/api/*'],
  additionalPaths: async (config) => {
    const result = []
    
    // Add specific paths
    result.push({
      loc: '/about',
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    })
    
    result.push({
      loc: '/products',
      changefreq: 'weekly', 
      priority: 0.8,
      lastmod: new Date().toISOString(),
    })
    
    result.push({
      loc: '/legal/privacy',
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    })
    
    result.push({
      loc: '/legal/disclaimer',
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    })
    
    result.push({
      loc: '/guides/complete-streaming-setup-2025',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    })
    
    result.push({
      loc: '/guides/xlr-vs-usb-microphones-2025',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    })
    
    result.push({
      loc: '/guides/headphones-vs-earbuds-2025',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    })
    
    return result
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }
  },
} 