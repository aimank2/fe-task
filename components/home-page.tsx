"use client";
import Filters from "@/components/Filters";
import ProductCard from "@/components/product-card";
import { Product } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function Home({ products }: { products: Product[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get("category") ?? "All";
  const defaultPriceRange = searchParams.get("range") ?? "All";
  const [category, setCategory] = useState(defaultCategory);
  const [priceRange, setPriceRange] = useState(defaultPriceRange);
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

  useEffect(() => {
    const params = new URLSearchParams();
    if (category !== "All") {
      params.set("category", category);
    }
    if (priceRange !== "All") {
      params.set("range", priceRange);
    }
    const query = params.toString();
    const pathname = window.location.pathname;
    router.replace(query ? `${pathname}?${params.toString()}` : pathname, {
      scroll: false,
    });
  }, [category, priceRange, router]);

  return (
    <>
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
    </>
  );
}
