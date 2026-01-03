export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string | "clothing" | "Tech";
}
export interface CartItem extends Product {
  quantity: number;
}
