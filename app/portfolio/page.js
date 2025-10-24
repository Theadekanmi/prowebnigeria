import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Our Portfolio | ProWeb Nigeria - Web Design & Development Projects',
  description: 'View our portfolio of successful web design and development projects. From e-commerce to corporate websites, see how we have helped Nigerian businesses grow online.',
  keywords: ['web design portfolio nigeria', 'prowebnigeria projects', 'website examples lagos', 'web development portfolio']
}

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Lagos E-commerce Store',
      category: 'E-commerce',
      description: 'Complete online store with payment integration and inventory management',
      result: '500% increase in sales',
      image: '/projects/ecommerce.jpg',
      link: '/case-studies'
    },
    {
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Modern corporate website with CMS integration',
      result: '300% more leads',
      image: '/projects/corporate.jpg',
      link: '/case-studies'
    },
    {
      title: 'Healthcare Platform',
      category: 'Web App',
      description: 'Patient management system with appointment booking',
      result: '90% efficiency improvement',
      image: '/projects/healthcare.jpg',
      link: '/case-studies'
    },
    {
      title: 'Restaurant Website',
      category: 'Web Design',
      description: 'Beautiful restaurant website with online ordering',
      result: '200% more orders',
      image: '/projects/restaurant.jpg',
      link: '/case-studies'
    }
  ]

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
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="text-6xl">🚀</div>
                  </div>
                  <div className="p-6">
                    <div className="text-purple-600 text-sm font-semibold mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold mb-4">
                      ✓ {project.result}
                    </div>
                    <Link
                      href={project.link}
                      className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center"
                    >
                      View Case Study
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
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
