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
  {
    id: "2",
    name: "Iphone",
    image: "",
    description: "Some description here....",
    price: 999,
    category: "Tech",
  },
];
export const getProducts = (): Product[] => {
  return PRODUCTS;
};
