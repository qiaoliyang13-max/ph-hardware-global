'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          PH <span className="text-gray-500">HARDWARE</span>
        </Link>

        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="/" className="hover:text-gray-600">{t('home')}</Link>
          <Link href="/products" className="hover:text-gray-600">{t('products')}</Link>
          <Link href="/news" className="hover:text-gray-600">{t('news')}</Link>
          <Link href="/about" className="hover:text-gray-600">{t('about')}</Link>
          <Link href="/contact" className="hover:text-gray-600">{t('contact')}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="hidden lg:block bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all"
          >
            Inquiry Now
          </Link>
        </div>
      </div>
    </header>
  );
}
