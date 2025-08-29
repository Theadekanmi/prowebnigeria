'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Web Design Services in Lagos, Nigeria",
      excerpt: "Discover why Lagos businesses choose ProWeb Nigeria for professional web design, development, and digital solutions. Get insights into our services, pricing, and what makes us the leading web design company in Nigeria.",
      author: "ProWeb Nigeria Team",
      date: "January 27, 2025",
      readTime: "12 min read",
      category: "Web Design",
      image: "/flyers1.jpg",
      featured: true,
      slug: "web-design-services-lagos-nigeria"
    },
    {
      id: 2,
      title: "How to Create a Shopify Store in Nigeria",
      excerpt: "Learn the step-by-step process of setting up a successful e-commerce store in Nigeria using Shopify, including payment gateway integration and local market strategies.",
      author: "David Okonkwo",
      date: "January 25, 2025",
      readTime: "8 min read",
      category: "E-commerce",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "SEO Best Practices for Nigerian Businesses",
      excerpt: "Discover proven SEO strategies that work specifically for the Nigerian market, including local SEO optimization and content strategies for African audiences.",
      author: "Sarah Adebayo",
      date: "January 22, 2025",
      readTime: "12 min read",
      category: "SEO",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Mobile App Development Trends in Africa",
      excerpt: "Explore the latest trends in mobile app development across Africa, including fintech solutions, e-commerce apps, and emerging technologies.",
      author: "Michael Chukwudi",
      date: "January 20, 2025",
      readTime: "10 min read",
      category: "Mobile Development",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Building Trust in Nigerian E-commerce",
      excerpt: "Learn how to build customer trust in your Nigerian e-commerce business through security measures, customer service, and local payment solutions.",
      author: "Grace Okechukwu",
      date: "January 18, 2025",
      readTime: "6 min read",
      category: "Business",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "WordPress vs Custom Development: Which is Right for Your Business?",
      excerpt: "Compare WordPress and custom development solutions to determine the best approach for your Nigerian business website needs.",
      author: "David Okonkwo",
      date: "January 15, 2025",
      readTime: "15 min read",
      category: "Web Development",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 7,
      title: "Digital Marketing Strategies for Nigerian SMEs",
      excerpt: "Effective digital marketing strategies tailored for small and medium enterprises in Nigeria, including social media and Google Ads.",
      author: "Sarah Adebayo",
      date: "January 12, 2025",
      readTime: "9 min read",
      category: "Digital Marketing",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ]

  const categories = [
    "All Posts",
    "Web Design",
    "E-commerce",
    "SEO",
    "Web Development",
    "Mobile Development",
    "Digital Marketing",
    "Business",
    "Technology"
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            📚 Our Blog
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in web design, digital marketing, and technology. 
            Our expert team shares valuable insights to help your business grow.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {blogPosts.filter(post => post.featured).map((post) => (
            <div
              key={post.id}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-48 md:h-64 lg:h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  {post.image && post.image !== "/api/placeholder/400/250" ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <Tag className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-2 md:mb-4" />
                      <p className="text-gray-500 text-sm md:text-base">Featured Post Image</p>
                    </div>
                  )}
                </div>
                
                <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">Featured</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group text-sm md:text-base"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-3 md:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm md:text-base ${
                index === 0
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 px-4 md:px-0">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Post Image */}
              <div className="h-40 md:h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                {post.image && post.image !== "/api/placeholder/400/250" ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <Tag className="w-10 h-10 md:w-12 md:h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-xs md:text-sm">Post Image</p>
                  </div>
                )}
              </div>
              
              {/* Post Content */}
              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 md:px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-xs md:text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-3 h-3" />
                    <span className="truncate">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3 h-3" />
                    <span className="truncate">{post.date}</span>
                  </div>
                </div>
                
                <Link
                  href={post.slug ? `/blog/${post.slug}` : `/blog`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-xs md:text-sm group"
                >
                  Read More
                  <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Never Miss an Update
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and get the latest insights, tips, and industry news 
            delivered directly to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Want to Contribute?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Have insights to share? We're always looking for guest contributors and industry experts 
              to share their knowledge with our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300"
              >
                Submit Guest Post
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
