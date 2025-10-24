'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'

export default function ContactForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const services = [
    { id: 'web-development', name: 'Web Development', icon: '💻' },
    { id: 'ecommerce', name: 'E-commerce Solutions', icon: '🛒' },
    { id: 'mobile-app', name: 'Mobile App Development', icon: '📱' },
    { id: 'seo', name: 'SEO & Digital Marketing', icon: '📈' },
    { id: 'maintenance', name: 'Website Maintenance', icon: '🔧' },
    { id: 'redesign', name: 'Website Redesign', icon: '🎨' },
    { id: 'other', name: 'Other Services', icon: '✨' }
  ]

  const handleServiceSelect = (serviceId) => {
    setFormData({ ...formData, service: serviceId })
    setStep(2)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    setTimeout(() => {
      setStatus('success')
      setTimeout(() => {
        setFormData({ service: '', name: '', email: '', phone: '', message: '' })
        setStep(1)
        setStatus('')
      }, 3000)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-purple-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              {step > 1 ? <Check className="w-5 h-5" /> : '1'}
            </div>
            <span className="font-medium hidden sm:block">Choose Service</span>
          </div>
          <div className={`w-16 h-1 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-purple-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              2
            </div>
            <span className="font-medium hidden sm:block">Your Details</span>
          </div>
        </div>
      </div>

      {/* Step 1: Service Selection */}
      {step === 1 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">What service are you interested in?</h3>
          <p className="text-gray-600 mb-8 text-center">Select one to get started</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceSelect(service.id)}
                className="flex items-center space-x-4 p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-600 hover:shadow-lg transition-all duration-300 text-left group"
              >
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {service.name}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 ml-auto" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Contact Details */}
      {step === 2 && (
        <div>
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Tell us about yourself</h3>
            <p className="text-gray-600">We will get back to you as soon as possible</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="+234 800 000 0000"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 inline-flex items-center justify-center"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                ✓ Thank you! Your message has been sent successfully. We will get back to you soon.
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  )
}
