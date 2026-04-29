'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/navigation';
import {Globe} from 'lucide-react';
import {useState} from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {code: 'en', name: 'English'},
    {code: 'es', name: 'Español'},
    {code: 'fr', name: 'Français'},
    {code: 'ru', name: 'Русский'}
  ];

  const handleSwitch = (newLocale: any) => {
    router.replace(pathname, {locale: newLocale});
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium border px-3 py-1.5 rounded-full hover:bg-gray-50 transition-colors uppercase"
      >
        <Globe className="w-4 h-4" />
        <span>{locale}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-xl shadow-xl overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSwitch(lang.code)}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${locale === lang.code ? 'font-bold bg-gray-50' : ''}`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
