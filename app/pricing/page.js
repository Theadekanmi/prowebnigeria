import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export const metadata = {
  title: 'Web Design Pricing Nigeria | Affordable Website Costs Lagos',
  description: 'Affordable web development pricing for Nigerian businesses. Get transparent pricing for websites, e-commerce, and mobile apps. Free consultation available.',
  keywords: ['web development pricing nigeria', 'website cost lagos', 'affordable web design', 'ecommerce pricing nigeria'],
  alternates: {
    canonical: '/pricing',
  }
}

export default function PricingPage() {
  const packages = [
    {
      name: 'Basic Website',
      price: 'Get Quote',
      features: ['5 Pages', 'Responsive Design', 'Contact Form', 'SEO Basic', 'Social Media Links', '1 Month Support'],
      popular: false
    },
    {
      name: 'Business Website',
      price: 'Get Quote',
      features: ['10 Pages', 'Responsive Design', 'Contact Forms', 'SEO Optimized', 'Blog Integration', 'Analytics', '3 Months Support'],
      popular: true
    },
    {
      name: 'E-commerce',
      price: 'Get Quote',
      features: ['Unlimited Products', 'Payment Integration', 'Inventory Management', 'Order Tracking', 'Customer Dashboard', 'SEO & Analytics', '6 Months Support'],
      popular: false
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transparent{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Affordable web development packages for Nigerian businesses. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    pkg.popular ? 'border-purple-500 scale-105' : 'border-gray-200'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us for a custom quote tailored to your specific needs.
            </p>
            <Link
              href="/contact"
              className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
