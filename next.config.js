/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images
  images: {
    domains: ['localhost', 'prowebnigeria.ng'],
    formats: ['image/webp', 'image/avif'],
  },

  // Enable compression
  compress: true,

  // Optimize bundles
  swcMinify: true,
}

module.exports = nextConfig
