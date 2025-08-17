import { CheckCircle, Star, Zap, Shield } from 'lucide-react'

export default function SEOContent() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main SEO Content */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Ultimate <span className="text-primary-600">IPTV Satlink</span> Experience
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover why millions choose <strong>IPTV Satlink</strong> as their preferred streaming solution. 
              Our premium <strong>IPTV Satlink</strong> subscription offers unmatched quality, reliability, 
              and value for your entertainment needs.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Premium IPTV Satlink Quality</h3>
              </div>
              <p className="text-gray-600">
                Experience crystal-clear HD and 4K streaming with our premium <strong>IPTV Satlink</strong> service. 
                Our advanced servers ensure your <strong>IPTV Satlink</strong> experience is always smooth and buffer-free.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Trusted IPTV Satlink Provider</h3>
              </div>
              <p className="text-gray-600">
                Since 2019, <strong>IPTV Satlink</strong> has been the go-to choice for streaming enthusiasts. 
                Join thousands of satisfied customers who rely on our <strong>IPTV Satlink</strong> service daily.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Fast IPTV Satlink Setup</h3>
              </div>
              <p className="text-gray-600">
                Get your <strong>IPTV Satlink</strong> subscription activated instantly. Our quick setup process 
                means you can start enjoying <strong>IPTV Satlink</strong> content within minutes of purchase.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Secure IPTV Satlink Access</h3>
              </div>
              <p className="text-gray-600">
                Your <strong>IPTV Satlink</strong> subscription is protected with enterprise-grade security. 
                Enjoy peace of mind with our reliable and secure <strong>IPTV Satlink</strong> platform.
              </p>
            </div>
          </div>

          {/* Why Choose IPTV Satlink */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Why <span className="text-primary-600">IPTV Satlink</span> is Your Best Choice
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                When you choose <strong>IPTV Satlink</strong>, you're choosing excellence in streaming entertainment. 
                Our <strong>IPTV Satlink</strong> service stands out from the competition with over 25,000 live TV channels, 
                26,000+ movies and TV shows, all delivered in stunning HD and 4K quality.
              </p>
              <p className="mb-4">
                What makes <strong>IPTV Satlink</strong> special is our commitment to reliability and customer satisfaction. 
                Our <strong>IPTV Satlink</strong> platform works seamlessly across all devices - Smart TVs, Android boxes, 
                iOS devices, computers, and more. With 99.9% uptime and 24/7 premium support, your <strong>IPTV Satlink</strong> 
                experience is always guaranteed to be exceptional.
              </p>
              <p>
                Don't settle for ordinary streaming services. Upgrade to <strong>IPTV Satlink</strong> today and discover 
                why we're the preferred choice for premium entertainment worldwide. Get your <strong>IPTV Satlink</strong> 
                subscription now and transform your viewing experience forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
