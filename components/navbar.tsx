"use client";
import { Home, ShoppingBag } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-4 px-12">
      <Link href={"/"}>
        <Home />
      </Link>
      <div>Search Bar Input</div>
      <Link href={"/cart"}>
        <div>
          <ShoppingBag />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
