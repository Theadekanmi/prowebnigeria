import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { 
  Calendar, User, Clock, ArrowRight, ArrowLeft, CheckCircle, 
  Star, MapPin, Globe, Phone, Award, TrendingUp, Users, Zap,
  ExternalLink, Share2
} from 'lucide-react'

export const metadata = {
  title: 'Top 10 Best Web Designers in Nigeria 2025 | Rankings',
  description: 'Discover the best web designers in Nigeria for 2025. Top 10 web design companies ranked by portfolio, reviews, pricing & expertise.',
  keywords: [
    'best web designers in nigeria',
    'top web designers nigeria',
    'best web design company nigeria',
    'top 10 web designers nigeria',
    'best website designers lagos',
    'top web developers nigeria',
    'best web design agency nigeria',
    'website designers in nigeria',
    'web design companies nigeria 2025',
    'best web developer nigeria'
  ],
  openGraph: {
    title: 'Top 10 Best Web Designers in Nigeria 2025 | Complete Rankings',
    description: 'Discover the best web designers in Nigeria. Complete rankings based on portfolio quality, client reviews, pricing, and expertise.',
    url: 'https://prowebnigeria.ng/blog/top-10-best-web-designers-nigeria-2025',
    siteName: 'ProWeb Nigeria',
    type: 'article',
    images: [{
      url: 'https://prowebnigeria.ng/og-top-web-designers.jpg',
      width: 1200,
      height: 630,
      alt: 'Top 10 Best Web Designers in Nigeria 2025'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 Best Web Designers in Nigeria 2025',
    description: 'Complete rankings of the best web design companies in Nigeria.'
  },
  alternates: {
    canonical: '/blog/top-10-best-web-designers-nigeria-2025',
  }
}

const rankings = [
  {
    rank: 1,
    name: 'ProWeb Nigeria',
    location: 'Lagos, Nigeria',
    website: 'https://prowebnigeria.ng',
    description: 'ProWeb Nigeria stands out as the leading web design company in Nigeria, known for delivering high-performance websites using modern technologies like React and Next.js. Their focus on SEO-optimized, mobile-first designs has helped numerous Nigerian businesses achieve significant online growth.',
    specialties: ['Custom Web Development', 'E-commerce Solutions', 'SEO Services', 'Mobile-First Design'],
    highlights: [
      'Modern tech stack (React, Next.js, Node.js)',
      'SEO-optimized websites that rank on Google',
      'Affordable pricing for Nigerian businesses',
      '24/7 customer support',
      'Fast delivery times'
    ],
    rating: 4.9,
    reviews: 47,
    priceRange: '₦150,000 - ₦2,000,000',
    badge: 'gold'
  },
  {
    rank: 2,
    name: 'Wild Fusion Digital',
    location: 'Lagos, Nigeria',
    website: '#',
    description: 'Wild Fusion is a well-established digital agency offering comprehensive web design and digital marketing services. They have worked with major brands across Africa and bring enterprise-level expertise to their projects.',
    specialties: ['Corporate Websites', 'Digital Marketing', 'Brand Strategy', 'UI/UX Design'],
    highlights: [
      'Experience with major brands',
      'Full-service digital agency',
      'Strong portfolio',
      'Professional team'
    ],
    rating: 4.7,
    reviews: 89,
    priceRange: '₦500,000 - ₦5,000,000',
    badge: 'silver'
  },
  {
    rank: 3,
    name: 'Webcoupers',
    location: 'Lagos, Nigeria',
    website: '#',
    description: 'Webcoupers is a creative digital agency known for innovative web designs and strong branding work. They combine creativity with technical expertise to deliver memorable digital experiences.',
    specialties: ['Creative Design', 'Branding', 'Web Development', 'Digital Strategy'],
    highlights: [
      'Award-winning designs',
      'Creative approach',
      'Strong branding expertise',
      'Experienced team'
    ],
    rating: 4.6,
    reviews: 65,
    priceRange: '₦400,000 - ₦4,000,000',
    badge: 'bronze'
  },
  {
    rank: 4,
    name: 'Anakle',
    location: 'Lagos, Nigeria',
    website: '#',
    description: 'Anakle is a digital marketing and web development agency that has built a reputation for delivering results-driven websites. They focus on conversion optimization and user experience.',
    specialties: ['Conversion Optimization', 'Digital Marketing', 'Web Development', 'Analytics'],
    highlights: [
      'Data-driven approach',
      'Focus on conversions',
      'Strong analytics',
      'Marketing integration'
    ],
    rating: 4.5,
    reviews: 52,
    priceRange: '₦350,000 - ₦3,500,000'
  },
  {
    rank: 5,
    name: 'Ceped Technologies',
    location: 'Abuja, Nigeria',
    website: '#',
    description: 'Based in Abuja, Ceped Technologies serves businesses in the FCT and beyond with professional web design services. They are known for reliable delivery and good customer service.',
    specialties: ['Corporate Websites', 'E-commerce', 'Web Applications', 'Maintenance'],
    highlights: [
      'Strong presence in Abuja',
      'Reliable delivery',
      'Good customer service',
      'Competitive pricing'
    ],
    rating: 4.4,
    reviews: 38,
    priceRange: '₦200,000 - ₦2,500,000'
  },
  {
    rank: 6,
    name: 'BigField Digital',
    location: 'Ibadan, Nigeria',
    website: '#',
    description: 'BigField Digital brings professional web design services to Ibadan and the South-West region. They specialize in creating custom websites for local businesses and startups.',
    specialties: ['Custom Websites', 'Startup Solutions', 'Local Business Sites', 'WordPress'],
    highlights: [
      'Serving South-West Nigeria',
      'Startup-friendly pricing',
      'Quick turnaround',
      'Local market knowledge'
    ],
    rating: 4.3,
    reviews: 29,
    priceRange: '₦100,000 - ₦1,500,000'
  },
  {
    rank: 7,
    name: 'Softcom',
    location: 'Lagos, Nigeria',
    website: '#',
    description: 'Softcom is a technology company that offers web development alongside their software solutions. They bring enterprise-level technical expertise to web projects.',
    specialties: ['Enterprise Solutions', 'Web Applications', 'Software Development', 'API Integration'],
    highlights: [
      'Enterprise expertise',
      'Technical depth',
      'Scalable solutions',
      'Integration capabilities'
    ],
    rating: 4.3,
    reviews: 44,
    priceRange: '₦500,000 - ₦10,000,000'
  },
  {
    rank: 8,
    name: 'Upperlink Limited',
    location: 'Lagos, Nigeria',
    website: '#',
    description: 'Upperlink provides web design and development services with a focus on fintech and corporate clients. They have experience building secure, compliant websites.',
    specialties: ['Fintech Websites', 'Corporate Sites', 'Security-Focused', 'Compliance'],
    highlights: [
      'Fintech expertise',
      'Security focus',
      'Corporate experience',
      'Compliance knowledge'
    ],
    rating: 4.2,
    reviews: 31,
    priceRange: '₦400,000 - ₦5,000,000'
  },
  {
    rank: 9,
    name: 'Konga Tech',
    location: 'Lagos, Nigeria',
    website: '#',
    description: 'The technology arm of Konga offers web development services, particularly strong in e-commerce solutions given their background in online retail.',
    specialties: ['E-commerce', 'Marketplace Solutions', 'Payment Integration', 'Logistics Integration'],
    highlights: [
      'E-commerce expertise',
      'Marketplace experience',
      'Payment solutions',
      'Logistics integration'
    ],
    rating: 4.1,
    reviews: 27,
    priceRange: '₦300,000 - ₦4,000,000'
  },
  {
    rank: 10,
    name: 'Starta Hub',
    location: 'Lagos, Nigeria',
    website: '#',
    description: 'Starta Hub focuses on helping startups and small businesses get online with affordable web design solutions. They offer quick turnaround times and flexible packages.',
    specialties: ['Startup Websites', 'MVP Development', 'Landing Pages', 'Small Business Sites'],
    highlights: [
      'Startup-focused',
      'Affordable pricing',
      'Quick delivery',
      'Flexible packages'
    ],
    rating: 4.0,
    reviews: 23,
    priceRange: '₦80,000 - ₦800,000'
  }
]

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'methodology', title: 'How We Ranked' },
  { id: 'rankings', title: 'The Top 10 Rankings' },
  { id: 'how-to-choose', title: 'How to Choose' },
  { id: 'pricing', title: 'Pricing Guide' },
  { id: 'conclusion', title: 'Conclusion' }
]

export default function TopWebDesignersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-neutral-50 border-b border-neutral-200">
        <div className="container">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="breadcrumb mb-6">
              <Link href="/">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <Link href="/blog">Blog</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="text-neutral-900">Top 10 Best Web Designers Nigeria</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="badge-primary">Rankings</span>
              <span className="badge-success">2025 Updated</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Top 10 Best Web Designers in Nigeria 2025
            </h1>

            <p className="text-xl text-neutral-600 mb-8">
              Looking for the best web designer in Nigeria? We've researched and ranked the top 10 
              web design companies based on portfolio quality, client reviews, pricing, and expertise. 
              Find the perfect partner for your website project.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 26, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>ProWeb Nigeria Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar - Table of Contents */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-28">
                <div className="toc">
                  <h3 className="font-bold text-neutral-900 mb-4">Table of Contents</h3>
                  <nav className="space-y-1 border-l border-neutral-200">
                    {tableOfContents.map((item, index) => (
                      <a key={index} href={`#${item.id}`} className="toc-link">
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              <article className="prose-blog">
                {/* Introduction */}
                <section id="introduction" className="mb-12">
                  <h2>Introduction</h2>
                  <p>
                    Nigeria's digital economy is booming, and having a professional website is no longer 
                    optional for businesses that want to succeed. Whether you're a startup in Lagos, 
                    an established company in Abuja, or a growing business anywhere in Nigeria, 
                    choosing the right web designer can make or break your online presence.
                  </p>
                  <p>
                    With hundreds of web design companies claiming to be the best, how do you know 
                    which one to trust with your business? That's exactly why we created this comprehensive 
                    ranking of the top 10 best web designers in Nigeria for 2025.
                  </p>
                </section>

                {/* Methodology */}
                <section id="methodology" className="mb-12">
                  <h2>How We Ranked These Web Designers</h2>
                  <p>
                    Our ranking methodology is based on extensive research and analysis of multiple factors:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 my-8">
                    <div className="feature-card">
                      <div className="feature-icon bg-primary-100">
                        <Award className="w-6 h-6 text-primary-600" />
                      </div>
                      <h4 className="font-bold text-neutral-900 mb-2">Portfolio Quality</h4>
                      <p className="text-sm text-neutral-600">
                        We reviewed each company's portfolio for design quality, functionality, and innovation.
                      </p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon bg-success-100">
                        <Star className="w-6 h-6 text-success-600" />
                      </div>
                      <h4 className="font-bold text-neutral-900 mb-2">Client Reviews</h4>
                      <p className="text-sm text-neutral-600">
                        Real feedback from clients on platforms like Google, Clutch, and social media.
                      </p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon bg-warning-100">
                        <TrendingUp className="w-6 h-6 text-warning-600" />
                      </div>
                      <h4 className="font-bold text-neutral-900 mb-2">Technical Expertise</h4>
                      <p className="text-sm text-neutral-600">
                        Modern technologies, SEO knowledge, and development best practices.
                      </p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon bg-error-100">
                        <Users className="w-6 h-6 text-error-600" />
                      </div>
                      <h4 className="font-bold text-neutral-900 mb-2">Value for Money</h4>
                      <p className="text-sm text-neutral-600">
                        Pricing relative to quality and the Nigerian market context.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Rankings */}
                <section id="rankings" className="mb-12">
                  <h2>The Top 10 Best Web Designers in Nigeria 2025</h2>
                  
                  <div className="space-y-6 mt-8">
                    {rankings.map((company, index) => (
                      <div key={index} className="ranking-item">
                        <div className={`ranking-number ${company.badge || ''}`}>
                          {company.rank}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-neutral-900 mb-1">
                                {company.name}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-neutral-500">
                                <MapPin className="w-4 h-4" />
                                {company.location}
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              <span className="font-bold text-neutral-900">{company.rating}</span>
                              <span className="text-neutral-500 text-sm">({company.reviews} reviews)</span>
                            </div>
                          </div>
                          
                          <p className="text-neutral-600 mb-4">
                            {company.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {company.specialties.map((specialty, i) => (
                              <span key={i} className="badge-neutral text-xs">
                                {specialty}
                              </span>
                            ))}
                          </div>

                          <div className="grid sm:grid-cols-2 gap-2 mb-4">
                            {company.highlights.map((highlight, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                                <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                                {highlight}
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                            <div className="text-sm">
                              <span className="text-neutral-500">Price Range: </span>
                              <span className="font-semibold text-neutral-900">{company.priceRange}</span>
                            </div>
                            {company.rank === 1 && (
                              <Link 
                                href="/contact" 
                                className="btn-primary text-sm py-2"
                              >
                                Get Quote
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* How to Choose */}
                <section id="how-to-choose" className="mb-12">
                  <h2>How to Choose the Right Web Designer</h2>
                  <p>
                    Selecting the right web designer for your Nigerian business requires careful consideration. 
                    Here are key factors to evaluate:
                  </p>

                  <div className="bg-neutral-50 rounded-xl p-6 my-8 border border-neutral-200">
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">Key Selection Criteria</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-semibold text-neutral-900">Review Their Portfolio</h4>
                          <p className="text-sm text-neutral-600">Look for websites similar to what you want. Check if they've worked in your industry.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-semibold text-neutral-900">Check Client Reviews</h4>
                          <p className="text-sm text-neutral-600">Read reviews on Google, social media, and ask for references from past clients.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-semibold text-neutral-900">Understand Their Process</h4>
                          <p className="text-sm text-neutral-600">A good web designer will have a clear process for design, development, and delivery.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                        <div>
                          <h4 className="font-semibold text-neutral-900">Ask About SEO</h4>
                          <p className="text-sm text-neutral-600">Your website should be built to rank on Google. Ask about their SEO practices.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                        <div>
                          <h4 className="font-semibold text-neutral-900">Compare Pricing</h4>
                          <p className="text-sm text-neutral-600">Get quotes from multiple companies. Cheapest isn't always best, but value matters.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Pricing Guide */}
                <section id="pricing" className="mb-12">
                  <h2>Web Design Pricing in Nigeria 2025</h2>
                  <p>
                    Understanding web design costs in Nigeria helps you budget appropriately and avoid overpaying. 
                    Here's a general pricing guide:
                  </p>

                  <div className="overflow-x-auto my-8">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-neutral-100">
                          <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">Website Type</th>
                          <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">Price Range</th>
                          <th className="text-left p-4 font-semibold text-neutral-900 border border-neutral-200">Timeline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-4 border border-neutral-200">Basic Business Website</td>
                          <td className="p-4 border border-neutral-200">₦100,000 - ₦300,000</td>
                          <td className="p-4 border border-neutral-200">1-2 weeks</td>
                        </tr>
                        <tr className="bg-neutral-50">
                          <td className="p-4 border border-neutral-200">Professional Corporate Site</td>
                          <td className="p-4 border border-neutral-200">₦300,000 - ₦800,000</td>
                          <td className="p-4 border border-neutral-200">2-4 weeks</td>
                        </tr>
                        <tr>
                          <td className="p-4 border border-neutral-200">E-commerce Website</td>
                          <td className="p-4 border border-neutral-200">₦500,000 - ₦2,000,000</td>
                          <td className="p-4 border border-neutral-200">4-8 weeks</td>
                        </tr>
                        <tr className="bg-neutral-50">
                          <td className="p-4 border border-neutral-200">Custom Web Application</td>
                          <td className="p-4 border border-neutral-200">₦1,000,000 - ₦10,000,000+</td>
                          <td className="p-4 border border-neutral-200">8-16 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-12">
                  <h2>Conclusion</h2>
                  <p>
                    Choosing the right web designer is crucial for your business success in Nigeria's 
                    competitive digital landscape. While all the companies on this list are capable, 
                    <strong> ProWeb Nigeria</strong> stands out for its combination of modern technology, 
                    SEO expertise, affordable pricing, and excellent customer service.
                  </p>
                  <p>
                    Whether you're building your first website or redesigning an existing one, 
                    take time to evaluate your options carefully. Consider your budget, timeline, 
                    and specific requirements before making a decision.
                  </p>
                </section>

                {/* CTA */}
                <div className="cta-section text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Build Your Website?</h3>
                  <p className="text-neutral-400 mb-6">
                    Get a free consultation and quote from Nigeria's top-rated web design company.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="btn bg-white text-neutral-900 hover:bg-neutral-100">
                      Get Free Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link href="/portfolio" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-neutral-900">
                      View Our Work
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="container">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/complete-seo-guide-nigerian-businesses-2025" className="blog-card">
              <div className="blog-card-image flex items-center justify-center">
                <span className="text-4xl">📈</span>
              </div>
              <div className="blog-card-content">
                <span className="badge-neutral text-xs mb-2">SEO</span>
                <h3 className="blog-card-title">Complete SEO Guide for Nigerian Businesses 2025</h3>
                <p className="blog-card-excerpt">Master search engine optimization with our comprehensive guide.</p>
              </div>
            </Link>
            <Link href="/blog/website-cost-nigeria-2025-pricing-guide" className="blog-card">
              <div className="blog-card-image flex items-center justify-center">
                <span className="text-4xl">💰</span>
              </div>
              <div className="blog-card-content">
                <span className="badge-neutral text-xs mb-2">Pricing</span>
                <h3 className="blog-card-title">Website Cost in Nigeria 2025 Pricing Guide</h3>
                <p className="blog-card-excerpt">Understand website development costs in Nigeria.</p>
              </div>
            </Link>
            <Link href="/blog/web-design-services-lagos-nigeria" className="blog-card">
              <div className="blog-card-image flex items-center justify-center">
                <span className="text-4xl">🎨</span>
              </div>
              <div className="blog-card-content">
                <span className="badge-neutral text-xs mb-2">Web Design</span>
                <h3 className="blog-card-title">Web Design Services in Lagos Nigeria</h3>
                <p className="blog-card-excerpt">Complete guide to web design services in Lagos.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
