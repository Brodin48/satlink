import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: [
      'https://iptvsatlink.io/sitemap.xml',
      'https://iptvsatlink.io/sitemap-pages.xml',
      'https://iptvsatlink.io/sitemap-posts.xml',
      'https://iptvsatlink.io/sitemap_index.xml'
    ],
  }
}
