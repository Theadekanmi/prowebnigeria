import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - ProWeb Nigeria | Web Design Company in Lagos</title>
        <meta name="description" content="Learn about ProWeb Nigeria, a professional web design and development company serving businesses across Nigeria and beyond." />
        <link rel="canonical" href="https://prowebnigeria.ng/about" />
      </Head>
      <main className="min-h-screen">
        <Header />
        <div className="pt-20">
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">About ProWeb Nigeria</h1>
          </div>
          <About />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
