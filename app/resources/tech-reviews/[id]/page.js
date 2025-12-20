import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import FloatingWhatsApp from '../../../components/FloatingWhatsApp'
import { Clock, User, ArrowLeft, Share2, Bookmark, Star, ThumbsUp, ThumbsDown, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }) {
  return {
    title: 'Tech Tool Review | Web Development Tools Comparison Guide',
    description: 'In-depth review of web development tools and technologies. Expert insights to help you choose the right tools for your project.',
    alternates: {
      canonical: `/resources/tech-reviews/${params.id}`,
    },
    robots: {
      index: true,
      follow: true,
    }
  }
}

export default function TechReviewDetailPage({ params }) {
  // This would normally fetch data based on params.id
  const review = {
    id: params.id,
    title: "Next.js 14 vs React 18: Complete Comparison",
    category: "Frameworks",
    rating: 4.8,
    readTime: "12 min read",
    author: "ProWeb Team",
    date: "Oct 15, 2025",
    pros: [
      "Excellent performance with automatic optimization",
      "Server-side rendering out of the box",
      "Great developer experience with fast refresh",
      "Built-in image optimization",
      "API routes for backend functionality"
    ],
    cons: [
      "Steeper learning curve for beginners",
      "Opinionated structure may limit flexibility",
      "Requires understanding of both client and server concepts"
    ],
    verdict: "Excellent choice for full-stack applications that need SEO and performance",
    content: `
      <h2>Introduction</h2>
      <p>Next.js 14 and React 18 are both powerful tools for building modern web applications, but they serve different purposes. In this comprehensive comparison, we'll explore the strengths, weaknesses, and ideal use cases for each.</p>
      
      <h2>What is React 18?</h2>
      <p>React 18 is the latest major version of the React library, bringing new features like concurrent rendering, automatic batching, and transitions. It's a library focused solely on building user interfaces.</p>
      
      <h2>What is Next.js 14?</h2>
      <p>Next.js 14 is a full-stack React framework built on top of React 18. It adds server-side rendering, static site generation, API routes, and many other features that React doesn't provide out of the box.</p>
      
      <h2>Performance Comparison</h2>
      <p>Next.js 14 offers superior performance for most real-world applications due to:</p>
      <ul>
        <li><strong>Automatic code splitting:</strong> Only loads JavaScript needed for each page</li>
        <li><strong>Image optimization:</strong> Automatically optimizes images with the Image component</li>
        <li><strong>Server-side rendering:</strong> Improves initial load time and SEO</li>
        <li><strong>Edge functions:</strong> Deploy code closer to users for faster response times</li>
      </ul>
      
      <h2>Developer Experience</h2>
      <p>Both offer excellent developer experience, but in different ways:</p>
      <ul>
        <li><strong>React 18:</strong> More flexibility, perfect for SPAs, easier to integrate with existing projects</li>
        <li><strong>Next.js 14:</strong> Opinionated structure speeds up development, includes routing and many features out of the box</li>
      </ul>
      
      <h2>SEO Capabilities</h2>
      <p>Next.js 14 is the clear winner for SEO-critical applications. With server-side rendering and static site generation, search engines can easily crawl and index your content. React 18 alone requires additional configuration for proper SEO.</p>
      
      <h2>When to Use React 18</h2>
      <ul>
        <li>Building single-page applications (SPAs)</li>
        <li>When you need maximum flexibility in architecture</li>
        <li>Integrating into existing projects</li>
        <li>Building component libraries</li>
        <li>When you don't need SEO</li>
      </ul>
      
      <h2>When to Use Next.js 14</h2>
      <ul>
        <li>Building full-stack web applications</li>
        <li>E-commerce websites</li>
        <li>Content-heavy websites (blogs, documentation)</li>
        <li>When SEO is important</li>
        <li>When you need API routes without a separate backend</li>
        <li>Enterprise applications</li>
      </ul>
      
      <h2>Code Example: Fetching Data</h2>
      <p>Here's how data fetching differs between the two:</p>
      
      <h3>React 18:</h3>
      <pre><code>import { useState, useEffect } from 'react'

export default function Products() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  
  return (
    &lt;div&gt;
      {products.map(product => (
        &lt;div key={product.id}&gt;{product.name}&lt;/div&gt;
      ))}
    &lt;/div&gt;
  )
}</code></pre>

      <h3>Next.js 14 (Server Component):</h3>
      <pre><code>async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    cache: 'force-cache'
  })
  return res.json()
}

export default async function Products() {
  const products = await getProducts()
  
  return (
    &lt;div&gt;
      {products.map(product => (
        &lt;div key={product.id}&gt;{product.name}&lt;/div&gt;
      ))}
    &lt;/div&gt;
  )
}</code></pre>
      
      <h2>Pricing and Hosting</h2>
      <p>Both are open-source and free to use. However, Next.js applications are optimized for deployment on Vercel (the company behind Next.js), which offers generous free tier hosting. React 18 apps can be hosted anywhere.</p>
      
      <h2>Our Verdict</h2>
      <p>Choose <strong>React 18</strong> if you're building a single-page application, need maximum flexibility, or are working on a project where SEO isn't critical.</p>
      <p>Choose <strong>Next.js 14</strong> if you're building a full-stack application, need excellent SEO, want faster development with built-in features, or are creating an e-commerce or content-heavy site.</p>
      
      <h2>Conclusion</h2>
      <p>Both React 18 and Next.js 14 are excellent choices, but they serve different purposes. Next.js 14 is essentially React 18 plus a comprehensive set of features for building production-ready applications. For most commercial projects, especially those requiring SEO, Next.js 14 is the superior choice.</p>
    `
  }

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= Math.floor(rating)
                ? 'fill-yellow-400 text-yellow-400'
                : star - 0.5 <= rating
                ? 'fill-yellow-400/50 text-yellow-400'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
        <span className="ml-2 text-gray-600 font-semibold">{rating}/5</span>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/resources/tech-reviews"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tech Reviews
            </Link>

            {/* Header */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-8">
              <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  {review.category}
                </span>
                {renderStars(review.rating)}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {review.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>{review.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{review.readTime}</span>
                </div>
                <span>{review.date}</span>
              </div>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <ThumbsUp className="w-5 h-5 text-green-600" />
                    <h3 className="font-bold text-gray-900">Pros</h3>
                  </div>
                  <ul className="space-y-2">
                    {review.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <ThumbsDown className="w-5 h-5 text-red-600" />
                    <h3 className="font-bold text-gray-900">Cons</h3>
                  </div>
                  <ul className="space-y-2">
                    {review.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verdict */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Our Verdict:</h3>
                <p className="text-gray-700">{review.verdict}</p>
              </div>

              <div className="flex gap-4 mt-6">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Bookmark className="w-5 h-5" />
                  <span>Save</span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: review.content }} />
            </div>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Building with Next.js or React?</h2>
              <p className="text-xl mb-6 text-white/90">
                Our team specializes in both React and Next.js development. Let us help you choose the right tool for your project.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

