import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'

export async function generateMetadata({ searchParams }) {
  const currentPage = Math.max(1, parseInt(searchParams?.page || '1', 10) || 1)

  return {
    title: 'Web Design Portfolio Nigeria | Website Projects & Case Studies',
    description: 'View our portfolio of successful web design and development projects. From e-commerce to corporate websites, see how we have helped Nigerian businesses grow online.',
    keywords: ['web design portfolio nigeria', 'prowebnigeria projects', 'website examples lagos', 'web development portfolio'],
    alternates: {
      canonical: '/portfolio',
    },
    robots: currentPage === 1 ? {
      index: true,
      follow: true,
    } : {
      index: false,
      follow: true,
    }
  }
}

export default function PortfolioPage({ searchParams }) {
  const projects = [
    // New projects to appear first
    {
      title: 'UK E‑commerce Store',
      category: 'E‑commerce',
      description: 'Modern online store with secure payments and inventory synchronization for smooth operations.',
      result: '300% increase in monthly sales within 3 months',
      image: '/funmitan.png',
      link: '',
      caseStudy: '/case-studies'
    },
    {
      title: 'Hitech',
      category: 'Construction',
      description: 'Infrastructure and civil works showcase with service pages, project highlights, and lead-capture CTAs.',
      result: '800% increase in monthly sales within 3 months',
      image: '/Hitech.png',
      link: '',
      caseStudy: '/case-studies'
    },
    {
      title: 'Kata‑Kara',
      category: 'Freelancing',
      description: 'A modern freelance marketplace connecting buyers and service providers with streamlined search and secure workflows.',
      result: '170% increase in monthly sales within 3 months',
      image: '/kata-kara.png',
      link: '',
      caseStudy: '/case-studies'
    },
    {
      title: 'OMNI‑FOOD WEB‑APP',
      category: 'Hospitality',
      description: 'Responsive food delivery experience with intuitive ordering, reservations, and optimized checkout.',
      result: '400% increase in monthly sales within 3 months',
      image: '/Omnifood.jpg',
      link: '',
      caseStudy: '/case-studies'
    },
    {
      title: 'SUPER‑JARA WEB‑APP',
      category: 'Utilities & Payments',
      description: 'Airtime/data top‑ups, bill payments, and digital services—fast, reliable, and affordable.',
      result: '200% increase in monthly sales within 3 months',
      image: '/Super-jara.jpg',
      link: '',
      caseStudy: '/case-studies'
    },
    {
      title: 'METAL‑SCRAP WEB‑APP',
      category: 'Metal Scrap',
      description: 'Smart recycling platform that connects users with scrap buyers and nearby collection centers using AI matching.',
      result: '100% increase in monthly sales within 3 months',
      image: '/Metascrap.jpg',
      link: '',
      caseStudy: '/case-studies'
    },
    {
      title: 'Lagos E-commerce Store',
      category: 'E-commerce',
      description: 'Complete online store with payment integration and inventory management',
      result: '500% increase in sales',
      image: '/logo.webp',
      link: '/case-studies',
      caseStudy: '/case-studies'
    },
    {
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Modern corporate website with CMS integration',
      result: '300% more leads',
      image: '/logo.webp',
      link: '/case-studies',
      caseStudy: '/case-studies'
    },
    {
      title: 'Healthcare Platform',
      category: 'Web App',
      description: 'Patient management system with appointment booking',
      result: '90% efficiency improvement',
      image: '/logo.webp',
      link: '/case-studies',
      caseStudy: '/case-studies'
    },
    {
      title: 'Restaurant Website',
      category: 'Web Design',
      description: 'Beautiful restaurant website with online ordering',
      result: '200% more orders',
      image: '/logo.webp',
      link: '/case-studies',
      caseStudy: '/case-studies'
    }
  ]

  // Pagination (server-side via searchParams)
  const pageSize = 6
  const currentPage = Math.max(1, parseInt(searchParams?.page || '1', 10) || 1)
  const totalPages = Math.max(1, Math.ceil(projects.length / pageSize))
  const startIndex = (currentPage - 1) * pageSize
  const pagedProjects = projects.slice(startIndex, startIndex + pageSize)

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Explore our successful projects and see how we've helped businesses across Nigeria achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pagedProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative h-64 bg-neutral-100">
                    <Image src={project.image || '/logo.webp'} alt={project.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <div className="text-purple-600 text-sm font-semibold mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold mb-4">
                      ✓ {project.result}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {/* Visit Website */}
                      {project.link && project.link.startsWith('http') ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center"
                        >
                          Visit Website
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      ) : null}
                      {/* Case Study */}
                      {project.caseStudy ? (
                        <Link
                          href={project.caseStudy}
                          className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center"
                        >
                          View Case Study
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-10 flex items-center justify-center gap-2">
              {currentPage > 1 && (
                <Link
                  href={`/portfolio?page=${currentPage - 1}`}
                  className="px-4 py-2 rounded-md border text-sm font-semibold hover:bg-gray-50"
                >
                  Previous
                </Link>
              )}
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1
                const isActive = pageNum === currentPage
                return (
                  <Link
                    key={pageNum}
                    href={`/portfolio?page=${pageNum}`}
                    className={`px-4 py-2 rounded-md border text-sm font-semibold ${
                      isActive ? 'bg-purple-600 text-white border-purple-600' : 'hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </Link>
                )
              })}
              {currentPage < totalPages && (
                <Link
                  href={`/portfolio?page=${currentPage + 1}`}
                  className="px-4 py-2 rounded-md border text-sm font-semibold hover:bg-gray-50"
                >
                  Next
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create something amazing together. Get your free consultation today.
            </p>
            <Link
              href="/contact"
              className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
      </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
