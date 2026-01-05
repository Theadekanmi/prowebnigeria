import { Suspense } from 'react'
import BlogClient from './BlogClient'

// Server-side metadata for SEO
export const metadata = {
  title: 'Web Design Blog Nigeria | SEO Tips, Pricing Guides | ProWeb Nigeria',
  description: 'Expert insights on web design, SEO, digital marketing for Nigerian businesses. Learn about website costs, best practices, and how to grow your business online.',
  keywords: [
    'web design blog nigeria',
    'seo tips nigeria',
    'website cost nigeria',
    'digital marketing nigeria',
    'web development tips',
    'nigerian business website',
    'ecommerce nigeria',
    'web design lagos blog',
    'website pricing guide nigeria'
  ],
  alternates: {
    canonical: 'https://prowebnigeria.ng/blog',
  },
  openGraph: {
    title: 'Web Design Blog Nigeria | ProWeb Nigeria',
    description: 'Expert insights on web design, SEO, and digital marketing for Nigerian businesses.',
    url: 'https://prowebnigeria.ng/blog',
    type: 'website',
  },
}

// Static blog posts for SEO (these are your actual posts)
const staticPosts = [
  { 
    title: 'Top 10 Best Web Designers in Nigeria 2025', 
    excerpt: 'Discover the leading web design companies in Nigeria ranked by portfolio, reviews, and expertise.',
    slug: 'top-10-best-web-designers-nigeria-2025',
    category: 'Rankings',
    date: '2025-12-26'
  },
  { 
    title: 'Complete SEO Guide for Nigerian Businesses 2025', 
    excerpt: 'Master search engine optimization with our comprehensive guide for Nigerian businesses.',
    slug: 'complete-seo-guide-nigerian-businesses-2025',
    category: 'SEO',
    date: '2025-12-25'
  },
  { 
    title: 'How Much Does a Website Cost in Nigeria?', 
    excerpt: 'Understand website development costs in Nigeria. Complete pricing guide from ₦100k to ₦10M+.',
    slug: 'website-cost-nigeria-2025-pricing-guide',
    category: 'Pricing',
    date: '2025-12-24'
  },
  { 
    title: 'How to Choose a Web Designer in Nigeria', 
    excerpt: 'Avoid scams and find the perfect web designer for your Nigerian business.',
    slug: 'how-to-choose-web-designer-nigeria',
    category: 'Guide',
    date: '2025-12-23'
  },
  { 
    title: 'WordPress vs Custom Website: Which is Better?', 
    excerpt: 'Compare WordPress and custom websites for Nigerian businesses. Pros, cons, and recommendations.',
    slug: 'wordpress-vs-custom-website-nigeria',
    category: 'Comparison',
    date: '2025-12-22'
  },
  { 
    title: 'Best Payment Gateways in Nigeria 2025', 
    excerpt: 'Compare Paystack, Flutterwave, and other payment gateways for Nigerian e-commerce.',
    slug: 'best-payment-gateways-nigeria',
    category: 'E-commerce',
    date: '2025-12-21'
  },
  { 
    title: 'Web Design Trends 2025', 
    excerpt: 'Stay ahead with the latest web design trends for 2025. What Nigerian businesses need to know.',
    slug: 'web-design-trends-2025',
    category: 'Web Design',
    date: '2025-12-20'
  },
  { 
    title: 'Digital Marketing for Nigerian SMEs', 
    excerpt: 'Effective digital marketing strategies for small and medium businesses in Nigeria.',
    slug: 'digital-marketing-nigerian-smes',
    category: 'Digital Marketing',
    date: '2025-12-19'
  },
  { 
    title: 'Best E-commerce Platforms Nigeria 2025', 
    excerpt: 'Compare the best e-commerce platforms for Nigerian businesses. Shopify, WooCommerce, custom.',
    slug: 'best-ecommerce-platforms-nigeria-2025',
    category: 'E-commerce',
    date: '2025-12-18'
  },
  { 
    title: 'Web Design Services in Lagos Nigeria', 
    excerpt: 'Complete guide to web design services in Lagos. What to expect, pricing, and top companies.',
    slug: 'web-design-services-lagos-nigeria',
    category: 'Web Design',
    date: '2025-12-17'
  },
  { 
    title: 'Why Your Nigerian Business Needs a Professional Website', 
    excerpt: 'Discover why having a professional website is essential for Nigerian businesses in 2025.',
    slug: 'why-nigerian-business-needs-professional-website',
    category: 'Business',
    date: '2025-12-16'
  }
]

// Generate Blog Schema
function generateBlogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "ProWeb Nigeria Blog",
    "description": "Expert insights on web design, SEO, and digital marketing for Nigerian businesses",
    "url": "https://prowebnigeria.ng/blog",
    "publisher": {
      "@type": "Organization",
      "name": "ProWeb Nigeria",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prowebnigeria.ng/logo.webp"
      }
    },
    "blogPost": staticPosts.slice(0, 5).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://prowebnigeria.ng/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": "ProWeb Nigeria"
      }
    }))
  }
}

// Generate Breadcrumb Schema
function generateBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://prowebnigeria.ng"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://prowebnigeria.ng/blog"
      }
    ]
  }
}

export default function BlogPage() {
  return (
    <>
      {/* Blog Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogSchema())
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema())
        }}
      />
      
      {/* Server-rendered content for SEO crawlers */}
      <div className="sr-only">
        <h1>ProWeb Nigeria Blog - Web Design & SEO Insights</h1>
        <p>Expert insights on web design, SEO strategies, and digital marketing to grow your Nigerian business online.</p>
        
        <h2>Latest Articles</h2>
        {staticPosts.map((post, i) => (
          <article key={i}>
            <h3><a href={`/blog/${post.slug}`}>{post.title}</a></h3>
            <p>{post.excerpt}</p>
            <span>Category: {post.category}</span>
            <time dateTime={post.date}>{post.date}</time>
          </article>
        ))}
        
        <h2>Categories</h2>
        <ul>
          <li>Web Design</li>
          <li>SEO</li>
          <li>E-commerce</li>
          <li>Digital Marketing</li>
          <li>Pricing Guides</li>
          <li>Business Tips</li>
        </ul>
      </div>
      
      {/* Client-side interactive content */}
      <Suspense fallback={<BlogLoading />}>
        <BlogClient initialPosts={staticPosts} />
      </Suspense>
    </>
  )
}

function BlogLoading() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-neutral-500">Loading articles...</p>
      </div>
    </div>
  )
}
