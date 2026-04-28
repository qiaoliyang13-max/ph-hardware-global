import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.phhardware.com.cn'],
  },
};
 
export default withNextIntl(nextConfig);
