import Link from 'next/link';
import Image from 'next/image';

export default function Rewards() {
  return (
    <div className="bg-aura-dark text-white font-display flex h-screen overflow-hidden fixed inset-0 z-50">
        <aside className="w-72 bg-[#0E0906] border-r border-white/5 flex flex-col hidden md:flex h-full">
            <div className="p-8 pb-12">
                <Link className="flex items-center gap-3 group" href="/">
                    <div className="bg-aura-gold p-1.5 rounded-md">
                        <span className="material-icons text-aura-dark text-lg">auto_awesome</span>
                    </div>
                    <span className="text-xl font-bold tracking-widest uppercase">AURA</span>
                </Link>
            </div>

            <nav className="flex-grow px-4 space-y-2">
                <Link href="/" className="flex items-center gap-4 px-4 py-3 rounded-lg text-sm bg-[#261E18] text-aura-gold border-r-2 border-aura-gold font-medium">
                    <span className="material-icons text-xl">dashboard</span> Dashboard
                </Link>
                <Link href="/menu" className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-500 font-medium hover:text-white transition-colors text-sm">
                    <span className="material-icons text-xl">restaurant_menu</span> The Menu
                </Link>
                <Link href="/shop" className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-500 font-medium hover:text-white transition-colors text-sm">
                    <span className="material-icons text-xl">shopping_bag</span> Shop Beans
                </Link>
                <Link href="#" className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-500 font-medium hover:text-white transition-colors text-sm">
                    <span className="material-icons text-xl">history</span> History
                </Link>
            </nav>

            <div className="p-6 border-t border-white/5">
                <div className="bg-[#1C1612] p-5 rounded-xl border border-white/5 relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-[10px] text-aura-gold font-bold uppercase tracking-widest mb-1">Status</p>
                        <div className="flex justify-between items-end mb-3">
                            <p className="font-bold text-sm">Gold Member</p>
                            <span className="text-[10px] text-gray-500">550 to Platinum</span>
                        </div>
                        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-aura-gold h-full w-3/4 rounded-full shadow-[0_0_10px_rgba(224,142,0,0.5)]"></div>
                        </div>
                    </div>
                    <span className="material-icons absolute -bottom-2 -right-2 text-6xl text-white/5">military_tech</span>
                </div>
            </div>
        </aside>

        <main className="flex-grow overflow-y-auto p-6 md:p-12 relative bg-[#120C08]">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, <span className="text-aura-gold">Arjun</span>.</h1>
                    <p className="text-gray-500 text-sm">Your daily dose of premium craft is waiting.</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-gray-400 hover:text-white transition-all relative">
                        <span className="material-icons text-xl">notifications</span>
                        <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-aura-gold rounded-full border-2 border-[#0E0906]"></span>
                    </button>
                    <div className="w-12 h-12 rounded-xl bg-gray-200 overflow-hidden border-2 border-white/10 relative">
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover" />
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-8">
                    <div className="rounded-[2rem] p-8 md:p-10 relative overflow-hidden h-72 flex flex-col justify-between shadow-2xl" style={{background: 'linear-gradient(135deg, #4A3B2A 0%, #2A2118 100%)', border: '1px solid rgba(255, 255, 255, 0.05)'}}>
                        <div className="flex justify-between items-start z-10">
                            <div>
                                <p className="text-[10px] text-aura-gold font-bold uppercase tracking-[0.2em] mb-2">Digital Membership</p>
                                <h2 className="text-3xl font-bold text-white tracking-tight">Aura Elite Card</h2>
                            </div>
                            <span className="material-icons text-aura-gold/50 text-4xl rotate-45">contactless</span>
                        </div>

                        <div className="flex justify-between items-end z-10">
                            <div>
                                <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">Points Balance</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-6xl font-bold tracking-tighter">1,450</span>
                                    <span className="text-aura-gold font-bold text-xl">AP</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-white/40 italic mb-1">Member Since 2023</p>
                                <p className="font-bold text-sm tracking-[0.15em] uppercase text-white/90">ARJUN SHARMA</p>
                            </div>
                        </div>
                        
                        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-aura-gold/10 rounded-full blur-[80px]"></div>
                    </div>

                    <div className="bg-aura-card rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-10 relative z-10">
                            <div>
                                <h3 className="font-bold text-xl text-white">Aura Stamps</h3>
                                <p className="text-gray-500 text-xs mt-1">Buy 5 handcrafted beverages, get 1 free.</p>
                            </div>
                            <span className="bg-[#2D2620] text-aura-gold px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider border border-aura-gold/10">4 of 5 Collected</span>
                        </div>

                        <div className="flex justify-between items-center max-w-lg relative z-10 overflow-x-auto pb-2">
                            <div className="flex flex-col items-center gap-2 min-w-[60px]">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg mb-2 relative transition-all duration-300 bg-aura-gold shadow-[0_0_15px_rgba(224,142,0,0.4)] text-aura-dark"><span className="material-icons text-xl">coffee</span></div>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Mar 12</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 min-w-[60px]">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg mb-2 relative transition-all duration-300 bg-aura-gold shadow-[0_0_15px_rgba(224,142,0,0.4)] text-aura-dark"><span className="material-icons text-xl">coffee</span></div>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Mar 14</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 min-w-[60px]">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg mb-2 relative transition-all duration-300 bg-aura-gold shadow-[0_0_15px_rgba(224,142,0,0.4)] text-aura-dark"><span className="material-icons text-xl">coffee</span></div>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Mar 15</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 min-w-[60px]">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg mb-2 relative transition-all duration-300 bg-aura-gold shadow-[0_0_15px_rgba(224,142,0,0.4)] text-aura-dark ring-2 ring-aura-gold ring-offset-2 ring-offset-aura-card"><span className="material-icons text-xl">coffee</span></div>
                                <span className="text-[10px] font-bold text-aura-gold uppercase tracking-wide">Today</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 min-w-[60px]">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 relative transition-all duration-300 border border-dashed border-gray-600 text-gray-600"><span className="material-icons text-xl">add</span></div>
                                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">Next</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 min-w-[60px]">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 relative transition-all duration-300 border-2 border-aura-gold text-aura-gold shadow-[0_0_20px_rgba(224,142,0,0.1)]">
                                    <span className="material-icons text-xl">redeem</span>
                                </div>
                                <span className="text-[10px] font-bold text-aura-gold uppercase tracking-wide">Reward</span>
                            </div>
                        </div>

                        <div className="mt-10 bg-[#2A221C] rounded-xl p-5 flex items-center gap-4 border border-aura-gold/10 relative z-10">
                            <div className="w-10 h-10 rounded-lg bg-aura-gold/20 flex items-center justify-center text-aura-gold shrink-0">
                                <span className="material-icons text-lg">info</span>
                            </div>
                            <p className="text-xs text-gray-300 leading-relaxed">
                                <span className="text-aura-gold font-bold">Almost there!</span> Visit us once more to unlock your Free Premium Brew. Valid on all manual brews and espresso beverages.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <Link href="/menu" className="bg-aura-gold rounded-2xl p-6 flex flex-col justify-between h-36 hover:scale-[1.02] transition-transform shadow-lg shadow-aura-gold/10 group">
                            <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-aura-gold transition-colors">
                                <span className="material-icons text-xl">restaurant_menu</span>
                            </div>
                            <div>
                                <p className="font-bold text-aura-dark text-lg">Menu</p>
                                <p className="text-aura-dark/70 text-[10px] uppercase tracking-wider font-bold">Order ahead</p>
                            </div>
                        </Link>
                        <Link href="/shop" className="bg-[#1E1915] rounded-2xl p-6 flex flex-col justify-between h-36 border border-white/5 hover:border-aura-gold/50 transition-colors group">
                            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-aura-gold group-hover:bg-aura-gold group-hover:text-aura-dark transition-colors">
                                <span className="material-icons text-xl">shopping_bag</span>
                            </div>
                            <div>
                                <p className="font-bold text-white text-lg">Shop Beans</p>
                                <p className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">Home brewing</p>
                            </div>
                        </Link>
                    </div>

                    <div className="bg-aura-card rounded-[2rem] p-8 border border-white/5 h-auto">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="font-bold text-sm text-white">Recent Activity</h3>
                            <Link href="#" className="text-[10px] text-aura-gold font-bold uppercase tracking-wider hover:underline">View All</Link>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#182823] text-green-500 flex items-center justify-center border border-green-500/10">
                                        <span className="material-icons text-sm">coffee</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white group-hover:text-aura-gold transition-colors">Monsoon Malabar</p>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Mar 15</p>
                                    </div>
                                </div>
                                <span className="text-aura-gold font-bold text-sm">+45 AP</span>
                            </div>

                            <div className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#2A221C] text-aura-gold flex items-center justify-center border border-aura-gold/10">
                                        <span className="material-icons text-sm">redeem</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white group-hover:text-aura-gold transition-colors">Reward Redeemed</p>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Mar 10</p>
                                    </div>
                                </div>
                                <span className="text-gray-500 font-bold text-sm">-250 AP</span>
                            </div>

                             <div className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#182823] text-green-500 flex items-center justify-center border border-green-500/10">
                                        <span className="material-icons text-sm">coffee</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white group-hover:text-aura-gold transition-colors">Espresso Double</p>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Mar 08</p>
                                    </div>
                                </div>
                                <span className="text-aura-gold font-bold text-sm">+30 AP</span>
                            </div>
                        </div>

                        <div className="mt-8 relative h-32 rounded-xl overflow-hidden group cursor-pointer border border-white/10">
                            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110 grayscale" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                    <span className="material-icons text-aura-gold text-sm">location_on</span> Visit Aura Bangalore
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 flex justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
                <p>© 2026 AuraCoffee Premium Roasters.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white">Terms</Link>
                    <Link href="#" className="hover:text-white">Privacy</Link>
                    <Link href="#" className="hover:text-white">Support</Link>
                </div>
            </div>
        </main>

        <nav className="fixed bottom-0 w-full bg-[#1E1915]/90 backdrop-blur-xl border-t border-white/5 flex justify-between px-8 py-4 md:hidden z-50">
            <Link href="/" className="text-aura-gold flex flex-col items-center gap-1">
                <span className="material-icons">dashboard</span>
            </Link>
            <Link href="/menu" className="text-gray-500 flex flex-col items-center gap-1">
                <span className="material-icons">restaurant_menu</span>
            </Link>
            <Link href="/shop" className="text-gray-500 flex flex-col items-center gap-1">
                <span className="material-icons">shopping_bag</span>
            </Link>
            <Link href="#" className="text-gray-500 flex flex-col items-center gap-1">
                <span className="material-icons">person</span>
            </Link>
        </nav>
    </div>
  );
}
