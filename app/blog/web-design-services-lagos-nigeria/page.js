import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, CheckCircle, TrendingUp, Users, Award, Zap, MapPin, Phone } from 'lucide-react'

export const metadata = {
  title: 'Web Design Services Lagos Nigeria | Professional Website Designer',
  description: 'Professional web design services in Lagos, Nigeria. Custom websites, e-commerce solutions & SEO. Serving Victoria Island, Lekki, Ikeja & all Lagos areas.',
  keywords: ['web design lagos', 'web design services lagos', 'website designer lagos', 'web development lagos nigeria', 'professional web design lagos'],
  openGraph: {
    title: 'Web Design Services Lagos Nigeria | ProWeb Nigeria',
    description: 'Professional web design services in Lagos. Custom websites, e-commerce & SEO.',
    url: 'https://prowebnigeria.ng/blog/web-design-services-lagos-nigeria',
    siteName: 'ProWeb Nigeria',
    type: 'article'
  },
  alternates: { canonical: '/blog/web-design-services-lagos-nigeria' }
}

const services = [
  { title: 'Custom Website Design', description: 'Unique, brand-focused designs tailored to your Lagos business', features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'] },
  { title: 'E-commerce Solutions', description: 'Complete online stores with Paystack/Flutterwave integration', features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics'] },
  { title: 'Corporate Websites', description: 'Professional business websites that establish credibility', features: ['Professional Design', 'Content Management', 'Contact Forms', 'Gallery'] },
  { title: 'Landing Pages', description: 'High-converting pages for marketing campaigns', features: ['Conversion Optimized', 'A/B Testing', 'Analytics', 'Lead Capture'] }
]

const lagosAreas = ['Victoria Island', 'Lekki', 'Ikoyi', 'Ikeja', 'Yaba', 'Surulere', 'Ajah', 'Gbagada', 'Maryland', 'Ogba', 'Festac', 'Apapa']

export default function WebDesignLagosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-28 pb-12 bg-neutral-50 border-b border-neutral-200">
        <div className="container">
          <div className="max-w-4xl">
            <nav className="breadcrumb mb-6">
              <Link href="/">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <Link href="/blog">Blog</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="text-neutral-900">Web Design Lagos</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-primary">Web Design</span>
              <span className="badge-neutral">Lagos</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Professional Web Design Services in Lagos, Nigeria
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Looking for a web designer in Lagos? We build high-performance websites for businesses across Victoria Island, Lekki, Ikeja, and all Lagos areas. Modern designs that rank on Google and convert visitors.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>December 20, 2025</span></div>
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>ProWeb Nigeria Team</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>15 min read</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>Lagos, Nigeria</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <article className="prose-blog">
              <section className="mb-12">
                <h2>Web Design in Lagos: The Opportunity</h2>
                <p>
                  Lagos is Nigeria's commercial capital with over 20 million residents and thousands of businesses competing for attention. In this crowded market, having a professional website isn't optional—it's essential for survival and growth.
                </p>
                <p>
                  Whether you're a startup in Victoria Island, an established business in Ikeja, or an entrepreneur in Lekki, your website is often the first impression potential customers have of your business.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 my-8">
                  <div className="stat-card">
                    <div className="stat-number text-primary-600">20M+</div>
                    <div className="stat-label">Lagos Population</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number text-success-600">85%</div>
                    <div className="stat-label">Mobile Internet Users</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number text-warning-600">300%</div>
                    <div className="stat-label">E-commerce Growth</div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Why Choose Professional Web Design?</h2>
                <p>In Lagos's competitive market, your website can be the difference between winning and losing customers.</p>
                <div className="grid sm:grid-cols-2 gap-4 my-8">
                  <div className="feature-card">
                    <div className="feature-icon bg-primary-100"><TrendingUp className="w-6 h-6 text-primary-600" /></div>
                    <h4 className="font-bold text-neutral-900 mb-2">Increased Credibility</h4>
                    <p className="text-sm text-neutral-600 mb-0">Professional design builds trust with Lagos customers who are increasingly discerning about online businesses.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon bg-success-100"><Zap className="w-6 h-6 text-success-600" /></div>
                    <h4 className="font-bold text-neutral-900 mb-2">Better Performance</h4>
                    <p className="text-sm text-neutral-600 mb-0">Optimized websites load faster, rank higher on Google, and provide better user experience.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon bg-warning-100"><Users className="w-6 h-6 text-warning-600" /></div>
                    <h4 className="font-bold text-neutral-900 mb-2">Mobile Optimization</h4>
                    <p className="text-sm text-neutral-600 mb-0">With 85% of Lagos internet users on mobile, responsive design is crucial.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon bg-error-100"><Award className="w-6 h-6 text-error-600" /></div>
                    <h4 className="font-bold text-neutral-900 mb-2">Competitive Advantage</h4>
                    <p className="text-sm text-neutral-600 mb-0">Stand out in the crowded Lagos market with a website that reflects your professionalism.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Our Web Design Services in Lagos</h2>
                <p>We offer comprehensive web design services tailored to Lagos businesses:</p>
                <div className="space-y-4 my-8">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-xl border border-neutral-200 p-6">
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">{service.title}</h3>
                      <p className="text-neutral-600 mb-4">{service.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                            <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>Areas We Serve in Lagos</h2>
                <p>We provide web design services to businesses across all Lagos areas:</p>
                <div className="flex flex-wrap gap-2 my-6">
                  {lagosAreas.map((area, index) => (
                    <span key={index} className="badge-neutral">{area}</span>
                  ))}
                </div>
                <p>No matter where your business is located in Lagos, we can help you establish a strong online presence.</p>
              </section>

              <section className="mb-12">
                <h2>Why Lagos Businesses Choose Us</h2>
                <div className="bg-neutral-50 rounded-xl p-6 my-6 border border-neutral-200">
                  <div className="space-y-4">
                    {[
                      { title: 'Modern Technology', desc: 'We use React, Next.js, and modern frameworks for fast, scalable websites' },
                      { title: 'SEO-First Approach', desc: 'Every website is built to rank on Google from day one' },
                      { title: 'Local Understanding', desc: 'We understand the Lagos market and what local customers expect' },
                      { title: 'Affordable Pricing', desc: 'Competitive rates designed for Nigerian businesses' },
                      { title: 'Ongoing Support', desc: '24/7 support to keep your website running smoothly' }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">{item.title}</h4>
                          <p className="text-sm text-neutral-600 mb-0">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Web Design Pricing in Lagos</h2>
                <p>Our pricing is transparent and competitive for the Lagos market:</p>
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-neutral-100">
                        <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">Package</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">Price</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-4 border border-neutral-200">Basic Business Website</td><td className="p-4 border border-neutral-200">From ₦150,000</td><td className="p-4 border border-neutral-200">1-2 weeks</td></tr>
                      <tr className="bg-neutral-50"><td className="p-4 border border-neutral-200">Professional Corporate</td><td className="p-4 border border-neutral-200">From ₦350,000</td><td className="p-4 border border-neutral-200">2-4 weeks</td></tr>
                      <tr><td className="p-4 border border-neutral-200">E-commerce Store</td><td className="p-4 border border-neutral-200">From ₦600,000</td><td className="p-4 border border-neutral-200">4-8 weeks</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <div className="cta-section text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Build Your Lagos Business Website?</h3>
                <p className="text-neutral-400 mb-6">Get a free consultation and quote for your web design project.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn bg-white text-neutral-900 hover:bg-neutral-100">Get Free Quote<ArrowRight className="w-4 h-4 ml-2" /></Link>
                  <a href="tel:+2348100098339" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-neutral-900"><Phone className="w-4 h-4 mr-2" />Call Now</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
