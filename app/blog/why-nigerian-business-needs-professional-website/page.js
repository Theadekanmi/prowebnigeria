import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, CheckCircle, TrendingUp, Users, Globe, Shield, Zap, BarChart3 } from 'lucide-react'

export const metadata = {
  title: 'Why Your Nigerian Business Needs a Professional Website in 2025',
  description: 'Learn why having a professional website is crucial for business success in Nigeria. Discover how a website can increase sales, build trust, and grow your business.',
  keywords: ['why need website nigeria', 'business website nigeria', 'importance of website', 'nigerian business online', 'website benefits nigeria'],
  openGraph: {
    title: 'Why Your Nigerian Business Needs a Professional Website',
    description: 'Learn why having a professional website is crucial for business success in Nigeria.',
    url: 'https://prowebnigeria.ng/blog/why-nigerian-business-needs-professional-website',
    siteName: 'ProWeb Nigeria',
    type: 'article'
  },
  alternates: { canonical: '/blog/why-nigerian-business-needs-professional-website' }
}

const benefits = [
  {
    icon: Globe,
    title: '24/7 Availability',
    description: 'Your website works for you around the clock, even when you\'re sleeping. Customers can learn about your business, browse products, and contact you anytime.'
  },
  {
    icon: Users,
    title: 'Reach More Customers',
    description: 'With 100+ million internet users in Nigeria, a website helps you reach customers beyond your physical location. Expand from local to national or even international.'
  },
  {
    icon: Shield,
    title: 'Build Trust & Credibility',
    description: 'Nigerian consumers increasingly research businesses online before buying. A professional website signals that you\'re legitimate and trustworthy.'
  },
  {
    icon: TrendingUp,
    title: 'Compete with Bigger Businesses',
    description: 'A well-designed website levels the playing field. Small businesses can appear just as professional as large corporations online.'
  },
  {
    icon: Zap,
    title: 'Cost-Effective Marketing',
    description: 'Compared to traditional advertising, a website provides ongoing visibility at a fraction of the cost. SEO brings free, targeted traffic.'
  },
  {
    icon: BarChart3,
    title: 'Measure & Improve',
    description: 'Track visitor behavior, see what works, and continuously improve. Data-driven decisions lead to better business outcomes.'
  }
]

const statistics = [
  { stat: '81%', description: 'of consumers research online before making a purchase' },
  { stat: '75%', description: 'judge a company\'s credibility based on website design' },
  { stat: '88%', description: 'are less likely to return after a bad website experience' },
  { stat: '70%', description: 'of small business websites lack a call to action' }
]

export default function WhyNeedWebsitePage() {
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
              <span className="text-neutral-900">Why Need Website</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-primary">Business</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Why Your Nigerian Business Needs a Professional Website in 2025
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              In Nigeria's growing digital economy, not having a website means losing customers to competitors who do. Learn why a professional website is essential for your business success.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>December 12, 2025</span></div>
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
                <h2>The Digital Reality for Nigerian Businesses</h2>
                <p>
                  Nigeria has over 100 million internet users, and that number grows every day. Your potential customers are online right now, searching for products and services like yours. The question is: will they find you or your competitor?
                </p>
                <p>
                  Many Nigerian business owners still rely solely on word-of-mouth, social media, or physical locations. While these are valuable, they're no longer enough. Here's why a professional website has become essential.
                </p>
              </section>

              <section className="mb-12">
                <h2>Key Statistics You Should Know</h2>
                <div className="grid sm:grid-cols-2 gap-4 my-8">
                  {statistics.map((item, index) => (
                    <div key={index} className="bg-neutral-900 text-white rounded-xl p-6">
                      <div className="text-3xl font-bold text-primary-400 mb-2">{item.stat}</div>
                      <p className="text-neutral-300 text-sm mb-0">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>6 Reasons Your Business Needs a Website</h2>
                <div className="space-y-6 my-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="feature-card flex gap-4">
                      <div className="feature-icon bg-primary-100 flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">{benefit.title}</h3>
                        <p className="text-neutral-600 mb-0">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>"But I Have Social Media..."</h2>
                <p>
                  Social media is great for engagement, but it's not a replacement for a website. Here's why:
                </p>
                <div className="bg-warning-50 border border-warning-200 rounded-xl p-6 my-6">
                  <h4 className="font-bold text-warning-900 mb-4">Limitations of Social Media Only</h4>
                  <ul className="space-y-2 text-warning-800 mb-0">
                    <li><strong>You don't own it:</strong> Facebook or Instagram can change algorithms, suspend accounts, or shut down. Your website is yours forever.</li>
                    <li><strong>Limited functionality:</strong> You can't process payments, capture leads effectively, or provide detailed information like a website can.</li>
                    <li><strong>No SEO benefit:</strong> Social media posts don't rank on Google. A website brings organic search traffic.</li>
                    <li><strong>Less professional:</strong> Serious customers expect businesses to have websites. Social-only can seem amateur.</li>
                    <li><strong>Hard to find:</strong> Try finding a specific product or service on someone's Instagram. Websites are organized and searchable.</li>
                  </ul>
                </div>
                <p>
                  <strong>The best approach:</strong> Use social media AND a website together. Social media drives traffic to your website, where you convert visitors into customers.
                </p>
              </section>

              <section className="mb-12">
                <h2>Real Impact: What a Website Can Do</h2>
                <p>Here's what Nigerian businesses experience after getting a professional website:</p>
                <div className="grid sm:grid-cols-3 gap-4 my-8">
                  <div className="stat-card">
                    <div className="stat-number text-success-600">+200%</div>
                    <div className="stat-label">Average increase in inquiries</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number text-primary-600">+150%</div>
                    <div className="stat-label">Increase in customer trust</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number text-warning-600">24/7</div>
                    <div className="stat-label">Business visibility</div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>What Makes a Website "Professional"?</h2>
                <p>Not all websites are created equal. A professional website should have:</p>
                <div className="bg-neutral-50 rounded-xl p-6 my-6 border border-neutral-200">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      'Mobile-responsive design (works on phones)',
                      'Fast loading speed (under 3 seconds)',
                      'Clear navigation and structure',
                      'Professional, on-brand design',
                      'SEO optimization (ranks on Google)',
                      'SSL security (https://)',
                      'Clear calls to action',
                      'Contact information easily visible',
                      'Quality content and images',
                      'Regular updates and maintenance'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
                        <span className="text-neutral-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>The Cost of NOT Having a Website</h2>
                <p>
                  Many business owners worry about the cost of a website. But consider the cost of NOT having one:
                </p>
                <ul>
                  <li><strong>Lost customers:</strong> People searching for your services find competitors instead</li>
                  <li><strong>Missed opportunities:</strong> Potential partners and investors can't research your business</li>
                  <li><strong>Limited growth:</strong> You're restricted to customers who physically find you</li>
                  <li><strong>Perception issues:</strong> Customers may question if you're a legitimate business</li>
                  <li><strong>Higher marketing costs:</strong> Without SEO, you rely on expensive paid advertising</li>
                </ul>
                <p>
                  A professional website typically pays for itself within months through increased business.
                </p>
              </section>

              <section className="mb-12">
                <h2>Getting Started</h2>
                <p>
                  Ready to take your Nigerian business online? Here's how to get started:
                </p>
                <ol>
                  <li><strong>Define your goals:</strong> What do you want your website to achieve?</li>
                  <li><strong>Set a budget:</strong> Professional websites in Nigeria start from ₦150,000</li>
                  <li><strong>Choose a web designer:</strong> Look for experience, portfolio quality, and reviews</li>
                  <li><strong>Prepare your content:</strong> Gather information about your business, services, and images</li>
                  <li><strong>Launch and promote:</strong> Share your new website on social media and with customers</li>
                </ol>
              </section>

              <div className="cta-section text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Your Business Online?</h3>
                <p className="text-neutral-400 mb-6">Get a professional website that attracts customers and grows your Nigerian business.</p>
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
