import Home from "@/components/home-page";
import { getProducts } from "@/lib/products";

export default function Page() {
  const products = getProducts();

  return (
    <main className="mx-auto p-8 container">
      <div className="flex justify-center items-center my-8">
        <h1 className="text-4xl bold"> Welcome to my store FET</h1>
      </div>
      <Home products={products} />
    </main>
  );
}
