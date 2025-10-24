import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { 
  Lightbulb, 
  Code2, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe,
  ArrowRight,
  Clock,
  User,
  BookOpen,
  Star,
  TrendingUp,
  Search,
  Filter
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Tech Tips & Tutorials - Web Development Best Practices | ProWeb Nigeria',
  description: 'Discover expert web development tips, tutorials, and best practices. Learn Next.js, JavaScript, TypeScript, and modern web technologies from industry professionals.',
  keywords: [
    'web development tips',
    'nextjs tutorials',
    'javascript best practices',
    'web design tips nigeria',
    'programming tutorials',
    'tech tips blog',
    'web development guide'
  ],
  openGraph: {
    title: 'Tech Tips & Tutorials - Web Development Best Practices | ProWeb Nigeria',
    description: 'Discover expert web development tips, tutorials, and best practices. Learn from industry professionals.',
    url: 'https://prowebnigeria.ng/resources/tech-tips',
    siteName: 'ProWeb Nigeria',
    images: [
      {
        url: 'https://prowebnigeria.ng/og-tech-tips.jpg',
        width: 1200,
        height: 630,
        alt: 'ProWeb Nigeria - Tech Tips & Tutorials',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function TechTipsPage() {
  const categories = [
    { name: 'All Tips', count: 45, active: true },
    { name: 'Next.js', count: 12 },
    { name: 'JavaScript', count: 15 },
    { name: 'Performance', count: 8 },
    { name: 'Security', count: 6 },
    { name: 'UI/UX', count: 4 }
  ];

  const featuredTips = [
    {
      id: 1,
      title: "10 Next.js Performance Optimization Techniques",
      excerpt: "Learn advanced techniques to make your Next.js applications lightning fast with these proven optimization strategies.",
      category: "Next.js",
      readTime: "8 min read",
      author: "ProWeb Team",
      date: "Oct 15, 2025",
      image: "/tips/nextjs-performance.jpg",
      featured: true,
      tags: ["Performance", "Next.js", "Optimization"],
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "JavaScript ES2024 Features You Should Know",
      excerpt: "Explore the latest JavaScript features that will improve your code quality and development experience.",
      category: "JavaScript",
      readTime: "6 min read",
      author: "ProWeb Team",
      date: "Oct 12, 2025",
      image: "/tips/js-es2024.jpg",
      featured: true,
      tags: ["JavaScript", "ES2024", "Modern JS"],
      difficulty: "Beginner"
    },
    {
      id: 3,
      title: "Building Secure Web Applications: A Complete Guide",
      excerpt: "Comprehensive security practices every web developer should implement to protect their applications.",
      category: "Security",
      readTime: "12 min read",
      author: "ProWeb Team",
      date: "Oct 10, 2025",
      image: "/tips/web-security.jpg",
      featured: true,
      tags: ["Security", "Best Practices", "Web Development"],
      difficulty: "Advanced"
    }
  ];

  const allTips = [
    {
      id: 4,
      title: "TypeScript Best Practices for Large Applications",
      excerpt: "Essential TypeScript patterns and practices for maintaining large-scale applications.",
      category: "TypeScript",
      readTime: "10 min read",
      author: "ProWeb Team",
      date: "Oct 8, 2025",
      tags: ["TypeScript", "Architecture", "Best Practices"],
      difficulty: "Advanced"
    },
    {
      id: 5,
      title: "Responsive Design with Tailwind CSS",
      excerpt: "Master responsive design principles using Tailwind CSS utility classes and breakpoints.",
      category: "UI/UX",
      readTime: "7 min read",
      author: "ProWeb Team",
      date: "Oct 5, 2025",
      tags: ["Tailwind CSS", "Responsive Design", "CSS"],
      difficulty: "Intermediate"
    },
    {
      id: 6,
      title: "API Design Best Practices for Modern Web Apps",
      excerpt: "Learn how to design robust, scalable APIs that power modern web applications.",
      category: "Backend",
      readTime: "9 min read",
      author: "ProWeb Team",
      date: "Oct 3, 2025",
      tags: ["API Design", "Backend", "REST"],
      difficulty: "Intermediate"
    },
    {
      id: 7,
      title: "Debugging JavaScript Like a Pro",
      excerpt: "Advanced debugging techniques and tools to identify and fix JavaScript issues quickly.",
      category: "JavaScript",
      readTime: "8 min read",
      author: "ProWeb Team",
      date: "Oct 1, 2025",
      tags: ["JavaScript", "Debugging", "DevTools"],
      difficulty: "Intermediate"
    },
    {
      id: 8,
      title: "Mobile-First Development Strategy",
      excerpt: "Why mobile-first approach is crucial and how to implement it effectively in your projects.",
      category: "Mobile",
      readTime: "6 min read",
      author: "ProWeb Team",
      date: "Sep 28, 2025",
      tags: ["Mobile", "Strategy", "Responsive"],
      difficulty: "Beginner"
    },
    {
      id: 9,
      title: "Git Workflow for Development Teams",
      excerpt: "Establish efficient Git workflows that improve collaboration and code quality in your team.",
      category: "DevOps",
      readTime: "11 min read",
      author: "ProWeb Team",
      date: "Sep 25, 2025",
      tags: ["Git", "Workflow", "Team Collaboration"],
      difficulty: "Intermediate"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success-100 text-success-700';
      case 'Intermediate': return 'bg-warning-100 text-warning-700';
      case 'Advanced': return 'bg-error-100 text-error-700';
      default: return 'bg-neutral-100 text-neutral-700';
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      
        {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-success-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-success-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <Lightbulb className="w-4 h-4" />
              <span>Tech Tips & Tutorials</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 animate-fade-in-up animation-delay-200">
              Master Web Development
              <span className="block gradient-text">With Expert Tips</span>
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Discover practical tips, tutorials, and best practices from our experienced developers. 
              Stay updated with the latest web technologies and improve your coding skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
              <Link
                href="#tips"
                className="btn-primary btn-lg group shadow-xl hover:shadow-2xl"
              >
                <span>Browse Tips</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary btn-lg shadow-lg hover:shadow-xl"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                <span>Request Tutorial</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">45+</div>
                <div className="text-sm text-neutral-600">Tech Tips</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success-600 mb-2">10K+</div>
                <div className="text-sm text-neutral-600">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">15</div>
                <div className="text-sm text-neutral-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning-600 mb-2">4.9</div>
                <div className="text-sm text-neutral-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Search */}
      <section className="section bg-white border-b border-neutral-200">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search tips..."
                className="pl-10 pr-4 py-2 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>
          </div>
          </div>
        </section>

      {/* Featured Tips */}
      <section id="tips" className="section bg-gradient-to-br from-neutral-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Featured Tips & Tutorials
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our most popular and impactful tips to help you level up your development skills
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredTips.map((tip, index) => (
              <article
                key={tip.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-primary-500 to-success-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                      {tip.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tip.difficulty)}`}>
                      {tip.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2 text-white">
                      <Lightbulb className="w-5 h-5" />
                      <span className="text-sm font-medium">Featured Tip</span>
                    </div>
                  </div>
                  </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {tip.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tip.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{tip.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{tip.readTime}</span>
                      </div>
                    </div>
                    <span>{tip.date}</span>
                  </div>

                  <Link
                    href={`/resources/tech-tips/${tip.id}`}
                    className="btn-primary btn-sm w-full group"
                  >
                    <span>Read Full Tip</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
              ))}
            </div>
          </div>
        </section>

      {/* All Tips */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Latest Tips & Tutorials
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Stay updated with our latest insights and practical development tips
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTips.map((tip, index) => (
              <article
                key={tip.id}
                className="bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tip.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tip.difficulty)}`}>
                    {tip.difficulty}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 mb-3 hover:text-primary-600 transition-colors">
                  {tip.title}
                </h3>
                
                <p className="text-neutral-600 mb-4 line-clamp-2">
                  {tip.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tip.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded-lg text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{tip.readTime}</span>
                  </div>
                  <span>{tip.date}</span>
                </div>

                <Link
                  href={`/resources/tech-tips/${tip.id}`}
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center group"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary btn-lg shadow-lg hover:shadow-xl">
              <span>Load More Tips</span>
              <TrendingUp className="w-5 h-5 ml-2" />
            </button>
            </div>
          </div>
        </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never Miss a Tech Tip
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Subscribe to our newsletter and get the latest web development tips, 
              tutorials, and insights delivered to your inbox weekly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50 outline-none text-gray-900"
              />
              <button className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-white/80">
              Join 5,000+ developers who trust our insights. Unsubscribe anytime.
            </p>
          </div>
      </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
