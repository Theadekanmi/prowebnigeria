'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '08100098339'
    const message = 'Hi! I\'m interested in your web design services. Can you help me?'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="
          bg-green-500 hover:bg-green-600 
          text-white p-4 rounded-full 
          shadow-2xl hover:shadow-green-500/50
          transition-all duration-300
          border-2 border-white
          group
        "
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
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
      </motion.button>
    </motion.div>
  )
}

export default FloatingWhatsApp
