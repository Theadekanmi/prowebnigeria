import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function PortfolioPage() {
  return (
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
  );
}
