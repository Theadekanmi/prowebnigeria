'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { Lightbulb, ArrowRight, Clock, Search } from 'lucide-react'

const categories = ['All', 'Next.js', 'JavaScript', 'Performance', 'Security', 'UI/UX']

const allTips = [
  { id: 1, title: '10 Next.js Performance Optimization Techniques', excerpt: 'Learn advanced techniques to make your Next.js applications lightning fast with these proven optimization strategies.', category: 'Next.js', readTime: '8 min', date: 'Oct 15, 2025', difficulty: 'Intermediate' },
  { id: 2, title: 'JavaScript ES2024 Features You Should Know', excerpt: 'Explore the latest JavaScript features that will improve your code quality and development experience.', category: 'JavaScript', readTime: '6 min', date: 'Oct 12, 2025', difficulty: 'Beginner' },
  { id: 3, title: 'Building Secure Web Applications: A Complete Guide', excerpt: 'Comprehensive security practices every web developer should implement to protect their applications.', category: 'Security', readTime: '12 min', date: 'Oct 10, 2025', difficulty: 'Advanced' },
  { id: 4, title: 'TypeScript Best Practices for Large Applications', excerpt: 'Essential TypeScript patterns and practices for maintaining large-scale applications.', category: 'JavaScript', readTime: '10 min', date: 'Oct 8, 2025', difficulty: 'Advanced' },
  { id: 5, title: 'Responsive Design with Tailwind CSS', excerpt: 'Master responsive design principles using Tailwind CSS utility classes and breakpoints.', category: 'UI/UX', readTime: '7 min', date: 'Oct 5, 2025', difficulty: 'Intermediate' },
  { id: 6, title: 'API Design Best Practices for Modern Web Apps', excerpt: 'Learn how to design robust, scalable APIs that power modern web applications.', category: 'Performance', readTime: '9 min', date: 'Oct 3, 2025', difficulty: 'Intermediate' },
  { id: 7, title: 'Debugging JavaScript Like a Pro', excerpt: 'Advanced debugging techniques and tools to identify and fix JavaScript issues quickly.', category: 'JavaScript', readTime: '8 min', date: 'Oct 1, 2025', difficulty: 'Intermediate' },
  { id: 8, title: 'Mobile-First Development Strategy', excerpt: 'Why mobile-first approach is crucial and how to implement it effectively in your projects.', category: 'UI/UX', readTime: '6 min', date: 'Sep 28, 2025', difficulty: 'Beginner' },
  { id: 9, title: 'Git Workflow for Development Teams', excerpt: 'Establish efficient Git workflows that improve collaboration and code quality in your team.', category: 'Performance', readTime: '11 min', date: 'Sep 25, 2025', difficulty: 'Intermediate' },
]

export default function TechTipsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTips = allTips.filter(tip => {
    const matchesCategory = activeCategory === 'All' || tip.category === activeCategory
    const matchesSearch = tip.title.toLowerCase().includes(searchQuery.toLowerCase()) || tip.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700'
      case 'Advanced': return 'bg-red-100 text-red-700'
      default: return 'bg-neutral-100 text-neutral-700'
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Tips</span>
            </h1>
            <p className="text-xl text-neutral-600">Practical tips, tutorials, and best practices from our experienced developers.</p>
          </div>
        </div>
      </section>

      {/* Categories & Search */}
      <section className="py-8 border-b border-neutral-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat ? 'bg-purple-600 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredTips.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTips.map((tip, index) => (
                  <article
                    key={tip.id}
                    className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-purple-300 transition-all"
                    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{tip.category}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tip.difficulty)}`}>{tip.difficulty}</span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-3">{tip.title}</h3>
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{tip.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                      <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>{tip.readTime}</span></div>
                      <span>{tip.date}</span>
                    </div>
                    <Link href={`/resources/tech-tips/${tip.id}`} className="text-purple-600 hover:text-purple-700 font-semibold text-sm flex items-center group">
                      Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Lightbulb className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
                <p className="text-neutral-500">No tips found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Tech Tip</h2>
            <p className="text-purple-100 mb-8">Subscribe to get the latest web development tips delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none" />
              <button className="bg-white text-purple-600 hover:bg-neutral-100 font-semibold px-6 py-3 rounded-lg transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
