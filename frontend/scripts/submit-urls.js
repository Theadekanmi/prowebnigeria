/**
 * COMPLETE URL Submission List for ProWeb Nigeria
 * 
 * Run: node scripts/submit-urls.js
 * 
 * Total: 49+ URLs (without API blog posts and portfolio)
 */

const BASE_URL = 'https://prowebnigeria.ng'

// ============================================
// STATIC PAGES (13 pages)
// ============================================
const staticPages = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/case-studies',
  '/contact',
  '/pricing',
  '/faq',
  '/blog',
  '/courses',
  '/resources',
  '/resources/tech-tips',
  '/resources/tech-reviews',
]

// ============================================
// LOCATION PAGES (4 pages) - HIGH PRIORITY for Local SEO
// ============================================
const locationPages = [
  '/locations/lagos',
  '/locations/abuja',
  '/locations/ibadan',
  '/locations/osogbo',
]

// ============================================
// STATIC BLOG POSTS (11 pages) - These are hardcoded in /app/blog/
// ============================================
const staticBlogPosts = [
  '/blog/top-10-best-web-designers-nigeria-2025',
  '/blog/complete-seo-guide-nigerian-businesses-2025',
  '/blog/website-cost-nigeria-2025-pricing-guide',
  '/blog/how-to-choose-web-designer-nigeria',
  '/blog/wordpress-vs-custom-website-nigeria',
  '/blog/best-payment-gateways-nigeria',
  '/blog/web-design-trends-2025',
  '/blog/digital-marketing-nigerian-smes',
  '/blog/best-ecommerce-platforms-nigeria-2025',
  '/blog/web-design-services-lagos-nigeria',
  '/blog/why-nigerian-business-needs-professional-website',
]

// ============================================
// TECH TIPS PAGES (9 pages)
// ============================================
const techTipsPages = []
for (let i = 1; i <= 9; i++) {
  techTipsPages.push(`/resources/tech-tips/${i}`)
}

// ============================================
// TECH REVIEWS PAGES (9 pages)
// ============================================
const techReviewsPages = []
for (let i = 1; i <= 9; i++) {
  techReviewsPages.push(`/resources/tech-reviews/${i}`)
}

// ============================================
// LEGAL PAGES (3 pages)
// ============================================
const legalPages = [
  '/privacy',
  '/terms',
  '/advertise',
]

// ============================================
// COMBINE ALL
// ============================================
const allPages = [
  ...staticPages,
  ...locationPages,
  ...staticBlogPosts,
  ...techTipsPages,
  ...techReviewsPages,
  ...legalPages,
]

console.log('='.repeat(70))
console.log('ProWeb Nigeria - COMPLETE URL Submission List')
console.log('='.repeat(70))
console.log('')

console.log(`📊 TOTAL STATIC URLS: ${allPages.length}`)
console.log('   (Plus any blog posts and portfolio items from your backend API)')
console.log('')

console.log('🔴 HIGH PRIORITY - Submit FIRST (Main Pages):')
console.log('-'.repeat(50))
staticPages.forEach(page => console.log(`${BASE_URL}${page}`))
console.log('')

console.log('🟠 HIGH PRIORITY - Location Pages (Local SEO):')
console.log('-'.repeat(50))
locationPages.forEach(page => console.log(`${BASE_URL}${page}`))
console.log('')

console.log('🟡 MEDIUM PRIORITY - Blog Posts:')
console.log('-'.repeat(50))
staticBlogPosts.forEach(page => console.log(`${BASE_URL}${page}`))
console.log('')

console.log('🟢 MEDIUM PRIORITY - Tech Tips:')
console.log('-'.repeat(50))
techTipsPages.forEach(page => console.log(`${BASE_URL}${page}`))
console.log('')

console.log('🔵 MEDIUM PRIORITY - Tech Reviews:')
console.log('-'.repeat(50))
techReviewsPages.forEach(page => console.log(`${BASE_URL}${page}`))
console.log('')

console.log('⚪ LOW PRIORITY - Legal Pages:')
console.log('-'.repeat(50))
legalPages.forEach(page => console.log(`${BASE_URL}${page}`))
console.log('')

console.log('='.repeat(70))
console.log('📋 ALL URLs FOR BULK SUBMISSION (Copy everything below):')
console.log('='.repeat(70))
console.log('')
allPages.forEach(page => console.log(`${BASE_URL}${page}`))
console.log('')

console.log('='.repeat(70))
console.log('📝 INSTRUCTIONS:')
console.log('='.repeat(70))
console.log('')
console.log('1. GOOGLE SEARCH CONSOLE (One by one):')
console.log('   - Go to: https://search.google.com/search-console')
console.log('   - Click "URL Inspection" in sidebar')
console.log('   - Paste each URL')
console.log('   - Click "Request Indexing"')
console.log('   - Start with HIGH PRIORITY pages!')
console.log('   - Google limits ~10-20 requests per day')
console.log('')
console.log('2. BING WEBMASTER TOOLS (Bulk submit):')
console.log('   - Go to: https://www.bing.com/webmasters')
console.log('   - Click "Submit URLs" in sidebar')
console.log('   - Paste ALL URLs at once')
console.log('   - Click Submit')
console.log('')
console.log('3. SITEMAP (Already configured):')
console.log('   - Your sitemap at https://prowebnigeria.ng/sitemap.xml')
console.log('   - Already submitted to Google & Bing')
console.log('   - Now includes ALL static blog posts')
console.log('')
console.log('4. INDEXNOW (For instant Bing indexing):')
console.log('   - After deploying, go to Bing Webmaster Tools')
console.log('   - Click IndexNow in sidebar')
console.log('   - Should auto-detect your key')
console.log('')

// Summary
console.log('='.repeat(70))
console.log('📊 URL COUNT SUMMARY:')
console.log('='.repeat(70))
console.log(`   Static Pages:      ${staticPages.length}`)
console.log(`   Location Pages:    ${locationPages.length}`)
console.log(`   Blog Posts:        ${staticBlogPosts.length}`)
console.log(`   Tech Tips:         ${techTipsPages.length}`)
console.log(`   Tech Reviews:      ${techReviewsPages.length}`)
console.log(`   Legal Pages:       ${legalPages.length}`)
console.log('-'.repeat(30))
console.log(`   TOTAL:             ${allPages.length} URLs`)
console.log('')
console.log('   + Blog posts from backend API')
console.log('   + Portfolio projects from backend API')
console.log('='.repeat(70))
