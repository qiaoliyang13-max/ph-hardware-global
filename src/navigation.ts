import {createNavigation} from 'next-intl/navigation';

export const locales = ['en', 'es', 'fr', 'ru'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';
export const localePrefix = 'always' as const;

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation({locales, localePrefix});
