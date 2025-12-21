import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, CheckCircle, Code2, ShoppingCart, Search, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Web Design Lagos | Top Website Designer Lagos Nigeria',
  description: 'Top web design company in Lagos. Fast, mobile-friendly websites that drive sales. Free quote. Serving Victoria Island, Lekki, Ikoyi & all Lagos.',
  keywords: [
    'web design lagos',
    'website designer lagos',
    'web development lagos',
    'web design company lagos',
    'ecommerce development lagos',
    'SEO services lagos',
    'digital marketing lagos',
    'website development lagos',
    'lagos web designer',
    'lagos web development',
    'custom website lagos',
    'responsive web design lagos'
  ],
  openGraph: {
    title: 'Web Design Lagos | Top Website Designer Lagos Nigeria',
    description: 'Top-rated web design company in Lagos. We build fast, mobile-friendly websites that drive sales. 500% growth case study. Free quote.',
    url: 'https://prowebnigeria.ng/locations/lagos',
  },
  alternates: {
    canonical: '/locations/lagos',
  },
}

export default function LagosPage() {
  // Breadcrumb Structured Data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://prowebnigeria.ng"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Web Design Lagos",
        "item": "https://prowebnigeria.ng/locations/lagos"
      }
    ]
  }

  // FAQ Structured Data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a website cost in Lagos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website costs in Lagos vary based on your needs. A simple business website starts from ₦150,000, while e-commerce sites range from ₦300,000-₦800,000. We provide transparent pricing with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Lagos websites are completed in 2-4 weeks. Simple sites can launch in 1-2 weeks, while complex e-commerce platforms may take 4-6 weeks. We provide weekly updates so you're always in the loop."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve businesses outside Victoria Island and Lekki?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We serve businesses across all Lagos areas including Surulere, Yaba, Ikeja, Lagos Island, Apapa, Mushin, Oshodi, Agege, and Alaba. We work remotely and can meet in person when needed."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website work on mobile phones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! All our websites are mobile-responsive and optimized for smartphones. Since most Lagos users browse on mobile, we design mobile-first to ensure fast loading and great user experience."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide SEO services for Lagos businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer comprehensive SEO services to help your Lagos business rank higher on Google. This includes keyword research, on-page optimization, local SEO for Lagos, and content strategy."
        }
      }
    ]
  }

  const services = [
    {
      icon: Code2,
      title: 'Custom Web Development Lagos',
      description: 'Professional websites built with React, Next.js, and modern technologies for Lagos businesses'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions Lagos',
      description: 'Complete online stores that convert visitors into customers for Lagos retailers'
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing Lagos',
      description: 'Boost your Lagos business online visibility and drive targeted traffic'
    },
    {
      icon: TrendingUp,
      title: 'Website Maintenance Lagos',
      description: '24/7 support, security updates, and performance monitoring for Lagos websites'
    }
  ]

  const areas = [
    'Victoria Island', 'Ikoyi', 'Lekki', 'Surulere', 'Yaba', 'Ikeja', 
    'Lagos Island', 'Apapa', 'Mushin', 'Oshodi', 'Agege', 'Alaba'
  ]

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
              📍 Serving Lagos, Nigeria
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Web Design Company in Lagos | Top Website Designer Lagos Nigeria
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              As a leading <strong>website designer in Lagos</strong>, we help businesses across Lagos State 
              establish their digital presence with cutting-edge web solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Web Development Services in Lagos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive web solutions for Lagos businesses, from startups to established enterprises
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local expertise copy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Built for Lagos Businesses</h2>
            <p className="mb-6">
              Lagos moves fast—and your website should too. We design for the reality of Lagos traffic (both road and internet):
              fast-loading pages on mobile networks, clear calls-to-action, and forms that don’t frustrate users. Whether you’re
              serving Victoria Island, Lekki, Ikoyi, Surulere, Yaba or Ikeja, we build experiences that feel trustworthy, modern
              and easy to use.
            </p>
            <p className="mb-6">
              We focus on outcomes: more qualified enquiries for service businesses, more checkouts for e‑commerce, and better
              analytics so you can see what’s working. Our Lagos clients value straight talk—no fluff, just a practical plan,
              weekly updates, and a clean launch.
            </p>
            <p className="mb-6">
              If you already have a website, we can audit speed, SEO, and conversion, then fix what matters most. If you’re just
              starting, we’ll help with content, images, and a simple process that respects your time.
            </p>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Areas We Serve in Lagos
            </h2>
            <p className="text-xl text-gray-600">
              Providing web design services across Lagos State
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg text-center">
                <MapPin className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <span className="font-semibold text-gray-800">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Lagos Businesses Choose ProWeb Nigeria
              </h2>
              <p className="text-xl text-gray-600">
                We understand the unique needs of Lagos businesses and deliver results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fast Loading Websites</h3>
                <p className="text-gray-600">Optimized for Lagos mobile networks. Pages load in under 2 seconds.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Mobile-First Design</h3>
                <p className="text-gray-600">80% of Lagos users browse on mobile. We design for mobile first.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">SEO Optimized</h3>
                <p className="text-gray-600">Rank higher on Google for "web design Lagos" and related searches.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-gray-600">Need help at 8pm? We answer calls and WhatsApp messages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Structured Data */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions About Web Design in Lagos
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">How much does a website cost in Lagos?</h3>
                <p className="text-gray-700">
                  Website costs in Lagos vary based on your needs. A simple business website starts from ₦150,000, 
                  while e-commerce sites range from ₦300,000-₦800,000. We provide transparent pricing with no hidden fees. 
                  <Link href="/pricing" className="text-purple-600 font-semibold ml-1">View our pricing →</Link>
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">How long does it take to build a website?</h3>
                <p className="text-gray-700">
                  Most Lagos websites are completed in 2-4 weeks. Simple sites can launch in 1-2 weeks, while complex 
                  e-commerce platforms may take 4-6 weeks. We provide weekly updates so you're always in the loop.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Do you serve businesses outside Victoria Island and Lekki?</h3>
                <p className="text-gray-700">
                  Yes! We serve businesses across all Lagos areas including Surulere, Yaba, Ikeja, Lagos Island, Apapa, 
                  Mushin, Oshodi, Agege, and Alaba. We work remotely and can meet in person when needed.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Will my website work on mobile phones?</h3>
                <p className="text-gray-700">
                  Absolutely! All our websites are mobile-responsive and optimized for smartphones. Since most Lagos users 
                  browse on mobile, we design mobile-first to ensure fast loading and great user experience.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Do you provide SEO services for Lagos businesses?</h3>
                <p className="text-gray-700">
                  Yes! We offer comprehensive SEO services to help your Lagos business rank higher on Google. This includes 
                  keyword research, on-page optimization, local SEO for Lagos, and content strategy. 
                  <Link href="/services" className="text-purple-600 font-semibold ml-1">Learn more about our SEO services →</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Start Your Lagos Web Project?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Phone className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">08100098339</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">prowebnigeria@gmail.com</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-600">Mon-Fri: 8AM-6PM</p>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
