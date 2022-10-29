/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: './',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: './',
  }
}

module.exports = nextConfig
