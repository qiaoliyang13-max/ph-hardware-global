import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './navigation';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export const config = {
  // 匹配所有路径，排除 Next.js 内部文件和静态资源
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
};
