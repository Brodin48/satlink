import SetupGuide from '../../components/SetupGuide'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Complete IPTV Setup Guide - IPTV Satlink | Easy Installation Instructions',
  description: 'Step-by-step IPTV Satlink setup guide for all devices. Learn how to install and configure IPTV Satlink on Android, iOS, Firestick, Smart TV, MAG Box, and PC/Mac.',
  keywords: 'IPTV Satlink setup, IPTV installation, TiviMate setup, IPTV Smarters Pro, Firestick IPTV, Smart TV IPTV, MAG Box setup, IPTV configuration',
  openGraph: {
    title: 'Complete IPTV Setup Guide - IPTV Satlink',
    description: 'Easy step-by-step instructions to setup IPTV Satlink on any device. Get streaming in minutes.',
    url: 'https://iptvsatlink.com/setup-guide',
    siteName: 'IPTV Satlink',
    type: 'article',
  }
}

export default function SetupGuidePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img 
          src="/images/background/hero-right-top (2).png" 
          alt="" 
          className="absolute top-0 right-0 w-64 sm:w-80 lg:w-96 opacity-20 mix-blend-soft-light"
        />
        <img 
          src="/images/background/hero-right-bottom.svg" 
          alt="" 
          className="absolute bottom-0 right-0 w-48 sm:w-60 lg:w-72 opacity-15 mix-blend-overlay"
        />
        <img 
          src="/images/background/section-curve.png" 
          alt="" 
          className="absolute bottom-0 left-0 w-full opacity-10 mix-blend-soft-light"
        />
        <img 
          src="/images/background/flower (1).png" 
          alt="" 
          className="absolute top-1/4 left-8 w-20 sm:w-28 lg:w-36 opacity-15 mix-blend-multiply"
        />
        <img 
          src="/images/background/box-shape.png" 
          alt="" 
          className="absolute top-1/2 right-1/4 w-16 sm:w-20 lg:w-24 opacity-12 mix-blend-soft-light"
        />
        <img 
          src="/images/background/line-red (1).svg" 
          alt="" 
          className="absolute top-2/3 left-1/3 w-24 sm:w-32 lg:w-40 opacity-18 mix-blend-multiply"
        />
        <img 
          src="/images/background/line-red-top (2).png" 
          alt="" 
          className="absolute bottom-1/3 right-1/3 w-28 sm:w-36 lg:w-44 opacity-15 mix-blend-soft-light"
        />
        <img 
          src="/images/background/frame (1).svg" 
          alt="" 
          className="absolute top-1/3 right-8 w-20 sm:w-24 lg:w-32 opacity-12 mix-blend-overlay"
        />
        <img 
          src="/images/background/feedback-circle (1).svg" 
          alt="" 
          className="absolute bottom-1/4 left-1/4 w-18 sm:w-22 lg:w-28 opacity-10 mix-blend-multiply"
        />
      </div>
      
      <div className="relative z-10">
        <Header />
        <main className="pt-24 sm:pt-28 lg:pt-32">
          <SetupGuide />
        </main>
        <Footer />
      </div>
    </div>
  )
}