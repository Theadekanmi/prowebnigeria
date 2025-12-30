'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Share2, Twitter, Facebook, Linkedin, Copy, Check, BookOpen } from 'lucide-react'

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
  const [copied, setCopied] = useState(false)
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (params?.slug) {
      fetchPost(params.slug)
    }
  }, [params?.slug])

  const fetchPost = async (slug) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://prowebnaija.pythonanywhere.com/api'
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000)
      
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
        // Fetch related posts
        fetchRelatedPosts(data.category?.name, slug)
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

  const fetchRelatedPosts = async (category, currentSlug) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://prowebnaija.pythonanywhere.com/api'
      const res = await fetch(`${API_URL}/blog/posts/?page_size=4`, { cache: 'no-store' })
      if (res.ok) {
        const data = await res.json()
        const posts = data?.results || data || []
        const related = posts.filter(p => p.slug !== currentSlug).slice(0, 3)
        setRelatedPosts(related)
      }
    } catch (err) {
      console.error('Failed to fetch related posts:', err)
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

  const getPostImage = (p) => {
    const postData = p || post
    if (postData?.featured_image) return postData.featured_image
    const categoryName = postData?.category?.name || ''
    return blogImages[categoryName] || blogImages['default']
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post?.title || '')}`, '_blank')
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')
  }

  // Loading State
  if (loading) {
    return (
      <main className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        <div className="pt-32 pb-20 flex items-center justify-center">
          <div className="text-center">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-purple-200"></div>
              <div className="absolute inset-0 rounded-full border-4 border-purple-600 border-t-transparent animate-spin"></div>
            </div>
            <p className="text-neutral-500">Loading article...</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  // Error State
  if (error || !post) {
    return (
      <main className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-purple-600" />
            </div>
            <h1 className="text-2xl font-bold text-neutral-900 mb-3">Article Not Found</h1>
            <p className="text-neutral-600 mb-8">The article you're looking for doesn't exist or has been moved to a new location.</p>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <article>
        {/* Hero Section */}
        <header className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={getPostImage()} 
              alt={post.title} 
              className="w-full h-full object-cover opacity-20" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/80 to-purple-900/60" />
          </div>
          
          {/* Content */}
          <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6">
            {/* Back Link */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-purple-300 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                {post.category?.name || 'Blog'}
              </span>
              <span className="flex items-center gap-1.5 text-purple-300 text-sm">
                <Clock className="w-4 h-4" />
                {post.read_time || 5} min read
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>
            
            {/* Excerpt */}
            <p className="text-purple-200 text-lg md:text-xl mb-8 max-w-3xl">
              {post.excerpt}
            </p>
            
            {/* Author & Date */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {(post.author || 'P')[0]}
                </div>
                <div>
                  <p className="text-white font-semibold">{post.author || 'ProWeb Nigeria'}</p>
                  <p className="text-purple-300 text-sm">{formatDate(post.created_at)}</p>
                </div>
              </div>
              
              {/* Share Buttons */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-purple-300 text-sm mr-2 hidden sm:block">Share:</span>
                <button onClick={shareOnTwitter} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button onClick={shareOnFacebook} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
                <button onClick={shareOnLinkedIn} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button onClick={copyLink} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 -mt-8 md:-mt-12 mb-10 md:mb-16 relative z-10">
          <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-100 shadow-2xl ring-1 ring-black/5">
            <img 
              src={getPostImage()} 
              alt={post.title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 pb-16 md:pb-24">
          <div 
            className="prose prose-lg prose-neutral max-w-none
              prose-headings:font-bold prose-headings:text-neutral-900 prose-headings:scroll-mt-24
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-neutral-200
              prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:text-base prose-p:md:text-lg prose-p:mb-6
              prose-ul:my-6 prose-ul:pl-6 prose-li:my-2 prose-li:text-base prose-li:md:text-lg
              prose-ol:my-6 prose-ol:pl-6
              prose-a:text-purple-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:transition-colors
              prose-strong:text-neutral-900 prose-strong:font-semibold
              prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-neutral-700
              prose-pre:bg-neutral-900 prose-pre:text-sm prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:shadow-lg
              prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:text-sm prose-code:font-medium prose-code:before:content-none prose-code:after:content-none
              prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
              prose-table:text-sm prose-table:overflow-hidden prose-table:rounded-xl prose-table:border prose-table:border-neutral-200
              prose-th:bg-neutral-100 prose-th:px-4 prose-th:py-3
              prose-td:px-4 prose-td:py-3 prose-td:border-t prose-td:border-neutral-200"
            dangerouslySetInnerHTML={{ __html: post.content || '' }} 
          />
          
          {/* Tags */}
          {post.keywords && post.keywords.trim() && (
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-sm font-semibold text-neutral-500 mb-3">Tags</p>
              <div className="flex flex-wrap gap-2">
                {post.keywords.split(',').filter(k => k.trim()).map((keyword, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-neutral-100 hover:bg-purple-100 text-neutral-700 hover:text-purple-700 rounded-full text-sm font-medium transition-colors cursor-pointer"
                  >
                    {keyword.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-12 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Enjoyed this article?</p>
                <p className="text-sm text-neutral-600">Share it with your network</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={shareOnTwitter} className="w-11 h-11 bg-white hover:bg-purple-600 hover:text-white rounded-xl flex items-center justify-center text-neutral-600 transition-all shadow-sm">
                  <Twitter className="w-5 h-5" />
                </button>
                <button onClick={shareOnFacebook} className="w-11 h-11 bg-white hover:bg-purple-600 hover:text-white rounded-xl flex items-center justify-center text-neutral-600 transition-all shadow-sm">
                  <Facebook className="w-5 h-5" />
                </button>
                <button onClick={shareOnLinkedIn} className="w-11 h-11 bg-white hover:bg-purple-600 hover:text-white rounded-xl flex items-center justify-center text-neutral-600 transition-all shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button onClick={copyLink} className="w-11 h-11 bg-white hover:bg-purple-600 hover:text-white rounded-xl flex items-center justify-center text-neutral-600 transition-all shadow-sm">
                  {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-neutral-50 border-t border-neutral-200">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Continue Reading</h2>
              <p className="text-neutral-600">More articles you might enjoy</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug} 
                  href={`/blog/${relatedPost.slug}`} 
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img 
                      src={getPostImage(relatedPost)} 
                      alt={relatedPost.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2 text-xs text-neutral-500">
                      <span className="px-2 py-0.5 bg-neutral-100 rounded text-neutral-600 font-medium">{relatedPost.category?.name}</span>
                      <span>{relatedPost.read_time} min read</span>
                    </div>
                    <h3 className="font-bold text-neutral-900 leading-snug group-hover:text-purple-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-neutral-200 text-neutral-700 font-semibold rounded-xl hover:border-purple-500 hover:text-purple-600 transition-all"
              >
                View All Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="relative w-full max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-purple-200 text-lg mb-8 max-w-xl mx-auto">Let's build a stunning website that grows your business and converts visitors into customers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-neutral-100 hover:shadow-xl transition-all"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/portfolio" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
