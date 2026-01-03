"use client";
import { useCart } from "@/context/cart-context";
import { Home, ShoppingBag } from "lucide-react";
import Link from "next/link";
import CartSidebar from "./cart-sidebar";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <div className="flex flex-row justify-between p-4 px-12">
      <Link href={"/"}>
        <Home />
      </Link>
      <Sheet>
        <SheetTrigger className="relative">
          <ShoppingBag />
          <span className="-top-2 -right-4 absolute bg-red-400 px-2 rounded-full">
            {totalItems === 0 ? null : totalItems}
          </span>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-2 p-4">
          <SheetTitle>Cart</SheetTitle>
          <CartSidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
