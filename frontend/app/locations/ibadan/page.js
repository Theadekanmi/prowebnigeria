import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, CheckCircle, Code2, ShoppingCart, Search, TrendingUp, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Web Design Ibadan | Top Website Designer Oyo State',
  description: 'Top web design company in Ibadan, Oyo State. Websites that convert. Fast, secure, mobile-optimized. Free quote. Serving Bodija, Mokola & all Ibadan.',
  alternates: { canonical: '/locations/ibadan' }
}

const services = [
  { icon: Code2, title: 'Custom Web Development Ibadan', description: 'Professional websites built with React, Next.js, and modern technologies for Ibadan businesses' },
  { icon: ShoppingCart, title: 'E-commerce Solutions Ibadan', description: 'Complete online stores that convert visitors into customers for Ibadan retailers' },
  { icon: Search, title: 'SEO & Digital Marketing Ibadan', description: 'Boost your Ibadan business online visibility and drive targeted traffic' },
  { icon: TrendingUp, title: 'Website Maintenance Ibadan', description: '24/7 support, security updates, and performance monitoring for Ibadan websites' }
]

const areas = ['Bodija', 'Mokola', 'Sango', 'UI Area', 'Agbowo', 'Challenge', 'Molete', 'Ojoo', 'Apata', 'Akobo', 'Ologuneru', 'Oke Ado']

export default function IbadanPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-6">Serving Ibadan, Oyo State</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Web Design Services in Ibadan</h1>
            <p className="text-xl mb-8 text-neutral-300">As a leading website designer in Ibadan and Oyo State, we help businesses across Oyo State establish their digital presence with cutting-edge web solutions.</p>
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
            <h2 className="text-3xl font-bold mb-4">Web Development Services in Ibadan</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">We provide comprehensive web solutions for Ibadan businesses, from startups to established enterprises across Oyo State</p>
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
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Made for Ibadan Businesses</h2>
            <p className="mb-6">From Bodija to Challenge and Ring Road, Ibadan businesses win online with clarity and speed. We design websites that explain your offer in plain language, look great on mobile, and make it easy to contact you. No heavy pages, no confusion, just a smooth path from visit to enquiry.</p>
            <p className="mb-6">We will help you decide the right pages to launch with, structure your services, write conversion-focused content, and set up tracking so you know which channels bring real leads. As you grow, we will iterate with new pages and features.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Areas We Serve in Oyo State</h2>
            <p className="text-xl text-neutral-600">Providing web design services across Oyo State and surrounding areas</p>
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
            <h2 className="text-3xl font-bold mb-4">Why Choose ProWeb Nigeria for Ibadan Web Design?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Local Understanding', desc: 'We understand Ibadan business landscape and cultural nuances' },
              { title: 'Affordable Pricing', desc: 'Competitive rates tailored for Ibadan businesses' },
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
            <h2 className="text-3xl font-bold mb-8">Ready to Start Your Ibadan Web Project?</h2>
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
