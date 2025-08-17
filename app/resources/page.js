import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Resources from '../components/Resources';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Resources />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
