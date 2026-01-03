/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { CartItem, Product } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CartCntxt = createContext<any>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const totalItems = cart.reduce((sum, p) => sum + p.quantity, 0);
  const totalPrice = cart.reduce((sum, p) => sum + p.quantity * p.quantity, 0);
  useEffect(() => {
    const savedCart = localStorage.getItem("Cart");
    if (savedCart)
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.log(e);
      }
  }, []);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  const rmvFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };
  const updtQty = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      rmvFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, quantity } : p))
    );
  };

  return (
    <CartCntxt.Provider
      value={{
        cart,
        addToCart,
        rmvFromCart,
        updtQty,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartCntxt.Provider>
  );
}

export function useCart() {
  const cntxt = useContext(CartCntxt);
  if (!cntxt) console.log("Cart context error");
  return cntxt;
}
