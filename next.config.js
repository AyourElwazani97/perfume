/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["hover-effect"]);
const nextConfig = {
  reactStrictMode: true,
  withTM,
};

module.exports = nextConfig;
