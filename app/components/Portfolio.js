'use client'
import React, { useState } from 'react'
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Code, 
  Globe, 
  ShoppingCart,
  Search,
  Megaphone
} from 'lucide-react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'branding', label: 'Branding' }
  ]

  const projects = [
    {
      id: 1,
      title: "Nigerian Fintech Platform",
      category: "web",
      image: "/api/placeholder/600/400",
      description: "A comprehensive financial technology platform for Nigerian banks and fintech companies.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      results: "300% increase in user engagement, 50% reduction in transaction time",
      link: "#",
      github: "#",
      featured: true
    },
    {
      id: 2,
      title: "Lagos E-commerce Store",
      category: "ecommerce",
      image: "/api/placeholder/600/400",
      description: "Full-featured online store with payment gateway integration and inventory management.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      results: "500% increase in online sales, 80% improvement in checkout conversion",
      link: "#",
      github: "#",
      featured: true
    },

    {
      id: 3,
      title: "Nigerian Food Delivery",
      category: "web",
      image: "/api/placeholder/600/400",
      description: "Food delivery platform connecting local restaurants with customers across Nigeria.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
      results: "200+ restaurant partners, 15,000+ orders processed monthly",
      link: "#",
      github: "#",
      featured: false
    },
    {
      id: 4,
      title: "Church Management System",
      category: "web",
      image: "/api/placeholder/600/400",
      description: "Comprehensive church management platform for member tracking and event management.",
      technologies: ["Angular", "Django", "PostgreSQL", "Docker"],
      results: "100+ churches using the platform, 95% user satisfaction rate",
      link: "#",
      github: "#",
      featured: false
    },
    {
      id: 5,
      title: "NGO Website & Portal",
      category: "web",
      image: "/api/placeholder/600/400",
      description: "Modern website and donor management portal for international NGOs operating in Nigeria.",
      technologies: ["Next.js", "Strapi", "PostgreSQL", "Cloudflare"],
      results: "40% increase in donor contributions, improved transparency reporting",
      link: "#",
      github: "#",
      featured: false
    },
    {
      id: 6,
      title: "Travel Agency Platform",
      category: "web",
      image: "/api/placeholder/600/400",
      description: "Online travel booking platform specializing in Nigerian and African destinations.",
      technologies: ["React", "Express.js", "MongoDB", "Payment Gateway"],
      results: "25,000+ bookings processed, 90% customer satisfaction",
      link: "#",
      github: "#",
      featured: false
    },
    {
      id: 7,
      title: "Healthcare Management System",
      category: "web",
      image: "/api/placeholder/600/400",
      description: "Electronic health records and patient management system for Nigerian hospitals.",
      technologies: ["Vue.js", "Laravel", "MySQL", "HIPAA Compliant"],
      results: "50+ hospitals implemented, improved patient care efficiency",
      link: "#",
      github: "#",
      featured: false
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'web': return Globe
      case 'ecommerce': return ShoppingCart
      case 'branding': return Megaphone
      default: return Code
    }
  }

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            🎨 Our Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Showcasing Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of successful projects that have transformed businesses 
            across Nigeria and Africa. Each project represents our commitment to quality and innovation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      {React.createElement(getCategoryIcon(project.category), { 
                        className: "w-8 h-8 text-gray-700" 
                      })}
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-700 font-medium">
                      🚀 {project.results}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-6 flex items-center justify-center">
                      {React.createElement(getCategoryIcon(selectedProject.category), { 
                        className: "w-16 h-16 text-gray-600" 
                      })}
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Project Description</h4>
                        <p className="text-gray-600">{selectedProject.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results & Impact</h4>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <p className="text-green-700">{selectedProject.results}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Project Links</h4>
                      <div className="space-y-3">
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's create something amazing together. Your project could be our next featured success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
