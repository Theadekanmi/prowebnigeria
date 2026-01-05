import './globals.css'
import { Inter } from 'next/font/google'
import AOSProvider from './components/AOSProvider'
import CookieConsent from './components/CookieConsent'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata = {
  title: {
    default: 'Web Design Company Nigeria | Top Website Designer Lagos & Abuja',
    template: '%s | ProWeb Nigeria',
  },
  description: 'Top web design company in Nigeria. Fast, mobile-friendly websites that drive sales. 500% growth case study. Serving Lagos, Abuja & nationwide.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ProWeb Nigeria',
  },
  formatDetection: {
    telephone: true,
  },
  keywords: [
    'web design nigeria',
    'website designer nigeria', 
    'web development nigeria',
    'web design company nigeria',
    'ecommerce development nigeria',
    'mobile app development nigeria',
    'SEO services nigeria',
    'digital marketing nigeria',
    'website development nigeria',
    'nigeria web designer',
    'nigeria web development',
    'africa web development',
    'africa web design',
    'west africa web development',
    'lagos web design',
    'abuja web design',
    'osogbo web design',
    'osun web design',
    'ibadan web design',
    'oyo web design',
    'nigeria ecommerce',
    'nigeria mobile apps',
    'nigeria seo company',
    'nigeria digital marketing',
    'web design lagos',
    'web design abuja',
    'web design osogbo',
    'web design ibadan',
    'website designer lagos',
    'website designer abuja',
    'website designer osogbo',
    'website designer ibadan',
    'web development lagos',
    'web development abuja',
    'web development osogbo',
    'web development ibadan',
    'custom website nigeria',
    'responsive web design nigeria',
    'professional web design nigeria',
    'affordable web design nigeria'
  ],
  authors: [{ name: 'ProWeb Nigeria' }],
  creator: 'ProWeb Nigeria',
  publisher: 'ProWeb Nigeria',
  metadataBase: new URL('https://prowebnigeria.ng'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://prowebnigeria.ng',
    siteName: 'ProWeb Nigeria',
    title: 'Web Design Company Nigeria | Top Website Designer Lagos & Abuja',
    description: 'Top web design company in Nigeria. Fast, mobile-friendly websites that drive sales. 500% growth case study. Serving Lagos, Abuja & nationwide.',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'ProWeb Nigeria - Web Design Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company Nigeria | Top Website Designer Lagos & Abuja',
    description: 'Top web design company in Nigeria. We build fast, mobile-friendly websites that drive sales.',
    images: ['/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Note: Add your actual verification codes from Google Search Console and Bing Webmaster Tools
  // verification: {
  //   google: 'YOUR_ACTUAL_GOOGLE_CODE',
  //   bing: 'YOUR_ACTUAL_BING_CODE',
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* PWA */}
        <meta name="application-name" content="ProWeb Nigeria" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ProWeb Nigeria" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#9333ea" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/logo.webp" as="image" />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://prowebnaija.pythonanywhere.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://prowebnaija.pythonanywhere.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ProWeb Nigeria",
              "image": "https://prowebnigeria.ng/logo.webp",
              "@id": "https://prowebnigeria.ng",
              "url": "https://prowebnigeria.ng",
              "telephone": "08100098339",
              "email": "prowebnigeria@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Otta Road, Ijora Olopa",
                "addressLocality": "Lagos",
                "addressRegion": "Lagos State",
                "postalCode": "",
                "addressCountry": "NG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.5244,
                "longitude": 3.3792
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/prowebnigeria",
                "https://www.twitter.com/prowebnigeria"
              ],
              "priceRange": "$$"
            }),
          }}
        />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ProWeb Nigeria",
              "url": "https://prowebnigeria.ng",
              "logo": "https://prowebnigeria.ng/logo.webp",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+234-810-009-8339",
                "contactType": "customer service",
                "areaServed": "NG",
                "availableLanguage": ["en"]
              },
              "sameAs": [
                "https://www.facebook.com/prowebnigeria",
                "https://www.twitter.com/prowebnigeria"
              ]
            }),
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ProWeb Nigeria",
              "url": "https://prowebnigeria.ng",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://prowebnigeria.ng/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        
        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Web Design and Development",
              "provider": {
                "@type": "LocalBusiness",
                "name": "ProWeb Nigeria",
                "url": "https://prowebnigeria.ng",
                "telephone": "08100098339",
                "email": "prowebnigeria@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Otta Road, Ijora Olopa",
                  "addressLocality": "Lagos",
                  "addressRegion": "Lagos State",
                  "addressCountry": "NG"
                }
              },
              "areaServed": [
                { "@type": "Country", "name": "Nigeria" },
                { "@type": "State", "name": "Lagos State" },
                { "@type": "State", "name": "FCT" },
                { "@type": "State", "name": "Osun State" },
                { "@type": "State", "name": "Oyo State" }
              ],
              "description": "We offer high-performance web design, e-commerce solutions, mobile app development, and digital marketing services across Nigeria. Specializing in React, Next.js, and Node.js.",
              "url": "https://prowebnigeria.ng/services",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "ProWeb Nigeria Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Web Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO & Digital Marketing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Maintenance"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body className="font-inter antialiased">
        <AOSProvider>
          {children}
          <CookieConsent />
        </AOSProvider>
      </body>
    </html>
  )
}
