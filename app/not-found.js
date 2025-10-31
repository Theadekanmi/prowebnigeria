'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="text-center">
        <p className="text-base font-semibold text-purple-600">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700">Go back home</Link>
          <Link href="/contact" className="text-sm font-semibold text-gray-900">Contact support →</Link>
        </div>
      </div>
    </main>
  )
}


