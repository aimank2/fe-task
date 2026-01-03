import ProductCard from "@/components/product-card";
import { getProducts } from "@/lib/products";

export default function Home() {
  const products = getProducts();

  return (
    <main className="mx-auto p-8 container">
      <div className="flex justify-center items-center my-8">
        <h1 className="text-4xl bold"> Welcome to my store FET</h1>
      </div>
      {/* <Filters/> */}
      <div className="flex flex-wrap gap-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
