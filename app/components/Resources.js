'use client'
import React from 'react';
import Link from 'next/link';
import { BookOpen, Lightbulb, Star, DollarSign, Megaphone, GraduationCap, ArrowRight, ExternalLink } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      title: 'Blog',
      description: 'Insights, tips, and industry updates from our team',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      link: '/blog',
      features: ['Web Design Tips', 'Industry News', 'Case Studies', 'Best Practices']
    },
    {
      title: 'Tech Tips',
      description: 'Practical advice for developers and designers',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
      link: '/resources/tech-tips',
      features: ['Coding Tips', 'Design Tricks', 'Performance Hacks', 'Tool Reviews']
    },
    {
      title: 'Tech Reviews',
      description: 'Honest reviews of the latest tools and technologies',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      link: '/resources/tech-reviews',
      features: ['Framework Reviews', 'Tool Comparisons', 'Performance Tests', 'User Experience']
    },
    {
      title: 'Pricing',
      description: 'Transparent pricing for all our services',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      link: '/pricing',
      features: ['Service Packages', 'Custom Quotes', 'Payment Plans', 'Value Propositions']
    },
    {
      title: 'Advertise',
      description: 'Promote your business on our platform',
      icon: Megaphone,
      color: 'from-red-500 to-pink-500',
      link: '/advertise',
      features: ['Banner Ads', 'Sponsored Content', 'Newsletter Ads', 'Partnerships']
    },
    {
      title: 'Courses',
      description: 'Learn web design and development from experts',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500',
      link: '/courses',
      features: ['Web Design', 'Frontend Development', 'Backend Development', 'SEO Mastery']
    }
  ];

  const featuredResources = [
    {
      title: 'Complete Web Design Guide 2024',
      description: 'Everything you need to know about modern web design principles, trends, and best practices.',
      category: 'Guide',
      readTime: '15 min read',
      link: '/resources/web-design-guide'
    },
    {
      title: 'SEO Optimization Checklist',
      description: 'A comprehensive checklist to ensure your website ranks well in search engines.',
      category: 'Checklist',
      readTime: '8 min read',
      link: '/resources/seo-checklist'
    },
    {
      title: 'Performance Optimization Tips',
      description: 'Learn how to make your website lightning fast and improve user experience.',
      category: 'Tips',
      readTime: '12 min read',
      link: '/resources/performance-tips'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resources & Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive collection of resources, guides, and learning materials 
            to help you succeed in web design and development.
          </p>
        </div>

        {/* Resource Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20 px-4 md:px-0">
          {resourceCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6`}>
                <category.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{category.title}</h3>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{category.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-4 md:mb-6">
                {category.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2 text-xs md:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={category.link}
                className="inline-flex items-center justify-center w-full px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 group text-sm md:text-base"
              >
                Explore {category.title}
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Featured Resources */}
        <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl border border-gray-100 mx-4 md:mx-0">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Our most popular and valuable resources that our community loves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredResources.map((resource) => (
              <div key={resource.title} className="bg-gray-50 rounded-xl p-4 md:p-6 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 md:px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {resource.category}
                  </span>
                  <span className="text-xs text-gray-500">{resource.readTime}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">{resource.title}</h4>
                <p className="text-xs md:text-sm text-gray-600 mb-4">{resource.description}</p>
                <Link
                  href={resource.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-xs md:text-sm group"
                >
                  Read More
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-1 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get the latest resources, tips, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Need Help with Your Project?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you create something amazing. Let's discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-600/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="https://wa.me/08100098339"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              WhatsApp Chat
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
