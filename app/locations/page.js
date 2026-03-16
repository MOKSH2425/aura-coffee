import Link from 'next/link';
import { client, urlFor } from '@/lib/sanity';

export default async function Locations() {
  const locations = (await client.fetch(`*[_type == "location"] | order(name asc)`)) || [];
  return (
    <div className="pt-20 px-6 max-w-[1400px] mx-auto pb-20">
        <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Sanctuary</h1>
            <p className="text-gray-400 text-sm">Design-forward spaces built for conversation and craft.</p>
        </div>

        {locations.length === 0 ? (
          <div className="py-20 text-center text-gray-500">
            <span className="material-icons text-5xl mb-4 block opacity-50">store</span>
            <p>No locations found. Add them via the /admin panel.</p>
          </div>
        ) : (
          locations.map((loc, idx) => {
            const isLeftImage = idx % 2 === 0;

            return (
              <div key={loc._id} className="bg-aura-card border border-white/5 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mb-16 shadow-2xl hover:border-aura-gold/20 transition-all duration-500">
                  {isLeftImage ? (
                    <div className="h-96 md:h-auto relative group">
                        {loc?.image && loc?.image?.asset && (
                          <img src={urlFor(loc.image).url()} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        )}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                  ) : null}
                  
                  <div className={`p-12 lg:p-20 flex flex-col justify-center ${isLeftImage ? '' : 'order-2 md:order-1'}`}>
                      <div className="flex items-center gap-3 mb-6">
                          <span className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-green-500 animate-pulse' : 'bg-green-500'}`}></span>
                          <span className="text-aura-gold text-[10px] font-bold uppercase tracking-[0.2em]">{idx === 0 ? 'Flagship Store' : 'Concept Store'}</span>
                      </div>
                      <h2 className="text-3xl font-bold mb-6">{loc?.name || 'Aura Location'}</h2>
                      <p className="text-gray-400 text-sm mb-10 leading-relaxed">
                          {loc?.neighborhood && <span>Experience the Aura blend right in the heart of {loc.neighborhood}.</span>}
                      </p>
                      
                      <div className="space-y-6 mb-10 border-t border-white/5 pt-8">
                          <div className="flex gap-4 items-start">
                              <span className="material-icons text-aura-gold text-sm mt-1">location_on</span>
                              <div>
                                  <p className="text-sm font-bold text-white mb-1">Address</p>
                                  <p className="text-xs text-gray-400">{loc?.address || ''}, {loc?.city || ''}</p>
                              </div>
                          </div>
                          {loc?.hours && (
                            <div className="flex gap-4 items-start">
                                <span className="material-icons text-aura-gold text-sm mt-1">schedule</span>
                                <div>
                                    <p className="text-sm font-bold text-white mb-1">Hours</p>
                                    <p className="text-xs text-gray-400">{loc.hours}</p>
                                </div>
                            </div>
                          )}
                          {loc?.phone && (
                            <div className="flex gap-4 items-start">
                                <span className="material-icons text-aura-gold text-sm mt-1">phone</span>
                                <div>
                                    <p className="text-sm font-bold text-white mb-1">Contact</p>
                                    <p className="text-xs text-gray-400">{loc.phone}</p>
                                </div>
                            </div>
                          )}
                      </div>
                      <div className="flex gap-4">
                          <button className="border border-white/20 text-white px-8 py-3 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Get Directions</button>
                          <Link href="/book" className="bg-aura-gold text-black px-8 py-3 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors">Book Table</Link>
                      </div>
                  </div>

                  {!isLeftImage ? (
                    <div className="h-96 md:h-auto relative order-1 md:order-2 group">
                        {loc?.image && loc?.image?.asset && (
                          <img src={urlFor(loc.image).url()} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        )}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                  ) : null}
              </div>
            );
          })
        )}
    </div>
  );
}
