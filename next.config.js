/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Auto-optimize images from these external brand hosts via next/image
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: 'seventhgeneration.com' },
      { protocol: 'https', hostname: 'methodproducts.com' },
      { protocol: 'https', hostname: 'www.ecos.com' },
      { protocol: 'https', hostname: 'www.commongoodandco.com' },
      { protocol: 'https', hostname: 'rebelgreen.com' },
      { protocol: 'https', hostname: 'www.blueland.com' },
      { protocol: 'https', hostname: 'www.preserve.eco' },
    ],
    // Serve modern formats when the browser supports them
    formats: ['image/avif', 'image/webp'],
    // Allowed responsive widths (next/image picks the smallest that fits)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig
