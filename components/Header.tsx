'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Mail, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full flex justify-center">
      <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 py-4">
        <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg border border-gray-200/50 px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/logo.svg" 
                alt="IPTV Satlink Logo" 
                className="h-6 sm:h-8 lg:h-10 w-auto object-contain"
              />
            </div>

            {/* Contact Information - Desktop */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a 
                href="https://wa.link/byh2yk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
              >
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.934 3.79"/>
                </svg>
                <span className="text-sm lg:text-base font-medium">+1 (323) 704-4063</span>
              </a>
              <div className="flex items-center text-gray-700">
                <Mail className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-sm lg:text-base font-medium">contact@iptvsatlink.com</span>
              </div>
              
              {/* Dropdown Menu */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors p-2"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  type="button"
                >
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Content */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Home
                    </a>
                    <a href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      About
                    </a>
                    <a href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Blog
                    </a>
                    <a href="#features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Features
                    </a>
                    <a href="/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Pricing
                    </a>
                    <a href="#testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Reviews
                    </a>
                    <a href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Contact
                    </a>
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <a 
                        href="https://wa.link/byh2yk" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm bg-primary-600 text-white hover:bg-primary-700 transition-colors mx-2 rounded"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200/50">
              <div className="space-y-3">
                <a 
                  href="https://wa.link/byh2yk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 py-2 hover:text-green-600 transition-colors"
                >
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.934 3.79"/>
                  </svg>
                  <span className="text-sm font-medium">+1 (323) 704-4063</span>
                </a>
                <div className="flex items-center text-gray-700 py-2">
                  <Mail className="w-4 h-4 text-blue-500 mr-3" />
                  <span className="text-sm font-medium">contact@iptvsatlink.com</span>
                </div>
                
                {/* Mobile Menu Items */}
                <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
                  <a href="/" className="block text-gray-700 hover:text-primary-600 py-2 transition-colors">
                    Home
                  </a>
                  <a href="/about" className="block text-gray-700 hover:text-primary-600 py-2 transition-colors">
                    About
                  </a>
                  <a href="/blog" className="block text-gray-700 hover:text-primary-600 py-2 transition-colors">
                    Blog
                  </a>
                  <a href="#features" className="block text-gray-700 hover:text-primary-600 py-2 transition-colors">
                    Features
                  </a>
                  <a href="/pricing" className="block text-gray-700 hover:text-primary-600 py-2 transition-colors">
                    Pricing
                  </a>
                  <a href="#testimonials" className="block text-gray-700 hover:text-primary-600 py-2 transition-colors">
                    Reviews
                  </a>
                  <a href="/contact" className="block text-gray-700 hover:text-primary-600 py-2 transition-colors">
                    Contact
                  </a>
                </div>
                
                <div className="pt-3">
                  <a 
                    href="https://wa.link/byh2yk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
