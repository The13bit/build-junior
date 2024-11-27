import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['ipfs-gateway.kalp.studio',"avatars.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs-gateway.kalp.studio',
        port: '',
        pathname: '/*',
      },
    ],
  },
}

export default nextConfig;
