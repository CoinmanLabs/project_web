/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    sep: '@'
  },
  i18n: {
    locales: ['en-US', 'zh-Hans'],
    defaultLocale: 'zh-Hans'
  },
  images: {
    domains: ['github.com']
  }
}

module.exports = nextConfig
