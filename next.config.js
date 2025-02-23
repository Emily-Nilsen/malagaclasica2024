/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')

const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    minimumCacheTTL: 31536000,
    unoptimized: true,
  },
}

module.exports = nextConfig
