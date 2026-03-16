import Link from 'next/link';
import Image from 'next/image';

export default function Story() {
  return (
    <>
        <section className="relative pt-40 pb-20 px-6 text-center -mt-20">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2561&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-dark via-aura-dark/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto mt-10">
                <span className="text-aura-gold text-[10px] font-bold uppercase tracking-[0.3em] block mb-6">Established 2023</span>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Born in the <br /><span className="italic font-serif text-gray-400">Nilgiris.</span></h1>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto font-light">
                    Aura Coffee began with a simple obsession: Why isn&apos;t Indian specialty coffee celebrated globally? We set out to change that narrative, one micro-lot at a time.
                </p>
            </div>
        </section>

        <section className="px-6 pb-24">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-aura-gold/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2574&auto=format&fit=crop" className="relative rounded-2xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6">The Origin</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        We work directly with 12 heritage estates across Chikmagalur, Wayanad, and Coorg. By cutting out the middlemen, we ensure our farmers receive 3x the fair trade market rate.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                        Every bean is hand-picked at peak ripeness, processed using experimental fermentation methods, and dried on raised beds under the Indian sun.
                    </p>
                    <div className="flex gap-8">
                        <div>
                            <span className="text-3xl font-bold text-aura-gold block">12</span>
                            <span className="text-[10px] uppercase tracking-widest text-gray-500">Partner Estates</span>
                        </div>
                        <div>
                            <span className="text-3xl font-bold text-aura-gold block">100%</span>
                            <span className="text-[10px] uppercase tracking-widest text-gray-500">Arabica</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold mb-6">The Craft</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Roasting is equal parts science and art. At our Bengaluru HQ, we roast in small 5kg batches using state-of-the-art Probat roasters.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                        This allows us to control the profile of every single bean, unlocking notes of dark chocolate, spices, and tropical fruits that are unique to Indian soil.
                    </p>
                    <Link href="/shop" className="text-aura-gold font-bold uppercase tracking-widest text-xs hover:text-white transition-colors border-b border-aura-gold pb-1 inline-block">Taste the Difference</Link>
                </div>
                <div className="relative group order-1 md:order-2">
                    <div className="absolute -inset-4 bg-aura-gold/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img src="https://images.unsplash.com/photo-1552346989-e069318e2035?q=80&w=2670&auto=format&fit=crop" className="relative rounded-2xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
            </div>
        </section>

        <section className="py-24 bg-aura-card border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="p-8 border border-white/5 rounded-2xl bg-aura-dark hover:border-aura-gold/30 transition-colors">
                    <span className="material-icons text-aura-gold text-4xl mb-6">handshake</span>
                    <h3 className="text-xl font-bold mb-4">Direct Trade</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">No auctions. No aggregators. We know every farmer by name.</p>
                </div>
                <div className="p-8 border border-white/5 rounded-2xl bg-aura-dark hover:border-aura-gold/30 transition-colors">
                    <span className="material-icons text-aura-gold text-4xl mb-6">science</span>
                    <h3 className="text-xl font-bold mb-4">Precision Roasting</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Data-driven roasting profiles to ensure consistency in every cup.</p>
                </div>
                <div className="p-8 border border-white/5 rounded-2xl bg-aura-dark hover:border-aura-gold/30 transition-colors">
                    <span className="material-icons text-aura-gold text-4xl mb-6">visibility</span>
                    <h3 className="text-xl font-bold mb-4">Radical Transparency</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Scan any bag to see the farm, harvest date, and price paid to the producer.</p>
                </div>
            </div>
        </section>
    </>
  );
}
