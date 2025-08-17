'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Chief Adebayo Okechukwu",
      company: "Nigerian Business Trust",
      role: "CEO",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Website Designer Nigeria transformed our business completely. Our online sales increased by 300% in just 3 months, and the customer experience is now world-class. Their team is professional, responsive, and truly understands the Nigerian market.",
      video: "#",
      industry: "Financial Services",
      project: "E-commerce Platform",
      results: "300% increase in sales"
    },
    {
      id: 2,
      name: "Dr. Sarah Okonkwo",
      company: "Lagos Medical Center",
      role: "Medical Director",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The healthcare management system they built for us has revolutionized how we handle patient records. It's intuitive, secure, and has improved our efficiency by 60%. The support team is always available when we need help.",
      video: "#",
      industry: "Healthcare",
      project: "Patient Management System",
      results: "60% efficiency improvement"
    },
    {
      id: 3,
      name: "Pastor Michael Chukwudi",
      company: "Grace Church International",
      role: "Senior Pastor",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Our church website and member portal have brought our community closer together. The online giving feature has increased our donations by 40%, and members can now easily access resources and event information.",
      video: "#",
      industry: "Religious Organization",
      project: "Church Website & Portal",
      results: "40% increase in donations"
    },
    {
      id: 4,
      name: "Mrs. Grace Adebayo",
      company: "Abuja Real Estate",
      role: "Managing Director",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The mobile app they developed for our real estate business has been a game-changer. We've processed over 10,000 property viewings through the app, and our agents are much more productive. Highly recommended!",
      video: "#",
      industry: "Real Estate",
      project: "Mobile App Development",
      results: "10,000+ property viewings"
    },
    {
      id: 5,
      name: "Mr. David Okonkwo",
      company: "Nigerian Food Express",
      role: "Founder",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Our food delivery platform has connected us with over 200 restaurants and we're processing 15,000 orders monthly. The system is robust, user-friendly, and has helped us become the leading food delivery service in Lagos.",
      video: "#",
      industry: "Food & Beverage",
      project: "Food Delivery Platform",
      results: "15,000 orders monthly"
    },
    {
      id: 6,
      name: "Ms. Fatima Hassan",
      company: "African NGO Network",
      role: "Program Director",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The donor management portal they created has significantly improved our transparency and donor engagement. We've seen a 40% increase in contributions and our reporting is now much more efficient and accurate.",
      video: "#",
      industry: "Non-Profit",
      project: "Donor Management Portal",
      results: "40% increase in contributions"
    }
  ]

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "1000+", label: "Projects Completed" }
  ]

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            💬 Client Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients across Nigeria and Africa 
            have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonials */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Testimonial Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Column - Testimonial Content */}
                  <div>
                    <div className="mb-6">
                      <Quote className="w-12 h-12 text-blue-500 mb-4" />
                      <p className="text-xl text-gray-700 leading-relaxed mb-6">
                        "{testimonials[currentTestimonial].text}"
                      </p>
                      
                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          {testimonials[currentTestimonial].rating}.0 out of 5
                        </span>
                      </div>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-blue-600 font-medium">
                          {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Project Details */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                    <h5 className="font-semibold text-gray-900 mb-4">Project Details</h5>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-600">Industry:</span>
                        <p className="font-medium text-gray-900">{testimonials[currentTestimonial].industry}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Project:</span>
                        <p className="font-medium text-gray-900">{testimonials[currentTestimonial].project}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Results:</span>
                        <p className="font-medium text-green-600">{testimonials[currentTestimonial].results}</p>
                      </div>
                    </div>
                    
                    {/* Video Button */}
                    <button className="mt-6 w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Video Testimonial
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Auto-play Controls */}
          <div className="flex justify-center mt-6">
            <button
              onClick={toggleAutoPlay}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isPlaying
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              <Play className={`w-4 h-4 ${isPlaying ? 'hidden' : ''}`} />
              <span>{isPlaying ? 'Stop Auto-play' : 'Start Auto-play'}</span>
            </button>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            More Success Stories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{testimonial.results}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Ready to transform your business? Let's create your success story together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View More Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
