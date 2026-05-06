import {useTranslations, useLocale} from 'next-intl';
import {Link} from '@/navigation';

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href={`/${locale}`} className="text-2xl font-bold mb-4 inline-block">
            PH HARDWARE
          </Link>
          <p className="text-gray-600 max-w-sm">
            Professional manufacturer of shower room hardware with 20+ years of experience. Global export specialist.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">Quick Links</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href={`/${locale}/products`}>Shower Hinges</Link></li>
            <li><Link href={`/${locale}/products`}>Glass Clamps</Link></li>
            <li><Link href={`/${locale}/products`}>Door Handles</Link></li>
            <li><Link href={`/${locale}/products`}>Sliding Systems</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">Contact</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Email: sales@phhardware.com</li>
            <li>WhatsApp: +86 123 4567 8901</li>
            <li>Address: Hardware Industrial Park, China</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t text-sm text-gray-500 flex justify-between">
        <p>{t('rights')}</p>
        <div className="flex gap-4">
          <Link href={`/${locale}/privacy`}>Privacy Policy</Link>
          <Link href={`/${locale}/terms`}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
