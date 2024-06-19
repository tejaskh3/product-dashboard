export interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  product: ProductType;
  quantity: number;
  order_value: number;
}
export const products = {
  PRODUCT_1: "Product 1",
  PRODUCT_2: "Product 2",
  PRODUCT_3: "Product 3",
} as const;
export type ProductType = (typeof products)[keyof typeof products];

export const ProductPrice = {
  "Product 1": 29,
  "Product 2": 49,
  "Product 3": 149,
};
