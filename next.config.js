/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com']
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiaWhzdW5jaGVuIiwiYSI6ImNsZzBjNGU3bjE1aWozcnA2ZDVreXBmY2YifQ.0mV4hqIiFOMQa74IZHh6Kw'
  }
}

module.exports = nextConfig
