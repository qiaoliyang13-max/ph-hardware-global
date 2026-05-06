// 根布局：Next.js App Router 必须有根布局
// locale 子路由的 layout 会提供 <html> 和 <body> 标签
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children as React.ReactElement;
}
