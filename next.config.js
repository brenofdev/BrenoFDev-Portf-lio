/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   domains: ["media.graphassets.com"]
  // }
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com", "localhost"],
  },
  i18n: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
  },
}

module.exports = nextConfig
