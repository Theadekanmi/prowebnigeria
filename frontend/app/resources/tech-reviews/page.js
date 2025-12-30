'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { Star, ArrowRight, Search, Award, ThumbsUp, ThumbsDown } from 'lucide-react'

const categories = ['All', 'Frameworks', 'Tools', 'Hosting', 'Design', 'Databases']

const allReviews = [
  { id: 1, title: 'Next.js 14 vs React 18: Complete Comparison', excerpt: 'Comprehensive comparison of Next.js 14 and React 18, covering performance, features, and use cases.', category: 'Frameworks', rating: 4.8, pros: ['Server-side rendering', 'Built-in optimization'], cons: ['Learning curve'], verdict: 'Excellent for full-stack apps', date: 'Oct 15, 2025', readTime: '12 min' },
  { id: 2, title: 'Vercel vs Netlify vs AWS: Hosting Showdown', excerpt: 'Detailed comparison of popular hosting platforms for modern web applications.', category: 'Hosting', rating: 4.6, pros: ['Easy deployment', 'Great performance'], cons: ['Pricing can add up'], verdict: 'Vercel wins for Next.js', date: 'Oct 12, 2025', readTime: '10 min' },
  { id: 3, title: 'Tailwind CSS vs Styled Components: 2025 Review', excerpt: 'In-depth analysis of two popular CSS solutions for React applications.', category: 'Tools', rating: 4.7, pros: ['Utility-first approach', 'Great performance'], cons: ['HTML can look cluttered'], verdict: 'Tailwind for utility lovers', date: 'Oct 10, 2025', readTime: '8 min' },
  { id: 4, title: 'TypeScript vs JavaScript: When to Switch', excerpt: 'Comprehensive guide on when and why to adopt TypeScript in your projects.', category: 'Tools', rating: 4.9, pros: ['Type safety', 'Better IDE support'], cons: ['Initial setup time'], verdict: 'TypeScript for large apps', date: 'Oct 8, 2025', readTime: '9 min' },
  { id: 5, title: 'Figma vs Adobe XD: Design Tool Comparison', excerpt: 'Detailed comparison of two leading design tools for web and mobile design.', category: 'Design', rating: 4.5, pros: ['Real-time collaboration', 'Free tier'], cons: ['Requires internet'], verdict: 'Figma for collaboration', date: 'Oct 5, 2025', readTime: '7 min' },
  { id: 6, title: 'MongoDB vs PostgreSQL: Database Showdown', excerpt: 'Compare NoSQL vs SQL databases for modern web applications.', category: 'Databases', rating: 4.6, pros: ['Flexible schema', 'Easy scaling'], cons: ['No ACID by default'], verdict: 'Depends on data structure', date: 'Oct 3, 2025', readTime: '11 min' },
  { id: 7, title: 'VS Code Extensions: Top 20 for Web Developers', excerpt: 'Essential VS Code extensions that will boost your productivity.', category: 'Tools', rating: 4.8, pros: ['Free', 'Huge ecosystem'], cons: ['Can slow down editor'], verdict: 'Must-have for developers', date: 'Oct 1, 2025', readTime: '6 min' },
  { id: 8, title: 'React Native vs Flutter: Mobile Development', excerpt: 'Cross-platform mobile development framework comparison.', category: 'Frameworks', rating: 4.4, pros: ['Code reuse', 'Hot reload'], cons: ['Performance overhead'], verdict: 'React Native for web devs', date: 'Sep 28, 2025', readTime: '13 min' },
  { id: 9, title: 'GitHub vs GitLab vs Bitbucket: Git Hosting', excerpt: 'Compare the top Git hosting platforms for your projects.', category: 'Tools', rating: 4.7, pros: ['Great CI/CD', 'Large community'], cons: ['Private repos cost'], verdict: 'GitHub for open source', date: 'Sep 25, 2025', readTime: '8 min' },
]

export default function TechReviewsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredReviews = allReviews.filter(review => {
    const matchesCategory = activeCategory === 'All' || review.category === activeCategory
    const matchesSearch = review.title.toLowerCase().includes(searchQuery.toLowerCase()) || review.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const renderStars = (rating) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-neutral-300'}`} />
      ))}
      <span className="ml-1 font-semibold text-neutral-900">{rating}</span>
    </div>
  )

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Reviews</span>
            </h1>
            <p className="text-xl text-neutral-600">In-depth reviews of web development tools, frameworks, and technologies.</p>
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
                placeholder="Search reviews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredReviews.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReviews.map((review, index) => (
                  <article
                    key={review.id}
                    className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-purple-300 transition-all"
                    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{review.category}</span>
                      {renderStars(review.rating)}
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-3">{review.title}</h3>
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{review.excerpt}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-1 text-green-600 text-xs font-semibold mb-1"><ThumbsUp className="w-3 h-3" /> Pros</div>
                        <ul className="text-xs text-neutral-600 space-y-1">
                          {review.pros.map((pro, i) => <li key={i} className="flex items-start gap-1"><span className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>{pro}</li>)}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-red-600 text-xs font-semibold mb-1"><ThumbsDown className="w-3 h-3" /> Cons</div>
                        <ul className="text-xs text-neutral-600 space-y-1">
                          {review.cons.map((con, i) => <li key={i} className="flex items-start gap-1"><span className="w-1 h-1 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></span>{con}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-neutral-50 rounded-lg p-3 mb-4">
                      <div className="text-xs font-semibold text-neutral-500 mb-1">Verdict:</div>
                      <div className="text-sm text-neutral-800">{review.verdict}</div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                      <span>{review.readTime}</span>
                      <span>{review.date}</span>
                    </div>
                    <Link href={`/resources/tech-reviews/${review.id}`} className="text-purple-600 hover:text-purple-700 font-semibold text-sm flex items-center group">
                      Read Full Review <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Award className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
                <p className="text-neutral-500">No reviews found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Tool Review?</h2>
            <p className="text-purple-100 mb-8">Our team can provide detailed analysis and comparisons tailored to your needs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-neutral-100 font-semibold px-8 py-4 rounded-lg transition-colors">
              Request Custom Review <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
