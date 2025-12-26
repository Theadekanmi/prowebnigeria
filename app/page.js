'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Counter from './components/Counter'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Code2, ShoppingCart, Search, TrendingUp, CheckCircle, Star, Play } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom websites built with React, Next.js, and modern technologies for optimal performance.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Online stores with Paystack & Flutterwave integration that convert visitors to customers.'
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Rank higher on Google and drive organic traffic to your Nigerian business.'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Social media marketing, Google Ads, and strategies that grow your business.'
    }
  ]

  const stats = [
    { number: 22, suffix: '+', label: 'Happy Clients' },
    { number: 20, suffix: '+', label: 'Projects Delivered' },
    { number: 4, suffix: '+', label: 'Years Experience' },
    { number: 24, suffix: '/7', label: 'Support' }
  ]

  const testimonials = [
    { name: 'Adebayo Johnson', company: 'TechStart Lagos', text: 'ProWeb Nigeria delivered an exceptional website that increased our leads by 300%. Highly recommended!', rating: 5 },
    { name: 'Chioma Okafor', company: 'Fashion Hub', text: 'Our e-commerce store is beautiful and easy to manage. Sales have doubled since launch.', rating: 5 },
    { name: 'Ibrahim Musa', company: 'Abuja Consulting', text: 'Professional team, great communication, and they delivered on time. Will work with them again.', rating: 5 }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Clean Professional Design */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-neutral-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Nigeria's Top-Rated Web Design Company
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                We Build Websites That
                <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Grow Nigerian Businesses
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Professional web design & development for businesses in Lagos, Abuja, and across Nigeria. 
                Fast, SEO-optimized websites that convert visitors into customers.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 font-semibold rounded-xl hover:bg-neutral-100 transition-all shadow-lg shadow-white/10"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  <Play className="w-5 h-5" />
                  View Our Work
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      <Counter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-neutral-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-purple-600 font-semibold mb-2">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Services That Drive Results
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                From custom websites to e-commerce solutions, we help Nigerian businesses succeed online.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-2xl border border-neutral-200 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                    <service.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <Link 
                    href="/services" 
                    className="text-purple-600 text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <p className="text-purple-600 font-semibold mb-2">Why ProWeb Nigeria</p>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  We're Different From Other Web Designers
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  We don't just build websites—we build digital assets that generate leads, 
                  sales, and growth for your Nigerian business.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Modern tech stack (React, Next.js) for fast websites',
                    'SEO-optimized from day one to rank on Google',
                    'Mobile-first design for Nigerian users',
                    'Paystack & Flutterwave payment integration',
                    'Ongoing support and maintenance',
                    'Affordable pricing for Nigerian businesses'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-semibold rounded-xl hover:bg-neutral-800 transition-colors"
                  >
                    Learn More About Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              {/* Right - Stats Card */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-neutral-200">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-neutral-600">Rated 5/5 by our clients</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-purple-50 rounded-2xl">
                    <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
                    <div className="text-sm text-neutral-600">Project Completion</div>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-2xl">
                    <div className="text-3xl font-bold text-pink-600 mb-1">48hrs</div>
                    <div className="text-sm text-neutral-600">Response Time</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-2xl">
                    <div className="text-3xl font-bold text-green-600 mb-1">300%</div>
                    <div className="text-sm text-neutral-600">Avg. Traffic Increase</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                    <div className="text-sm text-neutral-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-purple-600 font-semibold mb-2">Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                What Our Clients Say
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 bg-neutral-50 rounded-2xl">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-6">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-purple-600 font-semibold mb-2">Our Reach</p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Serving Businesses Across Nigeria
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { city: 'Lagos', areas: 'Victoria Island, Lekki, Ikeja, Yaba' },
                { city: 'Abuja', areas: 'Maitama, Wuse, Garki, Asokoro' },
                { city: 'Ibadan', areas: 'Bodija, Mokola, Ring Road' },
                { city: 'Osogbo', areas: 'Osun State & environs' }
              ].map((location, index) => (
                <Link 
                  key={index}
                  href={`/locations/${location.city.toLowerCase()}`}
                  className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-purple-300 hover:shadow-lg transition-all group"
                >
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {location.city}
                  </h3>
                  <p className="text-sm text-neutral-600">{location.areas}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Website?
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              Get a free consultation and quote for your project. No obligations, just honest advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 font-semibold rounded-xl hover:bg-neutral-100 transition-all"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:08100098339"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border border-neutral-700 hover:bg-neutral-800 transition-all"
              >
                Call: 08100098339
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
