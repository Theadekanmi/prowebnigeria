import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Case Studies | ProWeb Nigeria Success Stories',
  description: 'Read our case studies and success stories. See how we helped Nigerian businesses achieve 500% growth with our web development services.',
  keywords: ['case studies nigeria', 'web development success stories', 'ecommerce growth lagos', 'website results nigeria']
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Lagos E-commerce Store: 500% Sales Increase',
      client: 'Fashion Retail Store, Lagos',
      challenge: 'Low online sales and poor website performance',
      solution: 'Built modern e-commerce platform with payment integration',
      results: ['500% increase in online sales', '300% more website traffic', '90% faster page load times', '24/7 online ordering'],
      category: 'E-commerce'
    },
    {
      title: 'Corporate Website Redesign: 300% More Leads',
      client: 'Professional Services Company, Abuja',
      challenge: 'Outdated website not generating leads',
      solution: 'Modern responsive website with lead generation forms',
      results: ['300% increase in leads', '200% more contact form submissions', 'Improved brand perception', 'Mobile responsive design'],
      category: 'Web Development'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Success{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Real results from real businesses. See how we have helped Nigerian companies grow online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-purple-600 text-sm font-semibold mb-2">{study.category}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h2>
                <div className="mb-4">
                  <span className="text-gray-600 font-semibold">Client: </span>
                  <span className="text-gray-700">{study.client}</span>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                  <p className="text-gray-600">{study.solution}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Results:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-2 bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded-lg">
                        <TrendingUp className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready for Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let us help you achieve similar results for your business.
            </p>
            <Link
              href="/contact"
              className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center"
            >
              Get Free Consultation
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
