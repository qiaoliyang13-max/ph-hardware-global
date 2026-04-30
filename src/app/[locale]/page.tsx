import {useTranslations} from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {ArrowRight, ShieldCheck, Truck, Users} from 'lucide-react';
import {Link} from '@/navigation';

interface PageProps {
  params: { locale: string };
}

export default function HomePage({ params }: PageProps) {
  const { locale } = params;
  const t = useTranslations('Hero');

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/${locale}/products`} className="btn-primary flex items-center justify-center gap-2">
                {t('cta')} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href={`/${locale}/contact`} className="btn-secondary flex items-center justify-center">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-gray-50 rounded-full -z-10" />
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Product Categories</h2>
              <p className="text-gray-600">Precision engineered hardware for every architectural need.</p>
            </div>
            <Link href={`/${locale}/products`} className="text-black font-semibold border-b-2 border-black pb-1 hover:text-gray-600 transition-colors">
              View Catalog
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {title: 'Shower Hinges', desc: 'Heavy-duty solid brass and stainless steel hinges for 8-12mm glass.'},
              {title: 'Glass Clamps & Connectors', desc: 'Frameless glass mounting solutions and connectors for security and style.'},
              {title: 'Glass Door Handles', desc: 'Modern, ergonomic handles in Chrome, Matte Black, and PVD Gold.'},
              {title: 'Sliding Door Hardware', desc: 'Premium tracks and rollers for frameless sliding shower systems.'},
              {title: 'Advertising Nails & Posts', desc: 'Stainless steel standoffs and posts for signage and glass railings.'},
              {title: 'Custom Engineering', desc: 'Full OEM/ODM support for unique architectural hardware requirements.'}
            ].map((cat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gray-200 transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase">{cat.title}</h3>
                <p className="text-gray-600">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase">Why Industry Professionals Choose PH Hardware</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Providing reliable, high-performance hardware solutions for architectural projects worldwide for over two decades.</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            {icon: <ShieldCheck />, title: '20+ Years Expertise', desc: 'Specialized manufacturing since 2004.'},
            {icon: <Users />, title: 'OEM/ODM Services', desc: 'Custom designs tailored to your specs.'},
            {icon: <Truck />, title: 'Global Delivery', desc: 'Fast and reliable shipping to over 50 countries.'},
            {icon: <ShieldCheck />, title: 'Certified Quality', desc: 'Rigorous testing for durability and safety.'}
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-accent">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold mb-2 uppercase">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-10">Get in touch with our engineering team for expert advice and competitive pricing.</p>
          <Link href={`/${locale}/contact`} className="btn-primary px-12 py-4 text-lg">
            Request Wholesale Pricing
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
