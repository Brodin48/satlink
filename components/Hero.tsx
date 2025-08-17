import { Play, Star, Users, Zap, Shield, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative text-white overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(/background.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll' // Changed from fixed for mobile compatibility
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Premium <span className="text-accent-400">IPTV Satlink</span> Service
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
            Experience the best <strong>IPTV Satlink</strong> service since 2019! Our premium <strong>IPTV Satlink subscription</strong> 
            offers 25,000+ Live TV Channels & 26,000+ Movies/TV Shows. Get instant <strong>IPTV Satlink access</strong> 
            <span className="hidden sm:inline"> with HD & 4K quality streaming. Join millions who trust IPTV Satlink for ultimate entertainment.</span>
            <span className="sm:hidden"> - your gateway to unlimited entertainment.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <a 
              href="https://wa.link/byh2yk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Start Free Trial
            </a>
            <a 
              href="#pricing" 
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors"
            >
              View Pricing
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto px-4">
            <div className="text-center bg-black bg-opacity-20 rounded-lg p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-400 mb-1 sm:mb-2">25K+</div>
              <div className="text-xs sm:text-sm lg:text-base">Live TV Channels</div>
            </div>
            <div className="text-center bg-black bg-opacity-20 rounded-lg p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-400 mb-1 sm:mb-2">26K+</div>
              <div className="text-xs sm:text-sm lg:text-base">Movies & TV Shows</div>
            </div>
            <div className="text-center bg-black bg-opacity-20 rounded-lg p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-400 mb-1 sm:mb-2">99.9%</div>
              <div className="text-xs sm:text-sm lg:text-base">Uptime</div>
            </div>
            <div className="text-center bg-black bg-opacity-20 rounded-lg p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-400 mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm lg:text-base">Premium Support</div>
            </div>
          </div>
        </div>

        {/* Floating elements - Hidden on mobile for better performance */}
        <div className="hidden lg:block absolute top-20 left-10 floating">
          <div className="w-12 h-12 xl:w-16 xl:h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 xl:w-8 xl:h-8 text-accent-400" />
          </div>
        </div>
        <div className="hidden lg:block absolute top-40 right-10 floating" style={{animationDelay: '2s'}}>
          <div className="w-10 h-10 xl:w-12 xl:h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 xl:w-6 xl:h-6 text-accent-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
