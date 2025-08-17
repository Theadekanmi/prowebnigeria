import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
