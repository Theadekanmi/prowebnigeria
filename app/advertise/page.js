import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { Megaphone, Users, TrendingUp, Target, BarChart3, Globe, Mail, Phone } from 'lucide-react';

export default function AdvertisePage() {
  const advertisingOptions = [
    {
      name: 'Banner Ads',
      description: 'Prominent display advertising on our high-traffic pages',
      icon: Target,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Above-the-fold placement',
        'Responsive design',
        'Click-through tracking',
        'A/B testing options',
        'Custom dimensions available'
      ],
             pricing: 'Custom pricing',
      cta: 'Get Started'
    },
    {
      name: 'Sponsored Content',
      description: 'Native advertising that integrates seamlessly with our content',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Content creation included',
        'SEO optimization',
        'Social media promotion',
        'Performance analytics',
        'Brand mention opportunities'
      ],
             pricing: 'Custom pricing',
      cta: 'Learn More'
    },
    {
      name: 'Newsletter Ads',
      description: 'Direct access to our engaged subscriber base',
      icon: Mail,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Weekly newsletter placement',
        'High engagement rates',
        'Detailed analytics',
        'Targeted audience',
        'Call-to-action optimization'
      ],
             pricing: 'Custom pricing',
      cta: 'Subscribe'
    },
    {
      name: 'Partnerships',
      description: 'Strategic collaborations for mutual growth',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      features: [
        'Co-branded content',
        'Cross-promotion opportunities',
        'Event collaborations',
        'Resource sharing',
        'Long-term relationships'
      ],
      pricing: 'Custom pricing',
      cta: 'Partner With Us'
    }
  ];

  const audienceStats = [
         { metric: 'Growing', label: 'Monthly Visitors', icon: Users },
     { metric: 'Active', label: 'Newsletter Subscribers', icon: Mail },
     { metric: 'Professional', label: 'Tech Audience', icon: Target },
     { metric: 'Global', label: 'Reach', icon: Globe }
  ];

  const successStories = [
    {
      company: 'TechStart Nigeria',
      industry: 'SaaS Platform',
      result: '300% increase in website traffic',
      testimonial: 'Advertising on this platform helped us reach our target audience and significantly boost our online presence.'
    },
    {
      company: 'Digital Solutions Ltd',
      industry: 'Web Development',
      result: '200+ qualified leads generated',
      testimonial: 'The sponsored content campaign delivered exceptional ROI and helped us establish thought leadership.'
    },
    {
      company: 'Innovate Africa',
      industry: 'Tech Innovation',
      result: '150% growth in brand awareness',
      testimonial: 'Strategic partnership led to increased visibility and valuable networking opportunities.'
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
              Advertise With Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach our engaged audience of tech professionals, developers, and business owners. 
              Promote your brand through our trusted platform and grow your business.
            </p>
          </div>
        </section>

        {/* Audience Stats */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Audience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with a highly engaged community of professionals who trust our platform 
                for industry insights and solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {audienceStats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.metric}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advertising Options */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advertising Options
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our range of advertising solutions designed to maximize your ROI 
                and reach your target audience effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {advertisingOptions.map((option, index) => (
                <div 
                  key={option.name}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{option.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="text-lg font-semibold text-gray-900">{option.pricing}</div>
                  </div>

                  {/* CTA */}
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
                  >
                    {option.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how other businesses have achieved remarkable results through our advertising platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {successStories.map((story, index) => (
                <div 
                  key={story.company}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{story.company}</h3>
                    <p className="text-blue-600 font-medium">{story.industry}</p>
                  </div>

                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg mb-4 text-center">
                    <strong>Result:</strong> {story.result}
                  </div>

                  <blockquote className="text-gray-700 italic">
                    "{story.testimonial}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Advertise With Us */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Advertise With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide more than just advertising space - we offer strategic partnerships 
                that drive real business results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Targeted Audience</h3>
                <p className="text-gray-300">Reach decision-makers and professionals in your industry.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Measurable Results</h3>
                <p className="text-gray-300">Track performance with detailed analytics and reporting.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-300">Get guidance from our advertising specialists.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Advertising?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your advertising goals and create a custom campaign that delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a
                href="https://wa.me/08100098339"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
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
