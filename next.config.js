/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        destination: "/account/profile",
        source: "/account",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
