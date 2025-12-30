'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Counter from './components/Counter'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Code2, ShoppingCart, Search, TrendingUp, CheckCircle, Star, Play, ChevronDown, ChevronUp, Calendar } from 'lucide-react'

const fallbackTestimonials = [
  { name: 'Adebayo Johnson', company: 'TechStart Lagos', content: 'ProWeb Nigeria delivered an exceptional website that increased our leads by 300%. Highly recommended!', rating: 5 },
  { name: 'Chioma Okafor', company: 'Fashion Hub', content: 'Our e-commerce store is beautiful and easy to manage. Sales have doubled since launch.', rating: 5 },
  { name: 'Ibrahim Musa', company: 'Abuja Consulting', content: 'Professional team, great communication, and they delivered on time. Will work with them again.', rating: 5 }
]

const fallbackFaqs = [
  { question: 'How much does a website cost?', answer: 'Custom websites start from ₦250,000, e-commerce from ₦400,000. Contact us for a free quote tailored to your needs.' },
  { question: 'How long does it take to build a website?', answer: 'Basic websites take 2-3 weeks, business websites 4-6 weeks, and e-commerce platforms 6-10 weeks.' },
  { question: 'Do you provide website maintenance?', answer: 'Yes! We offer maintenance packages starting from ₦70,000/month including security updates and support.' },
  { question: 'Will my website be mobile responsive?', answer: 'Absolutely! All our websites are mobile-first and work perfectly on all devices.' },
]

const blogImages = {
  'Rankings': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  'SEO': 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80',
  'Pricing': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
}

const fallbackPosts = [
  { title: 'Top 10 Best Web Designers in Nigeria 2025', excerpt: 'Discover the leading web design companies ranked by portfolio and expertise.', slug: 'top-10-best-web-designers-nigeria-2025', category: { name: 'Rankings' }, read_time: 12, created_at: '2025-12-26' },
  { title: 'Complete SEO Guide for Nigerian Businesses', excerpt: 'Master search engine optimization with our comprehensive guide.', slug: 'complete-seo-guide-nigerian-businesses-2025', category: { name: 'SEO' }, read_time: 15, created_at: '2025-12-25' },
  { title: 'How Much Does a Website Cost in Nigeria?', excerpt: 'Understand website development costs and pricing in Nigeria.', slug: 'website-cost-nigeria-2025-pricing-guide', category: { name: 'Pricing' }, read_time: 10, created_at: '2025-12-24' },
]

export default function Home() {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials)
  const [faqs, setFaqs] = useState(fallbackFaqs)
  const [posts, setPosts] = useState(fallbackPosts)
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api'
    
    // Load testimonials
    fetch(`${API_URL}/core/testimonials/`, { cache: 'no-store' })
      .then(res => res.ok ? res.json() : null)
      .then(data => { if (data?.length > 0) setTestimonials(data) })
      .catch(() => {})

    // Load FAQs
    fetch(`${API_URL}/core/faqs/`, { cache: 'no-store' })
      .then(res => res.ok ? res.json() : null)
      .then(data => { if (data?.length > 0) setFaqs(data.slice(0, 4)) })
      .catch(() => {})

    // Load posts
    fetch(`${API_URL}/blog/posts/`, { cache: 'no-store' })
      .then(res => res.ok ? res.json() : null)
      .then(data => { 
        const postList = data?.results || data
        if (postList?.length > 0) setPosts(postList.slice(0, 3)) 
      })
      .catch(() => {})
  }, [])

  const services = [
    { icon: Code2, title: 'Web Development', description: 'Custom websites built with React and Next.js for optimal performance.' },
    { icon: ShoppingCart, title: 'E-commerce', description: 'Online stores with Paystack and Flutterwave payment integration.' },
    { icon: Search, title: 'SEO Services', description: 'Rank higher on Google and drive organic traffic to your business.' },
    { icon: TrendingUp, title: 'Digital Marketing', description: 'Social media marketing and Google Ads that grow your business.' }
  ]

  const stats = [
    { number: 22, suffix: '+', label: 'Happy Clients' },
    { number: 20, suffix: '+', label: 'Projects Delivered' },
    { number: 4, suffix: '+', label: 'Years Experience' },
    { number: 24, suffix: '/7', label: 'Support' }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 overflow-hidden bg-neutral-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Nigeria&apos;s Top-Rated Web Design Company
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                We Build Websites That
                <span className="block mt-2 text-purple-400">Grow Nigerian Businesses</span>
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
                Professional web design for businesses in Lagos, Abuja, and across Nigeria. 
                Fast, SEO-optimized websites that convert visitors into customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 font-semibold rounded-xl hover:bg-neutral-100 transition-all">
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  <Play className="w-5 h-5" /> View Our Work
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      <Counter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-neutral-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-purple-600 font-semibold mb-2">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Services That Drive Results</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">From custom websites to e-commerce solutions, we help Nigerian businesses succeed online.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-purple-200 transition-all duration-300 group" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                    <service.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{service.title}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{service.description}</p>
                  <Link href="/services" className="text-purple-600 text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-purple-600 font-semibold mb-2">Why ProWeb Nigeria</p>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">We are Different From Other Web Designers</h2>
                <p className="text-lg text-neutral-600 mb-8">We do not just build websites. We build digital assets that generate leads, sales, and growth for your Nigerian business.</p>
                
                <div className="space-y-4">
                  {['Modern tech stack (React, Next.js) for fast websites', 'SEO-optimized from day one to rank on Google', 'Mobile-first design for Nigerian users', 'Paystack and Flutterwave payment integration', 'Ongoing support and maintenance', 'Affordable pricing for Nigerian businesses'].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-semibold rounded-xl hover:bg-neutral-800 transition-colors">
                    Learn More About Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-neutral-200" style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />))}
                  </div>
                  <p className="text-neutral-600">Rated 5/5 by our clients</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-xl"><div className="text-2xl font-bold text-purple-600 mb-1">100%</div><div className="text-sm text-neutral-600">Project Completion</div></div>
                  <div className="text-center p-4 bg-green-50 rounded-xl"><div className="text-2xl font-bold text-green-600 mb-1">48hrs</div><div className="text-sm text-neutral-600">Response Time</div></div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl"><div className="text-2xl font-bold text-blue-600 mb-1">300%</div><div className="text-sm text-neutral-600">Avg. Traffic Increase</div></div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl"><div className="text-2xl font-bold text-orange-600 mb-1">24/7</div><div className="text-sm text-neutral-600">Support Available</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-purple-600 font-semibold mb-2">Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">What Our Clients Say</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border border-neutral-200" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />))}
                  </div>
                  <p className="text-neutral-700 mb-6">&quot;{testimonial.content || testimonial.text}&quot;</p>
                  <div>
                    <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <p className="text-purple-600 font-semibold mb-2">Blog</p>
                <h2 className="text-3xl font-bold text-neutral-900">Latest Articles</h2>
              </div>
              <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`} className="group bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-purple-200 transition-all" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                  <div className="aspect-video bg-neutral-100 overflow-hidden">
                    <img 
                      src={post.image || post.featured_image || blogImages[post.category?.name] || blogImages['Rankings']} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-purple-600 font-medium">{post.category?.name}</span>
                    <h3 className="font-bold text-neutral-900 mt-1 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-neutral-600 line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8 md:hidden">
              <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 font-semibold">
                View All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-purple-600 font-semibold mb-2">FAQ</p>
              <h2 className="text-3xl font-bold text-neutral-900">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-neutral-200 overflow-hidden" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors">
                    <span className="font-semibold text-neutral-900">{faq.question}</span>
                    {openFaq === index ? <ChevronUp className="w-5 h-5 text-purple-600" /> : <ChevronDown className="w-5 h-5 text-neutral-400" />}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
                      <p className="text-neutral-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/faq" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all">
                View All FAQs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-purple-600 font-semibold mb-2">Our Reach</p>
              <h2 className="text-3xl font-bold text-neutral-900">Serving Businesses Across Nigeria</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[{ city: 'Lagos', areas: 'Victoria Island, Lekki, Ikeja, Yaba' }, { city: 'Abuja', areas: 'Maitama, Wuse, Garki, Asokoro' }, { city: 'Ibadan', areas: 'Bodija, Mokola, Ring Road' }, { city: 'Osogbo', areas: 'Osun State and environs' }].map((location, index) => (
                <Link key={index} href={`/locations/${location.city.toLowerCase()}`} className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-purple-300 transition-all group" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-purple-600 transition-colors">{location.city}</h3>
                  <p className="text-sm text-neutral-600">{location.areas}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Website?</h2>
            <p className="text-lg text-neutral-400 mb-8">Get a free consultation and quote for your project. No obligations, just honest advice.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 font-semibold rounded-xl hover:bg-neutral-100 transition-all">
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:08100098339" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border border-neutral-700 hover:bg-neutral-800 transition-all">
                Call: 08100098339
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
