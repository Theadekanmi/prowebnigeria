'use client'
import React from 'react'
import { MessageCircle } from 'lucide-react'

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '08100098339'
    const message = 'Hi! I\'m interested in your web design services. Can you help me?'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="
          bg-green-500 hover:bg-green-600 
          text-white p-4 rounded-full 
          shadow-2xl hover:shadow-green-500/50
          transition-all duration-300
          border-2 border-white
          group hover:scale-110 transform
        "
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-70" />
        
        {/* Tooltip */}
        <div className="
          absolute right-full mr-3 top-1/2 transform -translate-y-1/2
          bg-gray-900 text-white px-3 py-2 rounded-lg text-sm
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          whitespace-nowrap
          after:content-[''] after:absolute after:left-full after:top-1/2 
          after:transform after:-translate-y-1/2 after:border-4 
          after:border-transparent after:border-l-gray-900
        ">
          Chat on WhatsApp
        </div>
      </button>
    </div>
  )
}

export default FloatingWhatsApp
