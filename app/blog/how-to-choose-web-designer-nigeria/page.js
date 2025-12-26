import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, CheckCircle, AlertCircle, XCircle } from 'lucide-react'

export const metadata = {
  title: 'How to Choose a Web Designer in Nigeria | Complete Guide',
  description: 'Learn how to choose the right web designer for your Nigerian business. Avoid scams, evaluate portfolios, and find the perfect partner for your website project.',
  keywords: ['choose web designer nigeria', 'hire web developer nigeria', 'find web designer lagos', 'web design company selection', 'best web designer nigeria'],
  openGraph: {
    title: 'How to Choose a Web Designer in Nigeria',
    description: 'Complete guide to finding the right web designer for your Nigerian business.',
    url: 'https://prowebnigeria.ng/blog/how-to-choose-web-designer-nigeria',
    siteName: 'ProWeb Nigeria',
    type: 'article'
  },
  alternates: { canonical: '/blog/how-to-choose-web-designer-nigeria' }
}

export default function HowToChooseWebDesignerPage() {
  const redFlags = [
    'No portfolio or won\'t show previous work',
    'Prices that seem too good to be true (₦20k-50k for full website)',
    'No contract or written agreement',
    'Can\'t explain their process clearly',
    'No physical address or verifiable identity',
    'Demands full payment upfront',
    'Uses only templates without customization options',
    'No mention of mobile responsiveness or SEO'
  ]

  const greenFlags = [
    'Strong portfolio with diverse projects',
    'Clear pricing and payment structure',
    'Written contract with deliverables',
    'Good communication and responsiveness',
    'Explains technical concepts in simple terms',
    'Offers post-launch support',
    'Discusses SEO and mobile optimization',
    'Has verifiable client testimonials'
  ]

  const questions = [
    { q: 'Can I see your portfolio?', why: 'Evaluate their design style and quality of work' },
    { q: 'What technologies do you use?', why: 'Modern tech (React, Next.js) means better performance' },
    { q: 'How do you handle SEO?', why: 'Your site should be built to rank on Google' },
    { q: 'What\'s your timeline?', why: 'Realistic timelines show professionalism' },
    { q: 'What\'s included in the price?', why: 'Avoid hidden costs and surprises' },
    { q: 'Do you provide hosting and maintenance?', why: 'Ongoing support is crucial' },
    { q: 'Can I update the site myself?', why: 'You should be able to make basic changes' },
    { q: 'What happens if I\'m not satisfied?', why: 'Know the revision policy upfront' }
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
              <span className="text-neutral-900">How to Choose Web Designer</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-primary">Guide</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              How to Choose a Web Designer in Nigeria
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Choosing the wrong web designer can cost you time, money, and opportunities. This guide helps you find the right partner for your Nigerian business website.
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
                <h2>Why Choosing the Right Web Designer Matters</h2>
                <p>
                  Your website is often the first impression potential customers have of your business. A poorly designed website can drive customers away, while a professional one can generate leads and sales 24/7.
                </p>
                <p>
                  Unfortunately, the Nigerian market has many inexperienced designers and outright scammers. This guide helps you navigate the landscape and find a reliable partner.
                </p>
              </section>

              <section className="mb-12">
                <h2>Red Flags to Watch Out For</h2>
                <p>Avoid web designers who show these warning signs:</p>
                <div className="bg-error-50 border border-error-200 rounded-xl p-6 my-6">
                  <h4 className="font-bold text-error-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" /> Warning Signs
                  </h4>
                  <div className="space-y-3">
                    {redFlags.map((flag, index) => (
                      <div key={index} className="flex items-start gap-3 text-error-800">
                        <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{flag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Green Flags: Signs of a Good Web Designer</h2>
                <p>Look for these positive indicators:</p>
                <div className="bg-success-50 border border-success-200 rounded-xl p-6 my-6">
                  <h4 className="font-bold text-success-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Positive Signs
                  </h4>
                  <div className="space-y-3">
                    {greenFlags.map((flag, index) => (
                      <div key={index} className="flex items-start gap-3 text-success-800">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{flag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Questions to Ask Before Hiring</h2>
                <p>Ask these questions to evaluate potential web designers:</p>
                <div className="space-y-4 my-8">
                  {questions.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl border border-neutral-200 p-5">
                      <h4 className="font-bold text-neutral-900 mb-2">"{item.q}"</h4>
                      <p className="text-sm text-neutral-600 mb-0"><strong>Why ask:</strong> {item.why}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>How to Evaluate a Portfolio</h2>
                <p>When reviewing a web designer's portfolio, look for:</p>
                <ul>
                  <li><strong>Variety:</strong> Can they handle different industries and styles?</li>
                  <li><strong>Quality:</strong> Are the designs modern and professional?</li>
                  <li><strong>Functionality:</strong> Visit the live sites - do they work well?</li>
                  <li><strong>Mobile:</strong> Check sites on your phone - are they responsive?</li>
                  <li><strong>Speed:</strong> Do the sites load quickly?</li>
                  <li><strong>Relevance:</strong> Have they worked with businesses like yours?</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>Understanding Pricing</h2>
                <p>Web design pricing in Nigeria varies widely. Here's what to expect:</p>
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-neutral-100">
                        <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">Price Range</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">What You Get</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border border-neutral-200">₦20,000 - ₦80,000</td>
                        <td className="p-4 border border-neutral-200">Basic template, minimal customization, likely no SEO or support</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200">₦100,000 - ₦300,000</td>
                        <td className="p-4 border border-neutral-200">Custom design, basic SEO, some support, good for small businesses</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-neutral-200">₦300,000 - ₦800,000</td>
                        <td className="p-4 border border-neutral-200">Professional custom design, full SEO, ongoing support, CMS</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200">₦800,000+</td>
                        <td className="p-4 border border-neutral-200">Enterprise solutions, e-commerce, custom features, premium support</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <strong>Remember:</strong> The cheapest option often costs more in the long run due to poor quality, lack of support, and need for rebuilding.
                </p>
              </section>

              <section className="mb-12">
                <h2>The Selection Process</h2>
                <ol>
                  <li><strong>Research:</strong> Find 3-5 potential web designers through referrals, Google, or directories</li>
                  <li><strong>Review:</strong> Check their portfolios, reviews, and online presence</li>
                  <li><strong>Contact:</strong> Reach out and evaluate their communication</li>
                  <li><strong>Compare:</strong> Get quotes and compare value, not just price</li>
                  <li><strong>Verify:</strong> Ask for references and contact past clients</li>
                  <li><strong>Contract:</strong> Get everything in writing before starting</li>
                </ol>
              </section>

              <div className="cta-section text-center">
                <h3 className="text-2xl font-bold mb-4">Looking for a Reliable Web Designer?</h3>
                <p className="text-neutral-400 mb-6">ProWeb Nigeria has helped 20+ businesses build professional websites. Let's discuss your project.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn bg-white text-neutral-900 hover:bg-neutral-100">Get Free Quote<ArrowRight className="w-4 h-4 ml-2" /></Link>
                  <Link href="/portfolio" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-neutral-900">View Our Work</Link>
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
