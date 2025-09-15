import { Crown, Check, Star, Sparkles, Target, X } from 'lucide-react'

export default function LifetimePricing() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      {/* Section-specific background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/background/frame (1).svg" 
          alt="" 
          className="absolute top-10 right-10 w-24 sm:w-32 lg:w-40 opacity-12 mix-blend-soft-light"
        />
        <img 
          src="/images/background/flower (1).png" 
          alt="" 
          className="absolute bottom-10 left-10 w-18 sm:w-22 lg:w-28 opacity-10 mix-blend-multiply"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-[#ff0766] mr-2" />
            <span className="text-[#ff0766] text-sm font-semibold uppercase tracking-wide">
              Limited Time Offer
            </span>
            <Sparkles className="w-6 h-6 text-[#ff0766] ml-2" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Stop The Money Drain
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Why pay for multiple subscriptions when you can get everything in one place?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Streaming Column */}
          <div className="bg-gray-100 rounded-xl p-6 relative overflow-hidden">
            {/* Large X drawn across the entire table using SVG */}
            <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="10" y1="10" x2="90" y2="90" stroke="#ef4444" strokeWidth="0.8" opacity="0.8"/>
                <line x1="90" y1="10" x2="10" y2="90" stroke="#ef4444" strokeWidth="0.8" opacity="0.8"/>
              </svg>
            </div>
            
            {/* Content with overlay to show it's "crossed out" */}
            <div className="relative z-0 opacity-70">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Traditional Streaming</h3>
                <p className="text-gray-600 text-sm">Never-ending subscriptions</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="text-gray-700">Netflix Premium</span>
                  <span className="font-bold text-gray-900">$1,080</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="text-gray-700">Disney+ Bundle</span>
                  <span className="font-bold text-gray-900">$840</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="text-gray-700">HBO Max</span>
                  <span className="font-bold text-gray-900">$900</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="text-gray-700">Cable/Satellite</span>
                  <span className="font-bold text-gray-900">$4,800</span>
                </div>
              </div>

              <div className="text-center pt-4 border-t-2 border-gray-400">
                <p className="text-sm text-gray-600 mb-2">5-Year Total</p>
                <p className="text-3xl font-bold text-red-600">$7,620</p>
              </div>
            </div>
          </div>

          {/* IPTV NOMAD Column */}
          <div className="relative">
            {/* Crown decoration */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-[#ff0766] p-2 rounded-full shadow-lg">
                <Crown className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#ff0766]/20 rounded-xl blur-xl"></div>
            
            <div className="relative bg-white rounded-xl shadow-xl border-2 border-[#ff0766] p-6 pt-8">
              <div className="text-center mb-6">
                <div className="bg-[#ff0766] text-white px-4 py-2 rounded-full text-sm font-bold inline-flex items-center shadow-lg mb-4">
                  <Target className="w-4 h-4 mr-2" />
                  IPTV SATLINK
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">One Payment</h3>
                <p className="text-gray-600 text-sm">Years of content</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">25,000+ Live Channels</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">66,000+ Movies & Series</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">All Sports & Premium</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">4K/HD Quality</span>
                </div>
              </div>

              <div className="text-center mb-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Lifetime Access</p>
                <p className="text-4xl font-bold text-[#ff0766] mb-2">$289.99</p>
                
                <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg mb-4">
                  <p className="font-bold text-lg">SAVE $7,330!</p>
                  <p className="text-sm">That's 96.2% savings</p>
                </div>
              </div>

              <button className="w-full bg-[#ff0766] hover:bg-[#e6065c] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg mb-4">
                Stop The Money Drain Now →
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                30-Day Guarantee • Instant Setup • 50k+ Users
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
