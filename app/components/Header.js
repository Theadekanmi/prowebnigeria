'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/courses', label: 'Courses' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur border-b border-gray-100 ${
      isScrolled ? 'shadow-sm py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.webp" alt="PROWEB NIGERIA" width={36} height={36} className="object-contain" />
            <span className="hidden sm:inline text-2xl font-bold" style={{ color: '#a353d2' }}>PROWEB NIGERIA</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors font-medium ${
                  pathname === item.href
                    ? 'text-[#a353d2]'
                    : 'text-gray-700 hover:text-[#a353d2]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 text-gray-800`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 transition-colors ${
                  pathname === item.href
                    ? 'text-[#a353d2] font-bold'
                    : 'text-gray-800 hover:text-[#a353d2]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
