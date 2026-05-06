import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | PH Hardware - 20+ Years Shower Hardware Manufacturer',
    default: 'PH Hardware | Premium Shower & Glass Hardware Manufacturer',
  },
  description: 'Specializing in shower room hinges, glass clamps, door handles, and architectural hardware. 20+ years of professional manufacturing and global export.',
  keywords: ['shower hardware', 'glass hinges', 'glass clamps', 'frameless shower accessories', 'hardware manufacturer china'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ph-hardware-global.vercel.app',
    siteName: 'PH Hardware',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// 根布局：Next.js App Router 必须有根布局
// locale 子路由的 layout 会提供 <html> 和 <body> 标签
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
