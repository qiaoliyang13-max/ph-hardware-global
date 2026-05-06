import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, localePrefix } from './navigation';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
});

export const config = {
  // 匹配所有路径，排除 Next.js 内部、Vercel 内部和静态资源
  matcher: [
    // 匹配所有路径
    '/((?!_next|_vercel|.*\\..*).*)',
    // 也匹配根路径
    '/'
  ]
};
