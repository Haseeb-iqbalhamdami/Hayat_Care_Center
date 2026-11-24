import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/non-medical-transportation",
        destination: "/adult-care-center",
        permanent: true,
      },
      {
        source: "/resources/senior-living-guide",
        destination: "/resources/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
