/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['static.wixstatic.com', 'res.cloudinary.com']
  }
};

module.exports = nextConfig;
