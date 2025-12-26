import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, Sparkles, Smartphone, Zap, Palette, Layout, Shield } from 'lucide-react'

export const metadata = {
  title: 'Web Design Trends 2025 | What Nigerian Businesses Need to Know',
  description: 'Discover the top web design trends for 2025. From AI integration to minimalist design, learn what modern websites look like and how to stay competitive.',
  keywords: ['web design trends 2025', 'website design trends', 'modern web design', 'web design nigeria 2025', 'website trends'],
  openGraph: {
    title: 'Web Design Trends 2025',
    description: 'Top web design trends Nigerian businesses need to know.',
    url: 'https://prowebnigeria.ng/blog/web-design-trends-2025',
    siteName: 'ProWeb Nigeria',
    type: 'article'
  },
  alternates: { canonical: '/blog/web-design-trends-2025' }
}

const trends = [
  {
    icon: Sparkles,
    title: 'AI-Powered Experiences',
    description: 'Chatbots, personalized content, and AI-driven recommendations are becoming standard. Websites that adapt to user behavior convert better.',
    example: 'E-commerce sites showing personalized product recommendations based on browsing history.'
  },
  {
    icon: Layout,
    title: 'Minimalist Design',
    description: 'Clean, uncluttered designs with lots of white space. Focus on essential content and clear calls to action. Less is more.',
    example: 'Apple-style websites with bold typography, simple layouts, and focused messaging.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First (Still Critical)',
    description: 'With 85% of Nigerian internet users on mobile, mobile-first design isn\'t a trend—it\'s a requirement. Thumb-friendly navigation is key.',
    example: 'Bottom navigation bars, large touch targets, and swipe gestures.'
  },
  {
    icon: Zap,
    title: 'Performance Obsession',
    description: 'Speed is everything. Users expect pages to load in under 3 seconds. Core Web Vitals directly impact Google rankings.',
    example: 'Static site generation, image optimization, and lazy loading.'
  },
  {
    icon: Palette,
    title: 'Bold Typography',
    description: 'Large, expressive fonts as design elements. Typography is becoming the hero of many modern websites.',
    example: 'Oversized headlines, variable fonts, and creative text layouts.'
  },
  {
    icon: Shield,
    title: 'Privacy-First Design',
    description: 'With increasing privacy awareness, websites are being more transparent about data collection and giving users control.',
    example: 'Clear cookie consent, minimal data collection, and privacy-focused analytics.'
  }
]

export default function WebDesignTrendsPage() {
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
              <span className="text-neutral-900">Web Design Trends 2025</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-primary">Trends</span>
              <span className="badge-success">2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Web Design Trends 2025: What Nigerian Businesses Need to Know
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Stay ahead of the competition with these web design trends shaping 2025. From AI integration to minimalist aesthetics, here's what modern websites look like.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>December 26, 2025</span></div>
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>ProWeb Nigeria Team</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <article className="prose-blog">
              <section className="mb-12">
                <h2>Why Trends Matter</h2>
                <p>
                  Web design trends aren't just about aesthetics—they reflect changing user expectations and technological capabilities. A website that looked modern in 2020 may feel dated today.
                </p>
                <p>
                  For Nigerian businesses, staying current with design trends signals professionalism and builds trust with customers who are increasingly exposed to world-class digital experiences.
                </p>
              </section>

              <section className="mb-12">
                <h2>Top Web Design Trends for 2025</h2>
                <div className="space-y-6 my-8">
                  {trends.map((trend, index) => (
                    <div key={index} className="bg-white rounded-xl border border-neutral-200 p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <trend.icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900 mb-2">{trend.title}</h3>
                          <p className="text-neutral-600 mb-3">{trend.description}</p>
                          <div className="bg-neutral-50 rounded-lg p-3">
                            <span className="text-sm text-neutral-500">Example: </span>
                            <span className="text-sm text-neutral-700">{trend.example}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>What's Out in 2025</h2>
                <p>Some design practices are becoming outdated:</p>
                <ul>
                  <li><strong>Cluttered layouts:</strong> Too much information overwhelms users</li>
                  <li><strong>Stock photo overuse:</strong> Generic images feel inauthentic</li>
                  <li><strong>Slow-loading animations:</strong> Performance trumps flashiness</li>
                  <li><strong>Tiny mobile text:</strong> Accessibility is non-negotiable</li>
                  <li><strong>Aggressive popups:</strong> Users hate being interrupted</li>
                  <li><strong>Carousel sliders:</strong> Users rarely interact with them</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>Applying Trends to Nigerian Context</h2>
                <p>Not all global trends apply equally to Nigeria. Consider:</p>
                <ul>
                  <li><strong>Network speeds:</strong> Optimize heavily for slower connections</li>
                  <li><strong>Mobile dominance:</strong> 85%+ of users are on mobile</li>
                  <li><strong>Data costs:</strong> Minimize data usage where possible</li>
                  <li><strong>Local payment:</strong> Integrate Paystack/Flutterwave, not just PayPal</li>
                  <li><strong>Trust signals:</strong> Nigerian users need extra reassurance online</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>Is Your Website Outdated?</h2>
                <p>Signs your website needs a refresh:</p>
                <div className="bg-warning-50 border border-warning-200 rounded-xl p-6 my-6">
                  <ul className="space-y-2 text-warning-800 mb-0">
                    <li>• It's not mobile-responsive</li>
                    <li>• Pages take more than 3 seconds to load</li>
                    <li>• Design hasn't changed in 3+ years</li>
                    <li>• You're embarrassed to share the link</li>
                    <li>• Competitors' sites look better</li>
                    <li>• Bounce rate is high</li>
                    <li>• It doesn't reflect your current brand</li>
                  </ul>
                </div>
              </section>

              <div className="cta-section text-center">
                <h3 className="text-2xl font-bold mb-4">Ready for a Modern Website?</h3>
                <p className="text-neutral-400 mb-6">We build websites that follow current best practices and trends.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn bg-white text-neutral-900 hover:bg-neutral-100">Get Free Quote<ArrowRight className="w-4 h-4 ml-2" /></Link>
                  <Link href="/portfolio" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-neutral-900">See Our Work</Link>
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
