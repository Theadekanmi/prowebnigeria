import { Suspense } from 'react'
import HomeClient from './components/HomeClient'

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
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white">Loading...</p>
      </div>
    </div>
  )
}
