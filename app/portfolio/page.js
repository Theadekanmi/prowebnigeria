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
        <Portfolio />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
