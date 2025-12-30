'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Cookie } from 'lucide-react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
    // Enable analytics, marketing cookies etc.
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      })
    }
  }

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
    // Only essential cookies
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      })
    }
  }

  const closeBanner = () => {
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div 
        className="max-w-4xl mx-auto bg-white rounded-2xl border border-neutral-200 p-6 md:p-8"
        style={{ boxShadow: '0 -4px 30px rgba(0,0,0,0.15)' }}
      >
        <button 
          onClick={closeBanner}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4 text-neutral-600" />
        </button>

        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Cookie className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">We Value Your Privacy</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              By clicking &quot;Accept All&quot;, you consent to our use of cookies. You can also choose to accept only essential cookies.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <Link 
            href="/privacy" 
            className="text-purple-600 text-sm font-medium hover:underline"
          >
            Read our Privacy Policy
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={acceptEssential}
              className="px-6 py-3 border border-neutral-300 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors text-sm"
            >
              Essential Only
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
