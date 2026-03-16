import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center -mt-20">
        <div className="absolute inset-0 z-0">
            <img alt="Cafe Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2547&auto=format&fit=crop"/>
            <div className="absolute inset-0 bg-gradient-to-b from-[#120c08]/30 to-[#120c08]"></div>
            <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 mt-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Welcome to <span className="text-aura-gold italic font-serif">the Aura</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-light">
                Experience the finest single-origin brews in the heart of India. A sanctuary where coffee meets craftsmanship and tranquility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link className="bg-aura-gold text-aura-dark font-bold px-8 py-3 rounded-md text-xs uppercase tracking-[0.15em] hover:bg-white transition-all duration-300" href="/menu">Explore Our Menu</Link>
                <Link className="border border-white/20 text-white font-bold px-8 py-3 rounded-md text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all duration-300" href="/book">Find a Table</Link>
            </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-12">
            <div>
                <span className="text-aura-gold text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">Signature Selection</span>
                <h2 className="text-3xl font-bold">Curated for the Connoisseur</h2>
            </div>
            <Link className="text-aura-gold text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1" href="/shop">
                View Full Shop <span className="material-icons text-sm">arrow_drop_down</span>
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-aura-card p-6 rounded-lg group hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-aura-gold/20">
                <div className="aspect-square bg-black/20 rounded mb-6 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2537&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">Signature Gold Latte</h3>
                    <span className="text-aura-gold font-bold text-lg">₹450</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">Infused with house-made honey-saffron syrup and finished with a delicate edible gold leaf.</p>
                <button className="w-full border border-aura-gold/30 text-aura-gold py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-aura-gold hover:text-aura-dark transition-colors rounded">Quick Add</button>
            </div>

            <div className="bg-aura-card p-6 rounded-lg group hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-aura-gold/20">
                <div className="aspect-square bg-black/20 rounded mb-6 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">Malabar Estate Pour-over</h3>
                    <span className="text-aura-gold font-bold text-lg">₹380</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">Single-origin beans from the Western Ghats, featuring notes of dark chocolate and spice.</p>
                <button className="w-full border border-aura-gold/30 text-aura-gold py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-aura-gold hover:text-aura-dark transition-colors rounded">Quick Add</button>
            </div>

            <div className="bg-aura-card p-6 rounded-lg group hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-aura-gold/20">
                <div className="aspect-square bg-black/20 rounded mb-6 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">Aura Espresso Tonic</h3>
                    <span className="text-aura-gold font-bold text-lg">₹420</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">Double shot of Aura House Blend over premium tonic and a zest of local Nagpur orange.</p>
                <button className="w-full border border-aura-gold/30 text-aura-gold py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-aura-gold hover:text-aura-dark transition-colors rounded">Quick Add</button>
            </div>
        </div>
      </section>

      <section className="px-6 max-w-[1400px] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-[400px] rounded-xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=2574&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 max-w-md">
                    <h3 className="text-2xl font-bold mb-2">The Aura Club</h3>
                    <p className="text-white/70 text-sm mb-6">Join our loyalty program to earn beans on every purchase and unlock exclusive seasonal tastings.</p>
                    <Link href="/signup" className="bg-aura-gold text-aura-dark font-bold px-8 py-3 rounded-md text-xs uppercase tracking-[0.15em] hover:bg-white transition-all inline-block">Join The Club</Link>
                </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 max-w-md">
                    <h3 className="text-2xl font-bold mb-2">Book Your Moment</h3>
                    <p className="text-white/70 text-sm mb-6">Reserve a peaceful corner for your morning ritual or an afternoon workspace with fiber-speed connectivity.</p>
                    <Link href="/book" className="border border-white/30 backdrop-blur-sm text-white font-bold px-8 py-3 rounded-md text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-aura-dark transition-all duration-300 inline-block">Reserve A Table</Link>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 bg-aura-card/30 border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <span className="text-aura-gold text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">Testimonials</span>
            <h2 className="text-3xl font-bold mb-16 italic font-serif">&quot;A ritual, not just a cup.&quot;</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center">
                    <span className="material-icons text-aura-gold text-3xl mb-6">format_quote</span>
                    <p className="text-white/80 italic leading-relaxed mb-6 font-light">&quot;The most elegant workspace in the city. The attention to detail in their pour-overs is unparalleled in Bangalore.&quot;</p>
                    <span className="text-aura-gold text-[10px] font-bold uppercase tracking-widest">— Ananya S.</span>
                </div>
                <div className="flex flex-col items-center border-x border-white/5 px-4">
                    <span className="material-icons text-aura-gold text-3xl mb-6">format_quote</span>
                    <p className="text-white/80 italic leading-relaxed mb-6 font-light">&quot;Every visit feels like a luxury retreat. Their Signature Gold Latte is a masterpiece of flavor and presentation.&quot;</p>
                    <span className="text-aura-gold text-[10px] font-bold uppercase tracking-widest">— Rohan M.</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="material-icons text-aura-gold text-3xl mb-6">format_quote</span>
                    <p className="text-white/80 italic leading-relaxed mb-6 font-light">&quot;AURACOFFEE has redefined my morning routine. The staff knows exactly how I like my Malabar brew.&quot;</p>
                    <span className="text-aura-gold text-[10px] font-bold uppercase tracking-widest">— Vikram K.</span>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="bg-aura-card rounded-2xl overflow-hidden flex flex-col md:flex-row border border-white/5">
            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-10">Visit Our Sanctuary</h2>
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <span className="material-icons text-aura-gold mt-1">location_on</span>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-white">Indiranagar Boutique</h4>
                            <p className="text-gray-400 text-sm">12th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru, India</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span className="material-icons text-aura-gold mt-1">schedule</span>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-white">Opening Hours</h4>
                            <p className="text-gray-400 text-sm">Mon — Sun: 07:00 AM — 11:00 PM</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span className="material-icons text-aura-gold mt-1">call</span>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-white">Contact</h4>
                            <p className="text-gray-400 text-sm">+91 80 4123 5678</p>
                        </div>
                    </div>
                </div>
                <Link href="/locations" className="text-aura-gold font-bold uppercase tracking-widest text-xs mt-12 border-b border-aura-gold inline-block self-start pb-1 hover:text-white hover:border-white transition-colors">Get Directions</Link>
            </div>
            
            <div className="md:w-1/2 relative min-h-[400px] bg-[#1a1612]">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 grayscale invert" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-aura-card p-4 rounded-full border border-aura-gold/30 shadow-2xl shadow-aura-gold/20">
                        <span className="material-icons text-aura-gold">location_on</span>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
