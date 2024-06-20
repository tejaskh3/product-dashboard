import React, { useState } from "react";
import { Order } from "../types/ordersData";
import { ProductPrice } from "../types/ordersData";

interface CreateOrderModalProps {
  onClose: () => void;
  onSave: (newOrder: Order) => void;
}

const CreateOrderModal: React.FC<CreateOrderModalProps> = ({
  onClose,
  onSave,
}) => {
  const [order, setOrder] = useState<Order>({
    id: "",
    customer_name: "",
    customer_email: "",
    product: "Product 1", // default value
    quantity: 1,
    order_value: ProductPrice["Product 1"],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => {
      const updatedOrder = { ...prevOrder, [name]: value };
      // Calculate order_value based on product and quantity
      const orderValue =
        ProductPrice[updatedOrder.product] * updatedOrder.quantity;
      return {
        ...updatedOrder,
        order_value: orderValue,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(order);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Create New Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Order Id</label>
            <input
              type="text"
              name="id"
              // TODO: later this id will be made by DB
              value={order.id}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Customer Name</label>
            <input
              type="text"
              name="customer_name"
              value={order.customer_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Customer Email</label>
            <input
              type="email"
              name="customer_email"
              value={order.customer_email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Product</label>
            <select
              name="product"
              value={order.product}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="Product 1">Product 1</option>
              <option value="Product 2">Product 2</option>
              <option value="Product 3">Product 3</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={order.quantity}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Order Value</label>
            <input
              type="number"
              name="order_value"
              value={order.order_value}
              readOnly
              className="w-full px-3 py-2 border rounded bg-gray-100"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 mr-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOrderModal;
