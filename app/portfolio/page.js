import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio - ProWeb Nigeria | Client Projects & Case Studies</title>
        <meta name="description" content="Explore our portfolio of web design, e-commerce, and software development projects across Nigeria and Africa." />
        <link rel="canonical" href="https://prowebnigeria.ng/portfolio" />
      </Head>
      <main className="min-h-screen">
        <Header />
        <div className="pt-20">
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Portfolio</h1>
          </div>
          <Portfolio />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
