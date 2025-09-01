// Generate dynamic sitemap.xml using Next.js Metadata Route

export default function sitemap() {
  const baseUrl = 'https://prowebnigeria.ng'

  const now = new Date().toISOString().slice(0, 10)

  const urls = [
    '/',
    '/about',
    '/services',
    '/portfolio',
    '/blog',
    '/contact',
    '/resources',
    '/pricing',
    '/courses',
    '/faq',
    // Resources sub-pages
    '/resources/tech-tips',
    '/resources/tech-reviews',
    // Blog posts
    '/blog/web-design-services-lagos-nigeria',
  ]

  return urls.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: ['/', '/blog', '/portfolio', '/resources'].includes(path)
      ? 'weekly'
      : 'monthly',
    priority: path === '/' ? 1.0 : 0.6,
  }))
}


