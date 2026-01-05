// IndexNow API endpoint for Bing instant indexing
// Submit URLs to Bing for faster indexing

export async function POST(request) {
  try {
    const { urls } = await request.json()
    
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return Response.json({ error: 'URLs array required' }, { status: 400 })
    }

    const host = 'prowebnigeria.ng'
    const key = process.env.INDEXNOW_KEY || 'prowebnigeria2025indexnow'
    const keyLocation = `https://${host}/${key}.txt`

    const payload = {
      host,
      key,
      keyLocation,
      urlList: urls.slice(0, 10000) // IndexNow limit
    }

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (response.ok || response.status === 202) {
      return Response.json({ 
        success: true, 
        message: `Submitted ${urls.length} URLs to IndexNow`,
        status: response.status 
      })
    }

    return Response.json({ 
      error: 'IndexNow submission failed', 
      status: response.status 
    }, { status: response.status })

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function GET() {
  return Response.json({ 
    message: 'IndexNow API - POST URLs to submit for indexing',
    example: { urls: ['https://prowebnigeria.ng/blog/my-post'] }
  })
}
