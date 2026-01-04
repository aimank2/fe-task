import { PRODUCTS } from "@/lib/products";
import { Box } from "lucide-react";
import Image from "next/image";
export const dynamic = "force-static";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}
async function page({ params }: { params: Promise<{ id: string }> }) {
  const currency = "$";
  const { id } = await params;
  const p = PRODUCTS.find((p) => p.id === id);
  return (
    <div className="flex flex-col items-center gap-4 mt-28 p-8">
      <h1 className="text-2xl capitalize bold">{p?.name}</h1>
      <div className="bg- bg-gray-300 rounded-2xl size-56">
        {p?.image ? (
          <Image src={p?.image} fill alt={p?.name} />
        ) : (
          <div className="flex justify-center items-center w-full h-full">
            <Box />
          </div>
        )}
      </div>
      <p>{p?.description}</p>
      <p>
        Only for {p?.price} {currency}
      </p>
    </div>
  );
}

export default page;
