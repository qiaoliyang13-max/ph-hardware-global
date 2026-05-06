import {getRequestConfig} from 'next-intl/server';

// 使用静态映射，避免动态 import 路径在 Vercel 打包时可能丢失文件
export default getRequestConfig(async ({locale}) => {
  const validLocales = ['en', 'es', 'fr', 'ru'] as const;
  type ValidLocale = typeof validLocales[number];
  
  const safeLocale: ValidLocale = validLocales.includes(locale as ValidLocale)
    ? (locale as ValidLocale)
    : 'en';

  const messagesMap: Record<ValidLocale, () => Promise<{default: Record<string, unknown>}>> = {
    en: () => import('./messages/en.json'),
    es: () => import('./messages/es.json'),
    fr: () => import('./messages/fr.json'),
    ru: () => import('./messages/ru.json'),
  };

  const messages = (await messagesMap[safeLocale]()).default;

  return {messages};
});
