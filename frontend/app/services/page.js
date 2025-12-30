'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Code2, ShoppingCart, Search, Shield, Smartphone, TrendingUp } from 'lucide-react'

const iconMap = {
  'web-design': Code2,
  'ecommerce': ShoppingCart,
  'seo': Search,
  'maintenance': Shield,
  'digital-marketing': TrendingUp,
  'mobile-apps': Smartphone,
}

const fallbackServices = [
  { name: 'Custom Website', slug: 'web-design', short_description: 'High-performance websites built with modern technologies', features_list: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First', 'Analytics Setup'], starting_price: '₦250,000', is_featured: true },
  { name: 'E-commerce Store', slug: 'ecommerce', short_description: 'Complete online stores with payment integration', features_list: ['Paystack/Flutterwave', 'Inventory Management', 'Order Tracking', 'Customer Dashboard'], starting_price: '₦400,000', is_featured: true },
  { name: 'SEO Services', slug: 'seo', short_description: 'Boost your Google rankings and drive traffic', features_list: ['Keyword Research', 'On-Page SEO', 'Content Strategy', 'Monthly Reports'], starting_price: '₦150,000/mo', is_featured: false },
  { name: 'Website Maintenance', slug: 'maintenance', short_description: 'Keep your website secure and up-to-date', features_list: ['Security Updates', 'Performance Monitoring', 'Backup & Recovery', 'Content Updates'], starting_price: '₦70,000/mo', is_featured: false },
  { name: 'Digital Marketing', slug: 'digital-marketing', short_description: 'Grow your business with targeted campaigns', features_list: ['Social Media Ads', 'Google Ads', 'Email Marketing', 'Analytics'], starting_price: null, is_featured: false },
  { name: 'Mobile App', slug: 'mobile-apps', short_description: 'iOS and Android apps for your business', features_list: ['Cross-Platform', 'Push Notifications', 'Offline Support', 'App Store Submission'], starting_price: null, is_featured: false },
]

export default function ServicesPage() {
  const [services, setServices] = useState(fallbackServices)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadServices() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api'
        const res = await fetch(`${API_URL}/core/services/`, { cache: 'no-store', headers: { 'Accept': 'application/json' } })
        if (res.ok) {
          const data = await res.json()
          if (data && data.length > 0) setServices(data)
        }
      } catch (error) {
        console.log('Using fallback services')
      } finally {
        setLoading(false)
      }
    }
    loadServices()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Services</span>
            </h1>
            <p className="text-xl text-neutral-600">Professional web solutions that help Nigerian businesses grow online.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {loading ? (
              <div className="text-center py-10"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-600 mx-auto"></div></div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => {
                  const IconComponent = iconMap[service.slug] || Code2
                  const features = service.features_list || []
                  return (
                    <div 
                      key={index} 
                      className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-purple-300 transition-all duration-300" 
                      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="w-7 h-7 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">{service.name}</h3>
                      <p className="text-neutral-600 text-sm mb-4">{service.short_description}</p>
                      <div className="mb-4">
                        {service.starting_price ? (
                          <p className="text-2xl font-bold text-neutral-900">{service.starting_price}{!service.starting_price.includes('/mo') && <span className="text-sm font-normal text-neutral-500 ml-1">starting</span>}</p>
                        ) : (
                          <p className="text-lg font-semibold text-purple-600">Get a Quote</p>
                        )}
                      </div>
                      {features.length > 0 && (
                        <div className="space-y-2 mb-6">
                          {features.slice(0, 4).map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-neutral-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <Link href="/contact" className="w-full block text-center py-3 rounded-lg font-medium transition-all bg-purple-600 text-white hover:bg-purple-700">Get Started</Link>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Why Choose ProWeb Nigeria</h2>
            <div className="space-y-4 text-neutral-600">
              <p>We build websites that solve real problems. From getting more enquiries to improving checkout conversion, we understand your goals before writing any code.</p>
              <p>Our approach is practical: clear scope, honest timelines, no hidden fees. We optimise for mobile first, keep pages fast on Nigerian networks, and set up analytics to measure what matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-purple-100 mb-8">Get a free consultation and quote for your project.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">Get Free Quote <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
