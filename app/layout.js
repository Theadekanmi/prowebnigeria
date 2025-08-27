import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ProWeb Nigeria - Professional Web Design & Development Company',
  description: 'Nigeria\'s leading web design company offering professional website development, e-commerce solutions, mobile apps, SEO services, and digital marketing. Based in Lagos and Abuja.',
  keywords: [
    'web design nigeria',
    'website designer nigeria', 
    'web development lagos',
    'web design company lagos',
    'ecommerce development nigeria',
    'mobile app development nigeria',
    'SEO services nigeria',
    'digital marketing nigeria',
    'website development abuja',
    'web design company abuja',
    'nigeria web designer',
    'africa web development',
    'lagos web design',
    'abuja web design',
    'nigeria ecommerce',
    'nigeria mobile apps',
    'nigeria seo company',
    'nigeria digital marketing'
  ],
  authors: [{ name: 'Website Designer Nigeria' }],
  creator: 'Website Designer Nigeria',
  publisher: 'Website Designer Nigeria',
  metadataBase: new URL('https://prowebnigeria.ng'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'fr-FR': '/fr',
    },
  },
  openGraph: {
    title: 'ProWeb Nigeria - Professional Web Design & Development Company',
    description: 'Nigeria\'s leading web design company offering professional website development, e-commerce solutions, mobile apps, SEO services, and digital marketing. Based in Lagos and Abuja.',
    url: 'https://prowebnigeria.ng',
    siteName: 'Website Designer Nigeria',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProWeb Nigeria - Professional Web Design & Development Company',
    description: 'Nigeria\'s leading web design company offering professional website development, e-commerce solutions, mobile apps, SEO services, and digital marketing.',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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
              "description": "Nigeria's leading web design company offering professional website development, e-commerce solutions, mobile apps, SEO services, and digital marketing.",
              "url": "https://prowebnigeria.ng",
              "telephone": "08100098339",
              "email": "prowebnigeria@gmail.com",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Bing Webmaster Tools Verification */}
        <meta name="msvalidate.01" content="2C29CA8949449057E7C9E452457058C1" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="7KH4o_a3Nl5DSZOu4hUD_mE4fwcKQhs2xxPRBArwl-0" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
