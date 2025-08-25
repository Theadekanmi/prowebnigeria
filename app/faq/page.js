import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Ensure an H1 exists inside FAQ component or add a fallback */}
        <FAQ />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
