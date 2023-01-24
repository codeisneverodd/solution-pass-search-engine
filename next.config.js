/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  i18n: {
    locales: ['ko-KR', 'en'],
    defaultLocale: 'ko-KR',
  },
};

module.exports = nextConfig;
