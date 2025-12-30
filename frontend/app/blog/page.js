'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { ArrowRight, Calendar, TrendingUp, ChevronLeft, ChevronRight, Search, X } from 'lucide-react'

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
  { title: 'Why Your Business Needs a Professional Website', excerpt: 'Discover why having a professional website is essential.', slug: 'why-nigerian-business-needs-professional-website', category: { name: 'Guide' }, read_time: 7, created_at: '2025-12-16' },
  { title: '10 Next.js Performance Optimization Techniques', excerpt: 'Learn advanced techniques to make your Next.js apps fast.', slug: 'nextjs-performance-optimization-techniques', category: { name: 'Tech Tips' }, read_time: 8, created_at: '2025-12-15' },
  { title: 'JavaScript ES2024 Features You Should Know', excerpt: 'Explore the latest JavaScript features for better code.', slug: 'javascript-es2024-features', category: { name: 'Tech Tips' }, read_time: 6, created_at: '2025-12-14' },
  { title: 'Building Secure Web Applications', excerpt: 'Comprehensive security practices for web developers.', slug: 'building-secure-web-applications-guide', category: { name: 'Tech Tips' }, read_time: 12, created_at: '2025-12-13' },
  { title: 'TypeScript Best Practices', excerpt: 'Essential TypeScript patterns for large applications.', slug: 'typescript-best-practices-large-applications', category: { name: 'Tech Tips' }, read_time: 10, created_at: '2025-12-12' },
  { title: 'Responsive Design with Tailwind CSS', excerpt: 'Master responsive design with Tailwind CSS.', slug: 'responsive-design-tailwind-css', category: { name: 'Tech Tips' }, read_time: 7, created_at: '2025-12-11' },
  { title: 'API Design Best Practices', excerpt: 'Learn how to design robust, scalable APIs.', slug: 'api-design-best-practices', category: { name: 'Tech Tips' }, read_time: 9, created_at: '2025-12-10' },
  { title: 'Debugging JavaScript Like a Pro', excerpt: 'Advanced debugging techniques and tools.', slug: 'debugging-javascript-like-pro', category: { name: 'Tech Tips' }, read_time: 8, created_at: '2025-12-09' },
  { title: 'Mobile-First Development Strategy', excerpt: 'Why mobile-first approach is crucial.', slug: 'mobile-first-development-strategy', category: { name: 'Tech Tips' }, read_time: 6, created_at: '2025-12-08' },
  { title: 'Git Workflow for Development Teams', excerpt: 'Establish efficient Git workflows for your team.', slug: 'git-workflow-development-teams', category: { name: 'Tech Tips' }, read_time: 11, created_at: '2025-12-07' },
  { title: 'Next.js 14 vs React 18: Complete Comparison', excerpt: 'Comprehensive comparison of Next.js 14 and React 18.', slug: 'nextjs-14-vs-react-18-comparison', category: { name: 'Tech Reviews' }, read_time: 12, created_at: '2025-12-06' },
  { title: 'Vercel vs Netlify vs AWS: Hosting Showdown', excerpt: 'Detailed comparison of popular hosting platforms.', slug: 'vercel-vs-netlify-vs-aws-hosting', category: { name: 'Tech Reviews' }, read_time: 10, created_at: '2025-12-05' },
  { title: 'Tailwind CSS vs Styled Components', excerpt: 'In-depth analysis of two popular CSS solutions.', slug: 'tailwind-css-vs-styled-components-review', category: { name: 'Tech Reviews' }, read_time: 8, created_at: '2025-12-04' },
  { title: 'TypeScript vs JavaScript: When to Switch', excerpt: 'Guide on when and why to adopt TypeScript.', slug: 'typescript-vs-javascript-when-to-switch', category: { name: 'Tech Reviews' }, read_time: 9, created_at: '2025-12-03' },
  { title: 'Figma vs Adobe XD: Design Tool Comparison', excerpt: 'Comparison of two leading design tools.', slug: 'figma-vs-adobe-xd-comparison', category: { name: 'Tech Reviews' }, read_time: 7, created_at: '2025-12-02' },
  { title: 'MongoDB vs PostgreSQL: Database Showdown', excerpt: 'Compare NoSQL vs SQL databases.', slug: 'mongodb-vs-postgresql-database-showdown', category: { name: 'Tech Reviews' }, read_time: 11, created_at: '2025-12-01' },
  { title: 'VS Code Extensions: Top 20 for Developers', excerpt: 'Essential VS Code extensions for productivity.', slug: 'vs-code-extensions-top-20-web-developers', category: { name: 'Tech Reviews' }, read_time: 6, created_at: '2025-11-30' },
  { title: 'React Native vs Flutter', excerpt: 'Cross-platform mobile development comparison.', slug: 'react-native-vs-flutter-mobile-development', category: { name: 'Tech Reviews' }, read_time: 13, created_at: '2025-11-29' },
  { title: 'GitHub vs GitLab vs Bitbucket', excerpt: 'Compare the top Git hosting platforms.', slug: 'github-vs-gitlab-vs-bitbucket-git-hosting', category: { name: 'Tech Reviews' }, read_time: 8, created_at: '2025-11-28' },
]

const ITEMS_PER_PAGE = 6

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
    const matchSearch = searchQuery === '' || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || catName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchCat = activeCategory === 'All' || catName === activeCategory
    return matchSearch && matchCat
  })

  const featuredPost = activeCategory === 'All' && searchQuery === '' ? filteredPosts.find(p => p.is_featured) || filteredPosts[0] : null
  const displayPosts = featuredPost ? filteredPosts.filter(p => p.slug !== featuredPost.slug) : filteredPosts
  const totalPages = Math.ceil(displayPosts.length / ITEMS_PER_PAGE)
  const currentPosts = displayPosts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const getPostImage = (post) => post.featured_image || blogImages[post.category?.name] || blogImages['default']
  const formatDate = (d) => !mounted || !d ? '' : new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  useEffect(() => { setCurrentPage(1) }, [searchQuery, activeCategory])

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4"><TrendingUp className="w-4 h-4" />Latest Insights</div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Web Development &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">SEO Blog</span></h1>
            <p className="text-xl text-neutral-600 mb-8">Expert insights on web development, SEO strategies, and digital marketing for Nigerian businesses.</p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input type="text" placeholder="Search articles..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-12 py-4 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-lg bg-white" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
              {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-300"><X className="w-4 h-4 text-neutral-600" /></button>}
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 border-b border-neutral-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-purple-600 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}>{cat}</button>)}
          </div>
        </div>
      </section>
      {/* Hidden offline indicator for devs only */}
      {isOffline && <div data-offline="true" className="hidden" />}
      {loading ? (
        <section className="py-20"><div className="container mx-auto px-4 text-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div><p className="text-neutral-500 mt-4">Loading articles...</p></div></section>
      ) : filteredPosts.length === 0 ? (
        <section className="py-20"><div className="container mx-auto px-4 text-center"><Search className="w-16 h-16 text-neutral-300 mx-auto mb-4" /><h2 className="text-2xl font-bold text-neutral-900 mb-2">No articles found</h2><p className="text-neutral-600 mb-6">Try adjusting your search or filter.</p><button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors">Clear Filters</button></div></section>
      ) : (
        <>
          {(searchQuery || activeCategory !== 'All') && <section className="py-4 bg-neutral-50 border-b border-neutral-200"><div className="container mx-auto px-4"><p className="text-neutral-600">Found <span className="font-semibold text-neutral-900">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''}{searchQuery && <> for &quot;<span className="font-semibold text-purple-600">{searchQuery}</span>&quot;</>}{activeCategory !== 'All' && <> in <span className="font-semibold text-purple-600">{activeCategory}</span></>}</p></div></section>}
          {featuredPost && (
            <section className="py-12 border-b border-neutral-200 bg-white"><div className="container mx-auto px-4"><Link href={`/blog/${featuredPost.slug}`} className="block group"><div className="grid md:grid-cols-2 gap-8 items-center"><div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden relative" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}><img src={getPostImage(featuredPost)} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-4 left-4"><span className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">Featured</span></div></div><div><div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">{featuredPost.category?.name}</span><span className="text-sm text-neutral-500">{featuredPost.read_time} min read</span></div><h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-purple-600 transition-colors">{featuredPost.title}</h2><p className="text-lg text-neutral-600 mb-6">{featuredPost.excerpt}</p><div className="flex items-center gap-2 text-sm text-neutral-500"><Calendar className="w-4 h-4" /><span suppressHydrationWarning>{formatDate(featuredPost.created_at)}</span></div></div></div></Link></div></section>
          )}
          <section className="py-16 bg-neutral-50"><div className="container mx-auto px-4"><h2 className="text-2xl font-bold text-neutral-900 mb-8">{searchQuery || activeCategory !== 'All' ? 'Search Results' : 'Latest Articles'}</h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{currentPosts.map((post, i) => <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-purple-300 transition-all" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} data-aos="fade-up" data-aos-delay={i * 100}><div className="aspect-video bg-neutral-100 overflow-hidden"><img src={getPostImage(post)} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div><div className="p-5"><div className="flex items-center gap-3 mb-3"><span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs font-medium">{post.category?.name}</span><span className="text-xs text-neutral-500">{post.read_time} min read</span></div><h3 className="font-bold text-neutral-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">{post.title}</h3><p className="text-sm text-neutral-600 line-clamp-2 mb-3">{post.excerpt}</p><div className="flex items-center gap-1 text-xs text-neutral-500"><Calendar className="w-3 h-3" /><span suppressHydrationWarning>{formatDate(post.created_at)}</span></div></div></Link>)}</div>{totalPages > 1 && <div className="flex items-center justify-center gap-2 mt-12"><button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="p-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 disabled:opacity-50"><ChevronLeft className="w-5 h-5" /></button>{[...Array(totalPages)].map((_, i) => <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === i + 1 ? 'bg-purple-600 text-white' : 'border border-neutral-200 bg-white hover:bg-neutral-50'}`}>{i + 1}</button>)}<button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="p-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 disabled:opacity-50"><ChevronRight className="w-5 h-5" /></button></div>}</div></section>
        </>
      )}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600"><div className="container mx-auto px-4"><div className="max-w-2xl mx-auto text-center"><h2 className="text-3xl font-bold text-white mb-4">Need a Professional Website?</h2><p className="text-purple-100 mb-8">Get a website that ranks on Google and converts visitors into customers.</p><Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">Get Free Quote <ArrowRight className="w-5 h-5" /></Link></div></div></section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
