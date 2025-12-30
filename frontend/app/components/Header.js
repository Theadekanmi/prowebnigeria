'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ]

  const scrolled = mounted ? isScrolled : false

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-neutral-900/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image src="/logo.webp" alt="ProWeb Nigeria" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold">
              <span className="text-purple-600">PROWEB</span>
              <span className={`ml-1 ${scrolled ? 'text-neutral-900' : 'text-white'}`}>NIGERIA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-purple-600 bg-purple-50'
                    : scrolled
                    ? 'text-neutral-700 hover:text-purple-600 hover:bg-neutral-100'
                    : 'text-neutral-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-semibold rounded-lg hover:bg-neutral-800 transition-all"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              scrolled ? 'text-neutral-900 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-200 bg-white absolute left-0 right-0 top-16 shadow-lg">
            <div className="container mx-auto px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-4 mt-2 border-t border-neutral-100">
                <Link
                  href="/contact"
                  className="block w-full py-3 bg-neutral-900 text-white text-sm font-semibold rounded-lg text-center hover:bg-neutral-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
