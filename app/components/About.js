'use client'
import React from 'react';
import { Award, Users, Target, Zap, CheckCircle, Globe } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, number: "22+", label: "Happy Clients" },
    { icon: Users, number: "20+", label: "Projects Completed" },
    { icon: Target, number: "4", label: "Years Experience" },
    { icon: Zap, number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Quality First",
      description: "We never compromise on quality. Every project is crafted with attention to detail and best practices."
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your success is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations."
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "We stay ahead of the curve with the latest technologies and trends to give your business a competitive edge."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across the world with localized solutions and international standards."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate team of web designers and developers dedicated to helping businesses 
              establish their digital presence and achieve online success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Story */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2024, we started with a simple mission: to help businesses thrive in the digital world. 
                  What began as a small team has grown into a trusted partner for companies across the globe.
                </p>
                <p>
                  We believe that every business deserves a professional, high-performing website that not only looks great 
                  but also drives real results. Our approach combines cutting-edge technology with proven design principles 
                  to create digital experiences that convert visitors into customers.
                </p>
                <p>
                  Today, we're proud to have helped over 20 businesses establish their online presence and achieve their 
                  digital goals. Our commitment to excellence and customer satisfaction remains at the heart of everything we do.
                </p>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.label}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive growth, 
                enhance customer engagement, and establish a strong online presence in the digital marketplace.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading digital transformation partner for businesses across Africa, 
                known for innovation, quality, and exceptional customer service.
              </p>
            </div>
          </div>

          {/* Company Flyers Showcase */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Company Overview
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive range of digital services and technology expertise
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <img
                    src="/flyers1.jpg"
                    alt="ProWeb Nigeria - Digital Services & Web Development"
                    className="w-full h-80 object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Complete Digital Solutions
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      From concept to launch, we provide end-to-end web development services including 
                      responsive design, e-commerce platforms, and digital marketing solutions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <img
                    src="/flyers2.jpg"
                    alt="ProWeb Nigeria - Technology Stack & Innovation"
                    className="w-full h-80 object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Cutting-Edge Technology
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      We leverage the latest technologies and frameworks to create fast, secure, 
                      and scalable web applications that give your business a competitive edge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20 pt-12 border-t border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Work Together?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing that will help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-600/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="https://wa.me/08100098339"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
