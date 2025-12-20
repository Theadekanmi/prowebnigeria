import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  variable: '--font-poppins'
})

export const metadata = {
  title: {
    default: 'Web Design Company Nigeria | Top Website Designer Lagos & Abuja',
    template: '%s | ProWeb Nigeria',
  },
  description: 'Top web design company in Nigeria. We build fast, mobile-friendly websites that drive sales. See our 500% growth case study. Serving Lagos, Abuja & nationwide. Free quote.',
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
  // Removed hreflang alternates for non-existent locales to avoid duplicate/canonical confusion
  openGraph: {
    title: 'Web Design Company Nigeria | Top Website Designer Lagos & Abuja',
    description: 'Top web design company in Nigeria. We build fast, mobile-friendly websites that drive sales. See our 500% growth case study. Serving Lagos, Abuja & nationwide. Free quote.',
    url: 'https://prowebnigeria.ng',
    siteName: 'ProWeb Nigeria',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company Nigeria | Top Website Designer Lagos & Abuja',
    description: 'Top web design company in Nigeria. We build fast, mobile-friendly websites that drive sales. See our 500% growth case study. Free quote.',
    creator: '@prowebnigeria',
    site: '@prowebnigeria',
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
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/logo.webp" as="image" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Emergency styling fallback: Tailwind CDN to ensure styles render in production */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://the-adekanmi.vercel.app" />
        
        {/* Favicon and app icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-32x32.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ProWeb Nigeria",
              "description": "High-Performance Web Solutions for Ambitious Businesses. We build custom websites using modern tech stack (React, Next.js, Node.js) that deliver measurable business results.",
              "url": "https://prowebnigeria.ng",
              "telephone": "08100098339",
              "email": "prowebnigeria@gmail.com",
              "sameAs": [
                "https://www.facebook.com/prowebnigeria",
                "https://www.instagram.com/prowebnigeria",
                "https://x.com/prowebnigeria"
              ],
              "address": [
                {
                "@type": "PostalAddress",
                  "streetAddress": "Otta Road, Ijora Olopa",
                  "addressLocality": "Lagos",
                  "addressRegion": "Lagos State",
                "addressCountry": "NG"
              },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Jabi, Gwarinpa",
                  "addressLocality": "Abuja",
                  "addressRegion": "FCT",
                  "addressCountry": "NG"
                }
              ],
              "geo": [
                {
                "@type": "GeoCoordinates",
                  "latitude": 6.5244,
                  "longitude": 3.3792
                },
                {
                  "@type": "GeoCoordinates",
                  "latitude": 9.0820,
                  "longitude": 8.6753
                }
              ],
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-16:00"
              ],
              "areaServed": [
                { "@type": "Country", "name": "Nigeria" },
                { "@type": "Country", "name": "Ghana" },
                { "@type": "Country", "name": "Kenya" },
                { "@type": "Country", "name": "South Africa" }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              }
            }),
          }}
        />
        
        {/* Organization Logo structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ProWeb Nigeria",
              "url": "https://prowebnigeria.ng",
              "logo": "https://prowebnigeria.ng/logo.webp",
              "sameAs": [
                "https://www.facebook.com/prowebnigeria",
                "https://www.instagram.com/prowebnigeria",
                "https://x.com/prowebnigeria"
              ]
            })
          }}
        />

        {/* WebSite structured data with SearchAction */}
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
                "target": "https://prowebnigeria.ng/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Service Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Web Design and Development",
              "provider": {
                "@type": "LocalBusiness",
                "name": "ProWeb Nigeria"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Lagos",
                  "@id": "https://www.wikidata.org/wiki/Q43433"
                },
                {
                  "@type": "City",
                  "name": "Abuja",
                  "@id": "https://www.wikidata.org/wiki/Q3787"
                },
                {
                  "@type": "City",
                  "name": "Osogbo",
                  "@id": "https://www.wikidata.org/wiki/Q1014720"
                },
                {
                  "@type": "City",
                  "name": "Ibadan",
                  "@id": "https://www.wikidata.org/wiki/Q376398"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Web Development",
                      "description": "High-performance websites built with React, Next.js, and modern technologies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Solutions",
                      "description": "Complete online stores that convert visitors into customers"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO & Digital Marketing",
                      "description": "Boost your online visibility and drive targeted traffic"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Additional meta tags for Nigeria/Africa targeting */}
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Lagos, Abuja, Nigeria" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />
        
        {/* Language and region targeting */}
        <meta name="language" content="English" />
        <meta name="country" content="Nigeria" />
        <meta name="region" content="West Africa" />
        
        {/* Business specific meta tags */}
        <meta name="business:contact:phone" content="08100098339" />
        <meta name="business:contact:email" content="prowebnigeria@gmail.com" />
        <meta name="business:contact:address" content="Lagos & Abuja, Nigeria" />
        <meta name="business:contact:website" content="https://prowebnigeria.ng" />
        
        {/* Performance and security meta tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Bing Webmaster Tools Verification */}
        <meta name="msvalidate.01" content="2C29CA8949449057E7C9E452457058C1" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="7KH4o_a3Nl5DSZOu4hUD_mE4fwcKQhs2xxPRBArwl-0" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
