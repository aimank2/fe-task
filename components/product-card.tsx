import { Product } from "@/app/types";
import { Box } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const currency = "$";
  return (
    <div className="flex flex-col gap-4 bg-gray-300 p-4 rounded-xl w-56 h-96">
      <div className="flex-1 min-h-72">
        {product?.image ? (
          <Image src={product?.image} fill alt={product?.name} />
        ) : (
          <div className="flex justify-center items-center w-full h-full">
            <Box />
          </div>
        )}
      </div>
      <div className="flex flex-row justify-between gap-2">
        <Button>Add to Cart</Button>{" "}
        <p>
          Price: {product?.price} {currency}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
