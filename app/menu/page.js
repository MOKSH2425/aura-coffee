import Link from 'next/link';
import { client } from '@/lib/sanity';

export default async function Menu() {
  const menuItems = (await client.fetch(`*[_type == "menuItem"] | order(name asc)`)) || [];
  
  const specials = menuItems.filter(item => item.category === 'signature');
  const manual = menuItems.filter(item => item.category === 'manual');
  const bakes = menuItems.filter(item => item.category === 'bakes');
  return (
    <>
        <section className="relative h-[60vh] w-full flex items-center justify-center -mt-20">
            <div className="absolute inset-0 z-0">
                <img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop" alt="Pour over coffee" />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-dark via-aura-dark/50 to-aura-dark/30"></div>
            </div>

            <div className="relative z-10 text-center px-4 mt-10">
                <span className="text-aura-gold text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">The Digital Experience</span>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Our Menu</h1>
                <p className="text-gray-400 text-sm max-w-lg mx-auto mb-8 font-light">Indulge in a curated selection of Indian estate beans and artisanal delicacies, crafted with precision and soul.</p>
            </div>
        </section>

        <div className="sticky top-20 z-40 bg-aura-dark/95 border-b border-white/5 backdrop-blur-sm py-4">
            <div className="max-w-[1400px] mx-auto px-6 flex gap-4 overflow-x-auto no-scrollbar justify-center">
                <Link href="#specials" className="px-6 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap scroll-smooth text-aura-gold border-aura-gold bg-aura-gold/5">Aura Specials</Link>
                <Link href="#manual" className="px-6 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-aura-gold hover:border-aura-gold hover:bg-aura-gold/5 transition-all whitespace-nowrap scroll-smooth">Manual Brews</Link>
                <Link href="#bakes" className="px-6 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-aura-gold hover:border-aura-gold hover:bg-aura-gold/5 transition-all whitespace-nowrap scroll-smooth">Artisanal Bakes</Link>
            </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 py-16 space-y-24">
            <section id="specials" className="scroll-mt-40">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold">Aura Specials</h2>
                    <div className="h-[1px] bg-white/10 flex-grow"></div>
                </div>

                {specials.length === 0 ? (
                  <div className="col-span-full py-10 text-center text-gray-500">
                    <p>No signature drinks found. Add them via the /admin panel.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {specials.map(item => (
                          <div key={item._id} className="bg-aura-card p-5 rounded-xl group hover:border-aura-gold/30 border border-white/5 transition-all duration-300">
                              <div className="flex justify-between items-start mb-2 mt-4">
                                  <h3 className="font-bold text-lg group-hover:text-aura-gold transition-colors">{item?.name || 'Unnamed Item'}</h3>
                                  <span className="text-aura-gold font-bold text-lg">₹{item?.price || 0}</span>
                              </div>
                              <p className="text-gray-500 text-xs leading-relaxed">{item?.description || ''}</p>
                          </div>
                      ))}
                  </div>
                )}
            </section>

            <section id="manual" className="scroll-mt-40">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold">Manual Brews</h2>
                    <div className="h-[1px] bg-white/10 flex-grow"></div>
                </div>

                <div className="bg-aura-card rounded-2xl overflow-hidden border border-white/5 grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-80 md:h-auto group overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1442512595331-e89e7385a861?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <p className="text-aura-gold italic font-serif text-lg border-l-2 border-aura-gold pl-4">
                                &quot;The ritual of the pour, the patience of the bloom. Choose your extraction method.&quot;
                            </p>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="space-y-6">
                            {manual.length === 0 ? (
                                <p className="text-gray-500 text-sm">No manual brews found. Add them via /admin panel.</p>
                            ) : (
                                manual.map(item => (
                                    <div key={item._id} className="flex justify-between items-center border-b border-white/5 pb-4 group cursor-pointer hover:pl-2 transition-all">
                                        <div>
                                            <h4 className="font-bold flex items-center gap-2 text-lg group-hover:text-aura-gold transition-colors">{item?.name || 'Unnamed Brew'}</h4>
                                            <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">{item?.description || ''}</p>
                                        </div>
                                        <span className="text-aura-gold font-bold text-lg">₹{item?.price || 0}</span>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="mt-8 bg-white/5 rounded-xl p-4 flex items-center gap-4 border border-white/5">
                            <div className="w-12 h-12 bg-aura-dark rounded-lg flex items-center justify-center text-aura-gold font-bold text-xl border border-white/10">M</div>
                            <div>
                                <p className="text-[10px] text-aura-gold font-bold uppercase tracking-widest mb-1">Today&#39;s Single Origin</p>
                                <p className="text-sm font-bold text-white">MS Estate, Chikmagalur (Light Roast)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="bakes" className="scroll-mt-40">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold">Artisanal Bakes</h2>
                    <div className="h-[1px] bg-white/10 flex-grow"></div>
                </div>

                {bakes.length === 0 ? (
                  <div className="col-span-full py-10 text-center text-gray-500">
                    <p>No artisanal bakes found. Add them via the /admin panel.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      {bakes.map(item => (
                          <div key={item._id} className="flex gap-6 group">
                              <div className="flex flex-col justify-center w-full border-b border-white/5 pb-2">
                                  <div className="flex justify-between items-start mb-1">
                                      <h3 className="font-bold text-lg group-hover:text-aura-gold transition-colors">{item?.name || 'Unnamed Bake'}</h3>
                                      <span className="text-aura-gold font-bold">₹{item?.price || 0}</span>
                                  </div>
                                  <p className="text-gray-500 text-xs leading-relaxed">{item?.description || ''}</p>
                              </div>
                          </div>
                      ))}
                  </div>
                )}
            </section>
        </div>
    </>
  );
}
