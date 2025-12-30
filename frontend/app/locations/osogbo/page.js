import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, CheckCircle, Code2, ShoppingCart, Search, TrendingUp, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Web Design Osogbo | Website Designer Osun State',
  description: 'Top web design company in Osogbo, Osun State. Fast, mobile-friendly websites that drive growth. Free quote. Serving Osogbo, Ile-Ife & all Osun.',
  alternates: { canonical: '/locations/osogbo' }
}

const services = [
  { icon: Code2, title: 'Custom Web Development Osogbo', description: 'Professional websites built with React, Next.js, and modern technologies for Osogbo businesses' },
  { icon: ShoppingCart, title: 'E-commerce Solutions Osogbo', description: 'Complete online stores that convert visitors into customers for Osogbo retailers' },
  { icon: Search, title: 'SEO & Digital Marketing Osogbo', description: 'Boost your Osogbo business online visibility and drive targeted traffic' },
  { icon: TrendingUp, title: 'Website Maintenance Osogbo', description: '24/7 support, security updates, and performance monitoring for Osogbo websites' }
]

const areas = ['Osogbo Central', 'Oke Baale', 'Oja Oba', 'Oke Fia', 'Ilesa Road', 'Gbongan Road', 'Ile Ife Road', 'Ede Road', 'Ikirun Road', 'Iwo Road', 'Ogbomoso Road', 'Ilesa']

export default function OsogboPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-6">Serving Osogbo, Osun State</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Web Design Services in Osogbo</h1>
            <p className="text-xl mb-8 text-neutral-300">As a leading website designer in Osogbo and Osun State, we help businesses across Osun State establish their digital presence with cutting-edge web solutions.</p>
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
            <h2 className="text-3xl font-bold mb-4">Web Development Services in Osogbo</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">We provide comprehensive web solutions for Osogbo businesses, from startups to established enterprises across Osun State</p>
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
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Websites that Work in Osogbo</h2>
            <p className="mb-6">We build for Osogbo realities: many users are on mobile, network speeds vary, and trust is everything. Your site will load fast, speak clearly, and guide visitors to take action: call, WhatsApp, or request a quote. Whether you serve Oke Baale, Oke Fia, Oja Oba or around Ilesa Road, we make sure your business looks credible and is easy to reach.</p>
            <p className="mb-6">Need content help? We will help turn your services into simple, compelling copy. Already have a site? We will audit speed and SEO, fix the blockers, and track results. The goal is simple: more enquiries from the right customers at a fair budget.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Areas We Serve in Osun State</h2>
            <p className="text-xl text-neutral-600">Providing web design services across Osun State and surrounding areas</p>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose ProWeb Nigeria for Osogbo Web Design?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Local Understanding', desc: 'We understand Osogbo business landscape and cultural nuances' },
              { title: 'Affordable Pricing', desc: 'Competitive rates tailored for Osogbo businesses' },
              { title: 'Fast Delivery', desc: 'Quick turnaround times to get your business online faster' }
            ].map((item, index) => (
              <div key={index} className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Start Your Osogbo Web Project?</h2>
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
