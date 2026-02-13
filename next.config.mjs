/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_PAGES ? '/second-brain' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/second-brain' : '',
};

export default nextConfig;