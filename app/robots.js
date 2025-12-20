export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/admin/',
        '/_next/',
        '/search',
        '/api/',
        '*.woff2',
        '*.woff',
        '*.ttf',
        '/favicon.ico',
        '/site.webmanifest',
      ],
    },
    sitemap: 'https://prowebnigeria.ng/sitemap.xml',
  }
}
