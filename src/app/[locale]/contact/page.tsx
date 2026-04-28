import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {Mail, Phone, MapPin, Send} from 'lucide-react';

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h1 className="text-4xl font-bold mb-6 uppercase tracking-tight">Contact Us</h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Have a project in mind or need wholesale pricing? Our team of experts is here to assist you with technical specifications and custom solutions.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-black">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm mb-1">Email</h4>
                    <p className="text-gray-600">sales@phhardware.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-black">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm mb-1">WhatsApp / Phone</h4>
                    <p className="text-gray-600">+86 123 4567 8901</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-black">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm mb-1">Factory Address</h4>
                    <p className="text-gray-600">Building A, Hardware Industrial Park, Gaoyao District, Zhaoqing City, Guangdong, China</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="bg-white border rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-8 uppercase">Request a Quote</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Name</label>
                    <input type="text" className="w-full border-b-2 border-gray-200 py-3 focus:border-black outline-none transition-colors" placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Company</label>
                    <input type="text" className="w-full border-b-2 border-gray-200 py-3 focus:border-black outline-none transition-colors" placeholder="Company Name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">Email</label>
                  <input type="email" className="w-full border-b-2 border-gray-200 py-3 focus:border-black outline-none transition-colors" placeholder="email@address.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">Interest In</label>
                  <select className="w-full border-b-2 border-gray-200 py-3 focus:border-black outline-none transition-colors bg-white">
                    <option>Shower Hinges</option>
                    <option>Glass Clamps</option>
                    <option>Sliding Hardware</option>
                    <option>Standoffs & Posts</option>
                    <option>Custom ODM Project</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">Message</label>
                  <textarea rows={4} className="w-full border-b-2 border-gray-200 py-3 focus:border-black outline-none transition-colors" placeholder="Describe your requirements..."></textarea>
                </div>
                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4">
                  Send Inquiry <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
