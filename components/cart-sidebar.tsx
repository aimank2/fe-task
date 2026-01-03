"use client";
import { useCart } from "@/context/cart-context";
import { CartItem } from "@/types";
import { Box, Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const CartSidebar = () => {
  const { cart, addToCart, rmvFromCart, updtQty, totalItems, totalPrice } =
    useCart();

  return (
    <div className="flex flex-col justify-between items-center gap-4 h-full">
      <div className="flex flex-col gap-4">
        {cart.map((p: CartItem) => (
          <div key={p.id} className="flex flex-col justify-center items-center">
            <div className="flex flex-row items-center gap-2">
              <Button
                className="flex justify-center items-center p-1 rounded-full size-6"
                onClick={() => {
                  updtQty(p.id, p.quantity - 1);
                }}
              >
                <Minus />
              </Button>
              {p?.image ? (
                <Image
                  src={p?.image}
                  alt={p.name}
                  className="bg-gray-200 rounded-2xl size-20"
                  width={60}
                  height={60}
                />
              ) : (
                <div className="flex justify-center items-center bg-gray-200 rounded-2xl size-20">
                  <Box />
                </div>
              )}

              <Button
                className="flex justify-center items-center p-1 rounded-full size-6"
                onClick={() => addToCart(p)}
              >
                <Plus />
              </Button>
              <Button
                className="flex justify-center items-center bg-red-400 p-1 rounded-full size-6"
                onClick={() => rmvFromCart(p.id)}
              >
                <Trash />
              </Button>
            </div>
            <p className="capitalize">
              {p.name} QTY: {p.quantity}
            </p>
          </div>
        ))}
      </div>
      <div>
        Total Items: {totalItems}
        <br />
        Total Price: {totalPrice}
      </div>
    </div>
  );
};

export default CartSidebar;
