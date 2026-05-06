import createNextIntlPlugin from 'next-intl/plugin';

// 明确指定 i18n 请求配置文件路径
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.phhardware.com.cn',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
