/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: './',
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: 'default',
    path: '',
    dangerouslyAllowSVG: true,
    unoptimized: true,
  }
}

module.exports = nextConfig
