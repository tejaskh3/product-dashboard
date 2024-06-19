import React, { useState } from "react";
import { Order, ProductPrice } from "../types/ordersData";

interface OrderItemProps {
  order: Order;
  onDelete: (id: string) => void;
  onEdit: (id: string, updatedOrder: Order) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ order, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedOrder, setEditedOrder] = useState(order);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditedOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onEdit(order.id, editedOrder);
    setIsEditing(false);
  };

  return (
    <li className="border p-4 mb-4 md:mb-2 rounded shadow-sm flex flex-wrap md:flex-nowrap justify-between items-center">
      {isEditing ? (
        <>
          <div className="w-full md:w-1/6 mb-2 md:mb-0">
            <label className="font-bold">Order ID</label>
            <input
              type="text"
              name="id"
              value={editedOrder.id}
              onChange={handleChange}
              disabled
              className="border p-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/6 mb-2 md:mb-0">
            <label className="font-bold">Customer Name</label>
            <input
              type="text"
              name="customer_name"
              value={editedOrder.customer_name}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/6 mb-2 md:mb-0">
            <label className="font-bold">Customer Email</label>
            <input
              type="email"
              name="customer_email"
              value={editedOrder.customer_email}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/6 mb-2 md:mb-0">
            <label className="font-bold">Product</label>
            <select
              name="product"
              value={editedOrder.product}
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option value="Product 1">Product 1</option>
              <option value="Product 2">Product 2</option>
              <option value="Product 3">Product 3</option>
            </select>
          </div>
          <div className="w-full md:w-1/6 mb-2 md:mb-0">
            <label className="font-bold">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={editedOrder.quantity}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/6 mb-2 md:mb-0">
            <label className="font-bold">Order Value</label>
            <p>${editedOrder.quantity * ProductPrice[editedOrder.product]}</p>
          </div>
          <div className="w-full md:w-1/6 mb-2 md:mb-0 flex justify-between items-center">
            <button
              onClick={handleSave}
              className="px-2 py-1 border rounded bg-green-500 text-white"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-2 py-1 border rounded bg-gray-500 text-white"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/6 mb-2 md:mb-0">
            <p className="font-bold">Order ID</p>
            <p>{order.id}</p>
          </div>
          <div className="w-full md:w-1/6 mb-2 md:mb-0">
            <p className="font-bold">Customer Name</p>
            <p>{order.customer_name}</p>
          </div>
          <div className="w-full md:w-1/6 mb-2 md:mb-0">
            <p className="font-bold">Customer Email</p>
            <p className="text-sm">{order.customer_email}</p>
          </div>
          <div className="w-full md:w-1/6 mb-2 md:mb-0">
            <p className="font-bold">Product</p>
            <p>{order.product}</p>
          </div>
          <div className="w-full md:w-1/6 mb-2 md:mb-0">
            <p className="font-bold">Quantity</p>
            <p>{order.quantity}</p>
          </div>
          <div className="w-full md:w-1/6 mb-2 md:mb-0">
            <p className="font-bold">Order Value</p>
            <p>${order.quantity * ProductPrice[order.product]}</p>
          </div>
          <div className="w-full md:w-1/6 mb-2 md:mb-0 flex justify-between items-center">
            <button
              onClick={() => setIsEditing(true)}
              className="px-2 py-1 border rounded bg-blue-500 text-white"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(order.id)}
              className="px-2 py-1 border rounded bg-red-500 text-white"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default OrderItem;
