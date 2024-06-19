export interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  product: "Product 1" | "Product 2" | "Product 3";
  quantity: number;
  order_value: number;
}

export const ProductPrice = {
  "Product 1": 29,
  "Product 2": 49,
  "Product 3": 149,
};
