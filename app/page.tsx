"use client";
import Filters from "@/components/Filters";
import ProductCard from "@/components/product-card";
import { getProducts } from "@/lib/products";
import { useMemo, useState } from "react";

export default function Home() {
  const products = getProducts();
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (category != "All" && p.category != category) return false;
      if (priceRange != "All" && priceRange === "<100" && p.price >= 100)
        return false;
      if (priceRange != "All" && priceRange === ">500" && p.price <= 500)
        return false;
      if (
        priceRange != "All" &&
        priceRange === "100-500" &&
        (p.price <= 100 || p.price >= 500)
      )
        return false;
      return true;
    });
  }, [category, products, priceRange]);
  return (
    <main className="mx-auto p-8 container">
      <div className="flex justify-center items-center my-8">
        <h1 className="text-4xl bold"> Welcome to my store FET</h1>
      </div>
      <Filters
        setCategory={setCategory}
        category={category}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <div className="flex flex-wrap gap-4">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
