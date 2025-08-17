import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Blog />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
