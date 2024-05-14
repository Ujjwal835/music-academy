/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
    unoptimized: true,
  },
};

export default nextConfig;
