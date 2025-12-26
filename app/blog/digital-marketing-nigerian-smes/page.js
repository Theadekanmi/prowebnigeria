import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, CheckCircle, TrendingUp, Target, Users, Globe, BarChart3 } from 'lucide-react'

export const metadata = {
  title: 'Digital Marketing for Nigerian SMEs | Complete Guide 2025',
  description: 'Effective digital marketing strategies for Nigerian SMEs. Learn social media marketing, SEO, content marketing, and email marketing to grow your business.',
  keywords: ['digital marketing nigeria', 'sme marketing nigeria', 'social media marketing nigeria', 'online marketing nigeria', 'digital advertising nigeria'],
  openGraph: {
    title: 'Digital Marketing for Nigerian SMEs | ProWeb Nigeria',
    description: 'Effective digital marketing strategies for Nigerian small and medium enterprises.',
    url: 'https://prowebnigeria.ng/blog/digital-marketing-nigerian-smes',
    siteName: 'ProWeb Nigeria',
    type: 'article'
  },
  alternates: { canonical: '/blog/digital-marketing-nigerian-smes' }
}

const strategies = [
  { icon: Users, title: 'Social Media Marketing', description: 'Leverage Instagram, Facebook, Twitter, and TikTok to reach Nigerian audiences', benefits: ['Brand awareness', 'Customer engagement', 'Lead generation', 'Cost-effective'] },
  { icon: TrendingUp, title: 'Search Engine Optimization', description: 'Optimize your website to rank higher on Google for Nigerian searches', benefits: ['Increased visibility', 'Organic traffic', 'Local presence', 'Long-term results'] },
  { icon: Target, title: 'Content Marketing', description: 'Create valuable content that resonates with Nigerian consumers', benefits: ['Thought leadership', 'Customer education', 'Brand trust', 'SEO benefits'] },
  { icon: Globe, title: 'Email Marketing', description: 'Build and nurture relationships with your Nigerian customer base', benefits: ['Direct communication', 'High ROI', 'Customer retention', 'Personalization'] }
]

const caseStudies = [
  { business: 'Lagos Fashion Brand', strategy: 'Instagram Marketing + Influencer Partnerships', result: '400% increase in online sales', timeframe: '6 months' },
  { business: 'Abuja Restaurant Chain', strategy: 'Local SEO + Google My Business', result: '250% more foot traffic', timeframe: '4 months' },
  { business: 'Port Harcourt Tech Startup', strategy: 'Content Marketing + LinkedIn', result: '300% increase in B2B leads', timeframe: '8 months' }
]

export default function DigitalMarketingSMEsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-28 pb-12 bg-neutral-50 border-b border-neutral-200">
        <div className="container">
          <div className="max-w-4xl">
            <nav className="breadcrumb mb-6">
              <Link href="/">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <Link href="/blog">Blog</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="text-neutral-900">Digital Marketing SMEs</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-primary">Digital Marketing</span>
              <span className="badge-success">SME Growth</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Digital Marketing for Nigerian SMEs: A Practical Guide
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Discover proven digital marketing strategies that Nigerian SMEs are using to compete with larger businesses, reach more customers, and drive sustainable growth.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>December 18, 2025</span></div>
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>ProWeb Nigeria Team</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>12 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <article className="prose-blog">
              <section className="mb-12">
                <h2>The Digital Opportunity for Nigerian SMEs</h2>
                <p>
                  Nigeria's digital landscape is rapidly evolving, with over 100 million internet users and growing smartphone adoption. For small and medium enterprises (SMEs), this presents an unprecedented opportunity to reach customers, compete with larger businesses, and scale operations cost-effectively.
                </p>
                <div className="grid sm:grid-cols-4 gap-4 my-8">
                  <div className="stat-card"><div className="stat-number text-primary-600">100M+</div><div className="stat-label">Internet Users</div></div>
                  <div className="stat-card"><div className="stat-number text-success-600">85%</div><div className="stat-label">Mobile Users</div></div>
                  <div className="stat-card"><div className="stat-number text-warning-600">40M+</div><div className="stat-label">Social Media Users</div></div>
                  <div className="stat-card"><div className="stat-number text-error-600">300%</div><div className="stat-label">E-commerce Growth</div></div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Core Digital Marketing Strategies</h2>
                <div className="space-y-6 my-8">
                  {strategies.map((strategy, index) => (
                    <div key={index} className="bg-white rounded-xl border border-neutral-200 p-6">
                      <div className="flex items-start gap-4">
                        <div className="feature-icon bg-primary-100 flex-shrink-0">
                          <strategy.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-neutral-900 mb-2">{strategy.title}</h3>
                          <p className="text-neutral-600 mb-4">{strategy.description}</p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {strategy.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                                <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>Understanding the Nigerian Digital Consumer</h2>
                <p>Success in digital marketing requires understanding local consumer behavior:</p>
                <div className="bg-neutral-50 rounded-xl p-6 my-6 border border-neutral-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-3">Mobile-First Behavior</h4>
                      <ul className="space-y-2 text-neutral-700 text-sm">
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />85% of internet access is via mobile</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />WhatsApp is the preferred communication channel</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />Mobile-optimized content performs 3x better</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-3">Trust & Social Proof</h4>
                      <ul className="space-y-2 text-neutral-700 text-sm">
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />Reviews and testimonials are crucial</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />Local influencers have high impact</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />Word-of-mouth drives 60% of purchases</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Success Stories: Nigerian SMEs Winning</h2>
                <div className="space-y-4 my-8">
                  {caseStudies.map((study, index) => (
                    <div key={index} className="bg-white rounded-xl border border-neutral-200 p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-neutral-900">{study.business}</h3>
                          <p className="text-neutral-600 text-sm">{study.strategy}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="badge-success font-bold">{study.result}</span>
                          <span className="text-sm text-neutral-500">{study.timeframe}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>Your 90-Day Action Plan</h2>
                <div className="space-y-4 my-8">
                  <div className="bg-primary-600 text-white rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-3">Days 1-30: Foundation</h3>
                    <ul className="space-y-2 text-primary-100">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Set up Google Business Profile</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Create professional social media profiles</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Optimize website for mobile and speed</li>
                    </ul>
                  </div>
                  <div className="bg-success-600 text-white rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-3">Days 31-60: Content & Engagement</h3>
                    <ul className="space-y-2 text-success-100">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Launch content marketing strategy</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Start social media advertising</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Implement email marketing</li>
                    </ul>
                  </div>
                  <div className="bg-warning-600 text-white rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-3">Days 61-90: Scale & Optimize</h3>
                    <ul className="space-y-2 text-warning-100">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Analyze performance and optimize</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Expand to new channels</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Plan for long-term growth</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="cta-section text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your SME?</h3>
                <p className="text-neutral-400 mb-6">Get a free digital marketing consultation tailored to your Nigerian business.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn bg-white text-neutral-900 hover:bg-neutral-100">Get Free Consultation<ArrowRight className="w-4 h-4 ml-2" /></Link>
                  <Link href="/services" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-neutral-900"><BarChart3 className="w-4 h-4 mr-2" />View Services</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
