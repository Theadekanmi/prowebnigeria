import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
