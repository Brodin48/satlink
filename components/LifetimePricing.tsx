import { Crown, Check, Star, Sparkles } from 'lucide-react'

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
            Lifetime Access Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pay once, own forever. No monthly fees, no renewals, just unlimited entertainment.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative">
            {/* Crown decoration */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-[#ff0766] p-2 rounded-full shadow-lg">
                <Crown className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#ff0766]/20 rounded-xl blur-xl"></div>
            
            <div className="relative bg-white rounded-xl shadow-xl border-2 border-[#ff0766] p-8 pt-10">
              {/* Popular Badge */}
              <div className="flex items-center justify-center mb-6">
                <div className="bg-[#ff0766] text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                  <Star className="w-4 h-4 mr-2" />
                  LIFETIME DEAL
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-5xl font-bold text-gray-900">$199</span>
                  <div className="ml-3">
                    <div className="text-lg text-gray-400 line-through">$2,388</div>
                    <div className="text-xs text-gray-500">10 years</div>
                  </div>
                </div>
                <p className="text-gray-600 font-medium">One-time payment forever</p>
                <div className="mt-3 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold inline-block">
                  Save $2,189 (92% OFF)
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'All 25,000+ Premium Channels',
                  '4K/8K Ultra HD Quality',
                  'All Sports & Live Events Forever',
                  'Complete Movie & Series Library',
                  'Unlimited Multi-Device Access',
                  'VIP Priority Support',
                  'All Future Updates Included',
                  'Zero Monthly Fees Ever'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-[#ff0766] hover:bg-[#e6065c] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                Secure Lifetime Access
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                ⚡ Limited offer • 30-day guarantee • No hidden fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
