import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy | Data Protection',
  description: 'Privacy policy for ProWeb Nigeria. Learn how we collect, use, and protect your personal information when you use our web design services.',
  alternates: {
    canonical: '/privacy',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">We respect your privacy. This page outlines how we collect, use, and protect your information.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Information We Collect</h2>
        <p className="text-gray-700 mb-4">Contact form submissions (name, email, phone, message) are used to respond to your inquiries.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">We use your information to communicate with you about your project and services.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>
        <p className="text-gray-700 mb-4">Email: prowebnigeria@gmail.com · Phone: 08100098339</p>
      </div>
      <Footer />
    </main>
  );
}


