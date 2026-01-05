import { Suspense } from 'react'
import ServicesClient from './ServicesClient'

// Server-side metadata for SEO
export const metadata = {
  title: 'Web Design Services Nigeria | E-commerce, SEO, Digital Marketing | ProWeb',
  description: 'Professional web design services in Nigeria. Custom websites from ₦250,000, e-commerce from ₦400,000, SEO services, digital marketing. Lagos, Abuja & nationwide.',
  keywords: [
    'web design services nigeria',
    'website development nigeria',
    'ecommerce website nigeria',
    'seo services nigeria',
    'digital marketing nigeria',
    'web design lagos',
    'web design abuja',
    'website maintenance nigeria',
    'custom website nigeria',
    'affordable web design nigeria'
  ],
  alternates: {
    canonical: 'https://prowebnigeria.ng/services',
  },
  openGraph: {
    title: 'Web Design Services Nigeria | ProWeb Nigeria',
    description: 'Professional web design services in Nigeria. Custom websites, e-commerce, SEO, digital marketing.',
    url: 'https://prowebnigeria.ng/services',
    type: 'website',
  },
}

// Services data for schema
const services = [
  { 
    name: 'Custom Website Development', 
    description: 'High-performance websites built with React, Next.js and modern technologies',
    price: '₦250,000',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First', 'Analytics Setup']
  },
  { 
    name: 'E-commerce Store', 
    description: 'Complete online stores with Paystack and Flutterwave payment integration',
    price: '₦400,000',
    features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Customer Dashboard']
  },
  { 
    name: 'SEO Services', 
    description: 'Boost your Google rankings and drive organic traffic to your business',
    price: '₦150,000/month',
    features: ['Keyword Research', 'On-Page SEO', 'Content Strategy', 'Monthly Reports']
  },
  { 
    name: 'Website Maintenance', 
    description: 'Keep your website secure, fast and up-to-date',
    price: '₦70,000/month',
    features: ['Security Updates', 'Performance Monitoring', 'Backup & Recovery', 'Content Updates']
  },
  { 
    name: 'Digital Marketing', 
    description: 'Grow your business with targeted social media and Google Ads campaigns',
    price: 'Custom Quote',
    features: ['Social Media Ads', 'Google Ads', 'Email Marketing', 'Analytics']
  },
  { 
    name: 'Mobile App Development', 
    description: 'iOS and Android apps for your business',
    price: 'Custom Quote',
    features: ['Cross-Platform', 'Push Notifications', 'Offline Support', 'App Store Submission']
  }
]

// Generate Service Schema
function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "ProWeb Nigeria",
          "url": "https://prowebnigeria.ng"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Nigeria"
        },
        "offers": {
          "@type": "Offer",
          "price": service.price.replace(/[₦,]/g, '').split('/')[0],
          "priceCurrency": "NGN"
        }
      }
    }))
  }
}

// Generate Breadcrumb Schema
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://prowebnigeria.ng/services"
      }
    ]
  }
}

export default function ServicesPage() {
  return (
    <>
      {/* Service Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema())
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
        <h1>Web Design Services Nigeria - ProWeb Nigeria</h1>
        <p>Professional web design and development services for Nigerian businesses. We offer custom websites, e-commerce solutions, SEO services, and digital marketing.</p>
        
        <h2>Our Services</h2>
        {services.map((service, i) => (
          <div key={i}>
            <h3>{service.name} - {service.price}</h3>
            <p>{service.description}</p>
            <ul>
              {service.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
          </div>
        ))}
        
        <h2>Serving Businesses Across Nigeria</h2>
        <p>Web design Lagos, Web design Abuja, Web design Ibadan, Web design Osogbo, Web design Port Harcourt</p>
      </div>
      
      {/* Client-side interactive content */}
      <Suspense fallback={<ServicesLoading />}>
        <ServicesClient initialServices={services} />
      </Suspense>
    </>
  )
}

function ServicesLoading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-neutral-500">Loading services...</p>
      </div>
    </div>
  )
}
