import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { Code, Palette, Zap, Monitor, Smartphone, Search, Database, Shield } from 'lucide-react';

export default function TechTipsPage() {
  const tips = [
    {
      category: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      tips: [
        'Use semantic HTML for better SEO and accessibility',
        'Implement lazy loading for images and components',
        'Optimize CSS with CSS-in-JS or utility-first frameworks',
        'Use React.memo() for performance optimization'
      ]
    },
    {
      category: 'Design & UX',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      tips: [
        'Follow the 8-point grid system for consistent spacing',
        'Use color contrast ratios that meet WCAG guidelines',
        'Implement micro-interactions for better user engagement',
        'Design mobile-first for better responsive experiences'
      ]
    },
    {
      category: 'Performance',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      tips: [
        'Minimize bundle size with code splitting',
        'Use WebP images with fallbacks for older browsers',
        'Implement service workers for offline functionality',
        'Optimize critical rendering path for faster loading'
      ]
    },
    {
      category: 'Responsive Design',
      icon: Monitor,
      color: 'from-green-500 to-emerald-500',
      tips: [
        'Use CSS Grid and Flexbox for modern layouts',
        'Test on real devices, not just browser dev tools',
        'Implement touch-friendly interactions for mobile',
        'Use relative units (rem, em) instead of fixed pixels'
      ]
    },
    {
      category: 'Mobile Optimization',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500',
      tips: [
        'Optimize images for mobile devices',
        'Implement touch gestures and swipe actions',
        'Use mobile-first CSS media queries',
        'Ensure buttons are at least 44x44px for touch'
      ]
    },
    {
      category: 'SEO Best Practices',
      icon: Search,
      color: 'from-red-500 to-pink-500',
      tips: [
        'Use descriptive meta titles and descriptions',
        'Implement structured data markup (Schema.org)',
        'Optimize page load speed for better rankings',
        'Create clean, semantic URL structures'
      ]
    },
    {
      category: 'Database & Backend',
      icon: Database,
      color: 'from-gray-600 to-gray-700',
      tips: [
        'Use database indexing for faster queries',
        'Implement proper error handling and logging',
        'Use connection pooling for database efficiency',
        'Implement caching strategies for better performance'
      ]
    },
    {
      category: 'Security',
      icon: Shield,
      color: 'from-red-600 to-red-700',
      tips: [
        'Always validate and sanitize user inputs',
        'Use HTTPS and implement security headers',
        'Implement rate limiting to prevent abuse',
        'Keep dependencies updated to patch vulnerabilities'
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Tech Tips & Best Practices
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover proven techniques, optimization strategies, and industry best practices 
              to elevate your web development and design skills.
            </p>
          </div>
        </section>

        {/* Tips Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tips.map((category, index) => (
                <div 
                  key={category.category}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Category Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>

                  {/* Tips List */}
                  <ul className="space-y-4">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Apply These Tips?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to create a website that follows all these best practices 
              and delivers exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-600/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Project
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
