const withPWA = require('next')

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  basePath: process.env.NODE_ENV === 'development' ? '' : '/92thunder.dev',
  pwa: {
    dest: "public",
    register: true,
  },
  reactStrictMode: true,
})
