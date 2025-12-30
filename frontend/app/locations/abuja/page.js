import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, CheckCircle, Code2, ShoppingCart, Search, TrendingUp, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Web Design Abuja | Best Website Designer Abuja FCT',
  description: 'Top web design company in Abuja. Websites that convert visitors to customers. Fast, secure, mobile-optimized. Serving Maitama, Wuse, Garki & all Abuja.',
  alternates: { canonical: '/locations/abuja' }
}

const services = [
  { icon: Code2, title: 'Custom Web Development Abuja', description: 'Professional websites built with React, Next.js, and modern technologies for Abuja businesses' },
  { icon: ShoppingCart, title: 'E-commerce Solutions Abuja', description: 'Complete online stores that convert visitors into customers for Abuja retailers' },
  { icon: Search, title: 'SEO & Digital Marketing Abuja', description: 'Boost your Abuja business online visibility and drive targeted traffic' },
  { icon: TrendingUp, title: 'Website Maintenance Abuja', description: '24/7 support, security updates, and performance monitoring for Abuja websites' }
]

const areas = ['Garki', 'Wuse', 'Maitama', 'Asokoro', 'Utako', 'Jabi', 'Gwarinpa', 'Kubwa', 'Nyanya', 'Karu', 'Lugbe', 'Apo']

export default function AbujaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-6">Serving Abuja, Nigeria</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Design Company in Abuja</h1>
            <p className="text-xl mb-8 text-neutral-300">As a leading website designer in Abuja, we help businesses across the Federal Capital Territory establish their digital presence with cutting-edge web solutions.</p>
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
            <h2 className="text-3xl font-bold mb-4">Web Development Services in Abuja</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">We provide comprehensive web solutions for Abuja businesses, from startups to established enterprises</p>
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
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Web Experiences for Abuja Audiences</h2>
            <p className="mb-6">Abuja customers expect professionalism and clarity. We craft clean, credible websites that communicate value in seconds, load quickly on mobile, and make it effortless to call, WhatsApp, or submit an enquiry. From Maitama and Asokoro to Jabi, Gwarinpa and Wuse, our builds reflect the high standards Abuja businesses operate with.</p>
            <p className="mb-6">We pay attention to the small things that move the needle: consistent branding, clear pricing tables, service pages that answer real objections, and structured data that helps Google understand your offer.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Areas We Serve in Abuja</h2>
            <p className="text-xl text-neutral-600">Providing web design services across Abuja FCT</p>
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
              <h2 className="text-3xl font-bold mb-4">Why Abuja Businesses Choose ProWeb Nigeria</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Professional Standards', desc: 'Clean, credible websites that reflect Abuja high business standards.' },
                { title: 'Fast & Secure', desc: 'SSL certificates, fast hosting, and regular security updates included.' },
                { title: 'SEO Optimized', desc: 'Rank higher on Google for web design Abuja and related searches.' },
                { title: 'Transparent Pricing', desc: 'No hidden fees. Clear quotes with honest timelines and budgets.' }
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
            <h2 className="text-3xl font-bold mb-8">Ready to Start Your Abuja Web Project?</h2>
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
