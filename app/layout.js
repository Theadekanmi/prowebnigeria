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
    default: 'ProWeb Nigeria: High-Performance Web Solutions for Ambitious Businesses',
    template: '%s | ProWeb Nigeria',
  },
  description: 'We build high-performance websites that drive measurable growth. See how we delivered a 500% sales increase for a Lagos e-commerce store. Modern tech stack: React, Next.js, Node.js.',
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
    title: 'ProWeb Nigeria: High-Performance Web Solutions for Ambitious Businesses',
    description: 'We build high-performance websites that drive measurable growth. See how we delivered a 500% sales increase for a Lagos e-commerce store.',
    url: 'https://prowebnigeria.ng',
    siteName: 'ProWeb Nigeria',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProWeb Nigeria: High-Performance Web Solutions for Ambitious Businesses',
    description: 'We build high-performance websites that drive measurable growth. See how we delivered a 500% sales increase for a Lagos e-commerce store.',
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
