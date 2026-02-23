import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Si votre site est sur votre-nom.github.io/website, décommentez la ligne ci-dessous :
  // basePath: '/website',
};

export default nextConfig;
