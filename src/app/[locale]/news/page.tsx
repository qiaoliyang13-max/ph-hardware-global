import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {Link} from '@/navigation';

interface PageProps {
  params: { locale: string };
}

const NEWS_POSTS = [
  {
    title: "Trends in Modern Frameless Shower Design 2026",
    date: "April 15, 2026",
    excerpt: "Discover the latest hardware finishes and minimalist designs taking over the architectural world.",
    slug: "modern-frameless-shower-trends"
  },
  {
    title: "Why Stainless Steel 304/316 Matters in Wet Environments",
    date: "March 28, 2026",
    excerpt: "A deep dive into material science for durable bathroom hardware solutions.",
    slug: "stainless-steel-importance"
  },
  {
    title: "PH Hardware at Canton Fair 2026: New Product Launch",
    date: "March 10, 2026",
    excerpt: "Join us as we unveil our new range of heavy-duty sliding door systems.",
    slug: "canton-fair-2026-launch"
  }
];

export default function NewsPage({ params }: PageProps) {
  const { locale } = params;
  
  return (
    <main>
      <Header />
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 uppercase tracking-tight">Industry News & Insights</h1>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl">Stay updated with the latest trends, technical guides, and company announcements from PH Hardware.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {NEWS_POSTS.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="aspect-video bg-gray-100 rounded-xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  <span>Manufacturing</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-600 transition-colors">{post.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{post.excerpt}</p>
                <Link href={`/${locale}/news/${post.slug}`} className="font-bold border-b-2 border-black pb-1 hover:text-gray-600 transition-colors uppercase text-sm">
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
