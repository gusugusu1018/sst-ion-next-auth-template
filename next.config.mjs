/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "next-auth.js.org",
        port: "",
        pathname: "/img/logo/*",
      },
    ],
  },
};

export default nextConfig;
