/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "forkify-api.herokuapp.com",
      },
    ],
  },
};

export default nextConfig;
