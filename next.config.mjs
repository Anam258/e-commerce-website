import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other config options
  webpack: (config) => {
    config.resolve.alias["@public"] = path.resolve(process.cwd(), "public");
    return config;
  },
};

export default nextConfig;
