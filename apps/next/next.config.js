/** @type {import('next').NextConfig} */

module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,

  // output: 'standalone',

  images: {
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp'],
    domains: ['images.unsplash.com'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  swcMinify: true,
};
