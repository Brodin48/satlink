import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: [
      'https://iptvsatlink.com/sitemap.xml',
      'https://iptvsatlink.com/sitemap-pages.xml',
      'https://iptvsatlink.com/sitemap-posts.xml',
      'https://iptvsatlink.com/sitemap_index.xml'
    ],
  }
}
