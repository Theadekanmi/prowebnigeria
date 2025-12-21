import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, CheckCircle, Code2, ShoppingCart, Search, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Web Design Osogbo | Website Designer Osun State',
  description: 'Top web design company in Osogbo, Osun State. Fast, mobile-friendly websites that drive growth. Free quote. Serving Osogbo, Ile-Ife & all Osun.',
  keywords: [
    'web design osogbo',
    'website designer osogbo',
    'web development osogbo',
    'web design company osogbo',
    'ecommerce development osogbo',
    'SEO services osogbo',
    'digital marketing osogbo',
    'website development osogbo',
    'osogbo web designer',
    'osogbo web development',
    'custom website osogbo',
    'responsive web design osogbo',
    'web design osun state',
    'website designer osun',
    'web development osun',
    'osun state web design',
    'professional web design osogbo',
    'affordable web design osogbo'
  ],
  openGraph: {
    title: 'Web Design Osogbo | Website Designer Osun State',
    description: 'Professional web design company in Osogbo, Osun State. Fast, mobile-friendly websites that drive business growth. Free quote.',
    url: 'https://prowebnigeria.ng/locations/osogbo',
  },
  alternates: {
    canonical: '/locations/osogbo',
  },
}

export default function OsogboPage() {
  const services = [
    {
      icon: Code2,
      title: 'Custom Web Development Osogbo',
      description: 'Professional websites built with React, Next.js, and modern technologies for Osogbo businesses'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions Osogbo',
      description: 'Complete online stores that convert visitors into customers for Osogbo retailers'
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing Osogbo',
      description: 'Boost your Osogbo business online visibility and drive targeted traffic'
    },
    {
      icon: TrendingUp,
      title: 'Website Maintenance Osogbo',
      description: '24/7 support, security updates, and performance monitoring for Osogbo websites'
    }
  ]

  const areas = [
    'Osogbo Central', 'Oke Baale', 'Oja Oba', 'Oke Fia', 'Ilesa Road', 'Gbongan Road', 
    'Ile Ife Road', 'Ede Road', 'Ikirun Road', 'Iwo Road', 'Ogbomoso Road', 'Ilesa'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
              📍 Serving Osogbo, Osun State
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Web Design Services in Osogbo
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              As a leading <strong>website designer in Osogbo</strong> and <strong>Osun State</strong>, we help businesses across 
              Osun State establish their digital presence with cutting-edge web solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Web Development Services in Osogbo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive web solutions for Osogbo businesses, from startups to established enterprises across Osun State
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local expertise copy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Websites that Work in Osogbo</h2>
            <p className="mb-6">
              We build for Osogbo’s realities: many users are on mobile, network speeds vary, and trust is everything. Your site will
              load fast, speak clearly, and guide visitors to take action—call, WhatsApp, or request a quote. Whether you serve Oke Baale,
              Oke Fia, Oja Oba or around Ilesa Road, we make sure your business looks credible and is easy to reach.
            </p>
            <p className="mb-6">
              Need content help? We’ll help turn your services into simple, compelling copy. Already have a site? We’ll audit speed and
              SEO, fix the blockers, and track results. The goal is simple: more enquiries from the right customers at a fair budget.
            </p>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Areas We Serve in Osun State
            </h2>
            <p className="text-xl text-gray-600">
              Providing web design services across Osun State and surrounding areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg text-center">
                <MapPin className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <span className="font-semibold text-gray-800">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose ProWeb Nigeria for Osogbo Web Design?
            </h2>
            <p className="text-xl text-gray-600">
              We understand the unique needs of Osogbo businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Local Understanding</h3>
              <p className="text-gray-600">We understand Osogbo's business landscape and cultural nuances</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">Competitive rates tailored for Osogbo businesses</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times to get your business online faster</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Start Your Osogbo Web Project?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg">
                <Phone className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">08100098339</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg">
                <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">prowebnigeria@gmail.com</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-600">Mon-Fri: 8AM-6PM</p>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
