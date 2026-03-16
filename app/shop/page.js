import Link from 'next/link';
import { client, urlFor } from '@/lib/sanity';
import AddToCartButton from '../components/AddToCartButton';

export default async function Shop() {
  const products = (await client.fetch(`*[_type == "product"] | order(_createdAt desc)`)) || [];

  return (
    <>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden -mt-20">
            <div className="absolute inset-0 z-0">
                <img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1511537632536-b74c276ecf00?q=80&w=2670&auto=format&fit=crop" alt="Coffee Hero" />
                <div className="absolute inset-0 bg-gradient-to-r from-aura-dark via-aura-dark/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto mt-10">
                <div className="max-w-xl">
                    <span className="inline-block px-3 py-1 mb-4 rounded bg-[#3D2C1D] text-aura-gold text-[10px] font-bold uppercase tracking-[0.2em] border border-aura-gold/20">Limited Release</span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Aura Signature <br /><span className="text-aura-gold">Blend</span></h1>
                    <p className="text-gray-300 text-sm mb-8 leading-relaxed font-light">
                        Sourced from the misty hills of Chikmagalur and roasted in-house. Experience a sophisticated profile of Dark Chocolate, Roasted Almond, and a hint of Citrus.
                    </p>
                    <div className="flex gap-4">
                        <AddToCartButton title="Aura Signature Blend" price="599" imageSrc="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2670&auto=format&fit=crop" className="bg-aura-gold text-aura-dark font-bold px-8 py-3 rounded-md text-xs uppercase tracking-[0.15em] hover:bg-white transition-all shadow-lg shadow-aura-gold/20 flex items-center gap-2">
                            Shop Now <span className="material-icons text-sm">arrow_forward</span>
                        </AddToCartButton>
                        <button className="border border-white/20 text-white font-bold px-8 py-3 rounded-md text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all">
                            Tasting Notes
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Filter Navigation */}
        <div className="sticky top-20 z-40 bg-aura-dark/95 border-b border-white/5 backdrop-blur-sm shadow-xl">
            <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex gap-3 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
                    <button className="px-6 py-2 rounded-full border border-aura-gold text-xs font-bold uppercase tracking-widest text-aura-dark bg-aura-gold transition-all whitespace-nowrap cursor-pointer">All Products</button>
                    <button className="px-6 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:border-white transition-all whitespace-nowrap cursor-pointer">Coffee Beans</button>
                    <button className="px-6 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:border-white transition-all whitespace-nowrap cursor-pointer">Apparel</button>
                    <button className="px-6 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:border-white transition-all whitespace-nowrap cursor-pointer">Brewing Gear</button>
                </div>
                
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <span className="material-icons text-sm">sort</span>
                    <span>Sort by:</span>
                    <select className="bg-transparent border-none text-white font-bold p-0 pr-6 cursor-pointer focus:ring-0 text-[10px] uppercase tracking-widest outline-none">
                        <option className="bg-aura-card">Featured</option>
                        <option className="bg-aura-card">Price: Low to High</option>
                        <option className="bg-aura-card">Newest</option>
                    </select>
                </div>
            </div>
        </div>

        {/* Products Grid */}
        <section className="py-16 px-6 bg-[#0E0906]">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {products.length === 0 ? (
                  <div className="col-span-full py-20 text-center text-gray-500">
                    <span className="material-icons text-5xl mb-4 block opacity-50">inventory_2</span>
                    <p>No products found in the Sanity CMS. Please add some via the /admin panel.</p>
                  </div>
                ) : (
                  products.map((product) => (
                    <div key={product._id} className="bg-aura-card rounded-xl overflow-hidden group border border-transparent hover:border-aura-gold/20 transition-all duration-300 flex flex-col">
                        <div className="aspect-[4/5] relative overflow-hidden bg-[#251F1A]">
                            <span className="absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-aura-gold/20 backdrop-blur-md bg-black/40 text-aura-gold">
                                {product?.roastLevel === 'none' ? product?.category : product?.roastLevel?.replace('-', ' ')}
                            </span>
                            {product?.image && product?.image?.asset && (
                                <img src={urlFor(product.image).url()} alt={product?.title || 'Product Image'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            )}
                            {/* Note: In a Server Component we can't easily pass down onClick without creating a separate Client Component for the product card. For simplicity here, we're assuming you might break this product card out into a Client Component `<ProductCard />` later. */}
                            <button className="absolute bottom-4 right-4 bg-aura-gold text-aura-dark w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg hover:scale-110">
                                <span className="material-icons text-sm">visibility</span>
                            </button>
                        </div>
                        <div className="p-5 flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-base mb-1 group-hover:text-aura-gold transition-colors">{product?.title || 'Unnamed Product'}</h3>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-1">{product?.shortDescription || product?.description || ''}</p>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                                <span className="font-bold text-lg">₹{product?.price || 0}</span>
                                {product?.rating && (
                                    <div className="flex items-center text-aura-gold text-xs font-bold gap-1">
                                        <span className="material-icons text-[14px]">star</span> {product.rating}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                  ))
                )}

            </div>
        </section>

        {/* Info Section */}
        <section className="bg-[#18120d] border-t border-white/5 py-16">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <span className="material-icons text-aura-gold text-3xl mb-4">local_shipping</span>
                    <h4 className="font-bold text-sm mb-2 text-white">Pan-India Shipping</h4>
                    <p className="text-gray-500 text-xs max-w-xs leading-relaxed">Freshly roasted beans delivered to your doorstep within 48 hours.</p>
                </div>
                <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-white/5 py-8 md:py-0">
                    <span className="material-icons text-aura-gold text-3xl mb-4">verified</span>
                    <h4 className="font-bold text-sm mb-2 text-white">Ethically Sourced</h4>
                    <p className="text-gray-500 text-xs max-w-xs leading-relaxed">Direct trade relationships with farmers in Chikmagalur & Wayanad.</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="material-icons text-aura-gold text-3xl mb-4">lock</span>
                    <h4 className="font-bold text-sm mb-2 text-white">Secure Payments</h4>
                    <p className="text-gray-500 text-xs max-w-xs leading-relaxed">100% secure UPI, Credit/Debit card and Netbanking transactions.</p>
                </div>
            </div>
        </section>

        {/* Club Section */}
        <section className="bg-aura-gold py-16 px-6">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-aura-dark mb-2">Join The Aura Club</h2>
                    <p className="text-aura-dark/80 text-sm max-w-lg font-medium">Subscribe to get early access to limited micro-lots and exclusive brewing tips from our head roaster.</p>
                </div>
                <div className="flex w-full md:w-auto gap-2 bg-aura-dark/10 p-1.5 rounded-lg">
                    <input type="email" placeholder="Enter your email" className="px-6 py-3 rounded-md border-none text-gray-800 w-full md:w-80 focus:ring-0 bg-white placeholder-gray-500 text-sm outline-none" />
                    <button className="bg-[#2A231D] text-white font-bold px-8 py-3 rounded-md text-sm hover:bg-black transition-colors whitespace-nowrap uppercase tracking-wider">Join Now</button>
                </div>
            </div>
        </section>
    </>
  );
}
