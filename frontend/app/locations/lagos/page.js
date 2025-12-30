import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, CheckCircle, Code2, ShoppingCart, Search, TrendingUp, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Web Design Lagos | Top Website Designer Lagos Nigeria',
  description: 'Top web design company in Lagos. Fast, mobile-friendly websites that drive sales. Free quote. Serving Victoria Island, Lekki, Ikoyi & all Lagos.',
  alternates: { canonical: '/locations/lagos' }
}

const services = [
  { icon: Code2, title: 'Custom Web Development Lagos', description: 'Professional websites built with React, Next.js, and modern technologies for Lagos businesses' },
  { icon: ShoppingCart, title: 'E-commerce Solutions Lagos', description: 'Complete online stores that convert visitors into customers for Lagos retailers' },
  { icon: Search, title: 'SEO & Digital Marketing Lagos', description: 'Boost your Lagos business online visibility and drive targeted traffic' },
  { icon: TrendingUp, title: 'Website Maintenance Lagos', description: '24/7 support, security updates, and performance monitoring for Lagos websites' }
]

const areas = ['Victoria Island', 'Ikoyi', 'Lekki', 'Surulere', 'Yaba', 'Ikeja', 'Lagos Island', 'Apapa', 'Mushin', 'Oshodi', 'Agege', 'Alaba']

export default function LagosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-6">Serving Lagos, Nigeria</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Design Company in Lagos</h1>
            <p className="text-xl mb-8 text-neutral-300">As a leading website designer in Lagos, we help businesses across Lagos State establish their digital presence with cutting-edge web solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-all">Get Free Quote</Link>
              <Link href="/portfolio" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Web Development Services in Lagos</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">We provide comprehensive web solutions for Lagos businesses, from startups to established enterprises</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-neutral-200" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4"><service.icon className="w-6 h-6 text-purple-600" /></div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-neutral-700 leading-relaxed text-lg">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Built for Lagos Businesses</h2>
            <p className="mb-6">Lagos moves fast and your website should too. We design for the reality of Lagos traffic (both road and internet): fast-loading pages on mobile networks, clear calls-to-action, and forms that do not frustrate users. Whether you are serving Victoria Island, Lekki, Ikoyi, Surulere, Yaba or Ikeja, we build experiences that feel trustworthy, modern and easy to use.</p>
            <p className="mb-6">We focus on outcomes: more qualified enquiries for service businesses, more checkouts for e-commerce, and better analytics so you can see what is working. Our Lagos clients value straight talk, no fluff, just a practical plan, weekly updates, and a clean launch.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Areas We Serve in Lagos</h2>
            <p className="text-xl text-neutral-600">Providing web design services across Lagos State</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {areas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center border border-neutral-200" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <MapPin className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                <span className="font-medium text-neutral-800">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Lagos Businesses Choose ProWeb Nigeria</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Fast Loading Websites', desc: 'Optimized for Lagos mobile networks. Pages load in under 2 seconds.' },
                { title: 'Mobile-First Design', desc: '80% of Lagos users browse on mobile. We design for mobile first.' },
                { title: 'SEO Optimized', desc: 'Rank higher on Google for web design Lagos and related searches.' },
                { title: '24/7 Support', desc: 'Need help at 8pm? We answer calls and WhatsApp messages.' }
              ].map((item, index) => (
                <div key={index} className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                  <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Start Your Lagos Web Project?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-neutral-200" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <Phone className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-neutral-600">08100098339</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-neutral-200" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-neutral-600">prowebnigeria@gmail.com</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-neutral-200" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <p className="text-neutral-600">Mon-Fri: 8AM-6PM</p>
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-neutral-800 transition-all">Start Your Project Today <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
