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
    
    // Add specific pages
    result.push({
      loc: '/about',
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    })
    
    // Removed /products page entry
    
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

    // Add new category index pages
    const newCategories = [
      '/getting-started',
      '/gear-hardware',
      '/software-tools',
      '/growth-monetization',
      '/advanced-troubleshooting',
    ];

    newCategories.forEach(categoryPath => {
      result.push({
        loc: categoryPath,
        changefreq: 'weekly',
        priority: 0.8, // Category pages are important
        lastmod: new Date().toISOString(),
      });
    });
    
    // Individual articles will be auto-discovered by next-sitemap
    // from the app directory structure.
    // The old /guides/ and /lists/ specific entries are removed.
    
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