import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog - ProWeb Nigeria | Web Design & Development Insights</title>
        <meta name="description" content="Stay updated with the latest trends in web design, digital marketing, and technology. Expert insights from ProWeb Nigeria team to help your business grow." />
        <meta name="keywords" content="web design blog nigeria, web development tips nigeria, digital marketing blog africa, seo tips nigeria, ecommerce blog nigeria, web design trends africa" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog - ProWeb Nigeria | Web Design & Development Insights" />
        <meta property="og:description" content="Stay updated with the latest trends in web design, digital marketing, and technology. Expert insights from ProWeb Nigeria team to help your business grow." />
        <meta property="og:url" content="https://prowebnigeria.ng/blog" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Blog - ProWeb Nigeria | Web Design & Development Insights" />
        <meta name="twitter:description" content="Stay updated with the latest trends in web design, digital marketing, and technology. Expert insights from ProWeb Nigeria team to help your business grow." />
        
        {/* Canonical */}
        <link rel="canonical" href="https://prowebnigeria.ng/blog" />
      </Head>
      <main className="min-h-screen">
        <Header />
        <div className="pt-20">
          <Blog />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
