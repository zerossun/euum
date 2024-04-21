/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Login/Start",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
