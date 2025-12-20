import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, CheckCircle, Code2, ShoppingCart, Search, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Web Design Company in Abuja | Best Website Designer Abuja FCT',
  description: 'Leading web design company in Abuja. Professional websites that convert visitors to customers. Fast, secure, mobile-optimized. Free consultation. Serving Maitama, Wuse, Garki & all Abuja.',
  keywords: [
    'web design abuja',
    'website designer abuja',
    'web development abuja',
    'web design company abuja',
    'ecommerce development abuja',
    'SEO services abuja',
    'digital marketing abuja',
    'website development abuja',
    'abuja web designer',
    'abuja web development',
    'custom website abuja',
    'responsive web design abuja'
  ],
  openGraph: {
    title: 'Web Design Company in Abuja | Best Website Designer Abuja FCT',
    description: 'Leading web design company in Abuja. Professional websites that convert visitors to customers. Fast, secure, mobile-optimized. Free consultation.',
    url: 'https://prowebnigeria.ng/locations/abuja',
  },
  alternates: {
    canonical: '/locations/abuja',
  },
}

export default function AbujaPage() {
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
        "name": "Web Design Abuja",
        "item": "https://prowebnigeria.ng/locations/abuja"
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
        "name": "How much does a website cost in Abuja?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website costs in Abuja vary based on your needs. A simple business website starts from ₦150,000, while e-commerce sites range from ₦300,000-₦800,000. We provide transparent pricing with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve businesses in Maitama, Wuse, and Garki?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We serve businesses across all Abuja areas including Maitama, Wuse, Garki, Asokoro, Utako, Jabi, Gwarinpa, Kubwa, Nyanya, Karu, Lugbe, and Apo. We work remotely and can meet in person when needed."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Abuja websites are completed in 2-4 weeks. Simple sites can launch in 1-2 weeks, while complex e-commerce platforms may take 4-6 weeks. We provide weekly updates so you're always in the loop."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website rank on Google?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All our websites are SEO-optimized from day one. We include proper meta tags, fast loading speeds, mobile optimization, and structured data to help you rank for 'web design company in Abuja' and related keywords."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We offer 24/7 support, regular security updates, performance monitoring, and content updates."
        }
      }
    ]
  }

  const services = [
    {
      icon: Code2,
      title: 'Custom Web Development Abuja',
      description: 'Professional websites built with React, Next.js, and modern technologies for Abuja businesses'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions Abuja',
      description: 'Complete online stores that convert visitors into customers for Abuja retailers'
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing Abuja',
      description: 'Boost your Abuja business online visibility and drive targeted traffic'
    },
    {
      icon: TrendingUp,
      title: 'Website Maintenance Abuja',
      description: '24/7 support, security updates, and performance monitoring for Abuja websites'
    }
  ]

  const areas = [
    'Garki', 'Wuse', 'Maitama', 'Asokoro', 'Utako', 'Jabi', 
    'Gwarinpa', 'Kubwa', 'Nyanya', 'Karu', 'Lugbe', 'Apo'
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
              📍 Serving Abuja, Nigeria
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Web Design Company in Abuja | Best Website Designer Abuja FCT
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              As a leading <strong>website designer in Abuja</strong>, we help businesses across the Federal Capital Territory 
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
              Web Development Services in Abuja
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive web solutions for Abuja businesses, from startups to established enterprises
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Web Experiences for Abuja Audiences</h2>
            <p className="mb-6">
              Abuja customers expect professionalism and clarity. We craft clean, credible websites that communicate value in seconds,
              load quickly on mobile, and make it effortless to call, WhatsApp, or submit an enquiry. From Maitama and Asokoro to Jabi,
              Gwarinpa and Wuse, our builds reflect the high standards Abuja businesses operate with.
            </p>
            <p className="mb-6">
              We pay attention to the small things that move the needle: consistent branding, clear pricing tables, service pages that
              answer real objections, and structured data that helps Google understand your offer. We’ll also set up analytics so you
              can measure leads by channel and double down on what works.
            </p>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Areas We Serve in Abuja
            </h2>
            <p className="text-xl text-gray-600">
              Providing web design services across Abuja FCT
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
                Why Abuja Businesses Choose ProWeb Nigeria
              </h2>
              <p className="text-xl text-gray-600">
                We understand the unique needs of Abuja businesses and deliver results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Professional Standards</h3>
                <p className="text-gray-600">Clean, credible websites that reflect Abuja's high business standards.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fast & Secure</h3>
                <p className="text-gray-600">SSL certificates, fast hosting, and regular security updates included.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">SEO Optimized</h3>
                <p className="text-gray-600">Rank higher on Google for "web design Abuja" and related searches.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden fees. Clear quotes with honest timelines and budgets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions About Web Design in Abuja
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">How much does a website cost in Abuja?</h3>
                <p className="text-gray-700">
                  Website costs in Abuja vary based on your needs. A simple business website starts from ₦150,000, 
                  while e-commerce sites range from ₦300,000-₦800,000. We provide transparent pricing with no hidden fees. 
                  <Link href="/pricing" className="text-purple-600 font-semibold ml-1">View our pricing →</Link>
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Do you serve businesses in Maitama, Wuse, and Garki?</h3>
                <p className="text-gray-700">
                  Yes! We serve businesses across all Abuja areas including Maitama, Wuse, Garki, Asokoro, Utako, Jabi, 
                  Gwarinpa, Kubwa, Nyanya, Karu, Lugbe, and Apo. We work remotely and can meet in person when needed.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">How long does it take to build a website?</h3>
                <p className="text-gray-700">
                  Most Abuja websites are completed in 2-4 weeks. Simple sites can launch in 1-2 weeks, while complex 
                  e-commerce platforms may take 4-6 weeks. We provide weekly updates so you're always in the loop.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Will my website rank on Google?</h3>
                <p className="text-gray-700">
                  Yes! All our websites are SEO-optimized from day one. We include proper meta tags, fast loading speeds, 
                  mobile optimization, and structured data to help you rank for "web design company in Abuja" and related keywords.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Do you provide ongoing support?</h3>
                <p className="text-gray-700">
                  Absolutely! We offer 24/7 support, regular security updates, performance monitoring, and content updates. 
                  <Link href="/services" className="text-purple-600 font-semibold ml-1">Learn more about our maintenance services →</Link>
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
              Ready to Start Your Abuja Web Project?
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
