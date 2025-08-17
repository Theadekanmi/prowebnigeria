import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen">
              <Header />
        <Hero />
        <TechStack />
        <Footer />
        <FloatingWhatsApp />
    </main>
  );
}
