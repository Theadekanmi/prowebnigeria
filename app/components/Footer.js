'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const currentYear = new Date().getFullYear()

  const services = [
      { name: 'Web Development', href: '/services' },
      { name: 'E-commerce Solutions', href: '/services' },
    { name: 'Mobile Apps', href: '/services' },
    { name: 'SEO Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services' }
  ]

  const company = [
      { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Courses', href: '/courses' },
    { name: 'Pricing', href: '/pricing' }
  ]

  const locations = [
    { name: 'Web Design Lagos', href: '/locations/lagos' },
    { name: 'Web Design Abuja', href: '/locations/abuja' },
    { name: 'Web Design Osogbo', href: '/locations/osogbo' },
    { name: 'Web Design Ibadan', href: '/locations/ibadan' }
  ]

  const resources = [
    { name: 'Resources', href: '/resources' },
      { name: 'Blog', href: '/blog' },
    { name: 'Tech Tips', href: '/resources/tech-tips' },
    { name: 'Tech Reviews', href: '/resources/tech-reviews' },
      { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/prowebnigeria', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/prowebnigeria', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/prowebnigeria', label: 'Twitter' }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
      {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.webp"
                  alt="ProWeb Nigeria"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-transparent bg-clip-text">
                PROWEB NIGERIA
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Professional web design and development services helping businesses establish their digital presence with cutting-edge solutions. Built with React, Next.js, and modern technologies.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a href="tel:08100098339" className="flex items-center space-x-2 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>08100098339</span>
              </a>
              <a href="mailto:prowebnigeria@gmail.com" className="flex items-center space-x-2 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>prowebnigeria@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Lagos & Abuja, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.name}
                </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.name}
                </Link>
                </li>
              ))}
            </ul>
        </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Locations</h3>
            <ul className="space-y-2">
              {locations.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
              target="_blank"
              rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#EC4899] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
      </div>

            <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
              <p>&copy; {currentYear} ProWeb Nigeria. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-[60] w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  )
}
