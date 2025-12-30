'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'

const blogImages = {
  'Rankings': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
  'SEO': 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80',
  'Pricing': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
  'Guide': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80',
  'Comparison': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  'E-commerce': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
  'Web Design': 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
  'Digital Marketing': 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80',
  'Tech Tips': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80',
  'Tech Reviews': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
  'default': 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80'
}

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (params?.slug) {
      fetchPost(params.slug)
    }
  }, [params?.slug])

  const fetchPost = async (slug) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://prowebnaija.pythonanywhere.com/api'
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10s timeout
      
      const res = await fetch(`${API_URL}/blog/posts/${slug}/`, { 
        cache: 'no-store',
        headers: { 'Accept': 'application/json' },
        signal: controller.signal
      })
      clearTimeout(timeoutId)
      
      if (res.ok) {
        const data = await res.json()
        setPost(data)
        setError(false)
      } else {
        setError(true)
      }
    } catch (err) {
      console.error('Failed to fetch post:', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    try {
      return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    } catch {
      return ''
    }
  }

  const getPostImage = () => {
    if (post?.featured_image) return post.featured_image
    const categoryName = post?.category?.name || ''
    return blogImages[categoryName] || blogImages['default']
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="text-neutral-500 mt-4">Loading article...</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (error || !post) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">Article Not Found</h1>
            <p className="text-neutral-600 mb-8">The article you are looking for does not exist or has been moved.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6">
            ← Back to Blog
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              {post.category?.name || 'Blog'}
            </span>
            <span className="text-sm text-neutral-500">
              {post.read_time || 5} min read
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-neutral-600 mb-6">{post.excerpt}</p>
          
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <span>{post.author || 'ProWeb Nigeria'}</span>
            <span>{formatDate(post.created_at)}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="aspect-video rounded-2xl overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <img src={getPostImage()} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose prose-lg prose-neutral max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
          </article>
          
          {post.keywords && post.keywords.trim() && (
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex items-center gap-2 flex-wrap">
                {post.keywords.split(',').filter(k => k.trim()).map((keyword, i) => (
                  <span key={i} className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm">
                    {keyword.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help With Your Project?</h2>
          <p className="text-purple-100 mb-8">Get a free consultation and quote for your website or app.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">
            Get Free Quote
          </Link>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
