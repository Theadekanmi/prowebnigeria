import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services - Web Design & Development | ProWeb Nigeria</title>
        <meta name="description" content="Professional web design, development, e-commerce, and SEO services tailored for Nigerian businesses." />
        <link rel="canonical" href="https://prowebnigeria.ng/services" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does a website cost in Nigeria?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Typical small business websites start from ₦200,000 depending on pages, features (e.g., e-commerce, SEO), and timelines. We provide transparent quotes after a short call."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to build a website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most projects take 1–3 weeks for corporate sites and 3–6 weeks for e‑commerce, depending on content readiness and approvals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide SEO and ongoing support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Every build includes basic on‑page SEO (speed, mobile, metadata). We also offer monthly SEO, content, and maintenance plans."
                  }
                }
              ]
            })
          }}
        />
      </Head>
      <main className="min-h-screen">
        <Header />
        <div className="pt-20">
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Web Design & Development Services</h1>
          </div>
          <Services />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
