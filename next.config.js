/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputFileTracingRoot: undefined
  },
  output: 'standalone'
}

module.exports = nextConfig
