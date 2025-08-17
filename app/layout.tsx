import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IPTV Satlink - Premium IPTV Service Since 2019 | 25,000+ Channels',
  description: 'Experience premium IPTV Satlink service with 25,000+ live channels & 26,000+ movies. Get instant IPTV Satlink access with HD/4K quality. Join millions who trust IPTV Satlink for ultimate entertainment.',
  keywords: 'IPTV Satlink, IPTV Satlink service, IPTV Satlink subscription, IPTV Satlink free trial, IPTV Satlink app, live tv, streaming, movies, sports channels',
  verification: {
    google: 'V8NWMAKmJDsAejY_oVeKROeukdyIIg-ZqK1t096BMTA',
  },
  openGraph: {
    title: 'IPTV Satlink - Premium IPTV Service',
    description: 'Get IPTV Satlink access with 25,000+ live TV channels and 26,000+ movies. Best IPTV Satlink subscription service.',
    url: 'https://iptvsatlink.com',
    siteName: 'IPTV Satlink',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Satlink - Premium IPTV Subscription',
    description: 'Get IPTV Satlink access with 25,000+ channels. Best IPTV Satlink service.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
