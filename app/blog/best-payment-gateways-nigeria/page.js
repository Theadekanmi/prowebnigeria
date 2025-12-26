import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, CheckCircle, Star } from 'lucide-react'

export const metadata = {
  title: 'Best Payment Gateways in Nigeria 2025 | Paystack vs Flutterwave',
  description: 'Compare the best payment gateways for Nigerian businesses. Paystack, Flutterwave, and more. Fees, features, and integration guide.',
  keywords: ['payment gateway nigeria', 'paystack nigeria', 'flutterwave nigeria', 'online payment nigeria', 'accept payments nigeria'],
  openGraph: {
    title: 'Best Payment Gateways in Nigeria 2025',
    description: 'Compare Paystack, Flutterwave, and other payment gateways for Nigerian businesses.',
    url: 'https://prowebnigeria.ng/blog/best-payment-gateways-nigeria',
    siteName: 'ProWeb Nigeria',
    type: 'article'
  },
  alternates: { canonical: '/blog/best-payment-gateways-nigeria' }
}

const gateways = [
  {
    name: 'Paystack',
    rating: 4.9,
    description: 'Nigeria\'s most popular payment gateway, now owned by Stripe. Known for reliability and excellent developer experience.',
    fees: '1.5% + ₦100 (capped at ₦2,000)',
    setupFee: 'Free',
    settlementTime: 'Next business day',
    features: ['Card payments', 'Bank transfers', 'USSD', 'Mobile money', 'Recurring billing', 'Split payments'],
    pros: ['Excellent documentation', 'Reliable uptime', 'Great support', 'Easy integration', 'Trusted brand'],
    cons: ['Fees can add up for small transactions', 'Limited to Nigeria primarily'],
    bestFor: 'Most Nigerian businesses, especially those prioritizing reliability',
    recommended: true
  },
  {
    name: 'Flutterwave',
    rating: 4.7,
    description: 'Pan-African payment solution with wide coverage across Africa. Great for businesses operating in multiple African countries.',
    fees: '1.4% (local cards), 3.8% (international)',
    setupFee: 'Free',
    settlementTime: 'Next business day',
    features: ['Card payments', 'Bank transfers', 'Mobile money', 'USSD', 'Barter (virtual cards)', 'Multi-currency'],
    pros: ['Pan-African coverage', 'Virtual cards (Barter)', 'Multi-currency support', 'Good for cross-border'],
    cons: ['Some reliability concerns reported', 'Support can be slow', 'Interface less intuitive'],
    bestFor: 'Businesses operating across multiple African countries',
    recommended: true
  },
  {
    name: 'Interswitch (Webpay)',
    rating: 4.2,
    description: 'One of Nigeria\'s oldest payment processors. Strong in enterprise and banking integrations.',
    fees: '1.5% (varies by agreement)',
    setupFee: 'Varies',
    settlementTime: '1-2 business days',
    features: ['Card payments', 'Bank transfers', 'Verve cards', 'QR payments'],
    pros: ['Established brand', 'Strong bank relationships', 'Good for enterprise'],
    cons: ['Dated interface', 'Complex integration', 'Less developer-friendly'],
    bestFor: 'Large enterprises with existing bank relationships',
    recommended: false
  },
  {
    name: 'Monnify',
    rating: 4.3,
    description: 'Payment gateway by Moniepoint (formerly TeamApt). Growing in popularity with competitive rates.',
    fees: '1.5% (capped at ₦1,500)',
    setupFee: 'Free',
    settlementTime: 'Same day / Next day',
    features: ['Card payments', 'Bank transfers', 'Reserved accounts', 'Disbursements'],
    pros: ['Lower fee cap', 'Fast settlement', 'Reserved accounts feature', 'Growing ecosystem'],
    cons: ['Smaller market share', 'Less documentation', 'Fewer integrations'],
    bestFor: 'Businesses wanting lower transaction caps',
    recommended: false
  }
]

export default function PaymentGatewaysPage() {
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
              <span className="text-neutral-900">Payment Gateways Nigeria</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-primary">E-commerce</span>
              <span className="badge-success">2025 Guide</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Best Payment Gateways in Nigeria 2025
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Compare Paystack, Flutterwave, and other payment gateways for your Nigerian business. Understand fees, features, and which one is right for you.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>December 26, 2025</span></div>
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
                <h2>Why Payment Gateway Choice Matters</h2>
                <p>
                  Choosing the right payment gateway affects your customer experience, transaction costs, and business operations. A poor choice can lead to failed payments, lost sales, and frustrated customers.
                </p>
                <p>
                  In Nigeria, we're fortunate to have several excellent options. Here's our comprehensive comparison.
                </p>
              </section>

              <section className="mb-12">
                <h2>Payment Gateway Comparison</h2>
                <div className="space-y-8 my-8">
                  {gateways.map((gateway, index) => (
                    <div key={index} className={`bg-white rounded-xl border-2 overflow-hidden ${gateway.recommended ? 'border-primary-500' : 'border-neutral-200'}`}>
                      {gateway.recommended && (
                        <div className="bg-primary-600 text-white text-center py-2 text-sm font-semibold">
                          ⭐ Recommended
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-1">{gateway.name}</h3>
                            <p className="text-neutral-600 text-sm">{gateway.description}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <span className="font-bold text-neutral-900">{gateway.rating}</span>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div className="bg-neutral-50 rounded-lg p-4">
                            <div className="text-sm text-neutral-500 mb-1">Transaction Fee</div>
                            <div className="font-semibold text-neutral-900 text-sm">{gateway.fees}</div>
                          </div>
                          <div className="bg-neutral-50 rounded-lg p-4">
                            <div className="text-sm text-neutral-500 mb-1">Setup Fee</div>
                            <div className="font-semibold text-neutral-900 text-sm">{gateway.setupFee}</div>
                          </div>
                          <div className="bg-neutral-50 rounded-lg p-4">
                            <div className="text-sm text-neutral-500 mb-1">Settlement</div>
                            <div className="font-semibold text-neutral-900 text-sm">{gateway.settlementTime}</div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-neutral-900 mb-2">Features</h4>
                          <div className="flex flex-wrap gap-2">
                            {gateway.features.map((feature, i) => (
                              <span key={i} className="badge-neutral text-xs">{feature}</span>
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-semibold text-success-700 mb-2 text-sm">Pros</h4>
                            <ul className="space-y-1">
                              {gateway.pros.map((pro, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                                  <CheckCircle className="w-3 h-3 text-success-500 flex-shrink-0 mt-0.5" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-error-700 mb-2 text-sm">Cons</h4>
                            <ul className="space-y-1">
                              {gateway.cons.map((con, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                                  <span className="w-3 h-3 text-error-500 flex-shrink-0">•</span>
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-neutral-100">
                          <span className="text-sm text-neutral-500">Best for: </span>
                          <span className="text-sm font-medium text-neutral-900">{gateway.bestFor}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>Our Recommendation</h2>
                <p>
                  For most Nigerian businesses, we recommend <strong>Paystack</strong> as the primary payment gateway. It offers the best combination of reliability, developer experience, and support.
                </p>
                <p>
                  If you're operating across multiple African countries, consider <strong>Flutterwave</strong> for its pan-African coverage.
                </p>
                <p>
                  Many businesses use both - Paystack as primary and Flutterwave as backup - to ensure maximum uptime and payment success rates.
                </p>
              </section>

              <section className="mb-12">
                <h2>Integration Tips</h2>
                <ul>
                  <li><strong>Test thoroughly:</strong> Use test mode before going live</li>
                  <li><strong>Handle errors gracefully:</strong> Show clear messages when payments fail</li>
                  <li><strong>Implement webhooks:</strong> Don't rely solely on redirect callbacks</li>
                  <li><strong>Verify transactions:</strong> Always verify on your server before fulfilling orders</li>
                  <li><strong>Keep credentials secure:</strong> Never expose secret keys in frontend code</li>
                </ul>
              </section>

              <div className="cta-section text-center">
                <h3 className="text-2xl font-bold mb-4">Need Payment Integration?</h3>
                <p className="text-neutral-400 mb-6">We integrate Paystack, Flutterwave, and other payment gateways into your website.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn bg-white text-neutral-900 hover:bg-neutral-100">Get Integration Quote<ArrowRight className="w-4 h-4 ml-2" /></Link>
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
