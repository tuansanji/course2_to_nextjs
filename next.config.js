/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["antd-mobile"],
  images: {
    domains: ["upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
