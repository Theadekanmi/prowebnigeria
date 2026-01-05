// Bulk URL submission endpoint
// Call this after deploying to submit all URLs to IndexNow

export async function GET() {
  const baseUrl = 'https://prowebnigeria.ng'
  
  // All your important URLs
  const urls = [
    // Main pages
    `${baseUrl}`,
    `${baseUrl}/about`,
    `${baseUrl}/services`,
    `${baseUrl}/portfolio`,
    `${baseUrl}/contact`,
    `${baseUrl}/pricing`,
    `${baseUrl}/faq`,
    `${baseUrl}/blog`,
    `${baseUrl}/courses`,
    `${baseUrl}/resources`,
    
    // Location pages (LOCAL SEO - IMPORTANT!)
    `${baseUrl}/locations/lagos`,
    `${baseUrl}/locations/abuja`,
    `${baseUrl}/locations/ibadan`,
    `${baseUrl}/locations/osogbo`,
    
    // Blog posts (CONTENT - VERY IMPORTANT!)
    `${baseUrl}/blog/top-10-best-web-designers-nigeria-2025`,
    `${baseUrl}/blog/website-cost-nigeria-2025-pricing-guide`,
    `${baseUrl}/blog/complete-seo-guide-nigerian-businesses-2025`,
    `${baseUrl}/blog/how-to-choose-web-designer-nigeria`,
    `${baseUrl}/blog/wordpress-vs-custom-website-nigeria`,
    `${baseUrl}/blog/best-payment-gateways-nigeria`,
    `${baseUrl}/blog/web-design-trends-2025`,
    `${baseUrl}/blog/digital-marketing-nigerian-smes`,
    `${baseUrl}/blog/best-ecommerce-platforms-nigeria-2025`,
    `${baseUrl}/blog/web-design-services-lagos-nigeria`,
    `${baseUrl}/blog/why-nigerian-business-needs-professional-website`,
    
    // Resources
    `${baseUrl}/resources/tech-tips`,
    `${baseUrl}/resources/tech-reviews`,
  ]

  const host = 'prowebnigeria.ng'
  const key = 'prowebnigeria2025indexnow'
  const keyLocation = `https://${host}/${key}.txt`

  const payload = {
    host,
    key,
    keyLocation,
    urlList: urls
  }

  try {
    // Submit to IndexNow (Bing, Yandex, etc.)
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    const status = response.status

    return Response.json({
      success: status === 200 || status === 202,
      message: `Submitted ${urls.length} URLs to IndexNow`,
      status,
      urls,
      instructions: {
        google: 'Go to Google Search Console > URL Inspection > Enter each URL > Request Indexing',
        bing: 'URLs submitted via IndexNow. Check Bing Webmaster Tools > IndexNow for status.',
        manual: 'You can also manually submit sitemap at: https://prowebnigeria.ng/sitemap.xml'
      }
    })
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
      urls,
      instructions: {
        manual: 'IndexNow failed. Submit sitemap manually to Google and Bing.',
        sitemap: 'https://prowebnigeria.ng/sitemap.xml'
      }
    }, { status: 500 })
  }
}
