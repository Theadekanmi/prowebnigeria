import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
