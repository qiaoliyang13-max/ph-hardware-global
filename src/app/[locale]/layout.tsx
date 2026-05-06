import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '@/navigation';
import {metadata as siteMetadata} from '@/app/metadata';
import JsonLd from '@/components/JsonLd';
import '@/app/globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata = siteMetadata;

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {locale: string};
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const {locale} = params;

  // 验证 locale 是否有效
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <JsonLd />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
