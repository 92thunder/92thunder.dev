const withPWA = require('next')

/** @type {import('next').NextConfig} */
const config = withPWA({
  basePath: process.env.NODE_ENV === 'development' ? '' : '/92thunder.dev',
  pwa: {
    dest: "public",
    register: true,
  },
  reactStrictMode: true
})

config.images = { unoptimized: true }

module.exports = config
