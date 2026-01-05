/**
 * Test script to show exactly what URLs the sitemap will generate
 * Run: node scripts/test-sitemap.js
 */

const API_URL = 'https://prowebnaija.pythonanywhere.com/api'

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
    const res = await fetch(`${API_URL}/blog/posts/?page_size=100`)
    if (!res.ok) return []
    const data = await res.json()
    const posts = data?.results || data || []
    return posts.map(post => post.slug).filter(Boolean)
  } catch (e) {
    console.log('Error fetching blog posts:', e.message)
    return []
  }
}

async function getPortfolioSlugs() {
  try {
    const res = await fetch(`${API_URL}/portfolio/projects/?page_size=100`)
    if (!res.ok) return []
    const data = await res.json()
    const projects = data?.results || data || []
    return projects.map(project => project.slug).filter(Boolean)
  } catch (e) {
    console.log('Error fetching portfolio:', e.message)
    return []
  }
}

async function main() {
  const baseUrl = 'https://prowebnigeria.ng'
  
  console.log('Fetching data from your backend API...\n')
  
  // Fetch dynamic content from API
  const [apiBlogSlugs, portfolioSlugs] = await Promise.all([
    getBlogSlugsFromAPI(),
    getPortfolioSlugs()
  ])
  
  console.log(`✅ Found ${apiBlogSlugs.length} blog posts from API`)
  console.log(`✅ Found ${portfolioSlugs.length} portfolio projects from API`)
  console.log(`✅ Have ${STATIC_BLOG_SLUGS.length} static blog posts\n`)
  
  // Combine static and API blog slugs (remove duplicates)
  const allBlogSlugs = [...new Set([...STATIC_BLOG_SLUGS, ...apiBlogSlugs])]
  console.log(`✅ Total unique blog posts: ${allBlogSlugs.length} (duplicates removed)\n`)
  
  // Count all URLs
  const staticPagesCount = 13
  const locationPagesCount = 4
  const techPagesCount = 18
  const legalPagesCount = 3
  
  const totalUrls = staticPagesCount + locationPagesCount + allBlogSlugs.length + portfolioSlugs.length + techPagesCount + legalPagesCount
  
  console.log('=' .repeat(60))
  console.log('SITEMAP URL COUNT:')
  console.log('=' .repeat(60))
  console.log(`Static Pages:        ${staticPagesCount}`)
  console.log(`Location Pages:      ${locationPagesCount}`)
  console.log(`Blog Posts:          ${allBlogSlugs.length}`)
  console.log(`Portfolio Projects:  ${portfolioSlugs.length}`)
  console.log(`Tech Tips/Reviews:   ${techPagesCount}`)
  console.log(`Legal Pages:         ${legalPagesCount}`)
  console.log('-'.repeat(30))
  console.log(`TOTAL URLS:          ${totalUrls}`)
  console.log('=' .repeat(60))
  
  // Show all blog URLs
  console.log('\n📝 ALL BLOG POST URLs IN SITEMAP:')
  console.log('-'.repeat(60))
  allBlogSlugs.forEach((slug, i) => {
    console.log(`${i + 1}. ${baseUrl}/blog/${slug}`)
  })
  
  // Show portfolio URLs if any
  if (portfolioSlugs.length > 0) {
    console.log('\n📁 ALL PORTFOLIO URLs IN SITEMAP:')
    console.log('-'.repeat(60))
    portfolioSlugs.forEach((slug, i) => {
      console.log(`${i + 1}. ${baseUrl}/portfolio/${slug}`)
    })
  }
  
  // Show which blog posts came from API vs static
  console.log('\n📊 BLOG POST SOURCE BREAKDOWN:')
  console.log('-'.repeat(60))
  
  const apiOnly = apiBlogSlugs.filter(slug => !STATIC_BLOG_SLUGS.includes(slug))
  const staticOnly = STATIC_BLOG_SLUGS.filter(slug => !apiBlogSlugs.includes(slug))
  const both = STATIC_BLOG_SLUGS.filter(slug => apiBlogSlugs.includes(slug))
  
  console.log(`From API only:       ${apiOnly.length} posts`)
  console.log(`From Static only:    ${staticOnly.length} posts`)
  console.log(`In Both (overlap):   ${both.length} posts`)
  
  if (apiOnly.length > 0) {
    console.log('\n🌐 BLOG POSTS FROM API (not hardcoded):')
    apiOnly.forEach(slug => console.log(`   - ${slug}`))
  }
}

main().catch(console.error)
