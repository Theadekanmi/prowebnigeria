'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUp, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '/services' },
      { name: 'E-commerce Solutions', href: '/services' },
      { name: 'SEO & Digital Marketing', href: '/services' },
      { name: 'Maintenance & Support', href: '/services' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Portfolio', href: '/portfolio' },
      { name: 'Blog', href: '/blog' },
      { name: 'Resources', href: '/resources' }
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'WhatsApp Support', href: 'https://wa.me/08100098339' },
      { name: 'Emergency Support', href: 'tel:08100098339' }
    ]
  };

  const officeLocations = [
    {
      city: 'Osogbo',
      address: 'Osogbo, Osun State, Nigeria',
      phone: '08100098339',
      email: 'prowebnigeria@gmail.com'
    },
    {
      city: 'Ibadan',
      address: 'Ibadan, Oyo State, Nigeria',
      phone: '08100098339',
      email: 'prowebnigeria@gmail.com'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                PN
              </div>
              <div className="text-2xl font-bold">
                <span className="text-blue-400">PROWEB</span>
                <br />
                <span className="text-purple-400">NIGERIA</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional web design services helping businesses across the world establish their digital presence with cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/08100098339" className="text-gray-400 hover:text-green-400 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <div className="space-y-3">
              {footerLinks.services.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <div className="space-y-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-semibold mb-8 text-center">Our Office Locations</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {officeLocations.map((office) => (
              <div key={office.city} className="bg-gray-800 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4 text-blue-400">{office.city}</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <a href={`tel:${office.phone}`} className="text-gray-300 hover:text-white transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <a href={`mailto:${office.email}`} className="text-gray-300 hover:text-white transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <h3 className="text-xl font-semibold mb-4">Need Immediate Help?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you with any urgent questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/08100098339"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
            >
              WhatsApp: 08100098339
            </a>
            <a
              href="tel:08100098339"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors"
            >
              Emergency: 08100098339
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ProWeb Nigeria. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
