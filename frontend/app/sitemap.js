const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://prowebnaija.pythonanywhere.com/api'

// Static blog posts (hardcoded pages in /app/blog/)
const STATIC_BLOG_SLUGS = [
  'top-10-best-web-designers-nigeria-2025',
  'complete-seo-guide-nigerian-businesses-2025',
  'website-cost-nigeria-2025-pricing-guide',
  'how-to-choose-web-designer-nigeria',
  'wordpress-vs-custom-website-nigeria',
  'best-payment-gateways-nigeria',
  'web-design-trends-2025',
  'digital-marketing-nigerian-smes',
  'best-ecommerce-platforms-nigeria-2025',
  'web-design-services-lagos-nigeria',
  'why-nigerian-business-needs-professional-website',
]

async function getBlogSlugsFromAPI() {
  try {
    const res = await fetch(`${API_URL}/blog/posts/?page_size=100`, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const data = await res.json()
    const posts = data?.results || data || []
    return posts.map(post => post.slug).filter(Boolean)
  } catch {
    return []
  }
}

async function getPortfolioSlugs() {
  try {
    const res = await fetch(`${API_URL}/portfolio/projects/?page_size=100`, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const data = await res.json()
    const projects = data?.results || data || []
    return projects.map(project => project.slug).filter(Boolean)
  } catch {
    return []
  }
}

export default async function sitemap() {
  const baseUrl = 'https://prowebnigeria.ng'
  
  // Fetch dynamic content from API
  const [apiBlogSlugs, portfolioSlugs] = await Promise.all([
    getBlogSlugsFromAPI(),
    getPortfolioSlugs()
  ])
  
  // Combine static and API blog slugs (remove duplicates)
  const allBlogSlugs = [...new Set([...STATIC_BLOG_SLUGS, ...apiBlogSlugs])]
  
  // Static pages (13 pages)
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/courses`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/resources/tech-tips`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.5 },
    { url: `${baseUrl}/resources/tech-reviews`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.5 },
  ]
  
  // Location pages (4 pages)
  const locationPages = ['lagos', 'abuja', 'osogbo', 'ibadan'].map(city => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8
  }))
  
  // All blog posts - static + API (11+ pages)
  const blogPages = allBlogSlugs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7
  }))
  
  // Dynamic portfolio projects
  const portfolioPages = portfolioSlugs.map(slug => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6
  }))
  
  // Tech tips and reviews (1-9 each = 18 pages)
  const techPages = []
  for (let i = 1; i <= 9; i++) {
    techPages.push(
      { url: `${baseUrl}/resources/tech-tips/${i}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
      { url: `${baseUrl}/resources/tech-reviews/${i}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 }
    )
  }
  
  // Legal pages (3 pages)
  const legalPages = [
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/advertise`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
  
  // Total: 13 + 4 + 11+ + portfolio + 18 + 3 = 49+ pages
  return [
    ...staticPages,
    ...locationPages,
    ...blogPages,
    ...portfolioPages,
    ...techPages,
    ...legalPages
  ]
}
