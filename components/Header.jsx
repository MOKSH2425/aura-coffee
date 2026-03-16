'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import { useAuth } from '@/app/context/AuthContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart, totalItems, totalPrice, isMounted } = useCart();
  const { user } = useAuth();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-aura-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="material-icons text-aura-gold text-2xl">auto_awesome</span>
            <span className="text-xl font-bold tracking-widest uppercase">AURA <span className="text-aura-gold">COFFEE</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link href="/menu" className="text-[10px] font-bold text-white hover:text-aura-gold transition-colors uppercase tracking-[0.2em]">Menu</Link>
            <Link href="/shop" className="text-[10px] font-bold text-white/80 hover:text-aura-gold transition-colors uppercase tracking-[0.2em]">Shop</Link>
            <Link href="/locations" className="text-[10px] font-bold text-white/80 hover:text-aura-gold transition-colors uppercase tracking-[0.2em]">Locations</Link>
            <Link href="/contact" className="text-[10px] font-bold text-white/80 hover:text-aura-gold transition-colors uppercase tracking-[0.2em]">Contact</Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href={user ? "/rewards" : "/login"} className="text-white/80 hover:text-aura-gold transition-colors">
              <span className={`material-symbols-outlined text-xl ${user ? 'text-aura-gold' : ''}`}>account_circle</span>
            </Link>

            <button onClick={() => toggleCart(true)} className="text-white/80 hover:text-aura-gold transition-colors relative">
              <span className="material-icons text-xl">shopping_bag</span>
              {isMounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-aura-gold text-aura-dark text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold transition-transform">
                    {totalItems}
                </span>
              )}
            </button>

            <Link href="/menu" className="hidden md:inline-block bg-aura-gold text-aura-dark font-bold px-6 py-2 rounded text-[10px] uppercase tracking-widest hover:bg-white transition-colors">
              Order Now
            </Link>

            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-white hover:text-aura-gold transition-colors ml-2">
              <span className="material-icons text-2xl">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => toggleCart(false)}></div>
          <div className="relative h-full w-80 md:w-96 bg-[#120C08] border-l border-white/10 z-[70] shadow-2xl flex flex-col animate-slide-in-right">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#1E1915]">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Your Selection <span className="text-aura-gold text-xs bg-aura-gold/10 px-2 py-1 rounded-full">{totalItems} Items</span>
              </h2>
              <button onClick={() => toggleCart(false)} className="text-gray-400 hover:text-white transition-colors">
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="flex-grow p-6 overflow-y-auto">
                {isMounted && cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-500 opacity-50 mt-10">
                        <span className="material-icons text-4xl mb-2">shopping_bag</span>
                        <p className="text-xs uppercase tracking-widest">Your bag is empty</p>
                    </div>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className="flex gap-4 mb-6 animate-fade-in border-b border-white/5 pb-4 last:border-0">
                            {item.imageSrc && <img src={item.imageSrc} className="w-16 h-16 object-cover rounded-md bg-gray-800" alt={item.title} />}
                            <div className="flex-grow">
                                <h4 className="text-sm font-bold text-white leading-tight mb-1">{item.title}</h4>
                                <p className="text-xs text-aura-gold font-bold">₹{item.price}</p>
                                <div className="flex items-center gap-3 mt-2 bg-[#2A2521] inline-flex rounded-md p-1">
                                    <button onClick={() => updateQuantity(index, -1)} className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-xs hover:bg-white/20 text-white">-</button>
                                    <span className="text-xs font-bold text-white w-4 text-center">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(index, 1)} className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-xs hover:bg-white/20 text-white">+</button>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(index)} className="text-gray-500 hover:text-red-500 self-start p-1">
                                <span className="material-icons text-sm">close</span>
                            </button>
                        </div>
                    ))
                )}
            </div>
            <div className="p-6 border-t border-white/5 bg-[#1E1915]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Subtotal</span>
                <span className="text-xl font-bold text-white">₹{totalPrice}</span>
              </div>
              <p className="text-[10px] text-gray-500 mb-6">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-aura-gold text-aura-dark font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-aura-gold/20">Checkout</button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#120C08]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden animate-fade-in">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-white">
            <span className="material-icons text-3xl">close</span>
          </button>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-white hover:text-aura-gold">Home</Link>
          <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-white hover:text-aura-gold">Menu</Link>
          <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-white hover:text-aura-gold">Shop</Link>
          <Link href={user ? "/rewards" : "/login"} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-aura-gold">My Account</Link>
        </div>
      )}
    </>
  );
}
