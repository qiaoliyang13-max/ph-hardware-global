import {useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';
import {Link} from '@/navigation';
import {Menu, X} from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import {locales} from '@/navigation';

export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();

  // Get the current locale from the pathname
  const getLocaleFromPathname = () => {
    const segments = pathname.split('/');
    const firstSegment = segments[1];
    if (locales.includes(firstSegment as typeof locales[number])) {
      return firstSegment;
    }
    return 'en';
  };

  const currentLocale = getLocaleFromPathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href={`/${currentLocale}`} className="text-2xl font-bold tracking-tighter">
          PH <span className="text-gray-500">HARDWARE</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 font-medium">
          <Link href={`/${currentLocale}`} className="hover:text-gray-600">{t('home')}</Link>
          <Link href={`/${currentLocale}/products`} className="hover:text-gray-600">{t('products')}</Link>
          <Link href={`/${currentLocale}/news`} className="hover:text-gray-600">{t('news')}</Link>
          <Link href={`/${currentLocale}/about`} className="hover:text-gray-600">{t('about')}</Link>
          <Link href={`/${currentLocale}/contact`} className="hover:text-gray-600">{t('contact')}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href={`/${currentLocale}/contact`} className="hidden lg:block bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all">
            Inquiry Now
          </Link>
        </div>
      </div>
    </header>
  );
}
