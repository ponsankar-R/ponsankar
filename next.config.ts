// next.config.mjs
/** @type {import('next').NextMode} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Or specific domain like 'images.unsplash.com'
      },
    ],
  },
};

export default nextConfig;