/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "www.themealdb.com",
      },
    ],
  },
};

export default nextConfig;
