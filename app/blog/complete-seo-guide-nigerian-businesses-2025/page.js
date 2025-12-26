import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, CheckCircle, Zap, Smartphone, Globe, FileText, AlertCircle } from 'lucide-react'

export const metadata = {
  title: 'Complete SEO Guide for Nigerian Businesses 2025 | Rank #1 on Google',
  description: 'Master SEO for your Nigerian business. Learn keyword research, on-page SEO, link building, and local SEO strategies to rank #1 on Google in Nigeria.',
  keywords: ['seo nigeria', 'seo guide nigeria', 'how to rank on google nigeria', 'seo for nigerian businesses', 'local seo nigeria', 'seo company nigeria'],
  openGraph: {
    title: 'Complete SEO Guide for Nigerian Businesses 2025',
    description: 'Master SEO and rank #1 on Google. Comprehensive guide for Nigerian businesses.',
    url: 'https://prowebnigeria.ng/blog/complete-seo-guide-nigerian-businesses-2025',
    siteName: 'ProWeb Nigeria',
    type: 'article'
  },
  alternates: { canonical: '/blog/complete-seo-guide-nigerian-businesses-2025' }
}

const tableOfContents = [
  { id: 'what-is-seo', title: 'What is SEO?' },
  { id: 'why-seo-matters', title: 'Why SEO Matters' },
  { id: 'keyword-research', title: 'Keyword Research' },
  { id: 'on-page-seo', title: 'On-Page SEO' },
  { id: 'technical-seo', title: 'Technical SEO' },
  { id: 'local-seo', title: 'Local SEO Nigeria' },
  { id: 'link-building', title: 'Link Building' },
  { id: 'common-mistakes', title: 'Common Mistakes' }
]

export default function SEOGuidePage() {
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
              <span className="text-neutral-900">SEO Guide Nigeria</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-primary">SEO</span>
              <span className="badge-success">2025 Guide</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Complete SEO Guide for Nigerian Businesses 2025
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Learn how to rank your Nigerian business #1 on Google. This comprehensive guide covers keyword research, on-page SEO, technical SEO, local SEO, and link building strategies.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>December 25, 2025</span></div>
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>ProWeb Nigeria Team</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>15 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-28">
                <div className="toc">
                  <h3 className="font-bold text-neutral-900 mb-4">Table of Contents</h3>
                  <nav className="space-y-1 border-l border-neutral-200">
                    {tableOfContents.map((item, index) => (
                      <a key={index} href={`#${item.id}`} className="toc-link">{item.title}</a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            <div className="flex-1 max-w-3xl">
              <article className="prose-blog">
                <section id="what-is-seo" className="mb-12">
                  <h2>What is SEO?</h2>
                  <p>SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results pages (SERPs) like Google. When someone searches for "web designer in Lagos" or "best restaurant in Abuja," SEO determines which websites appear first.</p>
                  <p>For Nigerian businesses, SEO is one of the most cost-effective ways to attract customers. Unlike paid advertising, organic search traffic is free and sustainable.</p>
                  <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 my-8">
                    <h4 className="font-bold text-primary-900 mb-2">Key SEO Fact</h4>
                    <p className="text-primary-800 mb-0">75% of users never scroll past the first page of Google results. If your Nigerian business isn't on page 1, you're invisible to most potential customers.</p>
                  </div>
                </section>

                <section id="why-seo-matters" className="mb-12">
                  <h2>Why SEO Matters for Nigerian Businesses</h2>
                  <p>Nigeria has over 100 million internet users, and that number is growing rapidly. More Nigerians are searching online for products and services every day.</p>
                  <div className="grid sm:grid-cols-2 gap-4 my-8">
                    <div className="stat-card"><div className="stat-number text-primary-600">100M+</div><div className="stat-label">Internet Users in Nigeria</div></div>
                    <div className="stat-card"><div className="stat-number text-success-600">85%</div><div className="stat-label">Use Mobile for Search</div></div>
                    <div className="stat-card"><div className="stat-number text-warning-600">70%</div><div className="stat-label">Research Online Before Buying</div></div>
                    <div className="stat-card"><div className="stat-number text-error-600">53%</div><div className="stat-label">Click on First 3 Results</div></div>
                  </div>
                  <h3>Benefits of SEO for Nigerian Businesses</h3>
                  <ul>
                    <li><strong>Free Traffic:</strong> Unlike ads, organic traffic doesn't cost per click</li>
                    <li><strong>Trust & Credibility:</strong> High rankings signal authority to customers</li>
                    <li><strong>24/7 Visibility:</strong> Your website works for you around the clock</li>
                    <li><strong>Local Customers:</strong> Reach people searching in your area</li>
                    <li><strong>Competitive Advantage:</strong> Outrank competitors who ignore SEO</li>
                  </ul>
                </section>

                <section id="keyword-research" className="mb-12">
                  <h2>Keyword Research for Nigerian Market</h2>
                  <p>Keyword research is the foundation of SEO. You need to understand what terms Nigerians are searching for related to your business.</p>
                  <h3>Types of Keywords</h3>
                  <div className="space-y-4 my-6">
                    <div className="feature-card">
                      <h4 className="font-bold text-neutral-900 mb-2">Short-tail Keywords</h4>
                      <p className="text-sm text-neutral-600 mb-2">Broad terms with high search volume but high competition.</p>
                      <p className="text-sm"><strong>Examples:</strong> "web design", "restaurant lagos", "lawyer nigeria"</p>
                    </div>
                    <div className="feature-card">
                      <h4 className="font-bold text-neutral-900 mb-2">Long-tail Keywords</h4>
                      <p className="text-sm text-neutral-600 mb-2">Specific phrases with lower volume but higher conversion.</p>
                      <p className="text-sm"><strong>Examples:</strong> "affordable web design company in lagos", "best amala restaurant in ikeja"</p>
                    </div>
                    <div className="feature-card">
                      <h4 className="font-bold text-neutral-900 mb-2">Local Keywords</h4>
                      <p className="text-sm text-neutral-600 mb-2">Location-specific terms for local businesses.</p>
                      <p className="text-sm"><strong>Examples:</strong> "web designer victoria island", "plumber in lekki", "dentist abuja"</p>
                    </div>
                  </div>
                  <h3>Free Keyword Research Tools</h3>
                  <ul>
                    <li><strong>Google Keyword Planner:</strong> Free with Google Ads account</li>
                    <li><strong>Google Trends:</strong> See what's trending in Nigeria</li>
                    <li><strong>Google Search Suggestions:</strong> Type and see what Google suggests</li>
                    <li><strong>Ubersuggest:</strong> Limited free searches per day</li>
                  </ul>
                </section>

                <section id="on-page-seo" className="mb-12">
                  <h2>On-Page SEO Checklist</h2>
                  <p>On-page SEO refers to optimizations you make directly on your website pages.</p>
                  <div className="bg-neutral-50 rounded-xl p-6 my-8 border border-neutral-200">
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">On-Page SEO Checklist</h3>
                    <div className="space-y-3">
                      {['Include target keyword in page title (H1)', 'Write compelling meta description with keyword', 'Use keyword in URL slug', 'Include keyword in first 100 words', 'Use H2 and H3 headings with related keywords', 'Add alt text to all images', 'Internal link to other relevant pages', 'External link to authoritative sources', 'Ensure content is at least 1,500 words for main pages', 'Make content easy to read (short paragraphs, bullet points)'].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="technical-seo" className="mb-12">
                  <h2>Technical SEO Essentials</h2>
                  <p>Technical SEO ensures search engines can crawl and index your website properly.</p>
                  <div className="grid sm:grid-cols-2 gap-4 my-8">
                    <div className="feature-card">
                      <div className="feature-icon bg-primary-100"><Zap className="w-6 h-6 text-primary-600" /></div>
                      <h4 className="font-bold text-neutral-900 mb-2">Page Speed</h4>
                      <p className="text-sm text-neutral-600">Fast loading is crucial, especially in Nigeria where internet can be slow. Aim for under 3 seconds load time.</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon bg-success-100"><Smartphone className="w-6 h-6 text-success-600" /></div>
                      <h4 className="font-bold text-neutral-900 mb-2">Mobile-Friendly</h4>
                      <p className="text-sm text-neutral-600">85% of Nigerians browse on mobile. Your site must work perfectly on phones.</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon bg-warning-100"><Globe className="w-6 h-6 text-warning-600" /></div>
                      <h4 className="font-bold text-neutral-900 mb-2">SSL Certificate</h4>
                      <p className="text-sm text-neutral-600">HTTPS is a ranking factor. Secure your site with an SSL certificate.</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon bg-error-100"><FileText className="w-6 h-6 text-error-600" /></div>
                      <h4 className="font-bold text-neutral-900 mb-2">XML Sitemap</h4>
                      <p className="text-sm text-neutral-600">Submit your sitemap to Google Search Console to help indexing.</p>
                    </div>
                  </div>
                </section>

                <section id="local-seo" className="mb-12">
                  <h2>Local SEO for Nigerian Businesses</h2>
                  <p>If you serve customers in a specific location (Lagos, Abuja, etc.), local SEO is essential for appearing in "near me" searches and Google Maps.</p>
                  <h3>Google Business Profile (Most Important!)</h3>
                  <p>Your Google Business Profile (formerly Google My Business) is the #1 factor for local SEO.</p>
                  <div className="bg-success-50 border border-success-200 rounded-xl p-6 my-6">
                    <h4 className="font-bold text-success-900 mb-4">Google Business Profile Checklist</h4>
                    <div className="space-y-2">
                      {['Claim and verify your business', 'Use exact business name (no keyword stuffing)', 'Add complete address and phone number', 'Select correct business categories', 'Write detailed business description with keywords', 'Add high-quality photos of your business', 'Post updates regularly', 'Respond to all reviews (positive and negative)', 'Add products/services with descriptions', 'Keep hours updated'].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-success-800">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="link-building" className="mb-12">
                  <h2>Link Building Strategies</h2>
                  <p>Backlinks (links from other websites to yours) are one of Google's top ranking factors. Quality matters more than quantity.</p>
                  <h3>Link Building Tactics for Nigerian Businesses</h3>
                  <div className="space-y-4 my-6">
                    <div className="feature-card">
                      <h4 className="font-bold text-neutral-900 mb-2">1. Guest Posting</h4>
                      <p className="text-sm text-neutral-600">Write articles for Nigerian blogs and news sites in your industry. Include a link back to your website.</p>
                    </div>
                    <div className="feature-card">
                      <h4 className="font-bold text-neutral-900 mb-2">2. Business Directories</h4>
                      <p className="text-sm text-neutral-600">List your business on Clutch.co, Sortlist, TheManifest, and Nigerian directories.</p>
                    </div>
                    <div className="feature-card">
                      <h4 className="font-bold text-neutral-900 mb-2">3. Create Linkable Content</h4>
                      <p className="text-sm text-neutral-600">Create valuable resources (guides, statistics, tools) that others want to link to.</p>
                    </div>
                    <div className="feature-card">
                      <h4 className="font-bold text-neutral-900 mb-2">4. Partner Links</h4>
                      <p className="text-sm text-neutral-600">Ask business partners, suppliers, and clients to link to your website.</p>
                    </div>
                  </div>
                </section>

                <section id="common-mistakes" className="mb-12">
                  <h2>Common SEO Mistakes to Avoid</h2>
                  <div className="space-y-4 my-6">
                    {[
                      { mistake: 'Keyword Stuffing', fix: 'Use keywords naturally, focus on readability' },
                      { mistake: 'Ignoring Mobile Users', fix: 'Ensure your site works perfectly on phones' },
                      { mistake: 'Slow Website', fix: 'Optimize images, use good hosting, minimize code' },
                      { mistake: 'No Google Business Profile', fix: 'Claim and optimize your profile immediately' },
                      { mistake: 'Duplicate Content', fix: 'Create unique content for every page' },
                      { mistake: 'Expecting Quick Results', fix: 'SEO takes 3-6 months to show results' }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                        <div className="w-8 h-8 rounded-full bg-error-100 text-error-600 flex items-center justify-center font-bold flex-shrink-0">✕</div>
                        <div>
                          <h4 className="font-semibold text-neutral-900">{item.mistake}</h4>
                          <p className="text-sm text-neutral-600"><strong>Fix:</strong> {item.fix}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="cta-section text-center">
                  <h3 className="text-2xl font-bold mb-4">Need Help with SEO?</h3>
                  <p className="text-neutral-400 mb-6">Get professional SEO services for your Nigerian business. We'll help you rank #1 on Google.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="btn bg-white text-neutral-900 hover:bg-neutral-100">Get SEO Quote<ArrowRight className="w-4 h-4 ml-2" /></Link>
                    <Link href="/services" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-neutral-900">Our SEO Services</Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
