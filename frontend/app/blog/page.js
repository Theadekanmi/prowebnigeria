'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { ArrowRight, Calendar, TrendingUp, ChevronLeft, ChevronRight, Search, X, Clock, Sparkles } from 'lucide-react'

const blogImages = {
  'Rankings': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  'SEO': 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80',
  'Pricing': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  'Guide': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
  'Comparison': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  'E-commerce': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  'Web Design': 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
  'Digital Marketing': 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
  'Tech Tips': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
  'Tech Reviews': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  'default': 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80'
}

const FALLBACK_POSTS = [
  { title: 'Top 10 Best Web Designers in Nigeria 2025', excerpt: 'Discover the leading web design companies in Nigeria ranked by portfolio, reviews, and expertise.', slug: 'top-10-best-web-designers-nigeria-2025', category: { name: 'Rankings' }, read_time: 12, created_at: '2025-12-26', is_featured: true },
  { title: 'Complete SEO Guide for Nigerian Businesses 2025', excerpt: 'Master search engine optimization with our comprehensive guide.', slug: 'complete-seo-guide-nigerian-businesses-2025', category: { name: 'SEO' }, read_time: 15, created_at: '2025-12-25' },
  { title: 'How Much Does a Website Cost in Nigeria?', excerpt: 'Understand website development costs in Nigeria. Complete pricing guide.', slug: 'website-cost-nigeria-2025-pricing-guide', category: { name: 'Pricing' }, read_time: 10, created_at: '2025-12-24' },
  { title: 'How to Choose a Web Designer in Nigeria', excerpt: 'Avoid scams and find the perfect web designer for your business.', slug: 'how-to-choose-web-designer-nigeria', category: { name: 'Guide' }, read_time: 10, created_at: '2025-12-23' },
  { title: 'WordPress vs Custom Website: Which is Better?', excerpt: 'Compare WordPress and custom websites for Nigerian businesses.', slug: 'wordpress-vs-custom-website-nigeria', category: { name: 'Comparison' }, read_time: 8, created_at: '2025-12-22' },
  { title: 'Best Payment Gateways in Nigeria 2025', excerpt: 'Compare Paystack, Flutterwave, and other payment gateways.', slug: 'best-payment-gateways-nigeria', category: { name: 'E-commerce' }, read_time: 10, created_at: '2025-12-21' },
  { title: 'Web Design Trends 2025', excerpt: 'Stay ahead with the latest web design trends for 2025.', slug: 'web-design-trends-2025', category: { name: 'Web Design' }, read_time: 8, created_at: '2025-12-20' },
  { title: 'Digital Marketing for Nigerian SMEs', excerpt: 'Effective digital marketing strategies for small businesses.', slug: 'digital-marketing-nigerian-smes', category: { name: 'Digital Marketing' }, read_time: 12, created_at: '2025-12-19' },
  { title: 'Best E-commerce Platforms Nigeria 2025', excerpt: 'Compare the best e-commerce platforms for Nigerian businesses.', slug: 'best-ecommerce-platforms-nigeria-2025', category: { name: 'E-commerce' }, read_time: 10, created_at: '2025-12-18' },
  { title: 'Web Design Services in Lagos Nigeria', excerpt: 'Complete guide to web design services in Lagos.', slug: 'web-design-services-lagos-nigeria', category: { name: 'Web Design' }, read_time: 8, created_at: '2025-12-17' },
]

const ITEMS_PER_PAGE = 9

export default function BlogPage() {
  const [posts, setPosts] = useState(FALLBACK_POSTS)
  const [categories, setCategories] = useState(['All', 'Rankings', 'SEO', 'Pricing', 'Guide', 'Comparison', 'E-commerce', 'Web Design', 'Digital Marketing', 'Tech Tips', 'Tech Reviews'])
  const [loading, setLoading] = useState(true)
  const [isOffline, setIsOffline] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    fetchData()
  }, [])

  const fetchData = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api'
    try {
      const catRes = await fetch(`${API_URL}/blog/categories/`, { cache: 'no-store' })
      if (catRes.ok) {
        const catData = await catRes.json()
        if (catData?.length > 0) setCategories(['All', ...catData.map(c => c.name)])
      }
      const postRes = await fetch(`${API_URL}/blog/posts/?page_size=100`, { cache: 'no-store' })
      if (postRes.ok) {
        const postData = await postRes.json()
        const postList = postData?.results || postData || []
        if (postList.length > 0) { setPosts(postList); setIsOffline(false) }
        else setIsOffline(true)
      } else setIsOffline(true)
    } catch { setIsOffline(true) }
    finally { setLoading(false) }
  }

  const filteredPosts = posts.filter(post => {
    const catName = post.category?.name || ''
    const matchSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || 
      catName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchCat = activeCategory === 'All' || catName === activeCategory
    return matchSearch && matchCat
  })

  const featuredPost = activeCategory === 'All' && searchQuery === '' ? filteredPosts.find(p => p.is_featured) || filteredPosts[0] : null
  const displayPosts = featuredPost ? filteredPosts.filter(p => p.slug !== featuredPost.slug) : filteredPosts
  const totalPages = Math.ceil(displayPosts.length / ITEMS_PER_PAGE)
  const currentPosts = displayPosts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const getPostImage = (post) => post.featured_image || blogImages[post.category?.name] || blogImages['default']
  const formatDate = (d) => !mounted || !d ? '' : new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

  useEffect(() => { setCurrentPage(1) }, [searchQuery, activeCategory])

  return (
    <main className="min-h-screen bg-neutral-50 overflow-x-hidden">
      <Header />
      
      {/* Hero Section - Modern Gradient */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Insights & Resources</span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 leading-tight">
              The ProWeb <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">Blog</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-neutral-600 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Expert insights on web development, SEO strategies, and digital marketing to grow your business online.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-neutral-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search articles, topics, or keywords..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="w-full pl-12 pr-12 py-4 bg-white border-2 border-neutral-200 rounded-2xl text-base focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all shadow-lg shadow-neutral-200/50"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-300 transition-colors"
                >
                  <X className="w-4 h-4 text-neutral-600" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories - Pill Style */}
      <section className="sticky top-16 z-20 bg-white/80 backdrop-blur-lg border-b border-neutral-200/50 shadow-sm">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide -mx-4 px-4">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)} 
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {isOffline && <div data-offline="true" className="hidden" />}

      {/* Loading State */}
      {loading ? (
        <section className="py-20">
          <div className="text-center">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-purple-200"></div>
              <div className="absolute inset-0 rounded-full border-4 border-purple-600 border-t-transparent animate-spin"></div>
            </div>
            <p className="text-neutral-500">Loading amazing content...</p>
          </div>
        </section>
      ) : filteredPosts.length === 0 ? (
        /* No Results */
        <section className="py-20">
          <div className="text-center px-4">
            <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-neutral-400" />
            </div>
            <h2 className="text-xl font-bold text-neutral-900 mb-2">No articles found</h2>
            <p className="text-neutral-600 mb-6 max-w-md mx-auto">We couldn't find any articles matching your search. Try different keywords or browse all categories.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              View All Articles
            </button>
          </div>
        </section>
      ) : (
        <>
          {/* Search Results Count */}
          {(searchQuery || activeCategory !== 'All') && (
            <div className="bg-purple-50 py-3 px-4">
              <p className="text-sm text-purple-700 max-w-6xl mx-auto font-medium">
                Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                {searchQuery && <> matching "<span className="font-bold">{searchQuery}</span>"</>}
                {activeCategory !== 'All' && <> in <span className="font-bold">{activeCategory}</span></>}
              </p>
            </div>
          )}

          {/* Featured Post - Hero Card */}
          {featuredPost && (
            <section className="py-8 md:py-12 bg-white">
              <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                <Link href={`/blog/${featuredPost.slug}`} className="group block">
                  <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                      <img 
                        src={getPostImage(featuredPost)} 
                        alt={featuredPost.title} 
                        className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-6 sm:p-8 md:p-12 lg:p-16">
                      <div className="max-w-2xl">
                        {/* Badge */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold uppercase tracking-wide">
                            Featured
                          </span>
                          <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium backdrop-blur-sm">
                            {featuredPost.category?.name}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-purple-200 transition-colors">
                          {featuredPost.title}
                        </h2>
                        
                        {/* Excerpt */}
                        <p className="text-purple-200 text-base sm:text-lg mb-6 line-clamp-2 max-w-xl">
                          {featuredPost.excerpt}
                        </p>
                        
                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-purple-300">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span suppressHydrationWarning>{formatDate(featuredPost.created_at)}</span>
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {featuredPost.read_time} min read
                          </span>
                        </div>
                        
                        {/* Read More */}
                        <div className="mt-6 inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                          Read Article
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          )}

          {/* Articles Grid */}
          <section className="py-10 md:py-16">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {searchQuery || activeCategory !== 'All' ? 'Results' : 'Latest Articles'}
                </h2>
                <span className="text-sm text-neutral-500">{displayPosts.length} articles</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {currentPosts.map((post, index) => (
                  <Link 
                    key={post.slug} 
                    href={`/blog/${post.slug}`} 
                    className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/50 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-100 relative">
                      <img 
                        src={getPostImage(post)} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-neutral-700 rounded-lg text-xs font-medium shadow-sm">
                          {post.category?.name}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      {/* Meta */}
                      <div className="flex items-center gap-3 mb-3 text-xs text-neutral-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span suppressHydrationWarning>{formatDate(post.created_at)}</span>
                        </span>
                        <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.read_time} min
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold text-neutral-900 text-lg leading-snug mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-sm text-neutral-600 line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      
                      {/* Read More */}
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 group-hover:gap-2 transition-all">
                        Read more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))} 
                    disabled={currentPage === 1} 
                    className="p-3 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(totalPages)].map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setCurrentPage(i + 1)} 
                        className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all ${
                          currentPage === i + 1 
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25' 
                            : 'border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} 
                    disabled={currentPage === totalPages} 
                    className="p-3 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-white border-t border-neutral-100">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Stay Updated
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Get the latest insights</h2>
          <p className="text-neutral-600 mb-8 max-w-lg mx-auto">Subscribe to our newsletter for weekly tips on web development, SEO, and growing your business online.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-5 py-3 border-2 border-neutral-200 rounded-xl text-base focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-neutral-500 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="relative w-full max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Dream Website?</h2>
          <p className="text-purple-200 text-lg mb-8 max-w-xl mx-auto">Let's create a stunning website that ranks on Google and converts visitors into customers.</p>
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
