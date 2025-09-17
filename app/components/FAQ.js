'use client'
import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What services do you offer for web development?",
      answer: "We offer comprehensive web development services including custom website design, e-commerce solutions, mobile-responsive design, content management systems, API development, and ongoing maintenance. Our expertise covers both frontend and backend development using modern technologies like React, Next.js, Python, Django, and more."
    },
    {
      question: "How long does it take to complete a website project?",
      answer: "Project timelines vary depending on complexity. A simple business website typically takes 2-4 weeks, while complex e-commerce platforms may take 6-12 weeks. We'll provide a detailed timeline during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! We offer comprehensive maintenance packages including security updates, performance optimization, content updates, and 24/7 technical support. Our maintenance plans ensure your website remains secure, fast, and up-to-date with the latest technologies."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is transparent and project-based. Each project is unique, so we provide custom quotes based on your specific requirements, complexity, and scope. We offer flexible payment plans and maintenance packages to suit your budget and project needs."
    },
    {
      question: "Do you work with clients outside of Nigeria?",
      answer: "Absolutely! While we're based in Nigeria, we serve clients globally. We have experience working with international businesses and can accommodate different time zones. Our team is proficient in English and can communicate effectively with clients worldwide."
    },
    {
      question: "What technologies do you use for development?",
      answer: "We use cutting-edge technologies including HTML5, CSS3, JavaScript, React, Next.js, Python, Django, MySQL, PostgreSQL, Supabase, Bootstrap, and Shadcn. We stay updated with the latest industry standards to deliver modern, scalable solutions."
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer: "Yes! We provide comprehensive SEO services including keyword research, on-page optimization, technical SEO, local SEO, and ongoing optimization. We also offer digital marketing services like Google Ads management, social media marketing, and content marketing strategies."
    },
    {
      question: "What happens if I'm not satisfied with the final result?",
      answer: "Your satisfaction is our priority. We offer unlimited revisions during the development process and a 30-day satisfaction guarantee. If you're not completely happy with the final result, we'll work with you to make it right."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we can help you with hosting and domain registration. We recommend reliable hosting providers and can set up and configure everything for you. We also offer managed hosting services where we handle all technical aspects of keeping your website running smoothly."
    },
    {
      question: "How do I get started with my project?",
      answer: "Getting started is easy! Simply contact us through WhatsApp, schedule a consultation call, or send us an email. We'll discuss your project requirements, provide a free quote, and create a customized development plan. We're here to guide you through every step of the process."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            ❓ FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our web design services, 
            development process, and what makes us the best choice for your project.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-2xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <HelpCircle className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </div>
                </button>

                  {openIndex === index && (
                    <div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 rounded-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                We're here to help! Contact us directly for personalized answers and expert guidance on your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/08100098339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors duration-300 shadow-lg"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:prowebnigeria@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
