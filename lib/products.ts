import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "addidas shoe",
    image: "",
    description: "Some description here....",
    price: 99,
    category: "clothing",
  },
];
export const getProducts = (): Product[] => {
  return PRODUCTS;
};
