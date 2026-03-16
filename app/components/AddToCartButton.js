'use client';

import { useCart } from '@/app/context/CartContext';

export default function AddToCartButton({ title, price, imageSrc, className, children }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Check if price is a string, otherwise convert to handle regex replacement
    const stringPrice = price ? price.toString() : "0";
    addToCart({
      title,
      price: parseInt(stringPrice.replace(/[^\d]/g, ''), 10),
      imageSrc
    });
  };

  return (
    <button onClick={handleAddToCart} className={className}>
      {children}
    </button>
  );
}
