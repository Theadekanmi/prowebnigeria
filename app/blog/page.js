import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User, Search, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Web Development Blog | SEO Tips & Digital Marketing Nigeria',
  description: 'Expert insights on web development, SEO strategies, and digital marketing for Nigerian businesses. Learn from the best web designers in Nigeria.',
  keywords: [
    'web development blog nigeria',
    'seo tips nigeria',
    'digital marketing nigeria',
    'web design tips lagos',
    'best web designers nigeria',
    'website development guide'
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Web Development Blog | ProWeb Nigeria',
    description: 'Expert insights on web development, SEO strategies, and digital marketing for Nigerian businesses.',
    url: 'https://prowebnigeria.ng/blog',
    siteName: 'ProWeb Nigeria',
    type: 'website',
  }
}

export default function BlogPage() {
  const featuredPost = {
    title: 'Top 10 Best Web Designers in Nigeria 2025 - Complete Rankings',
    excerpt: 'Discover the leading web design companies in Nigeria. We rank the top 10 based on portfolio quality, client reviews, pricing, and expertise.',
    date: 'December 26, 2025',
    author: 'ProWeb Nigeria',
    category: 'Rankings',
    readTime: '12 min read',
    slug: 'top-10-best-web-designers-nigeria-2025',
    featured: true
  }

  const posts = [
    {
      title: 'Complete SEO Guide for Nigerian Businesses 2025',
      excerpt: 'Master search engine optimization with our comprehensive guide. Learn how to rank #1 on Google for Nigerian keywords.',
      date: 'December 25, 2025',
      author: 'ProWeb Nigeria',
      category: 'SEO',
      readTime: '15 min read',
      slug: 'complete-seo-guide-nigerian-businesses-2025'
    },
    {
      title: 'How Much Does a Website Cost in Nigeria? 2025 Pricing Guide',
      excerpt: 'Understand website development costs in Nigeria. From basic sites to e-commerce platforms, get accurate pricing information.',
      date: 'December 24, 2025',
      author: 'ProWeb Nigeria',
      category: 'Pricing',
      readTime: '10 min read',
      slug: 'website-cost-nigeria-2025-pricing-guide'
    },
    {
      title: 'How to Choose a Web Designer in Nigeria',
      excerpt: 'Avoid scams and find the perfect web designer for your business. Red flags, green flags, and questions to ask.',
      date: 'December 26, 2025',
      author: 'ProWeb Nigeria',
      category: 'Guide',
      readTime: '10 min read',
      slug: 'how-to-choose-web-designer-nigeria'
    },
    {
      title: 'WordPress vs Custom Website: Which is Better?',
      excerpt: 'Compare WordPress and custom websites for Nigerian businesses. Understand pros, cons, and costs.',
      date: 'December 26, 2025',
      author: 'ProWeb Nigeria',
      category: 'Comparison',
      readTime: '8 min read',
      slug: 'wordpress-vs-custom-website-nigeria'
    },
    {
      title: 'Best Payment Gateways in Nigeria 2025',
      excerpt: 'Compare Paystack, Flutterwave, and other payment gateways. Fees, features, and integration guide.',
      date: 'December 26, 2025',
      author: 'ProWeb Nigeria',
      category: 'E-commerce',
      readTime: '10 min read',
      slug: 'best-payment-gateways-nigeria'
    },
    {
      title: 'Web Design Trends 2025',
      excerpt: 'Stay ahead with the latest web design trends. From AI to minimalism, what modern websites look like.',
      date: 'December 26, 2025',
      author: 'ProWeb Nigeria',
      category: 'Trends',
      readTime: '8 min read',
      slug: 'web-design-trends-2025'
    },
    {
      title: 'Web Design Services in Lagos Nigeria: Complete Guide',
      excerpt: 'Everything you need to know about professional web design services in Lagos. Learn how to choose the right web design company.',
      date: 'December 20, 2025',
      author: 'ProWeb Nigeria',
      category: 'Web Design',
      readTime: '15 min read',
      slug: 'web-design-services-lagos-nigeria'
    },
    {
      title: 'Digital Marketing for Nigerian SMEs: A Practical Guide',
      excerpt: 'Discover effective digital marketing strategies for small and medium businesses in Nigeria. Boost your online presence.',
      date: 'December 18, 2025',
      author: 'ProWeb Nigeria',
      category: 'Digital Marketing',
      readTime: '12 min read',
      slug: 'digital-marketing-nigerian-smes'
    },
    {
      title: 'Best E-commerce Platforms for Nigerian Businesses 2025',
      excerpt: 'Compare the top e-commerce solutions for selling online in Nigeria. Paystack, Flutterwave integration and more.',
      date: 'December 15, 2025',
      author: 'ProWeb Nigeria',
      category: 'E-commerce',
      readTime: '10 min read',
      slug: 'best-ecommerce-platforms-nigeria-2025'
    },
    {
      title: 'Why Your Nigerian Business Needs a Professional Website',
      excerpt: 'Learn why having a professional website is crucial for business success in Nigeria digital economy.',
      date: 'December 12, 2025',
      author: 'ProWeb Nigeria',
      category: 'Business',
      readTime: '8 min read',
      slug: 'why-nigerian-business-needs-professional-website'
    }
  ]

  const categories = [
    { name: 'All Posts', count: 11, active: true },
    { name: 'SEO', count: 1 },
    { name: 'Web Design', count: 2 },
    { name: 'E-commerce', count: 3 },
    { name: 'Digital Marketing', count: 1 },
    { name: 'Pricing', count: 1 },
    { name: 'Guide', count: 2 },
    { name: 'Rankings', count: 1 }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-neutral-50 border-b border-neutral-200">
        <div className="container">
          <div className="max-w-3xl">
            <div className="badge-primary mb-4">
              <TrendingUp className="w-4 h-4 mr-1" />
              Latest Insights
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Web Development & SEO Blog
            </h1>
            <p className="text-xl text-neutral-600">
              Expert insights on web development, SEO strategies, and digital marketing 
              for Nigerian businesses. Stay ahead of the competition.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 border-b border-neutral-200">
        <div className="container">
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-900/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🏆</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge-primary">{featuredPost.category}</span>
                  <span className="text-sm text-neutral-500">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-neutral-900">Latest Articles</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                  <Link key={index} href={`/blog/${post.slug}`} className="blog-card group">
                    <div className="blog-card-image bg-neutral-100 flex items-center justify-center">
                      <span className="text-4xl">
                        {post.category === 'SEO' && '📈'}
                        {post.category === 'Web Design' && '🎨'}
                        {post.category === 'Digital Marketing' && '📱'}
                        {post.category === 'E-commerce' && '🛒'}
                        {post.category === 'Pricing' && '💰'}
                        {post.category === 'Business' && '💼'}
                      </span>
                    </div>
                    <div className="blog-card-content">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="badge-neutral text-xs">{post.category}</span>
                        <span className="text-xs text-neutral-500">{post.readTime}</span>
                      </div>
                      <h3 className="blog-card-title">{post.title}</h3>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                      <div className="blog-card-meta">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80">
              <div className="sticky top-28 space-y-8">
                {/* Categories */}
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                  <h3 className="font-bold text-neutral-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((cat, index) => (
                      <button
                        key={index}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                          cat.active 
                            ? 'bg-primary-600 text-white' 
                            : 'text-neutral-600 hover:bg-neutral-100'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className={cat.active ? 'text-primary-200' : 'text-neutral-400'}>
                          {cat.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-neutral-900 text-white rounded-xl p-6">
                  <h3 className="font-bold mb-2">Need a Website?</h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    Get a professional website that ranks on Google and converts visitors.
                  </p>
                  <Link 
                    href="/contact" 
                    className="btn bg-white text-neutral-900 hover:bg-neutral-100 w-full text-sm"
                  >
                    Get Free Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                {/* Popular Posts */}
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                  <h3 className="font-bold text-neutral-900 mb-4">Popular Posts</h3>
                  <div className="space-y-4">
                    <Link href="/blog/top-10-best-web-designers-nigeria-2025" className="block group">
                      <p className="text-sm font-medium text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                        Top 10 Best Web Designers in Nigeria 2025
                      </p>
                      <p className="text-xs text-neutral-500 mt-1">12 min read</p>
                    </Link>
                    <Link href="/blog/complete-seo-guide-nigerian-businesses-2025" className="block group">
                      <p className="text-sm font-medium text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                        Complete SEO Guide for Nigerian Businesses
                      </p>
                      <p className="text-xs text-neutral-500 mt-1">15 min read</p>
                    </Link>
                    <Link href="/blog/website-cost-nigeria-2025-pricing-guide" className="block group">
                      <p className="text-sm font-medium text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                        Website Cost in Nigeria 2025 Guide
                      </p>
                      <p className="text-xs text-neutral-500 mt-1">10 min read</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Get SEO Tips in Your Inbox
            </h2>
            <p className="text-neutral-600 mb-8">
              Join Nigerian business owners getting weekly tips on web development, 
              SEO, and digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
