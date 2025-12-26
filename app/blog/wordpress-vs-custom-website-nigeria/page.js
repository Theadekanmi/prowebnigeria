import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, CheckCircle, X } from 'lucide-react'

export const metadata = {
  title: 'WordPress vs Custom Website: Which is Better for Nigerian Businesses?',
  description: 'Compare WordPress and custom websites for Nigerian businesses. Understand the pros, cons, costs, and which option is right for your business needs.',
  keywords: ['wordpress vs custom website', 'wordpress nigeria', 'custom website nigeria', 'best website platform nigeria', 'website development options'],
  openGraph: {
    title: 'WordPress vs Custom Website Nigeria',
    description: 'Which is better for your Nigerian business? Complete comparison guide.',
    url: 'https://prowebnigeria.ng/blog/wordpress-vs-custom-website-nigeria',
    siteName: 'ProWeb Nigeria',
    type: 'article'
  },
  alternates: { canonical: '/blog/wordpress-vs-custom-website-nigeria' }
}

export default function WordPressVsCustomPage() {
  const wordpressPros = [
    'Lower initial cost (₦100k - ₦300k)',
    'Easy content management',
    'Large plugin ecosystem',
    'Quick setup time',
    'Many themes available',
    'Large community support'
  ]

  const wordpressCons = [
    'Can be slow with many plugins',
    'Security vulnerabilities if not maintained',
    'Limited customization without coding',
    'Plugin conflicts common',
    'Ongoing maintenance required',
    'Can look generic without customization'
  ]

  const customPros = [
    'Complete design freedom',
    'Optimal performance and speed',
    'Better security (no plugin vulnerabilities)',
    'Scalable architecture',
    'No unnecessary code bloat',
    'Unique, branded experience'
  ]

  const customCons = [
    'Higher initial cost (₦300k - ₦2M+)',
    'Longer development time',
    'Requires developer for changes',
    'More complex to build',
    'Smaller talent pool'
  ]

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
              <span className="text-neutral-900">WordPress vs Custom</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-primary">Comparison</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              WordPress vs Custom Website: Which is Right for Your Nigerian Business?
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              One of the most common questions we get: should I use WordPress or build a custom website? Here's an honest comparison to help you decide.
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
                <h2>The Short Answer</h2>
                <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 my-6">
                  <p className="text-primary-900 mb-0">
                    <strong>WordPress</strong> is great for blogs, small business sites, and when budget is tight.<br/>
                    <strong>Custom websites</strong> are better for e-commerce, high-traffic sites, and businesses that need unique functionality or optimal performance.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2>WordPress: Pros and Cons</h2>
                <p>WordPress powers about 40% of all websites globally. It's popular for good reasons, but it's not perfect.</p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-success-50 border border-success-200 rounded-xl p-6">
                    <h4 className="font-bold text-success-900 mb-4">Pros</h4>
                    <ul className="space-y-2">
                      {wordpressPros.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-success-800 text-sm">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-error-50 border border-error-200 rounded-xl p-6">
                    <h4 className="font-bold text-error-900 mb-4">Cons</h4>
                    <ul className="space-y-2">
                      {wordpressCons.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-error-800 text-sm">
                          <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Custom Website (React/Next.js): Pros and Cons</h2>
                <p>Custom websites built with modern frameworks like React and Next.js offer superior performance and flexibility.</p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-success-50 border border-success-200 rounded-xl p-6">
                    <h4 className="font-bold text-success-900 mb-4">Pros</h4>
                    <ul className="space-y-2">
                      {customPros.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-success-800 text-sm">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-error-50 border border-error-200 rounded-xl p-6">
                    <h4 className="font-bold text-error-900 mb-4">Cons</h4>
                    <ul className="space-y-2">
                      {customCons.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-error-800 text-sm">
                          <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Cost Comparison</h2>
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-neutral-100">
                        <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">Factor</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">WordPress</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">Custom</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border border-neutral-200 font-medium">Initial Cost</td>
                        <td className="p-4 border border-neutral-200">₦100k - ₦400k</td>
                        <td className="p-4 border border-neutral-200">₦300k - ₦2M+</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200 font-medium">Annual Maintenance</td>
                        <td className="p-4 border border-neutral-200">₦50k - ₦150k</td>
                        <td className="p-4 border border-neutral-200">₦30k - ₦100k</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-neutral-200 font-medium">Hosting</td>
                        <td className="p-4 border border-neutral-200">₦20k - ₦100k/year</td>
                        <td className="p-4 border border-neutral-200">₦15k - ₦60k/year</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200 font-medium">Development Time</td>
                        <td className="p-4 border border-neutral-200">1-3 weeks</td>
                        <td className="p-4 border border-neutral-200">3-8 weeks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-12">
                <h2>When to Choose WordPress</h2>
                <ul>
                  <li>You're on a tight budget (under ₦200k)</li>
                  <li>You need a blog or content-heavy site</li>
                  <li>You want to update content yourself frequently</li>
                  <li>You need the site quickly (1-2 weeks)</li>
                  <li>Your site is relatively simple (under 10 pages)</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>When to Choose Custom</h2>
                <ul>
                  <li>You're building an e-commerce store</li>
                  <li>Performance and speed are critical</li>
                  <li>You need unique functionality</li>
                  <li>You expect high traffic</li>
                  <li>Security is a top priority</li>
                  <li>You want a unique, branded experience</li>
                  <li>Long-term cost efficiency matters</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>Our Recommendation</h2>
                <p>
                  At ProWeb Nigeria, we specialize in custom websites built with React and Next.js because we believe they offer the best long-term value for Nigerian businesses. However, we also build WordPress sites when it's the right fit.
                </p>
                <p>
                  The best choice depends on your specific needs, budget, and goals. We're happy to discuss your project and recommend the right approach.
                </p>
              </section>

              <div className="cta-section text-center">
                <h3 className="text-2xl font-bold mb-4">Not Sure Which to Choose?</h3>
                <p className="text-neutral-400 mb-6">Get a free consultation and we'll recommend the best approach for your business.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn bg-white text-neutral-900 hover:bg-neutral-100">Get Free Advice<ArrowRight className="w-4 h-4 ml-2" /></Link>
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
