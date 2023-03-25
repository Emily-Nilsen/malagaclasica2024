/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    minimumCacheTTL: 31536000,
    domains: ['res.cloudinary.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
