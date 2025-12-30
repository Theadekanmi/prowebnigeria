'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

// Fallback FAQs if API fails
const fallbackFaqs = [
  {
    question: 'How much does a website cost?',
    answer: 'Website costs vary depending on complexity, features, and your specific requirements. We offer packages for basic websites, business websites, and e-commerce platforms. Contact us for a free custom quote tailored to your needs and budget.'
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'A basic website takes 2-3 weeks, business websites 4-6 weeks, and e-commerce platforms 8-12 weeks. Timeline depends on your requirements and content readiness.'
  },
  {
    question: 'Do you provide website maintenance?',
    answer: 'Yes! We offer ongoing maintenance and support packages. All our websites come with free support for the first month, and we have affordable monthly maintenance plans.'
  },
  {
    question: 'Can you help with SEO and digital marketing?',
    answer: 'Absolutely! We provide comprehensive SEO services and digital marketing to help your website rank on Google and attract more customers.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, online payments, and can set up payment plans for larger projects. A 50% deposit is required to start.'
  },
  {
    question: 'Will my website be mobile responsive?',
    answer: 'Yes! All websites we build are fully responsive and work perfectly on all devices - phones, tablets, and desktops.'
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)
  const [faqs, setFaqs] = useState(fallbackFaqs)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFAQs() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api'
        const res = await fetch(`${API_URL}/core/faqs/`, {
          cache: 'no-store',
          headers: { 'Accept': 'application/json' }
        })
        if (res.ok) {
          const data = await res.json()
          console.log('FAQs from API:', data) // Debug log
          if (data && data.length > 0) {
            setFaqs(data)
          }
        }
      } catch (error) {
        console.log('Using fallback FAQs:', error)
      } finally {
        setLoading(false)
      }
    }
    loadFAQs()
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              Frequently Asked{' '}
              <span className="text-purple-600">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {loading ? (
              <div className="text-center py-10">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-600 mx-auto"></div>
              </div>
            ) : (
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openIndex === index && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
