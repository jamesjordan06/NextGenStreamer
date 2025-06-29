import { NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `# *
User-agent: *
Allow: /

# Host
Host: https://nextgenstreamer.com

# Sitemaps
Sitemap: https://nextgenstreamer.com/sitemap.xml`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
} 