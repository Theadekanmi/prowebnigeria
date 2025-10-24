import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  ArrowLeft,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Professional Web Design Services in Lagos Nigeria - ProWeb Nigeria',
  description: 'Get professional web design services in Lagos, Nigeria. Custom websites, e-commerce solutions, and digital marketing. Serving businesses across Lagos and Nigeria.',
  keywords: [
    'web design services lagos',
    'web design nigeria',
    'website development lagos',
    'professional web design lagos',
    'custom website design nigeria',
    'responsive web design lagos',
    'ecommerce website lagos',
    'web development company nigeria'
  ],
  openGraph: {
    title: 'Professional Web Design Services in Lagos Nigeria - ProWeb Nigeria',
    description: 'Get professional web design services in Lagos, Nigeria. Custom websites, e-commerce solutions, and digital marketing.',
    url: 'https://prowebnigeria.ng/blog/web-design-services-lagos-nigeria',
    siteName: 'ProWeb Nigeria',
    images: [
      {
        url: 'https://prowebnigeria.ng/og-lagos-web-design.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Design Services in Lagos Nigeria',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

export default function WebDesignLagosPage() {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction to Web Design in Lagos' },
    { id: 'why-professional', title: 'Why Choose Professional Web Design?' },
    { id: 'our-services', title: 'Our Web Design Services' },
    { id: 'lagos-market', title: 'Understanding the Lagos Market' },
    { id: 'process', title: 'Our Design Process' },
    { id: 'pricing', title: 'Pricing and Packages' },
    { id: 'case-studies', title: 'Success Stories' },
    { id: 'get-started', title: 'Get Started Today' }
  ];

  const services = [
    {
      title: "Custom Website Design",
      description: "Unique, brand-focused designs tailored to your business needs",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"]
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration and inventory management",
      features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics"]
    },
    {
      title: "Corporate Websites",
      description: "Professional business websites that establish credibility and trust",
      features: ["Professional Design", "Content Management", "Contact Forms", "Gallery"]
    },
    {
      title: "Landing Pages",
      description: "High-converting landing pages for marketing campaigns and lead generation",
      features: ["Conversion Optimized", "A/B Testing", "Analytics", "Lead Capture"]
    }
  ];

  const caseStudies = [
    {
      client: "Lagos E-commerce Store",
      industry: "Retail",
      result: "500% increase in online sales",
      description: "Complete e-commerce redesign with modern UI and optimized checkout process"
    },
    {
      client: "Fintech Startup",
      industry: "Financial Services",
      result: "300% increase in user signups",
      description: "Modern, secure website design that builds trust and converts visitors"
    },
    {
      client: "Real Estate Agency",
      industry: "Real Estate",
      result: "250% more property inquiries",
      description: "Property showcase website with advanced search and filtering capabilities"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-success-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-success-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-neutral-600 mb-8 animate-fade-in-up">
              <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary-600 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-neutral-900">Web Design Services Lagos Nigeria</span>
            </nav>

            {/* Article Header */}
            <article className="animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-2 mb-6">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  Web Design
                </span>
                <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-medium">
                  Lagos
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                Professional Web Design Services in Lagos, Nigeria
              </h1>

              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Discover how professional web design services in Lagos can transform your business. 
                From custom websites to e-commerce solutions, learn why Lagos businesses choose ProWeb Nigeria 
                for their digital presence.
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>ProWeb Nigeria Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>October 18, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>15 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-4 mb-12">
                <span className="text-sm font-medium text-neutral-700">Share:</span>
                <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-neutral-900 mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="block text-sm text-neutral-600 hover:text-primary-600 transition-colors py-1"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <section id="introduction" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Introduction to Web Design in Lagos</h2>
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    Lagos, Nigeria's commercial capital, is experiencing a digital revolution. With over 20 million residents 
                    and thousands of businesses, the demand for professional web design services has never been higher. 
                    Whether you're a startup in Victoria Island, an established business in Ikeja, or an entrepreneur 
                    in Lekki, having a professional website is no longer optional—it's essential.
                  </p>
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    At ProWeb Nigeria, we understand the unique challenges and opportunities that Lagos businesses face. 
                    Our web design services are specifically tailored to help Nigerian businesses succeed in the digital landscape, 
                    combining international best practices with local market insights.
                  </p>
                  
                  {/* Stats */}
                  <div className="grid md:grid-cols-3 gap-6 my-8">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">20M+</div>
                      <div className="text-sm text-primary-700">Lagos Population</div>
                    </div>
                    <div className="bg-gradient-to-br from-success-50 to-success-100 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-bold text-success-600 mb-2">85%</div>
                      <div className="text-sm text-success-700">Mobile Internet Users</div>
                    </div>
                    <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-bold text-accent-600 mb-2">300%</div>
                      <div className="text-sm text-accent-700">E-commerce Growth</div>
                    </div>
                  </div>
                </section>

                {/* Why Professional */}
                <section id="why-professional" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Why Choose Professional Web Design?</h2>
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    In today's competitive Lagos market, your website is often the first impression potential customers 
                    have of your business. A professionally designed website can be the difference between a visitor 
                    becoming a customer or clicking away to a competitor.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">Increased Credibility</h3>
                      <p className="text-neutral-600">
                        Professional design builds trust with Lagos customers who are increasingly discerning about online businesses.
                      </p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-xl flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">Better Performance</h3>
                      <p className="text-neutral-600">
                        Optimized websites load faster, rank higher on Google, and provide better user experience.
                      </p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">Mobile Optimization</h3>
                      <p className="text-neutral-600">
                        With 85% of Lagos internet users on mobile, responsive design is crucial for reaching your audience.
                      </p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-warning-500 to-warning-600 rounded-xl flex items-center justify-center mb-4">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">Competitive Advantage</h3>
                      <p className="text-neutral-600">
                        Stand out in the crowded Lagos market with a website that reflects your brand's professionalism.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Our Services */}
                <section id="our-services" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Web Design Services</h2>
                  <p className="text-neutral-700 mb-8 leading-relaxed">
                    We offer comprehensive web design services tailored to the needs of Lagos businesses. 
                    From small startups to large corporations, we have the expertise to bring your vision to life.
                  </p>

                  <div className="space-y-6">
                    {services.map((service, index) => (
                      <div key={index} className="bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                        <p className="text-neutral-600 mb-4">{service.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-success-500" />
                              <span className="text-sm text-neutral-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Lagos Market */}
                <section id="lagos-market" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Understanding the Lagos Market</h2>
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    Lagos is unique in its diversity, economic dynamism, and digital adoption patterns. 
                    Our web design approach considers these local factors:
                  </p>
                  
                  <div className="bg-gradient-to-br from-primary-50 to-success-50 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">Key Lagos Market Insights</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success-500 mt-0.5" />
                        <span className="text-neutral-700">High mobile usage requires mobile-first design approach</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success-500 mt-0.5" />
                        <span className="text-neutral-700">Trust indicators are crucial for online business success</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success-500 mt-0.5" />
                        <span className="text-neutral-700">Local payment methods integration is essential</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success-500 mt-0.5" />
                        <span className="text-neutral-700">Fast loading times are critical due to network conditions</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Case Studies */}
                <section id="case-studies" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Success Stories from Lagos</h2>
                  <p className="text-neutral-700 mb-8 leading-relaxed">
                    Here are some examples of how our web design services have helped Lagos businesses achieve their goals:
                  </p>

                  <div className="space-y-6">
                    {caseStudies.map((study, index) => (
                      <div key={index} className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-neutral-900">{study.client}</h3>
                            <span className="text-sm text-neutral-500">{study.industry}</span>
                          </div>
                          <div className="bg-gradient-to-r from-success-500 to-success-600 text-white px-4 py-2 rounded-full text-sm font-bold mt-2 md:mt-0">
                            {study.result}
                          </div>
                        </div>
                        <p className="text-neutral-600">{study.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Get Started */}
                <section id="get-started" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Get Started Today</h2>
                  <p className="text-neutral-700 mb-8 leading-relaxed">
                    Ready to transform your Lagos business with professional web design? 
                    Contact ProWeb Nigeria today for a free consultation and quote.
                  </p>

                  <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-success-600 rounded-3xl p-8 text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Start Your Web Design Project</h3>
                    <p className="text-xl mb-8 text-white/90">
                      Get a free consultation and quote for your Lagos business website
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="/contact"
                        className="bg-white text-primary-700 hover:bg-neutral-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                      >
                        <span>Get Free Quote</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                      <a
                        href="tel:+2348100098339"
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section bg-gradient-to-br from-neutral-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Related Articles</h2>
            <p className="text-neutral-600">Explore more insights about web design and digital marketing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-success-600"></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  E-commerce Website Design Trends 2025
                </h3>
                <p className="text-neutral-600 text-sm">Latest trends in e-commerce design for Nigerian businesses</p>
              </div>
            </Link>
            <Link href="/blog" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-success-500 to-accent-600"></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  SEO for Lagos Businesses
                </h3>
                <p className="text-neutral-600 text-sm">How to rank higher on Google for local Lagos searches</p>
              </div>
            </Link>
            <Link href="/blog" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-accent-500 to-warning-600"></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  Mobile App Development Nigeria
                </h3>
                <p className="text-neutral-600 text-sm">Building mobile apps for the Nigerian market</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}