import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, CheckCircle, Star, X } from 'lucide-react'

export const metadata = {
  title: 'Best E-commerce Platforms for Nigerian Businesses 2025',
  description: 'Compare the top e-commerce platforms for selling online in Nigeria. WooCommerce, Shopify, custom solutions with Paystack & Flutterwave integration.',
  keywords: ['ecommerce nigeria', 'best ecommerce platform nigeria', 'online store nigeria', 'shopify nigeria', 'woocommerce nigeria', 'paystack integration'],
  openGraph: {
    title: 'Best E-commerce Platforms for Nigerian Businesses 2025',
    description: 'Compare the top e-commerce platforms for selling online in Nigeria.',
    url: 'https://prowebnigeria.ng/blog/best-ecommerce-platforms-nigeria-2025',
    siteName: 'ProWeb Nigeria',
    type: 'article'
  },
  alternates: { canonical: '/blog/best-ecommerce-platforms-nigeria-2025' }
}

const platforms = [
  {
    name: 'Custom E-commerce (React/Next.js)',
    rating: 4.9,
    bestFor: 'Businesses wanting full control and scalability',
    priceRange: '₦600,000 - ₦2,000,000 (one-time)',
    monthlyFees: '₦20,000 - ₦50,000 (hosting)',
    pros: ['Complete customization', 'No transaction fees', 'Full ownership', 'Best performance', 'Unlimited scalability'],
    cons: ['Higher upfront cost', 'Requires developer for changes', 'Longer development time'],
    paymentGateways: ['Paystack', 'Flutterwave', 'Any gateway'],
    recommended: true
  },
  {
    name: 'WooCommerce (WordPress)',
    rating: 4.5,
    bestFor: 'Small to medium businesses on a budget',
    priceRange: '₦150,000 - ₦500,000 (setup)',
    monthlyFees: '₦10,000 - ₦30,000 (hosting)',
    pros: ['Lower initial cost', 'Large plugin ecosystem', 'Easy content management', 'Good for SEO'],
    cons: ['Can be slow with many products', 'Security requires attention', 'Plugin conflicts possible'],
    paymentGateways: ['Paystack', 'Flutterwave', 'PayPal'],
    recommended: true
  },
  {
    name: 'Shopify',
    rating: 4.3,
    bestFor: 'Businesses wanting quick setup with less control',
    priceRange: '$29 - $299/month (₦45,000 - ₦465,000)',
    monthlyFees: 'Included in subscription',
    pros: ['Easy to use', 'Quick setup', 'Reliable hosting', '24/7 support'],
    cons: ['Monthly fees add up', 'Transaction fees (unless Shopify Payments)', 'Limited customization', 'Shopify Payments not in Nigeria'],
    paymentGateways: ['Paystack (via app)', 'Limited options'],
    recommended: false
  },
  {
    name: 'Jumia/Konga Seller',
    rating: 3.8,
    bestFor: 'Testing products before building own store',
    priceRange: 'Free to list',
    monthlyFees: 'Commission per sale (5-20%)',
    pros: ['No upfront cost', 'Built-in traffic', 'Logistics support', 'Trust factor'],
    cons: ['High commissions', 'No brand control', 'Competition on platform', 'Limited customer data'],
    paymentGateways: ['Platform handles payments'],
    recommended: false
  }
]

export default function EcommercePlatformsPage() {
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
              <span className="text-neutral-900">E-commerce Platforms Nigeria</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-primary">E-commerce</span>
              <span className="badge-success">2025 Guide</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Best E-commerce Platforms for Nigerian Businesses 2025
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Compare the top e-commerce solutions for selling online in Nigeria. We analyze WooCommerce, Shopify, custom solutions, and marketplaces with Paystack and Flutterwave integration.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>December 15, 2025</span></div>
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
                <h2>E-commerce in Nigeria: The Opportunity</h2>
                <p>
                  Nigeria's e-commerce market is growing rapidly, with online retail expected to reach $75 billion by 2025. More Nigerians are shopping online than ever before, creating massive opportunities for businesses.
                </p>
                <p>
                  But choosing the right e-commerce platform is crucial. The wrong choice can cost you money, limit your growth, and frustrate your customers. This guide helps you make the right decision.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 my-8">
                  <div className="stat-card">
                    <div className="stat-number text-primary-600">$75B</div>
                    <div className="stat-label">E-commerce Market by 2025</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number text-success-600">40%</div>
                    <div className="stat-label">Annual Growth Rate</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number text-warning-600">50M+</div>
                    <div className="stat-label">Online Shoppers</div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Platform Comparison</h2>
                <div className="space-y-8 my-8">
                  {platforms.map((platform, index) => (
                    <div key={index} className={`bg-white rounded-xl border-2 overflow-hidden ${platform.recommended ? 'border-primary-500' : 'border-neutral-200'}`}>
                      {platform.recommended && (
                        <div className="bg-primary-600 text-white text-center py-2 text-sm font-semibold">
                          ⭐ Recommended for Nigerian Businesses
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-1">{platform.name}</h3>
                            <p className="text-neutral-600 text-sm">{platform.bestFor}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <span className="font-bold text-neutral-900">{platform.rating}</span>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-neutral-50 rounded-lg p-4">
                            <div className="text-sm text-neutral-500 mb-1">Setup Cost</div>
                            <div className="font-semibold text-neutral-900">{platform.priceRange}</div>
                          </div>
                          <div className="bg-neutral-50 rounded-lg p-4">
                            <div className="text-sm text-neutral-500 mb-1">Monthly Fees</div>
                            <div className="font-semibold text-neutral-900">{platform.monthlyFees}</div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-4">
                          <div>
                            <h4 className="font-semibold text-success-700 mb-2">Pros</h4>
                            <ul className="space-y-1">
                              {platform.pros.map((pro, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                                  <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-error-700 mb-2">Cons</h4>
                            <ul className="space-y-1">
                              {platform.cons.map((con, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                                  <X className="w-4 h-4 text-error-500 flex-shrink-0" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-neutral-100">
                          <span className="text-sm text-neutral-500">Payment Gateways: </span>
                          <span className="text-sm font-medium text-neutral-900">{platform.paymentGateways.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>Payment Gateways for Nigerian E-commerce</h2>
                <p>Accepting payments is crucial for any Nigerian online store. Here are the top options:</p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="feature-card">
                    <h4 className="font-bold text-neutral-900 mb-2">Paystack</h4>
                    <p className="text-sm text-neutral-600 mb-3">Nigeria's most popular payment gateway. Easy integration, reliable, and trusted by major brands.</p>
                    <ul className="space-y-1 text-sm text-neutral-700">
                      <li>• Transaction fee: 1.5% + ₦100 (capped at ₦2,000)</li>
                      <li>• Supports cards, bank transfers, USSD</li>
                      <li>• Excellent documentation</li>
                    </ul>
                  </div>
                  <div className="feature-card">
                    <h4 className="font-bold text-neutral-900 mb-2">Flutterwave</h4>
                    <p className="text-sm text-neutral-600 mb-3">Pan-African payment solution with wide coverage across Africa.</p>
                    <ul className="space-y-1 text-sm text-neutral-700">
                      <li>• Transaction fee: 1.4% (local cards)</li>
                      <li>• Supports multiple African countries</li>
                      <li>• Good for cross-border payments</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Our Recommendation</h2>
                <p>For most Nigerian businesses, we recommend:</p>
                <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 my-6">
                  <h4 className="font-bold text-primary-900 mb-3">Custom E-commerce with Next.js + Paystack</h4>
                  <p className="text-primary-800 mb-4">
                    A custom-built e-commerce store gives you complete control, no monthly fees, and the best performance. Combined with Paystack for payments, it's the most cost-effective long-term solution for serious Nigerian businesses.
                  </p>
                  <p className="text-primary-800 mb-0">
                    <strong>Why?</strong> No transaction fees beyond payment gateway, full ownership, unlimited customization, and better SEO than template solutions.
                  </p>
                </div>
              </section>

              <div className="cta-section text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Selling Online?</h3>
                <p className="text-neutral-400 mb-6">Get a custom e-commerce store built for Nigerian customers with Paystack integration.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn bg-white text-neutral-900 hover:bg-neutral-100">Get E-commerce Quote<ArrowRight className="w-4 h-4 ml-2" /></Link>
                  <Link href="/services" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-neutral-900">Our Services</Link>
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
