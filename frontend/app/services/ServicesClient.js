'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Code2, ShoppingCart, Search, Shield, Smartphone, TrendingUp } from 'lucide-react'

const iconMap = {
  'Custom Website Development': Code2,
  'E-commerce Store': ShoppingCart,
  'SEO Services': Search,
  'Website Maintenance': Shield,
  'Digital Marketing': TrendingUp,
  'Mobile App Development': Smartphone,
}

export default function ServicesClient({ initialServices }) {
  const [services, setServices] = useState(initialServices)
  const [loading, setLoading] = useState(false)

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
        console.log('Using initial services')
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
              Web Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Services</span> Nigeria
            </h1>
            <p className="text-xl text-neutral-600">Professional web solutions that help Nigerian businesses grow online. Custom websites, e-commerce, SEO & more.</p>
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
                  const IconComponent = iconMap[service.name] || Code2
                  const features = service.features || service.features_list || []
                  const price = service.price || service.starting_price
                  return (
                    <div 
                      key={index} 
                      className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-purple-300 transition-all duration-300" 
                      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                    >
                      <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="w-7 h-7 text-purple-600" />
                      </div>
                      <h2 className="text-xl font-bold text-neutral-900 mb-2">{service.name}</h2>
                      <p className="text-neutral-600 text-sm mb-4">{service.description || service.short_description}</p>
                      <div className="mb-4">
                        {price && price !== 'Custom Quote' ? (
                          <p className="text-2xl font-bold text-neutral-900">{price}{!price.includes('/') && <span className="text-sm font-normal text-neutral-500 ml-1">starting</span>}</p>
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
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Why Choose ProWeb Nigeria for Web Design</h2>
            <div className="space-y-4 text-neutral-600">
              <p>We build websites that solve real problems for Nigerian businesses. From getting more enquiries to improving checkout conversion, we understand your goals before writing any code.</p>
              <p>Our approach is practical: clear scope, honest timelines, no hidden fees. We optimise for mobile first, keep pages fast on Nigerian networks, and set up analytics to measure what matters.</p>
              <p>Whether you need a simple business website in Lagos, an e-commerce store in Abuja, or SEO services anywhere in Nigeria, we deliver results that grow your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-purple-100 mb-8">Get a free consultation and quote for your web design project.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">Get Free Quote <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
