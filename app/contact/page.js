import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - ProWeb Nigeria | Get in Touch for Web Design & Development</title>
        <meta name="description" content="Contact ProWeb Nigeria for professional web design, development, and digital marketing services. Get a free quote, schedule a consultation, or reach us via WhatsApp, email, or phone. Based in Lagos and Abuja." />
        <meta name="keywords" content="contact web designer nigeria, web design quote nigeria, website development consultation nigeria, contact proweb nigeria, web design company contact lagos, web development quote abuja, nigeria web designer contact, africa web development contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us - ProWeb Nigeria | Get in Touch for Web Design & Development" />
        <meta property="og:description" content="Contact ProWeb Nigeria for professional web design, development, and digital marketing services. Get a free quote, schedule a consultation, or reach us via WhatsApp, email, or phone." />
        <meta property="og:url" content="https://prowebnigeria.ng/contact" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Contact Us - ProWeb Nigeria | Get in Touch for Web Design & Development" />
        <meta name="twitter:description" content="Contact ProWeb Nigeria for professional web design, development, and digital marketing services. Get a free quote, schedule a consultation, or reach us via WhatsApp, email, or phone." />
        
        {/* Canonical */}
        <link rel="canonical" href="https://prowebnigeria.ng/contact" />
      </Head>
      <main className="min-h-screen">
        <Header />
        <div className="pt-20">
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Contact ProWeb Nigeria</h1>
          </div>
          <Contact />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
