import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {PRODUCTS} from '@/data/products';
import {notFound} from 'next/navigation';
import {CheckCircle, ArrowLeft, Send} from 'lucide-react';
import {Link} from '@/navigation';

export default function ProductDetailPage({params}: {params: {id: string}}) {
  const product = PRODUCTS.find(p => p.id === params.id);

  if (!product) notFound();

  return (
    <main>
      <Header />
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Catalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Gallery Placeholder */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gray-200" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-lg cursor-pointer hover:opacity-80 transition-opacity" />
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 inline-block">{product.category}</span>
              <h1 className="text-4xl font-bold mb-6 uppercase tracking-tight">{product.name}</h1>
              
              <div className="space-y-6 mb-12">
                <div className="flex gap-4 items-baseline">
                  <span className="font-bold text-sm uppercase text-gray-400 w-24">Material:</span>
                  <span className="text-gray-700">{product.material}</span>
                </div>
                <div className="flex gap-4 items-baseline">
                  <span className="font-bold text-sm uppercase text-gray-400 w-24">Finish:</span>
                  <span className="text-gray-700">{product.finish}</span>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed pt-4 border-t">
                  {product.description}
                </p>
              </div>

              <div className="mb-12">
                <h4 className="font-bold uppercase text-sm tracking-widest mb-6">Key Features</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-black" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry CTA */}
              <div className="bg-gray-50 p-8 rounded-2xl border">
                <h4 className="font-bold mb-4 uppercase">Inquire about this product</h4>
                <p className="text-sm text-gray-500 mb-6">Need a bulk quote or custom finish? Our team usually responds within 12 hours.</p>
                <Link href={`/contact?product=${product.id}`} className="btn-primary w-full flex items-center justify-center gap-2">
                  Request Wholesale Pricing <Send className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
