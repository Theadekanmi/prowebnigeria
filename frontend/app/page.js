import { Suspense } from 'react'
import HomeClient from './components/HomeClient'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

// Server-side metadata for SEO
export const metadata = {
  title: 'Web Design Company Nigeria | Top Website Designer Lagos & Abuja | ProWeb',
  description: 'Top web design company in Nigeria. Fast, mobile-friendly websites that drive sales. 500% growth case study. Serving Lagos, Abuja & nationwide. Get free quote!',
  keywords: 'web design nigeria, website designer lagos, web development abuja, ecommerce website nigeria, SEO services nigeria',
  alternates: {
    canonical: 'https://prowebnigeria.ng',
  },
  openGraph: {
    title: 'Web Design Company Nigeria | Top Website Designer Lagos & Abuja',
    description: 'Top web design company in Nigeria. Fast, mobile-friendly websites that drive sales. 500% growth case study.',
    url: 'https://prowebnigeria.ng',
    type: 'website',
  },
}

// FAQ data for schema
const faqs = [
  { 
    question: 'How much does a website cost in Nigeria?', 
    answer: 'Custom websites start from ₦250,000, e-commerce from ₦400,000. Contact us for a free quote tailored to your needs.' 
  },
  { 
    question: 'How long does it take to build a website?', 
    answer: 'Basic websites take 2-3 weeks, business websites 4-6 weeks, and e-commerce platforms 6-10 weeks.' 
  },
  { 
    question: 'Do you provide website maintenance?', 
    answer: 'Yes! We offer maintenance packages starting from ₦70,000/month including security updates and support.' 
  },
  { 
    question: 'Will my website be mobile responsive?', 
    answer: 'Absolutely! All our websites are mobile-first and work perfectly on all devices.' 
  },
  {
    question: 'Do you offer SEO services?',
    answer: 'Yes, we provide comprehensive SEO services including keyword research, on-page optimization, and content strategy to help your website rank higher on Google.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, Paystack, and Flutterwave payments. We offer flexible payment plans for larger projects.'
  }
]

// Generate FAQ Schema
function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Generate BreadcrumbList Schema
function generateBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://prowebnigeria.ng"
      }
    ]
  }
}

export default function Home() {
  return (
    <>
      {/* FAQ Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema())
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema())
        }}
      />
      
      {/* Server-rendered content for SEO */}
      <div className="sr-only">
        <h1>ProWeb Nigeria - Top Web Design Company in Lagos, Abuja & Nigeria</h1>
        <p>Professional web design and development services for Nigerian businesses. We build fast, SEO-optimized, mobile-friendly websites that convert visitors into customers.</p>
        <h2>Our Web Design Services</h2>
        <ul>
          <li>Custom Website Development - React, Next.js, modern technologies</li>
          <li>E-commerce Solutions - Paystack, Flutterwave payment integration</li>
          <li>SEO Services - Rank higher on Google Nigeria</li>
          <li>Digital Marketing - Social media, Google Ads</li>
          <li>Website Maintenance - Security updates, support</li>
        </ul>
        <h2>Serving Businesses Across Nigeria</h2>
        <p>Web design Lagos, Web design Abuja, Web design Ibadan, Web design Osogbo, Web design Port Harcourt</p>
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, i) => (
          <div key={i}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      
      {/* Client-side interactive content */}
      <Suspense fallback={<HomeLoading />}>
        <HomeClient initialFaqs={faqs} />
      </Suspense>
    </>
  )
}

function HomeLoading() {
  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Server-rendered hero skeleton for fast Speed Index */}
      <div className="pt-20 md:pt-24">
        <div className="container mx-auto px-4">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Nigeria&apos;s Top-Rated Web Design Company
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                We Build Websites That
                <span className="block mt-2 text-purple-400">Grow Nigerian Businesses</span>
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
                Professional web design for businesses in Lagos, Abuja, and across Nigeria. 
                Fast, SEO-optimized websites that convert visitors into customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 font-semibold rounded-xl hover:bg-neutral-100 transition-all">
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  <Play className="w-5 h-5" /> View Our Work
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">22+</div>
                  <div className="text-sm text-neutral-400">Happy Clients</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">20+</div>
                  <div className="text-sm text-neutral-400">Projects Delivered</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">4+</div>
                  <div className="text-sm text-neutral-400">Years Experience</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-neutral-400">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
