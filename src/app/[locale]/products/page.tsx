import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {PRODUCTS} from '@/data/products';
import {Link} from '@/navigation';
import {Filter} from 'lucide-react';

interface PageProps {
  params: { locale: string };
}

export default function ProductsPage({ params }: PageProps) {
  const { locale } = params;
  
  return (
    <main>
      <Header />
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 uppercase tracking-tight">Product Catalog</h1>
              <p className="text-gray-600">Precision hardware for glass and architectural systems.</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" /> Filter by Category
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <Link href={`/${locale}/products/${product.id}`} key={product.id} className="group border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-gray-600 transition-colors leading-tight uppercase">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{product.material}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">View Details</span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                      →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
