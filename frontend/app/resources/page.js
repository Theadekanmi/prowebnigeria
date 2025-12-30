import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { ArrowRight, BookOpen, Wrench } from 'lucide-react'

export const metadata = {
  title: 'Web Development Resources | Tips & Reviews',
  description: 'Free web development resources, tech tips, and reviews for Nigerian developers and business owners.',
  alternates: { canonical: '/resources' }
}

export default function ResourcesPage() {
  const categories = [
    { title: 'Tech Tips', description: 'Practical tips and tutorials for web development, design, and digital marketing.', icon: Wrench, link: '/resources/tech-tips', count: '10+ Articles' },
    { title: 'Tech Reviews', description: 'In-depth reviews of tools, frameworks, and technologies for Nigerian developers.', icon: BookOpen, link: '/resources/tech-reviews', count: '8+ Reviews' }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Resources</span>
            </h1>
            <p className="text-xl text-neutral-600">Helpful guides, tips, and reviews for Nigerian developers and business owners.</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <Link 
                  key={index} 
                  href={category.link} 
                  className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-purple-300 transition-all duration-300 group" 
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <category.icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-purple-600 transition-colors">{category.title}</h3>
                  <p className="text-neutral-600 mb-4">{category.description}</p>
                  <div className="text-purple-600 text-sm font-semibold">{category.count}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Professional Help?</h2>
            <p className="text-purple-100 mb-8">Let us handle your web development project while you focus on growing your business.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">Get Free Quote <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
