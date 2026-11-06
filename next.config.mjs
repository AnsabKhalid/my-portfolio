/** Static export: `npm run build` writes a plain site to out/ that Vercel or any static host can serve. */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
