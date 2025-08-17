import { NextResponse } from 'next/server'

export async function GET() {
  const staticPages = [
    {
      url: 'https://iptvsatlink.io',
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      url: 'https://iptvsatlink.io/about',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: 'https://iptvsatlink.io/blog',
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      url: 'https://iptvsatlink.io/pricing',
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: 'https://iptvsatlink.io/contact',
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: 'https://iptvsatlink.io/privacy-policy',
      changefreq: 'monthly',
      priority: '0.6'
    },
    {
      url: 'https://iptvsatlink.io/flix-iptv-activation-smart-tv',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: 'https://iptvsatlink.io/ibo-iptv',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: 'https://iptvsatlink.io/duplex-iptv-activation',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: 'https://iptvsatlink.io/apps/Windows_IPTV_Player_3.0.exe',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: 'https://iptvsatlink.io/apps/IpFoxTVSetup.exe',
      changefreq: 'monthly',
      priority: '0.8'
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
