import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { Check, Star, Zap, Crown, Users, Globe, Shield, Clock } from 'lucide-react';

export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: 'Custom Quote',
      period: 'Project-based',
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Custom Website Design',
        'Responsive Development',
        'Basic SEO Setup',
        'Contact Form Integration',
        'Social Media Integration',
        '1 Month Support',
        'Basic Analytics Setup'
      ],
      popular: false,
      cta: 'Get Quote'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and e-commerce',
      price: 'Custom Quote',
      period: 'Project-based',
      icon: Star,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Everything in Starter',
        'E-commerce Integration',
        'Advanced SEO Optimization',
        'Content Management System',
        'Advanced Analytics',
        '3 Months Support',
        'Performance Optimization',
        'Security Implementation',
        'Backup & Maintenance'
      ],
      popular: true,
      cta: 'Get Quote'
    },
    {
      name: 'Enterprise',
      description: 'For large businesses with complex requirements',
      price: 'Custom Quote',
      period: 'Project-based',
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Everything in Professional',
        'Custom Web Applications',
        'Advanced E-commerce Features',
        'Multi-language Support',
        'Advanced Security Features',
        'Performance Monitoring',
        '24/7 Priority Support',
        'Custom Integrations',
        'Training & Documentation',
        'Ongoing Maintenance'
      ],
      popular: false,
      cta: 'Get Quote'
    }
  ];

  const additionalServices = [
    {
      name: 'SEO & Digital Marketing',
      description: 'Improve your search rankings and drive more traffic',
      icon: Globe,
      features: ['Keyword Research', 'Content Optimization', 'Link Building', 'Analytics & Reporting']
    },
    {
      name: 'Maintenance & Support',
      description: 'Keep your website running smoothly and securely',
      icon: Shield,
      features: ['Security Updates', 'Performance Monitoring', 'Backup Management', 'Technical Support']
    },
    {
      name: 'Website Redesign',
      description: 'Transform your existing website with modern design',
      icon: Users,
      features: ['Design Refresh', 'Functionality Updates', 'Performance Improvements', 'SEO Optimization']
    }
  ];

  return (
    <>
      <Head>
        <title>Web Design Pricing - ProWeb Nigeria | Transparent Pricing</title>
        <meta name="description" content="Get transparent pricing for web design, development, and digital marketing services. Custom quotes tailored to your project needs." />
        <link rel="canonical" href="https://prowebnigeria.ng/pricing" />
      </Head>
      <main className="min-h-screen">
        <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom quotes tailored to your specific project requirements. 
              No hidden fees, no surprises - just quality work at fair prices.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={plan.name}
                  className={`relative bg-gray-50 rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    plan.popular 
                      ? 'border-blue-500 bg-blue-50 shadow-xl scale-105' 
                      : 'border-gray-200'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan Info */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                    <div className="text-gray-500">{plan.period}</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="/contact"
                    className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-600/25'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Beyond our core packages, we offer specialized services to meet your unique needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {additionalServices.map((service, index) => (
                <div 
                  key={service.name}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional value through quality work, transparent pricing, and ongoing support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600">We never compromise on quality. Every project meets our high standards.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
                <p className="text-gray-600">We respect deadlines and deliver projects when promised.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Focused</h3>
                <p className="text-gray-600">Your success is our priority. We work closely with you throughout the process.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-gray-600">We provide continued support and maintenance after project completion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and provide you with a custom quote 
              that fits your budget and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-600/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Custom Quote
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
    </>
  );
}
