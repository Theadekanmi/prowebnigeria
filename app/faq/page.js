import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ - ProWeb Nigeria | Questions & Answers</title>
        <meta name="description" content="Find answers to frequently asked questions about our web design, development, and SEO services." />
        <link rel="canonical" href="https://prowebnigeria.ng/faq" />
      </Head>
      <main className="min-h-screen">
        <Header />
        <div className="pt-20">
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
          </div>
          {/* Ensure an H1 exists inside FAQ component or add a fallback */}
          <FAQ />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
