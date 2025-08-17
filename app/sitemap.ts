import { MetadataRoute } from 'next'

// Function to fetch WordPress posts for sitemap
async function getWordPressPosts() {
  try {
    const response = await fetch('https://blog.iptvsatlink.com/wp-json/wp/v2/posts?per_page=100', {
      next: { revalidate: 86400 }, // Revalidate daily
      headers: { 
        'Accept': 'application/json',
        'User-Agent': 'IPTV Satlink-Portal/1.0'
      },
    })
    
    if (!response.ok) {
      console.log('WordPress posts not available for sitemap')
      return []
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching WordPress posts for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getWordPressPosts()
  
  // Main pages (highest priority)
  const mainPages = [
    {
      url: 'https://iptvsatlink.com',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: 'https://iptvsatlink.com/pricing',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://iptvsatlink.com/free-trial',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://iptvsatlink.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Service pages (high priority)
  const servicePages = [
    {
      url: 'https://iptvsatlink.com/flix-iptv',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://iptvsatlink.com/flix-iptv-1',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://iptvsatlink.com/flix-iptv-activation-smart-tv',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://iptvsatlink.com/ibo-iptv',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://iptvsatlink.com/duplex-iptv-activation',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://iptvsatlink.com/iptv-reseller',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Subscription pages (high priority)
  const subscriptionPages = [
    {
      url: 'https://iptvsatlink.com/aroma-iptv-subscription-for-12-months',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://iptvsatlink.com/bob-iptv-subscription-for-12-months-premium-package-3-months-free',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://iptvsatlink.com/falcon-iptv-subscription-for-12-months-supports-2-devices',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // App download pages
  const appPages = [
    {
      url: 'https://iptvsatlink.com/apps/Windows_IPTV_Player_3.0.exe',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://iptvsatlink.com/apps/IpFoxTVSetup.exe',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Information pages
  const infoPages = [
    {
      url: 'https://iptvsatlink.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://iptvsatlink.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://iptvsatlink.com/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  // Static blog posts
  const staticBlogPages = [
    {
      url: 'https://iptvsatlink.com/blog/flix-iptv-complete-guide',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Dynamic WordPress blog posts
  const wordpressBlogPages = posts.map((post: any) => ({
    url: `https://iptvsatlink.com/blog/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Combine all pages
  return [
    ...mainPages,
    ...servicePages,
    ...subscriptionPages,
    ...appPages,
    ...infoPages,
    ...staticBlogPages,
    ...wordpressBlogPages,
  ]
}
