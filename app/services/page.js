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
  title: 'Web Development Services',
  description: 'Professional web development services including custom websites, e-commerce solutions, mobile apps, and digital marketing for Nigerian businesses.',
  keywords: [
    'web development services nigeria',
    'custom website development',
    'e-commerce solutions',
    'mobile app development',
    'digital marketing nigeria'
  ],
  alternates: {
    canonical: '/services',
  }
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

      {/* Why businesses choose us (human, realistic copy) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Nigerian Businesses Choose ProWeb Nigeria
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                We don’t sell templates or buzzwords. We build websites that solve real problems—
                from getting more qualified enquiries to improving checkout conversion. Before we write
                a line of code, we make sure we understand your goals, market, and constraints. That’s
                how we’ve been able to deliver results for startups, SMEs, and established brands across
                Lagos, Abuja, Osogbo and Ibadan.
              </p>
              <p>
                Our approach is practical: clear scope, honest timelines, no hidden fees. We optimise
                for mobile first (because that’s where your customers are), keep pages fast on Nigerian
                networks, and set up the analytics you need to measure what matters. When something isn’t
                working, we say it plainly and fix it—no jargon.
              </p>
              <p>
                You’ll work directly with a technical lead, not a sales rep. Weekly updates keep you in
                the loop, and we handle everything from design to deployment and ongoing maintenance. If
                you need a quick edit at 8pm before a campaign launches, we’re the team that actually picks
                the call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Project Process</h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">1) Discovery & Scope</h3>
                <p>
                  We clarify business goals, audiences, content, integrations, and success metrics. You get a
                  clear proposal with scope, timeline, and budget.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">2) Design & Build</h3>
                <p>
                  We prototype key pages, agree on a visual direction, then implement with Next.js, Tailwind,
                  and best-practice SEO. We share a preview link for feedback.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">3) Launch & Grow</h3>
                <p>
                  We deploy, monitor performance, and iterate. Need content updates, A/B tests or feature
                  expansions? We handle it under ongoing support.
                </p>
              </div>
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
