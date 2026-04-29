import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {metadata as siteMetadata} from '../metadata';
import JsonLd from '../../components/JsonLd';
import '../globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata = siteMetadata;

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
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
