/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.dog.ceo"],
  },
};

module.exports = nextConfig;
