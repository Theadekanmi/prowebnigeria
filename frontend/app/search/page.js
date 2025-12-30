export const metadata = {
  title: 'Search | Find Web Design Services',
  description: 'Search for web design services, portfolio projects, and resources on ProWeb Nigeria.',
  alternates: {
    canonical: '/search',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Search ProWeb Nigeria
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find web design services, portfolio projects, and helpful resources.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-500">
              Search functionality coming soon. For now, please visit our{' '}
              <a href="/services" className="text-blue-600 hover:underline">
                services page
              </a>{' '}
              or{' '}
              <a href="/portfolio" className="text-blue-600 hover:underline">
                portfolio
              </a>{' '}
              to explore our work.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
