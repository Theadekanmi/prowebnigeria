import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { ArrowRight, Check, Code2, ShoppingCart, Search, Shield, TrendingUp, Smartphone } from 'lucide-react'

export const metadata = {
  title: 'Web Design Pricing Nigeria | Website Costs',
  description: 'Affordable web development pricing for Nigerian businesses. Transparent pricing for websites and e-commerce.',
  alternates: { canonical: '/pricing' }
}

const packages = [
  { name: 'Custom Website', icon: Code2, price: '₦250,000', priceNote: 'starting', description: 'High-performance websites built with modern technologies', features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First', 'Analytics Setup', '1 Month Support'], popular: false },
  { name: 'E-commerce Store', icon: ShoppingCart, price: '₦400,000', priceNote: 'starting', description: 'Complete online stores with payment integration', features: ['Paystack/Flutterwave', 'Inventory Management', 'Order Tracking', 'Customer Dashboard', 'SEO & Analytics', '3 Months Support'], popular: true },
  { name: 'SEO Services', icon: Search, price: '₦150,000', priceNote: '/month', description: 'Boost your Google rankings and drive traffic', features: ['Keyword Research', 'On-Page SEO', 'Content Strategy', 'Link Building', 'Monthly Reports', 'Competitor Analysis'], popular: false },
  { name: 'Website Maintenance', icon: Shield, price: '₦70,000', priceNote: '/month', description: 'Keep your website secure and up-to-date', features: ['Security Updates', 'Performance Monitoring', 'Backup & Recovery', 'Content Updates', 'Bug Fixes', '24/7 Support'], popular: false },
  { name: 'Digital Marketing', icon: TrendingUp, price: 'Get Quote', priceNote: null, description: 'Grow your business with targeted campaigns', features: ['Social Media Ads', 'Google Ads', 'Email Marketing', 'Content Marketing', 'Analytics & Reporting', 'Strategy Consulting'], popular: false },
  { name: 'Mobile App', icon: Smartphone, price: 'Get Quote', priceNote: null, description: 'iOS and Android apps for your business', features: ['Cross-Platform', 'Push Notifications', 'Offline Support', 'App Store Submission', 'Ongoing Support', 'Analytics'], popular: false }
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Pricing</span>
            </h1>
            <p className="text-xl text-neutral-600">Affordable web development packages for Nigerian businesses. No hidden fees.</p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon
              return (
                <div 
                  key={index} 
                  className={`relative bg-white rounded-2xl p-6 border transition-all duration-300 ${pkg.popular ? 'border-purple-400' : 'border-neutral-200 hover:border-purple-300'}`} 
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {pkg.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"><span className="bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">Most Popular</span></div>}
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{pkg.name}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{pkg.description}</p>
                  <div className="mb-4">
                    {pkg.priceNote ? (
                      <p className="text-2xl font-bold text-neutral-900">{pkg.price}<span className="text-sm font-normal text-neutral-500 ml-1">{pkg.priceNote}</span></p>
                    ) : (
                      <p className="text-lg font-semibold text-purple-600">{pkg.price}</p>
                    )}
                  </div>
                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-neutral-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className={`w-full block text-center py-3 rounded-lg font-medium transition-all ${pkg.popular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>Get Started</Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-purple-100 mb-8">Contact us for a custom quote tailored to your specific needs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">Get Custom Quote <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
