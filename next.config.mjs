/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "forkify-api.herokuapp.com",
      },
    ],
  },
};

export default nextConfig;
