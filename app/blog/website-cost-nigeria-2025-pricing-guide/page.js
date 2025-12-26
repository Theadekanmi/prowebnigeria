import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

export const metadata = {
  title: 'How Much Does a Website Cost in Nigeria 2025? Complete Pricing Guide',
  description: 'Understand website development costs in Nigeria. From basic sites (₦100k) to e-commerce platforms (₦2M+). Get accurate pricing information for your project.',
  keywords: ['website cost nigeria', 'web design price nigeria', 'how much is a website in nigeria', 'website development cost lagos', 'web design pricing nigeria 2025'],
  openGraph: {
    title: 'Website Cost in Nigeria 2025 - Complete Pricing Guide',
    description: 'Understand website development costs in Nigeria. Get accurate pricing for your project.',
    url: 'https://prowebnigeria.ng/blog/website-cost-nigeria-2025-pricing-guide',
    siteName: 'ProWeb Nigeria',
    type: 'article'
  },
  alternates: { canonical: '/blog/website-cost-nigeria-2025-pricing-guide' }
}

const pricingTiers = [
  {
    type: 'Basic Business Website',
    priceRange: '₦100,000 - ₦300,000',
    timeline: '1-2 weeks',
    description: 'Simple informational website for small businesses',
    features: ['5-7 pages', 'Mobile responsive', 'Contact form', 'Basic SEO', 'Social media links'],
    bestFor: 'Small businesses, freelancers, personal brands'
  },
  {
    type: 'Professional Corporate Website',
    priceRange: '₦300,000 - ₦800,000',
    timeline: '2-4 weeks',
    description: 'Professional website with advanced features',
    features: ['10-15 pages', 'Custom design', 'Blog section', 'Advanced SEO', 'Analytics integration', 'CMS (content management)'],
    bestFor: 'Medium businesses, professional services, agencies'
  },
  {
    type: 'E-commerce Website',
    priceRange: '₦500,000 - ₦2,000,000',
    timeline: '4-8 weeks',
    description: 'Full online store with payment integration',
    features: ['Unlimited products', 'Payment gateway (Paystack/Flutterwave)', 'Inventory management', 'Order tracking', 'Customer accounts', 'Admin dashboard'],
    bestFor: 'Retail businesses, online stores, marketplaces'
  },
  {
    type: 'Custom Web Application',
    priceRange: '₦1,000,000 - ₦10,000,000+',
    timeline: '8-16 weeks',
    description: 'Complex custom-built web applications',
    features: ['Custom functionality', 'User authentication', 'Database integration', 'API development', 'Third-party integrations', 'Scalable architecture'],
    bestFor: 'Startups, enterprises, SaaS products'
  }
]

const costFactors = [
  { factor: 'Design Complexity', description: 'Custom designs cost more than templates. Unique branding and animations add to the price.' },
  { factor: 'Number of Pages', description: 'More pages mean more content, design, and development work.' },
  { factor: 'Functionality', description: 'Features like booking systems, payment processing, or user accounts increase costs.' },
  { factor: 'Content Creation', description: 'Professional copywriting and photography are often additional costs.' },
  { factor: 'SEO Requirements', description: 'Advanced SEO optimization requires more time and expertise.' },
  { factor: 'Maintenance & Support', description: 'Ongoing support packages add to the total cost of ownership.' }
]

export default function WebsiteCostPage() {
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
              <span className="text-neutral-900">Website Cost Nigeria</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-primary">Pricing</span>
              <span className="badge-success">2025 Updated</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              How Much Does a Website Cost in Nigeria? 2025 Pricing Guide
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Get accurate website development pricing for Nigeria. From basic business sites starting at ₦100,000 to complex e-commerce platforms. Understand what affects pricing and how to budget for your project.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>December 24, 2025</span></div>
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>ProWeb Nigeria Team</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>10 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <article className="prose-blog">
              <section className="mb-12">
                <h2>Website Pricing Overview</h2>
                <p>
                  The cost of a website in Nigeria varies widely depending on your requirements. A simple business website can cost as little as ₦100,000, while a complex e-commerce platform or custom web application can exceed ₦10,000,000.
                </p>
                <p>
                  This guide breaks down the different types of websites, their typical costs, and what factors influence pricing so you can budget accurately for your project.
                </p>
              </section>

              <section className="mb-12">
                <h2>Website Pricing by Type</h2>
                <div className="space-y-6 my-8">
                  {pricingTiers.map((tier, index) => (
                    <div key={index} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                      <div className="bg-neutral-900 text-white p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{tier.type}</h3>
                            <p className="text-neutral-400 text-sm">{tier.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary-400">{tier.priceRange}</div>
                            <div className="text-sm text-neutral-400">Timeline: {tier.timeline}</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="font-semibold text-neutral-900 mb-3">What's Included:</h4>
                        <div className="grid sm:grid-cols-2 gap-2 mb-4">
                          {tier.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                              <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div className="pt-4 border-t border-neutral-100">
                          <span className="text-sm text-neutral-500">Best for: </span>
                          <span className="text-sm font-medium text-neutral-900">{tier.bestFor}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>What Affects Website Cost?</h2>
                <p>Several factors influence how much you'll pay for a website in Nigeria:</p>
                <div className="space-y-4 my-8">
                  {costFactors.map((item, index) => (
                    <div key={index} className="feature-card">
                      <h4 className="font-bold text-neutral-900 mb-2">{item.factor}</h4>
                      <p className="text-sm text-neutral-600 mb-0">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>Hidden Costs to Consider</h2>
                <p>Beyond the initial development cost, budget for these ongoing expenses:</p>
                <div className="bg-warning-50 border border-warning-200 rounded-xl p-6 my-6">
                  <div className="flex gap-3">
                    <AlertCircle className="w-6 h-6 text-warning-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-warning-900 mb-3">Annual Costs to Budget For</h4>
                      <ul className="space-y-2 text-warning-800 text-sm mb-0">
                        <li><strong>Domain Name:</strong> ₦5,000 - ₦15,000/year (.ng domains cost more)</li>
                        <li><strong>Web Hosting:</strong> ₦20,000 - ₦100,000/year depending on traffic</li>
                        <li><strong>SSL Certificate:</strong> Free - ₦30,000/year (many hosts include free SSL)</li>
                        <li><strong>Maintenance:</strong> ₦50,000 - ₦200,000/year for updates and support</li>
                        <li><strong>Email Hosting:</strong> ₦10,000 - ₦50,000/year for professional email</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Cheap vs Professional: What's the Difference?</h2>
                <p>You might find web designers offering websites for ₦30,000 - ₦50,000. Here's what you typically get at different price points:</p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-error-50 border border-error-200 rounded-xl p-6">
                    <h4 className="font-bold text-error-900 mb-4">Budget Websites (₦30k - ₦80k)</h4>
                    <ul className="space-y-2 text-error-800 text-sm">
                      <li>• Generic templates with minimal customization</li>
                      <li>• No SEO optimization</li>
                      <li>• Slow loading speeds</li>
                      <li>• Limited or no support after delivery</li>
                      <li>• May not be mobile-friendly</li>
                      <li>• Security vulnerabilities</li>
                    </ul>
                  </div>
                  <div className="bg-success-50 border border-success-200 rounded-xl p-6">
                    <h4 className="font-bold text-success-900 mb-4">Professional Websites (₦150k+)</h4>
                    <ul className="space-y-2 text-success-800 text-sm">
                      <li>• Custom design matching your brand</li>
                      <li>• SEO-optimized to rank on Google</li>
                      <li>• Fast loading, optimized performance</li>
                      <li>• Ongoing support and maintenance</li>
                      <li>• Fully responsive on all devices</li>
                      <li>• Secure and regularly updated</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>How to Choose the Right Budget</h2>
                <p>Consider these questions when setting your website budget:</p>
                <div className="bg-neutral-50 rounded-xl p-6 my-6 border border-neutral-200">
                  <ol className="space-y-4 mb-0">
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</span>
                      <div>
                        <strong className="text-neutral-900">What's your website's purpose?</strong>
                        <p className="text-sm text-neutral-600 mb-0">Information only? Lead generation? E-commerce? This determines complexity.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</span>
                      <div>
                        <strong className="text-neutral-900">How important is your online presence?</strong>
                        <p className="text-sm text-neutral-600 mb-0">If customers find you online, invest more. Your website is your 24/7 salesperson.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</span>
                      <div>
                        <strong className="text-neutral-900">What's your competition doing?</strong>
                        <p className="text-sm text-neutral-600 mb-0">If competitors have professional sites, you need one too to compete.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</span>
                      <div>
                        <strong className="text-neutral-900">What's the potential ROI?</strong>
                        <p className="text-sm text-neutral-600 mb-0">A ₦500k website that brings ₦5M in business is a great investment.</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>

              <section className="mb-12">
                <h2>Our Pricing at ProWeb Nigeria</h2>
                <p>At ProWeb Nigeria, we offer transparent, competitive pricing for Nigerian businesses:</p>
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-neutral-100">
                        <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">Package</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">Price</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border border-neutral-200 font-medium">Starter</td>
                        <td className="p-4 border border-neutral-200">From ₦150,000</td>
                        <td className="p-4 border border-neutral-200">Small businesses, personal brands</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200 font-medium">Professional</td>
                        <td className="p-4 border border-neutral-200">From ₦350,000</td>
                        <td className="p-4 border border-neutral-200">Growing businesses, service companies</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-neutral-200 font-medium">E-commerce</td>
                        <td className="p-4 border border-neutral-200">From ₦600,000</td>
                        <td className="p-4 border border-neutral-200">Online stores, retail businesses</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200 font-medium">Custom</td>
                        <td className="p-4 border border-neutral-200">Custom Quote</td>
                        <td className="p-4 border border-neutral-200">Complex requirements, web apps</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <div className="cta-section text-center">
                <h3 className="text-2xl font-bold mb-4">Get a Free Quote for Your Website</h3>
                <p className="text-neutral-400 mb-6">Tell us about your project and get accurate pricing within 24 hours.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn bg-white text-neutral-900 hover:bg-neutral-100">Get Free Quote<ArrowRight className="w-4 h-4 ml-2" /></Link>
                  <Link href="/pricing" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-neutral-900">View Packages</Link>
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
