/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/whitepaper.pdf',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
