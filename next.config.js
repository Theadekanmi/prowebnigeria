/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // COMPLETELY DISABLE output file tracing to prevent micromatch stack overflow
  outputFileTracing: false,
};

module.exports = nextConfig;
