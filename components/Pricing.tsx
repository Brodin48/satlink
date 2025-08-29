import { Check, Star, Crown, Shield, Zap, Tv, Users, Play } from 'lucide-react'

export default function Pricing() {
  const devicePlans = [
    {
      name: "1 Device",
      devices: 1,
      popular: false,
      plans: [
        { 
          duration: "1 Month", 
          price: "$10.99", 
          originalPrice: "$19.99", 
          buyLink: "https://wa.link/byh2yk", 
          savings: "45%",
          badge: "SAVE 45%"
        },
        { 
          duration: "3 Months", 
          price: "$25.99", 
          originalPrice: "$59.97", 
          buyLink: "https://wa.link/byh2yk", 
          savings: "57%",
          badge: "POPULAR"
        },
        { 
          duration: "6 Months", 
          price: "$39.99", 
          originalPrice: "$119.94", 
          buyLink: "https://wa.link/byh2yk", 
          savings: "67%",
          badge: "BEST VALUE"
        },
        { 
          duration: "12 Months", 
          price: "$49.99", 
          originalPrice: "$139.88", 
          buyLink: "https://wa.link/byh2yk", 
          savings: "64%",
          badge: "MOST POPULAR"
        },
        { 
          duration: "24 Months", 
          price: "$89.99", 
          originalPrice: "$279.76", 
          buyLink: "https://wa.link/byh2yk", 
          savings: "68%",
          badge: "BEST DEAL"
        }
      ]
    }
  ]

  const features = [
    "25,000+ Live TV Channels",
    "26,000+ Movies & TV Shows",
    "HD & 4K Quality Streaming",
    "99.9% Uptime Guarantee",
    "24/7 Customer Support",
    "Multi-Device Support",
    "EPG Guide Included",
    "Anti-Freeze Technology"
  ]

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 relative">
      {/* Section-specific background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/background/box-shape.png" 
          alt="" 
          className="absolute top-10 right-10 w-16 sm:w-20 lg:w-24 opacity-15 mix-blend-soft-light"
        />
        <img 
          src="/images/background/flower (1).png" 
          alt="" 
          className="absolute bottom-10 left-10 w-18 sm:w-22 lg:w-28 opacity-12 mix-blend-multiply"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Choose Your Perfect <span className="text-primary-600">Plan</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Get started with our premium <strong>IPTV Satlink</strong> subscription today. 
            <span className="hidden sm:inline"> Choose the plan that best fits your needs and start streaming thousands of channels instantly.</span>
          </p>
        </div>

        {/* Free Trial CTA */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-primary-50 text-primary-600 px-4 sm:px-6 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 mr-2" />
            Try Free for 24 Hours - No Credit Card Required
          </div>
          <div>
            <a 
              href="https://wa.link/byh2yk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
          </div>
        </div>

        {/* First Row - 3 Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {devicePlans[0].plans.slice(0, 3).map((plan, planIndex) => (
            <div 
              key={planIndex} 
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full flex flex-col ${
                planIndex === 1 ? 'ring-4 ring-primary-500 ring-opacity-50' : ''
              }`}
            >
              {/* Badge */}
              <div className={`absolute top-0 left-0 right-0 text-center py-3 text-xs font-bold text-white ${
                planIndex === 1 ? 'bg-gradient-to-r from-primary-500 to-primary-600' : 
                'bg-gradient-to-r from-gray-600 to-gray-700'
              }`}>
                {plan.badge}
              </div>

              <div className="p-4 sm:p-6 pt-16 h-full flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 px-2 py-2 mt-2">
                    {plan.duration}
                  </h3>
                  <div className="flex items-center justify-center mb-3">
                    <Users className="w-4 h-4 text-primary-500 mr-1" />
                    <span className="text-primary-500 font-semibold text-sm">1 Device</span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <span className="text-gray-400 line-through text-sm">{plan.originalPrice}</span>
                      <span className="text-2xl sm:text-3xl font-black text-gray-800">{plan.price}</span>
                    </div>
                    <div className="text-gray-600 text-xs">Save {plan.savings}</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 text-left flex-grow mb-4">
                  {features.slice(0, 5).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <Check className="w-2 h-2 text-green-500" />
                      </div>
                      <span className="text-gray-700 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buy Button */}
                <div className="mt-auto">
                  <a 
                    href={plan.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105 text-sm ${
                      planIndex === 1 ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700' :
                      'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                    }`}
                  >
                    <Crown className="w-4 h-4 mr-1" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12">
          {devicePlans[0].plans.slice(3, 5).map((plan, planIndex) => (
            <div 
              key={planIndex + 3} 
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full flex flex-col ${
                planIndex === 0 ? 'ring-4 ring-primary-500 ring-opacity-50' : ''
              }`}
            >
              {/* Badge */}
              <div className={`absolute top-0 left-0 right-0 text-center py-3 text-xs font-bold text-white ${
                planIndex === 0 ? 'bg-gradient-to-r from-primary-500 to-primary-600' : 
                'bg-gradient-to-r from-gray-600 to-gray-700'
              }`}>
                {plan.badge}
              </div>

              <div className="p-4 sm:p-6 pt-16 h-full flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 px-2 py-2 mt-2">
                    {plan.duration}
                  </h3>
                  <div className="flex items-center justify-center mb-3">
                    <Users className="w-4 h-4 text-primary-500 mr-1" />
                    <span className="text-primary-500 font-semibold text-sm">1 Device</span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <span className="text-gray-400 line-through text-sm">{plan.originalPrice}</span>
                      <span className="text-2xl sm:text-3xl font-black text-gray-800">{plan.price}</span>
                    </div>
                    <div className="text-gray-600 text-xs">Save {plan.savings}</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 text-left flex-grow mb-4">
                  {features.slice(0, 5).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <Check className="w-2 h-2 text-green-500" />
                      </div>
                      <span className="text-gray-700 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buy Button */}
                <div className="mt-auto">
                  <a 
                    href={plan.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105 text-sm ${
                      planIndex === 0 ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700' :
                      'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                    }`}
                  >
                    <Crown className="w-4 h-4 mr-1" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            All Plans Include
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
