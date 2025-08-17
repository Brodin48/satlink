import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Phone, Mail, Clock, MessageCircle, MapPin, Headphones } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact SA-IPTV - Get Support for Your SA-IPTV Subscription',
  description: 'Contact SA-IPTV for support with your SA-IPTV subscription. Get help via WhatsApp, email or phone for your SA-IPTV service.',
  keywords: 'contact SA-IPTV, SA-IPTV support, SA-IPTV help, SA-IPTV customer service, SA-IPTV contact'
}

export default function Contact() {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp Support",
      description: "Get instant help with your SA-IPTV subscription",
      contact: "+1 (323) 704‑4063",
      link: "https://wa.link/3hjbk3",
      available: "24/7 Available"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us your SA-IPTV service questions",
      contact: "contact@sa-iptv.io",
      link: "mailto:contact@sa-iptv.io",
      available: "Response within 24h"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Call us for immediate SA-IPTV assistance",
      contact: "+1 (323) 704‑4063",
      link: "tel:+13237044063",
      available: "Mon-Sat 11AM-10PM"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-blue-300">SA-IPTV</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Need help with your SA-IPTV subscription? Our premium support team is here to assist 
            you with all your SA-IPTV service needs.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Get SA-IPTV Support
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="flex justify-center text-primary-600 mb-6">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {method.description}
                </p>
                <div className="mb-4">
                  <div className="text-xl font-semibold text-primary-600 mb-2">
                    {method.contact}
                  </div>
                  <div className="text-sm text-gray-500">
                    {method.available}
                  </div>
                </div>
                <a 
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
                >
                  Contact Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            SA-IPTV FAQ
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                What is included in the SA-IPTV subscription?
              </h3>
              <p className="text-gray-600">
                Your SA-IPTV subscription includes access to 25,000+ live TV channels, 26,000+ movies and TV shows, 
                HD & 4K streaming quality, multi-device compatibility, and 24/7 premium support - all for a one-time payment of $289.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                How do I set up my SA-IPTV service?
              </h3>
              <p className="text-gray-600">
                After purchasing your SA-IPTV subscription, we'll provide you with login credentials and setup guides 
                for all supported devices. Our support team is available 24/7 to help with installation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                What devices work with SA-IPTV?
              </h3>
              <p className="text-gray-600">
                Our SA-IPTV service is compatible with Smart TVs, Android boxes, iOS devices, computers, 
                MAG boxes, Firestick, and many more devices. We support M3U, Xtream codes, and portal formats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your SA-IPTV Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to get your premium SA-IPTV subscription and enjoy unlimited entertainment.
          </p>
          <a 
            href="https://wa.link/3hjbk3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get SA-IPTV Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
