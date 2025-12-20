import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'

export const metadata = {
  title: 'Web Development Blog Nigeria | Digital Marketing & Tech Tips',
  description: 'Read our blog for web development tips, digital marketing strategies, and tech news for Nigerian businesses.',
  keywords: ['web development blog nigeria', 'digital marketing tips', 'tech news lagos', 'website tips'],
  alternates: {
    canonical: '/blog',
  }
}

export default function BlogPage() {
  const posts = [
    {
      title: 'Web Design Services in Lagos Nigeria: Complete Guide',
      excerpt: 'Everything you need to know about professional web design services in Lagos. Learn how to choose the right web design company for your business.',
      date: 'October 18, 2025',
      author: 'ProWeb Nigeria',
      category: 'Web Design',
      slug: 'web-design-services-lagos-nigeria'
    },
    {
      title: 'Digital Marketing for Nigerian SMEs: A Practical Guide',
      excerpt: 'Discover effective digital marketing strategies for small and medium businesses in Nigeria. Boost your online presence and grow your customer base.',
      date: 'October 18, 2025',
      author: 'ProWeb Nigeria',
      category: 'Digital Marketing',
      slug: 'digital-marketing-nigerian-smes'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Web development tips, digital marketing strategies, and tech insights for Nigerian businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {posts.map((post, index) => (
                <article key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-purple-600 text-sm font-semibold mb-2">{post.category}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    <Link href={`/blog/${post.slug}`} className="hover:text-purple-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
