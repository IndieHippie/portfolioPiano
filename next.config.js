/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(pdf|mp4)$/i,
      type: 'asset/resource',
    });

    return config;
  },
}

module.exports = nextConfig;
