'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Play, Star } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Professional Web Design",
    "E-commerce Solutions", 
    "SEO & Digital Marketing",
    "24/7 Support & Maintenance"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const stats = [
    { number: "22+", label: "Happy Clients", icon: Star },
    { number: "20+", label: "Projects Completed", icon: Play },
    { number: "4", label: "Years Experience", icon: Star },
    { number: "24/7", label: "Support Available", icon: Star }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden" style={{ paddingTop: '180px' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              We Create
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {texts[currentText]}
              </span>
              That Drive Results
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Award-winning web design company helping businesses across the globe establish their digital presence with cutting-edge solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-600/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://the-adekanmi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <span>View Director Portfolio</span>
              <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Company Flyers Showcase */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Our Company Overview
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <img
                    src="/flyers1.jpg"
                    alt="ProWeb Nigeria Company Flyer - Digital Services"
                    className="w-full h-64 object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Digital Services Overview
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Professional web design, e-commerce solutions, and digital marketing services
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <img
                    src="/flyers2.jpg"
                    alt="ProWeb Nigeria Company Flyer - Technology Stack"
                    className="w-full h-64 object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Technology & Innovation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Modern tech stack, mobile-responsive design, and cutting-edge solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-4">Trusted by businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-gray-400 font-semibold">🌍 Global Reach</div>
              <div className="text-gray-400 font-semibold">🌐 International Clients</div>
              <div className="text-gray-400 font-semibold">🚀 Worldwide Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
