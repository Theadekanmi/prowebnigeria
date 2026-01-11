'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://prowebnaija.pythonanywhere.com/api'

export default function BlogClient({ initialPosts }) {
  const [posts, setPosts] = useState(initialPosts || [])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  // Fetch posts from API on mount
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(`${API_URL}/blog/posts/?page_size=100`)
        if (res.ok) {
          const data = await res.json()
          const apiPosts = (data?.results || data || []).map(post => ({
            title: post.title,
            excerpt: post.excerpt,
            slug: post.slug,
            category: post.category?.name || 'Uncategorized',
            date: post.created_at?.split('T')[0] || new Date().toISOString().split('T')[0],
            featured_image: post.featured_image
          }))
          if (apiPosts.length > 0) {
            setPosts(apiPosts)
          }
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  // Get unique categories from current posts
  const categories = ['All', ...new Set(posts?.map(post => post.category) || [])]

  // Filter posts based on category and search
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                ProWeb Nigeria Blog
              </h1>
              <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto">
                Expert insights on web design, SEO, and digital marketing for Nigerian businesses
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-6xl opacity-20">📝</span>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <time className="text-sm text-neutral-500 mb-2 block">
                          {new Date(post.date).toLocaleDateString('en-NG', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-neutral-600 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center text-purple-600 font-medium">
                          Read More
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-neutral-500">No articles found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSearchQuery('')
                  }}
                  className="mt-4 text-purple-600 font-medium hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Let&apos;s discuss your project and create something amazing together.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-purple-100 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
