import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = (process.env.SITE_URL || 'https://nextgenstreamer.com').replace(/\/$/, '')
  const robotsTxt = `# *
User-agent: *
Allow: /

# Host
Host: ${baseUrl}

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
} 