import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-700 mb-4">By using our website and services, you agree to the following terms.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Services</h2>
        <p className="text-gray-700 mb-4">We provide web design, development, and related services as agreed in proposals.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Payments</h2>
        <p className="text-gray-700 mb-4">Payments are due according to agreed milestones and invoices.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>
        <p className="text-gray-700 mb-4">Email: prowebnigeria@gmail.com · Phone: 08100098339</p>
      </div>
      <Footer />
    </main>
  );
}


