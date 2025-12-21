import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import FloatingWhatsApp from '../../../components/FloatingWhatsApp'
import { Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const id = resolvedParams.id
  return {
    title: 'Tech Tip | Web Development Tutorial & Best Practices Guide',
    description: 'Learn web development best practices and tips. Expert tutorials to improve your coding skills and build better websites.',
    alternates: {
      canonical: `/resources/tech-tips/${id}`,
    },
    robots: {
      index: true,
      follow: true,
    }
  }
}

export default async function TechTipDetailPage({ params }) {
  const resolvedParams = await params
  const tipId = resolvedParams.id
  // This would normally fetch data based on params.id
  const tip = {
    id: tipId,
    title: "10 Next.js Performance Optimization Techniques",
    category: "Next.js",
    readTime: "8 min read",
    author: "ProWeb Team",
    date: "Oct 15, 2025",
    content: `
      <h2>Introduction</h2>
      <p>Next.js is a powerful React framework that offers exceptional performance out of the box. However, there are several advanced techniques you can implement to make your applications even faster and more efficient.</p>
      
      <h2>1. Image Optimization</h2>
      <p>Use the Next.js Image component to automatically optimize images. This includes lazy loading, responsive images, and modern formats like WebP.</p>
      <pre><code>import Image from 'next/image'

export default function MyComponent() {
  return (
    &lt;Image
      src="/hero.jpg"
      alt="Hero"
      width={1200}
      height={600}
      priority
    /&gt;
  )
}</code></pre>
      
      <h2>2. Server-Side Rendering (SSR)</h2>
      <p>Use SSR for dynamic content that needs to be fresh on every request. This improves SEO and initial page load performance.</p>
      
      <h2>3. Static Site Generation (SSG)</h2>
      <p>For content that doesn't change frequently, use SSG to pre-render pages at build time. This provides the fastest possible load times.</p>
      
      <h2>4. Incremental Static Regeneration (ISR)</h2>
      <p>ISR allows you to update static pages after build time without rebuilding the entire site. Perfect for content that changes occasionally.</p>
      
      <h2>5. Code Splitting</h2>
      <p>Next.js automatically code splits your application. You can further optimize by using dynamic imports for components that aren't immediately needed.</p>
      
      <h2>6. Font Optimization</h2>
      <p>Use next/font to automatically optimize and load Google Fonts or custom fonts efficiently.</p>
      
      <h2>7. API Route Optimization</h2>
      <p>Implement caching strategies for your API routes to reduce database queries and improve response times.</p>
      
      <h2>8. Bundle Analysis</h2>
      <p>Regularly analyze your bundle size using @next/bundle-analyzer to identify and eliminate unnecessary dependencies.</p>
      
      <h2>9. Prefetching</h2>
      <p>Take advantage of Next.js automatic prefetching for Link components to make navigation feel instant.</p>
      
      <h2>10. Edge Functions</h2>
      <p>Deploy API routes and middleware to the edge for faster response times globally.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these optimization techniques, you can significantly improve your Next.js application's performance, providing a better experience for your users and improving your search engine rankings.</p>
    `
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/resources/tech-tips"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tech Tips
            </Link>

            {/* Header */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-8">
              <div className="mb-6">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  {tip.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {tip.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>{tip.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{tip.readTime}</span>
                </div>
                <span>{tip.date}</span>
              </div>

              <div className="flex gap-4">
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
              <div dangerouslySetInnerHTML={{ __html: tip.content }} />
            </div>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Need Help with Next.js?</h2>
              <p className="text-xl mb-6 text-white/90">
                Our team specializes in building high-performance Next.js applications.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Get in Touch
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

