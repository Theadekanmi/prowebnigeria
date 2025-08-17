'use client'
import React from 'react';
import Link from 'next/link';
import { Code, ShoppingCart, TrendingUp, Wrench, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with modern technologies like Next.js, React, and Tailwind CSS. Responsive design that works perfectly on all devices.",
      features: [
        "Custom Website Design",
        "Responsive Development",
        "Modern Tech Stack",
        "Performance Optimized"
      ],
      color: "from-blue-500 to-blue-600",
      link: "/contact"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payment gateways, inventory management, and mobile-optimized shopping experiences.",
      features: [
        "Online Store Setup",
        "Payment Integration",
        "Inventory Management",
        "Mobile Shopping"
      ],
      color: "from-green-500 to-green-600",
      link: "/contact"
    },
    {
      icon: TrendingUp,
      title: "SEO & Digital Marketing",
      description: "Improve your search rankings and drive more traffic to your website with our proven SEO strategies and digital marketing campaigns.",
      features: [
        "Search Engine Optimization",
        "Local SEO",
        "Content Marketing",
        "Analytics & Reporting"
      ],
      color: "from-purple-500 to-purple-600",
      link: "/contact"
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "24/7 website maintenance, security updates, and technical support to keep your website running smoothly and securely.",
      features: [
        "24/7 Support",
        "Security Updates",
        "Performance Monitoring",
        "Backup & Recovery"
      ],
      color: "from-orange-500 to-orange-600",
      link: "/contact"
    }
  ];

  const additionalServices = [
    {
      title: "Website Redesign",
      description: "Transform your existing website with modern design and improved functionality."
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      title: "Content Management",
      description: "Easy-to-use systems to manage your website content without technical knowledge."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive web solutions designed to help your business grow online. 
            From custom development to ongoing support, we've got you covered.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={service.link}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond our core offerings, we provide specialized solutions to meet your unique business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div key={service.title} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-6">
              Ready to get started? Let's discuss your project requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-600/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
