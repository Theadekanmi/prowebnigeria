import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { Star, Clock, TrendingUp, Zap, Shield, Users, Globe, Smartphone, Palette, Database } from 'lucide-react';

export default function TechReviewsPage() {
  const reviews = [
    {
      title: 'Next.js 14 vs React 18: Performance Showdown',
      category: 'Framework Review',
      rating: 4.8,
      readTime: '12 min read',
      date: 'March 2024',
      summary: 'Comprehensive comparison of the latest versions, performance benchmarks, and real-world usage scenarios.',
      pros: ['Excellent performance', 'Great developer experience', 'Strong community support'],
      cons: ['Learning curve', 'Bundle size considerations'],
      verdict: 'Next.js 14 is the clear winner for production applications requiring SEO and performance.',
      icon: TrendingUp,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Tailwind CSS vs Bootstrap 5: Design System Battle',
      category: 'CSS Framework',
      rating: 4.6,
      readTime: '15 min read',
      date: 'February 2024',
      summary: 'In-depth analysis of two popular CSS frameworks, their strengths, weaknesses, and use cases.',
      pros: ['Highly customizable', 'Utility-first approach', 'Smaller bundle size'],
      cons: ['Steeper learning curve', 'Design consistency challenges'],
      verdict: 'Tailwind CSS excels for custom designs, while Bootstrap is better for rapid prototyping.',
      icon: Palette,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Supabase vs Firebase: Backend-as-a-Service Comparison',
      category: 'Backend Services',
      rating: 4.7,
      readTime: '18 min read',
      date: 'January 2024',
      summary: 'Detailed comparison of two leading BaaS platforms, pricing, features, and developer experience.',
      pros: ['Open source', 'PostgreSQL-based', 'Better pricing'],
      cons: ['Smaller ecosystem', 'Fewer integrations'],
      verdict: 'Supabase is ideal for developers who prefer open-source solutions and PostgreSQL.',
      icon: Database,
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Performance Testing: Lighthouse vs WebPageTest',
      category: 'Performance Tools',
      rating: 4.5,
      readTime: '10 min read',
      date: 'December 2023',
      summary: 'Comparison of two essential performance testing tools for web developers.',
      pros: ['Easy to use', 'Chrome integration', 'Quick results'],
      cons: ['Limited real-world conditions', 'Chrome-specific metrics'],
      verdict: 'Use Lighthouse for quick checks and WebPageTest for comprehensive real-world testing.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Mobile-First Design: Best Practices & Tools',
      category: 'Design Strategy',
      rating: 4.9,
      readTime: '20 min read',
      date: 'November 2023',
      summary: 'Comprehensive guide to mobile-first design principles and the tools that make it possible.',
      pros: ['Better user experience', 'Improved performance', 'Future-proof approach'],
      cons: ['Requires planning', 'More initial development time'],
      verdict: 'Mobile-first design is essential for modern web applications and should be the default approach.',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Security Tools for Web Applications',
      category: 'Security',
      rating: 4.4,
      readTime: '14 min read',
      date: 'October 2023',
      summary: 'Review of essential security tools and practices for protecting web applications.',
      pros: ['Comprehensive coverage', 'Easy integration', 'Regular updates'],
      cons: ['Can be complex', 'False positives'],
      verdict: 'Essential for any production application, but requires proper configuration and monitoring.',
      icon: Shield,
      color: 'from-red-500 to-red-700'
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Technology Reviews & Analysis
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth reviews of the latest web technologies, frameworks, and tools. 
              Get honest insights to make informed decisions for your projects.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {reviews.map((review, index) => (
                <div 
                  key={review.title}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${review.color} rounded-2xl flex items-center justify-center`}>
                      <review.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500">{review.rating}/5</span>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                      {review.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{review.readTime}</span>
                    </div>
                    <span>{review.date}</span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{review.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{review.summary}</p>

                  {/* Pros & Cons */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Pros</h4>
                      <ul className="space-y-1">
                        {review.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {review.cons.map((con, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Verdict */}
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Verdict</h4>
                    <p className="text-gray-700 text-sm">{review.verdict}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Choosing the Right Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team has experience with all the latest technologies and can help you 
              make the best choices for your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-600/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Expert Advice
              </a>
              <a
                href="https://wa.me/08100098339"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-400 font-bold text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
