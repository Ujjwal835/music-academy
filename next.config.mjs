/** @type {import('next').NextConfig} */
const isProd = (process.env.NODE_ENV = "production");

const nextConfig = {
  basePath: isProd ? "/music-academy" : "",
  output: "export",
  distDir: "dist",
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
    unoptimized: true,
  },
};

export default nextConfig;
