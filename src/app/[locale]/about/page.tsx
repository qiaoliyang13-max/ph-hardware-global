import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageProps {
  params: { locale: string };
}

export default function AboutPage({ params }: PageProps) {
  return (
    <main>
      <Header />
      
      {/* History Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-4 inline-block">Since 2004</span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 uppercase tracking-tight">Two Decades of Engineering Excellence</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded in 2004, PH Hardware has evolved from a local workshop into a global leader in architectural glass hardware manufacturing. Our factory specializes in precision-engineered components for frameless shower rooms, glass railings, and commercial interior systems.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With a 50,000 sq. ft. facility and a dedicated R&D team, we bridge the gap between aesthetic design and structural integrity. Our commitment to using high-grade materials like SS304, SS316, and Solid Brass ensures that every piece of hardware we produce meets international safety and durability standards.
              </p>
            </div>
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gray-200" />
              <div className="absolute bottom-8 left-8 bg-white p-8 rounded-xl shadow-xl">
                <div className="text-4xl font-bold mb-1 tracking-tighter">20+</div>
                <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise / Capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 uppercase">Our Core Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We don't just manufacture parts; we provide solutions for the glass and glazing industry.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Precision Casting",
                desc: "Utilizing advanced investment casting techniques to ensure dimensional accuracy and superior finish on all hinges and clamps."
              },
              {
                title: "Custom OEM/ODM",
                desc: "From concept sketches to prototype to mass production. We help brands bring unique hardware designs to life."
              },
              {
                title: "Surface Finishing",
                desc: "State-of-the-art plating and coating lines for Chrome, Matte Black, Satin Nickel, and PVD finishes."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 uppercase">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 uppercase">A Trusted Global Supplier</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our products are trusted by contractors, designers, and wholesalers across North America, Europe, Australia, and the Middle East. We understand the specific regulatory requirements of different markets and ensure full compliance with ANSI and CE standards.
          </p>
          <div className="flex justify-center gap-12 opacity-30 grayscale">
            {/* Placeholder for partner/market logos */}
            <div className="h-8 w-24 bg-black" />
            <div className="h-8 w-24 bg-black" />
            <div className="h-8 w-24 bg-black" />
            <div className="h-8 w-24 bg-black" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}