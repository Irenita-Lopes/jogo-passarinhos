import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'casadospassaros.net',
      'inaturalist-open-data.s3.amazonaws.com',
      'cdn.download.ams.birds.cornell.edu',
      'photoaves.com'
    ],
  },
};

export default nextConfig;
