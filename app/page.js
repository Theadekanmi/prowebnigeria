'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Counter from './components/Counter'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, TrendingUp, Users, Award, CheckCircle, Code2, ShoppingCart, Search, ExternalLink } from 'lucide-react'

export default function Home() {
  const [currentHeadline, setCurrentHeadline] = useState(0)

  const headlines = [
    'Leading Website Designer in Nigeria - Professional Web Development Company',
    'Expert Web Design Services in Lagos, Abuja, Osogbo & Ibadan - ProWeb Nigeria',
    'Top Web Developer in Nigeria & West Africa - Custom Websites That Drive Business Growth'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])
  const services = [
    {
      icon: Code2,
      title: 'Custom Web Development',
      description: 'High-performance websites built with React, Next.js, and modern technologies'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores that convert visitors into customers'
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      description: 'Boost your online visibility and drive targeted traffic'
    },
    {
      icon: TrendingUp,
      title: 'Website Maintenance',
      description: '24/7 support, security updates, and performance monitoring'
    }
  ]

  const stats = [
    { number: '22+', label: 'Happy Clients' },
    { number: '20+', label: 'Projects Completed' },
    { number: '4', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <main className="min-h-screen">
              <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            alt="Technology background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-gray-900/90 to-pink-900/95 z-[1]"></div>
        
        {/* Pattern Overlay for texture */}
        <div className="absolute inset-0 z-[2] opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-purple-600 rounded-full text-sm font-semibold mb-6">
              🚀 Nigeria's Leading Web Development Company
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[200px] md:min-h-[240px] flex items-center justify-center">
              <span className="transition-all duration-500">
                {headlines[currentHeadline]}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              As a top <strong>website designer in Nigeria</strong> and <strong>West Africa</strong>, we build high-performance websites that drive measurable growth. 
              Serving businesses across Lagos, Abuja, Osogbo, Ibadan, and throughout Nigeria with modern web development technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/case-studies"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                View Success Stories
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number.includes('+') ? (
                      <>
                        <Counter end={parseInt(stat.number)} suffix="+" />
                      </>
                    ) : (
                      stat.number
                    )}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From custom web development to e-commerce solutions, we provide comprehensive digital services that drive real business results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link 
                    href="/services" 
                    className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our CEO Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Tech Lead</span>
              </h2>
              <p className="text-xl text-gray-600">
                Led by an experienced developer passionate about building innovative solutions
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1 flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Adekanmi Adedigba
                  </h3>
                  <p className="text-xl text-purple-600 font-semibold mb-4">
                    CEO & Tech Lead
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    With years of experience in web development and a passion for creating innovative digital 
                    solutions, The-adekanmi leads our team in delivering exceptional results for Nigerian businesses. 
                    Specializing in React, Next.js, and modern web technologies.
                  </p>
                  <a
                    href="https://the-adekanmi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <span>View Portfolio</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business Online?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get a free consultation and discover how our services can drive growth for your Nigerian business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

        <Footer />
        <FloatingWhatsApp />
    </main>
  )
}
