/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Temporarily ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // Old WordPress-style URLs redirects
      {
        source: '/2016/10/aboutiptv.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/2016/10/contact-us.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/2016/10/howiptvworks.html',
        destination: '/blog/flix-iptv-complete-guide',
        permanent: true,
      },
      // Search query redirect
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 's',
            value: 'm3u%2Bplaylist',
          },
        ],
        destination: '/blog',
        permanent: false,
      },
      // General search redirect
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 's',
          },
        ],
        destination: '/blog',
        permanent: false,
      },
      // www to non-www redirects
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.iptvsatlink.com',
          },
        ],
        destination: 'https://iptvsatlink.com/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
