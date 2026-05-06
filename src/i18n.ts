import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'es', 'fr', 'ru'] as const;
type ValidLocale = typeof locales[number];

// 使用静态映射，避免动态 import 路径在 Vercel 打包时可能丢失文件
const messagesMap: Record<ValidLocale, () => Promise<{ default: Record<string, unknown> }>> = {
  en: () => import('./messages/en.json'),
  es: () => import('./messages/es.json'),
  fr: () => import('./messages/fr.json'),
  ru: () => import('./messages/ru.json'),
};

export default getRequestConfig(async ({ requestLocale }) => {
  // 从请求中获取 locale
  const locale = await requestLocale;

  // 验证 locale 是否有效
  if (!locale || !locales.includes(locale as ValidLocale)) {
    notFound();
  }

  const messages = (await messagesMap[locale as ValidLocale]()).default;

  return {
    locale,
    messages,
  };
});
