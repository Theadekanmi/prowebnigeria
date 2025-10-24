import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { ArrowRight, BookOpen, Wrench } from 'lucide-react'

export const metadata = {
  title: 'Resources | ProWeb Nigeria - Web Development Resources',
  description: 'Free web development resources, tech tips, and reviews for Nigerian developers and business owners.',
  keywords: ['web development resources', 'tech tips nigeria', 'tech reviews', 'free resources']
}

export default function ResourcesPage() {
  const categories = [
    {
      title: 'Tech Tips',
      description: 'Practical tips and tutorials for web development, design, and digital marketing.',
      icon: Wrench,
      link: '/resources/tech-tips',
      count: '10+ Articles'
    },
    {
      title: 'Tech Reviews',
      description: 'In-depth reviews of tools, frameworks, and technologies for Nigerian developers.',
      icon: BookOpen,
      link: '/resources/tech-reviews',
      count: '8+ Reviews'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Free{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Resources
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Helpful guides, tips, and reviews for Nigerian developers and business owners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={category.link}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="text-purple-600 text-sm font-semibold">{category.count}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Need Professional Help?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let us handle your web development project while you focus on growing your business.
            </p>
            <Link
              href="/contact"
              className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center"
            >
              Get Free Quote
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
