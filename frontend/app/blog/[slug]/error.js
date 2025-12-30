'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-3xl font-bold text-neutral-900 mb-4">Something went wrong</h1>
        <p className="text-neutral-600 mb-8">We couldn't load this article. Please try again.</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 text-neutral-700 font-medium rounded-lg hover:bg-neutral-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
