import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10 bg-[#0E0906]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <span className="material-icons text-aura-gold text-2xl">auto_awesome</span>
              <span className="text-lg font-bold tracking-widest uppercase text-white">AURA <span className="text-aura-gold">COFFEE</span></span>
            </Link>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              Elevating the coffee experience through meticulous sourcing and artisanal roasting. Born in India, crafted for the world.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-white bg-transparent">Navigation</h4>
            <ul className="space-y-3 text-gray-400 text-xs font-medium">
              <li><Link href="/story" className="hover:text-aura-gold transition-colors">Our Story</Link></li>
              <li><Link href="/menu" className="hover:text-aura-gold transition-colors">Brewing Guide</Link></li>
              <li><Link href="/shop" className="hover:text-aura-gold transition-colors">Shop Beans</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-white">Support</h4>
            <ul className="space-y-3 text-gray-400 text-xs font-medium">
              <li><Link href="/contact" className="hover:text-aura-gold transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-aura-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-aura-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-white">Newsletter</h4>
            <p className="text-gray-500 text-xs mb-4">Join the Aura for monthly brewing tips.</p>
            <div className="flex bg-[#1E1915] rounded border border-white/5 p-1">
              <input type="email" placeholder="Your email" className="bg-transparent border-none text-xs text-white placeholder-gray-600 w-full focus:ring-0 px-2" />
              <button className="bg-aura-gold text-[#0E0906] rounded px-3 py-2 font-bold"><span className="material-icons text-sm">arrow_forward</span></button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest pt-8 border-t border-white/5">
          <p>© {new Date().getFullYear()} Aura Coffee Pvt Ltd. All Rights Reserved.</p>
          <p>Designed with passion in Gujarat, India.</p>
        </div>
      </div>
    </footer>
  );
}
