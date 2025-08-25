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
