import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  ArrowRight,
  TrendingUp,
  Target,
  Smartphone,
  Globe,
  CheckCircle,
  BarChart3,
  Users,
  DollarSign
} from 'lucide-react';

export const metadata = {
  title: 'Digital Marketing for Nigerian SMEs | Guide',
  description: 'Effective digital marketing strategies for Nigerian SMEs. Boost your online presence and grow your business with proven tactics.',
  keywords: [
    'digital marketing nigeria',
    'sme marketing strategies',
    'online marketing nigeria',
    'social media marketing nigeria',
    'digital advertising nigeria',
    'content marketing nigeria',
    'email marketing nigeria'
  ],
  openGraph: {
    title: 'Digital Marketing Strategies for Nigerian SMEs - ProWeb Nigeria',
    description: 'Discover effective digital marketing strategies specifically designed for Nigerian small and medium enterprises.',
    url: 'https://prowebnigeria.ng/blog/digital-marketing-nigerian-smes',
    siteName: 'ProWeb Nigeria',
    images: [
      {
        url: 'https://prowebnigeria.ng/og-digital-marketing-smes.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Strategies for Nigerian SMEs',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/digital-marketing-nigerian-smes',
  },
};

const strategies = [
  {
    title: "Social Media Marketing",
    description: "Leverage platforms like Instagram, Facebook, and Twitter to reach Nigerian audiences",
    icon: Users,
    benefits: ["Brand awareness", "Customer engagement", "Lead generation", "Cost-effective advertising"]
  },
  {
    title: "Search Engine Optimization",
    description: "Optimize your website to rank higher on Google for Nigerian searches",
    icon: TrendingUp,
    benefits: ["Increased visibility", "Organic traffic", "Local search presence", "Long-term results"]
  },
  {
    title: "Content Marketing",
    description: "Create valuable content that resonates with Nigerian consumers",
    icon: Target,
    benefits: ["Thought leadership", "Customer education", "Brand trust", "SEO benefits"]
  },
  {
    title: "Email Marketing",
    description: "Build and nurture relationships with your Nigerian customer base",
    icon: Globe,
    benefits: ["Direct communication", "High ROI", "Customer retention", "Personalization"]
  }
];

const caseStudies = [
  {
    business: "Lagos Fashion Brand",
    strategy: "Instagram Marketing + Influencer Partnerships",
    result: "400% increase in online sales",
    timeframe: "6 months"
  },
  {
    business: "Abuja Restaurant Chain",
    strategy: "Local SEO + Google My Business",
    result: "250% more foot traffic",
    timeframe: "4 months"
  },
  {
    business: "Port Harcourt Tech Startup",
    strategy: "Content Marketing + LinkedIn",
    result: "300% increase in B2B leads",
    timeframe: "8 months"
  }
];

export default function DigitalMarketingSMEsPage() {
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
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-neutral-600 mb-8 animate-fade-in-up">
              <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary-600 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-neutral-900">Digital Marketing for Nigerian SMEs</span>
            </nav>

            {/* Article Header */}
            <article className="animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-2 mb-6">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  Digital Marketing
                </span>
                <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-medium">
                  SME Growth
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                Digital Marketing Strategies for Nigerian Small & Medium Enterprises
              </h1>

              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Discover proven digital marketing strategies that Nigerian SMEs are using to compete with larger businesses, 
                reach more customers, and drive sustainable growth in today's digital economy.
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>ProWeb Nigeria Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>October 18, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>12 min read</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">The Digital Opportunity for Nigerian SMEs</h2>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Nigeria's digital landscape is rapidly evolving, with over 100 million internet users and growing smartphone adoption. 
                  For small and medium enterprises (SMEs), this presents an unprecedented opportunity to reach customers, 
                  compete with larger businesses, and scale operations cost-effectively.
                </p>
                <p className="text-neutral-700 mb-8 leading-relaxed">
                  However, many Nigerian SMEs struggle to navigate the digital marketing landscape effectively. 
                  This comprehensive guide provides actionable strategies specifically tailored for the Nigerian market.
                </p>

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-6 my-8">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">100M+</div>
                    <div className="text-sm text-primary-700">Internet Users</div>
                  </div>
                  <div className="bg-gradient-to-br from-success-50 to-success-100 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-success-600 mb-2">85%</div>
                    <div className="text-sm text-success-700">Mobile Users</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-accent-600 mb-2">40M+</div>
                    <div className="text-sm text-accent-700">Social Media Users</div>
                  </div>
                  <div className="bg-gradient-to-br from-warning-50 to-warning-100 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-warning-600 mb-2">300%</div>
                    <div className="text-sm text-warning-700">E-commerce Growth</div>
                  </div>
                </div>
              </section>

              {/* Core Strategies */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-8">Core Digital Marketing Strategies</h2>
                
                <div className="space-y-8">
                  {strategies.map((strategy, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <strategy.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-neutral-900 mb-3">{strategy.title}</h3>
                          <p className="text-neutral-600 mb-6 text-lg">{strategy.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            {strategy.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
                                <span className="text-neutral-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Nigerian Market Insights */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Understanding the Nigerian Digital Consumer</h2>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Success in digital marketing for Nigerian SMEs requires understanding local consumer behavior, 
                  preferences, and cultural nuances. Here are key insights:
                </p>

                <div className="bg-gradient-to-br from-primary-50 to-success-50 rounded-3xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6">Key Consumer Insights</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-3">Mobile-First Behavior</h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-success-500 mt-1 flex-shrink-0" />
                          <span>85% of internet access is via mobile devices</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-success-500 mt-1 flex-shrink-0" />
                          <span>WhatsApp is the preferred communication channel</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-success-500 mt-1 flex-shrink-0" />
                          <span>Mobile-optimized content performs 3x better</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-3">Trust & Social Proof</h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-success-500 mt-1 flex-shrink-0" />
                          <span>Reviews and testimonials are crucial</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-success-500 mt-1 flex-shrink-0" />
                          <span>Local influencers have high impact</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-success-500 mt-1 flex-shrink-0" />
                          <span>Word-of-mouth drives 60% of purchases</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Case Studies */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-8">Success Stories: Nigerian SMEs Winning with Digital Marketing</h2>
                
                <div className="space-y-6">
                  {caseStudies.map((study, index) => (
                    <div key={index} className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-neutral-900">{study.business}</h3>
                          <p className="text-neutral-600">{study.strategy}</p>
                        </div>
                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                          <div className="bg-gradient-to-r from-success-500 to-success-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                            {study.result}
                          </div>
                          <span className="text-sm text-neutral-500">{study.timeframe}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Action Plan */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Your 90-Day Digital Marketing Action Plan</h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4">Days 1-30: Foundation</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Set up Google My Business profile</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Create professional social media profiles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Optimize website for mobile and speed</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-success-500 to-success-600 text-white rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4">Days 31-60: Content & Engagement</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Launch content marketing strategy</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Start social media advertising campaigns</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Implement email marketing automation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4">Days 61-90: Scale & Optimize</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Analyze performance and optimize campaigns</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Expand to new digital channels</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Plan for long-term growth</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-success-600 rounded-3xl p-8 text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Transform Your SME with Digital Marketing?</h3>
                  <p className="text-xl mb-8 text-white/90">
                    Get a free digital marketing consultation tailored to your Nigerian business
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="bg-white text-primary-700 hover:bg-neutral-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                    >
                      <span>Get Free Consultation</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link
                      href="/services"
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center"
                    >
                      <BarChart3 className="w-5 h-5 mr-2" />
                      <span>View Our Services</span>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section bg-gradient-to-br from-neutral-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Related Articles</h2>
            <p className="text-neutral-600">More insights for growing your Nigerian business online</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/web-design-services-lagos-nigeria" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-success-600"></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  Web Design Services in Lagos
                </h3>
                <p className="text-neutral-600 text-sm">Professional web design for Lagos businesses</p>
              </div>
            </Link>
            <Link href="/blog" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-success-500 to-accent-600"></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  E-commerce Growth in Nigeria
                </h3>
                <p className="text-neutral-600 text-sm">How to build a successful online store in Nigeria</p>
              </div>
            </Link>
            <Link href="/blog" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-accent-500 to-warning-600"></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  Social Media Marketing Nigeria
                </h3>
                <p className="text-neutral-600 text-sm">Effective social media strategies for Nigerian brands</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}