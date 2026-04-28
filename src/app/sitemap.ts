import {MetadataRoute} from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.phhardware.com.cn';
  const locales = ['en', 'es', 'fr', 'ru'];
  const paths = ['', '/products', '/news', '/about', '/contact'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach(locale => {
    paths.forEach(path => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
