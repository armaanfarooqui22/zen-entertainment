/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true' || true;

const nextConfig = {
  output: 'export',
  basePath: '/zen-entertainment',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
