import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts'
);
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.phhardware.com.cn'],
  },
  // Ensure that we don't try to use edge runtime which can cause 500s with next-intl sometimes
  typescript: {
    ignoreBuildErrors: true,
  }
};
 
export default withNextIntl(nextConfig);
