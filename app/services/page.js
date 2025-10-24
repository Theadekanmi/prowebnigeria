import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { 
  Code2, 
  ShoppingCart, 
  Smartphone, 
  Search, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export const metadata = {
  title: 'Web Development Services | ProWeb Nigeria',
  description: 'Professional web development services including custom websites, e-commerce solutions, mobile apps, and digital marketing for Nigerian businesses.',
  keywords: [
    'web development services nigeria',
    'custom website development',
    'e-commerce solutions',
    'mobile app development',
    'digital marketing nigeria'
  ]
}

export default function ServicesPage() {
  const services = [
    {
      id: 'web-development',
      name: 'Custom Web Development',
      description: 'High-performance websites built with Next.js, React, and modern technologies',
      icon: Code2,
      features: [
        'Responsive Design',
        'SEO Optimized',
        'Fast Loading',
        'Mobile-First',
        'Custom Backend',
        'API Integration'
      ],
      popular: true
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Solutions',
      description: 'Complete online stores that convert visitors into customers',
      icon: ShoppingCart,
      features: [
        'Payment Integration',
        'Inventory Management',
        'Order Tracking',
        'Customer Dashboard',
        'Analytics',
        'Security'
      ]
    },
    {
      id: 'seo',
      name: 'SEO & Digital Marketing',
      description: 'Boost your online visibility and drive targeted traffic',
      icon: Search,
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Content Strategy',
        'Link Building',
        'Analytics',
        'Reporting'
      ]
    },
    {
      id: 'maintenance',
      name: 'Website Maintenance & Support',
      description: '24/7 website maintenance, security updates, and technical support',
      icon: Shield,
      features: [
        '24/7 Support',
        'Security Updates',
        'Performance Monitoring',
        'Backup & Recovery',
        'Bug Fixes',
        'Content Updates'
      ]
    }
  ]

  const additionalServices = [
    {
      title: 'Website Redesign',
      description: 'Transform your existing website with modern design and improved functionality.',
      icon: '🎨'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱'
    },
    {
      title: 'Content Management',
      description: 'Easy-to-use systems to manage your website content without technical knowledge.',
      icon: '📝'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Web Development{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From custom web development to e-commerce solutions, we provide comprehensive digital services that drive real business results for Nigerian companies.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    service.popular
                      ? 'border-purple-500'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Beyond our core offerings, we provide specialized solutions to meet your unique business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
                href="/case-studies"
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
