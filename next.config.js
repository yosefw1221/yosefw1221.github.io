/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      port: '',
      pathname: '/images/**',
      hostname:'socket.io'
    }]
  }
}

module.exports = nextConfig
