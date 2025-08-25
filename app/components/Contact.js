'use client'
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Calendar, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [activeForm, setActiveForm] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use Basin to send email (professional and reliable!)
      const response = await fetch('https://usebasin.com/f/567a5c1e537b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          service: formData.service || 'General inquiry',
          budget: formData.budget || 'Not specified',
          timeline: formData.timeline || 'Not specified',
          message: formData.message
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          service: '',
          budget: '',
          timeline: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick responses via WhatsApp",
      action: "Chat Now",
      color: "from-green-500 to-green-600",
      link: "https://wa.me/2348100098339"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a consultation session",
      action: "Book Now",
      color: "from-blue-500 to-blue-600",
      link: "https://calendly.com/prowebnigeria/30min"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses via email",
      action: "Send Email",
      color: "from-purple-500 to-purple-600",
      link: "mailto:prowebnigeria@gmail.com"
    }
  ];

  const officeLocations = [
    {
      city: "Osogbo",
      address: "Osogbo, Osun State, Nigeria",
      phone: "08100098339",
      email: "prowebnigeria@gmail.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM"
    },
    {
      city: "Ibadan",
      address: "Ibadan, Oyo State, Nigeria",
      phone: "08100098339",
      email: "prowebnigeria@gmail.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? We're here to help! Choose your preferred way to reach us 
            and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((method, index) => (
              <div 
                key={method.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <a
                  href={method.link}
                  target={method.title === "WhatsApp" ? "_blank" : "_self"}
                  rel={method.title === "WhatsApp" ? "noopener noreferrer" : ""}
                  className={`inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${method.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Forms */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Form Tabs */}
              <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-xl">
                {['general', 'quote', 'support'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveForm(tab)}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                      activeForm === tab
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab === 'general' && 'General'}
                    {tab === 'quote' && 'Get Quote'}
                    {tab === 'support' && 'Support'}
                  </button>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {activeForm === 'quote' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="seo">SEO & Marketing</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2-weeks">1-2 weeks</option>
                        <option value="1-month">1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-600/25 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Form Submission Status */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-green-700 font-medium">
                        Message sent successfully! We'll get back to you within 24 hours.
                      </span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <span className="text-red-700 font-medium">
                        Failed to send message. Please try again or contact us directly.
                      </span>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Locations */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {officeLocations.map((office) => (
                    <div key={office.city} className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{office.city}</h4>
                      <div className="space-y-3 text-gray-600">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <a href={`tel:${office.phone}`} className="hover:text-blue-600 transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="hover:text-blue-600 transition-colors">
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="mb-6 opacity-90">
                  Our support team is available 24/7 to assist you with any urgent questions or issues.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp: 08100098339</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>Emergency: 08100098339</span>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    "24/7 Support Available",
                    "Quick Response Times",
                    "Expert Technical Team",
                    "Affordable Solutions",
                    "Quality Guaranteed"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
