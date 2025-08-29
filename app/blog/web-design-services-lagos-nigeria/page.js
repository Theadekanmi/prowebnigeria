import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Web Design Services in Lagos, Nigeria - ProWeb Nigeria</title>
        <meta name="description" content="Professional web design services in Lagos, Nigeria. Get custom websites, e-commerce solutions, and SEO services from Nigeria's leading web design company." />
        <meta name="keywords" content="web design lagos, website designer lagos, web development lagos, web design company lagos, nigeria web design, lagos web designer" />
        <link rel="canonical" href="https://prowebnigeria.ng/blog/web-design-services-lagos-nigeria" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Web Design Services in Lagos, Nigeria - ProWeb Nigeria" />
        <meta property="og:description" content="Professional web design services in Lagos, Nigeria. Get custom websites, e-commerce solutions, and SEO services from Nigeria's leading web design company." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://prowebnigeria.ng/blog/web-design-services-lagos-nigeria" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content="Web Design Services in Lagos, Nigeria - ProWeb Nigeria" />
        <meta name="twitter:description" content="Professional web design services in Lagos, Nigeria. Get custom websites, e-commerce solutions, and SEO services." />
        
        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "Web Design Services in Lagos, Nigeria - ProWeb Nigeria",
              "description": "Professional web design services in Lagos, Nigeria. Get custom websites, e-commerce solutions, and SEO services from Nigeria's leading web design company.",
              "author": {
                "@type": "Organization",
                "name": "ProWeb Nigeria"
              },
              "publisher": {
                "@type": "Organization",
                "name": "ProWeb Nigeria",
                "url": "https://prowebnigeria.ng"
              },
              "datePublished": "2025-01-27",
              "dateModified": "2025-01-27",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://prowebnigeria.ng/blog/web-design-services-lagos-nigeria"
              },
              "image": "https://prowebnigeria.ng/flyers1.jpg",
              "url": "https://prowebnigeria.ng/blog/web-design-services-lagos-nigeria"
            })
          }}
        />
      </Head>
      
      <main className="min-h-screen">
        <Header />
        <div className="pt-20">
          <article className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Web Design Services in Lagos, Nigeria
              </h1>
              <div className="flex items-center text-gray-600 mb-6">
                <span className="mr-4">📅 January 27, 2025</span>
                <span className="mr-4">📍 Lagos, Nigeria</span>
                <span>🏢 ProWeb Nigeria</span>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Discover why Lagos businesses choose ProWeb Nigeria for professional web design, development, and digital solutions. 
                Get insights into our services, pricing, and what makes us the leading web design company in Nigeria.
              </p>
            </header>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src="/flyers1.jpg"
                alt="ProWeb Nigeria - Professional Web Design Services in Lagos"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Choose ProWeb Nigeria for Your Web Design Needs?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                In today's digital age, having a professional website is crucial for business success. 
                Whether you're a startup in Victoria Island, an established company in Ikeja, or a growing business in Lekki, 
                your online presence can make or break your success in the competitive Lagos market.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At ProWeb Nigeria, we understand the unique challenges and opportunities that Nigerian businesses face. 
                Our team of experienced web designers and developers creates custom solutions that not only look great 
                but also drive real business results.
              </p>
            </section>

            {/* Services Section */}
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Our Web Design Services in Lagos
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">🚀 Custom Website Design</h3>
                  <p className="text-gray-700">
                    Professional, responsive websites tailored to your brand and business goals. 
                    From corporate websites to personal portfolios, we create stunning designs that convert visitors to customers.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">🛒 E-commerce Solutions</h3>
                  <p className="text-gray-700">
                    Complete online stores with secure payment gateways, inventory management, and mobile optimization. 
                    Perfect for Lagos businesses looking to sell online.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">📱 Mobile App Development</h3>
                  <p className="text-gray-700">
                    Native and cross-platform mobile applications for iOS and Android. 
                    Reach your customers wherever they are in Lagos and beyond.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-900 mb-3">🔍 SEO & Digital Marketing</h3>
                  <p className="text-gray-700">
                    Search engine optimization and digital marketing services to help your website rank higher 
                    and attract more customers from Lagos and Nigeria.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Lagos Businesses Choose Us */}
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Why Lagos Businesses Choose ProWeb Nigeria
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🇳🇬</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Local Expertise</h3>
                    <p className="text-gray-700">
                      We understand the Lagos business environment, local competition, and what drives Nigerian customers to make purchasing decisions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-3">💼</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Proven Track Record</h3>
                    <p className="text-gray-700">
                      Over 100+ successful projects completed for businesses across Lagos, Abuja, and other Nigerian cities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🔄</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Ongoing Support</h3>
                    <p className="text-gray-700">
                      We don't just build websites; we provide ongoing maintenance, updates, and support to ensure your online success.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-3">💰</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Competitive Pricing</h3>
                    <p className="text-gray-700">
                      Professional web design services at prices that work for Lagos businesses of all sizes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Web Design Pricing in Lagos, Nigeria
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg text-gray-700 mb-4">
                  Our pricing is transparent and designed to work for Lagos businesses:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Basic Website:</strong> ₦200,000 - ₦350,000 (5-10 pages)</li>
                  <li>• <strong>Business Website:</strong> ₦400,000 - ₦800,000 (10-20 pages + features)</li>
                  <li>• <strong>E-commerce Website:</strong> ₦600,000 - ₦1,200,000 (full online store)</li>
                  <li>• <strong>Custom Web Application:</strong> ₦800,000+ (complex business solutions)</li>
                </ul>
                <p className="text-gray-600 mt-4 text-sm">
                  *Prices include hosting setup, basic SEO, and 3 months of support. Contact us for a custom quote.
                </p>
              </div>
            </section>

            {/* Process Section */}
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Our Web Design Process in Lagos
              </h2>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Discovery</h3>
                  <p className="text-sm text-gray-600">Understanding your business goals and requirements</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Design</h3>
                  <p className="text-sm text-gray-600">Creating wireframes and visual designs</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
                  <p className="text-sm text-gray-600">Building your website with modern technologies</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-blue-600">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Launch</h3>
                  <p className="text-sm text-gray-600">Testing, deployment, and ongoing support</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Join hundreds of Lagos businesses that trust ProWeb Nigeria with their online presence.
              </p>
              <div className="space-x-4">
                <a
                  href="/contact"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Quote
                </a>
                <a
                  href="https://calendly.com/prowebnigeria/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Schedule Call
                </a>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg">
                  <details className="group">
                    <summary className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50">
                      <span className="font-semibold text-gray-900">How long does it take to build a website?</span>
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-4 pt-0 text-gray-700">
                      Most websites take 2-4 weeks to complete, depending on complexity and content readiness. 
                      E-commerce sites typically take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.
                    </div>
                  </details>
                </div>
                
                <div className="border border-gray-200 rounded-lg">
                  <details className="group">
                    <summary className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50">
                      <span className="font-semibold text-gray-900">Do you provide hosting and domain services?</span>
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-4 pt-0 text-gray-700">
                      Yes! We can help you purchase and set up domain names, hosting, and SSL certificates. 
                      We also offer ongoing hosting management and support services.
                    </div>
                  </details>
                </div>
                
                <div className="border border-gray-200 rounded-lg">
                  <details className="group">
                    <summary className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50">
                      <span className="font-semibold text-gray-900">What if I need changes after the website is live?</span>
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-4 pt-0 text-gray-700">
                      We offer ongoing maintenance packages that include updates, content changes, and technical support. 
                      We also provide training so you can make simple updates yourself.
                    </div>
                  </details>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Conclusion
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Choosing the right web design company in Lagos is crucial for your business success. 
                At ProWeb Nigeria, we combine local expertise with international standards to deliver websites 
                that not only look great but also drive real business results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're looking for a simple business website or a complex e-commerce solution, 
                our team has the experience and expertise to bring your vision to life. 
                Contact us today to discuss your project and get a free consultation.
              </p>
            </section>

            {/* Author Bio */}
            <section className="border-t pt-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  PN
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">About ProWeb Nigeria</h3>
                  <p className="text-gray-600">
                    ProWeb Nigeria is Lagos's leading web design and development company, 
                    helping businesses across Nigeria establish a strong online presence. 
                    With over 100+ successful projects, we're committed to delivering 
                    high-quality websites that drive business growth.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
