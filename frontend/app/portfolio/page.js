'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react'

const allProjects = [
  { title: 'UK E-commerce Store', category: 'E-commerce', description: 'Modern online store with secure payments and inventory synchronization.', result: '300% increase in monthly sales', image: '/funmitan.png', technologies: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'], client: 'Fashion Retailer UK', year: '2024' },
  { title: 'Hitech Construction', category: 'Construction', description: 'Infrastructure showcase with service pages and lead-capture CTAs.', result: '800% increase in leads', image: '/Hitech.png', technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'], client: 'Hitech Construction', year: '2024' },
  { title: 'Kata-Kara', category: 'Marketplace', description: 'Freelance marketplace connecting buyers and service providers.', result: '170% user growth', image: '/kata-kara.png', technologies: ['React', 'Node.js', 'MongoDB', 'Paystack'], client: 'Kata-Kara Platform', year: '2024' },
  { title: 'Omnifood', category: 'Food & Delivery', description: 'Food delivery app with intuitive ordering and reservations.', result: '400% increase in orders', image: '/Omnifood.jpg', technologies: ['HTML', 'CSS', 'JavaScript'], client: 'Omnifood', year: '2023' },
  { title: 'Super-Jara', category: 'Fintech', description: 'Airtime, data top-ups, and bill payments platform.', result: '200% transaction growth', image: '/Super-jara.jpg', technologies: ['React', 'Node.js', 'Paystack API'], client: 'Super Jara', year: '2023' },
  { title: 'MetaScrap', category: 'Recycling', description: 'Smart recycling platform with AI-powered matching.', result: '100% efficiency improvement', image: '/Metascrap.jpg', technologies: ['React', 'Python', 'AI/ML', 'Google Maps'], client: 'MetaScrap', year: '2023' },
]

const ITEMS_PER_PAGE = 6

export default function PortfolioPage() {
  const [projects] = useState(allProjects)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...new Set(allProjects.map(p => p.category))]

  useEffect(() => {
    setLoading(false)
  }, [])

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  useEffect(() => { setCurrentPage(1) }, [activeCategory])

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Portfolio</span>
            </h1>
            <p className="text-xl text-neutral-600">Real projects, real results. See how we have helped businesses grow online.</p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-neutral-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat ? 'bg-purple-600 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-600 mx-auto"></div>
            </div>
          ) : currentProjects.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="group bg-white rounded-2xl overflow-hidden cursor-pointer border border-neutral-200 hover:border-purple-300 transition-all duration-300"
                    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                    onClick={() => setSelectedProject(project)}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                      <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                          <Eye className="w-6 h-6 text-neutral-900" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-purple-600 font-medium mb-1">{project.category}</p>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">{project.title}</h3>
                      <p className="text-sm text-neutral-500 line-clamp-2">{project.description}</p>
                      {project.result && (
                        <div className="mt-3 pt-3 border-t border-neutral-100">
                          <p className="text-sm text-green-600 font-medium">{project.result}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="p-2 rounded-lg border border-neutral-200 hover:bg-white disabled:opacity-50"><ChevronLeft className="w-5 h-5" /></button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === i + 1 ? 'bg-purple-600 text-white' : 'border border-neutral-200 bg-white hover:bg-neutral-50'}`}>{i + 1}</button>
                  ))}
                  <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="p-2 rounded-lg border border-neutral-200 hover:bg-white disabled:opacity-50"><ChevronRight className="w-5 h-5" /></button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20"><p className="text-neutral-500">No projects found.</p></div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-purple-100 mb-8">Let us discuss how we can help your business grow online.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">
              Get Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setSelectedProject(null)}>
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl" style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200"><X className="w-5 h-5" /></button>
            <div className="relative aspect-video bg-neutral-100">
              <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-purple-600 text-sm font-medium mb-2">{selectedProject.category}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{selectedProject.title}</h2>
              <p className="text-neutral-600 mb-6">{selectedProject.description}</p>
              {selectedProject.result && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-700 font-medium">Result: {selectedProject.result}</p>
                </div>
              )}
              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {selectedProject.client && <div><h4 className="text-sm font-semibold text-neutral-500 uppercase mb-1">Client</h4><p className="text-neutral-900">{selectedProject.client}</p></div>}
                {selectedProject.year && <div><h4 className="text-sm font-semibold text-neutral-500 uppercase mb-1">Year</h4><p className="text-neutral-900">{selectedProject.year}</p></div>}
              </div>
              <Link href="/contact" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors">Start Similar Project</Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
