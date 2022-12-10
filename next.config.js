/** @type {import('next').NextConfig} */
module.exports = {
  basePath: process.env.NODE_ENV === 'development' ? '' : '/92thunder.dev',
  reactStrictMode: true,
}
