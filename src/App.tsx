import React, { useState } from "react";
import ordersData from "./orders.json"; // Import JSON data
import { Order } from "./ordersData";
import "./index.css";

const App: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(ordersData);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 20;

  // Calculate total pages
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  // Get current orders
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Change page
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Handle delete
  const handleDelete = (id: string) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  // Handle edit
  const handleEdit = (id: string, updatedOrder: Order) => {
    setOrders(orders.map((order) => (order.id === id ? updatedOrder : order)));
  };

  return (
    <div className="container mx-auto p-10 overflow-hidden">
      <h1 className="text-2xl font-bold mb-4 text-center">Orders</h1>
      <div className="overflow-x-auto">
        <ul className="mb-4 w-full">
          {currentOrders.map((order: Order) => (
            <OrderItem
              key={order.id}
              order={order}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </ul>
      </div>
      <Pagination
        totalPages={totalPages}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

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
    <li className="border p-4 mb-2 rounded shadow-sm flex justify-between items-center">
      {isEditing ? (
        <>
          <div className="w-1/6">
            <input
              type="text"
              name="id"
              value={editedOrder.id}
              onChange={handleChange}
              disabled
              className="border p-1"
            />
          </div>
          <div className="w-1/6">
            <input
              type="text"
              name="customerName"
              value={editedOrder.customer_name}
              onChange={handleChange}
              className="border p-1"
            />
          </div>
          <div className="w-1/6">
            <input
              type="email"
              name="customerEmail"
              value={editedOrder.customer_email}
              onChange={handleChange}
              className="border p-1"
            />
          </div>
          <div className="w-1/6">
            <select
              name="product"
              value={editedOrder.product}
              onChange={handleChange}
              className="border p-1"
            >
              <option value="Product 1">Product 1</option>
              <option value="Product 2">Product 2</option>
              <option value="Product 3">Product 3</option>
            </select>
          </div>
          <div className="w-1/6">
            <input
              type="number"
              name="quantity"
              value={editedOrder.quantity}
              onChange={handleChange}
              className="border p-1"
            />
          </div>
          <div className="w-1/6">
            <p className="font-bold">Order Value</p>
            <p>${editedOrder.order_value}</p>
          </div>
          <div className="w-1/6 flex justify-between items-center">
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
          <div className="w-1/6">
            <p className="font-bold">Order ID</p>
            <p>{order.id}</p>
          </div>
          <div className="w-1/6">
            <p className="font-bold">Customer Name</p>
            <p>{order.customer_name}</p>
          </div>
          <div className="w-1/6">
            <p className="font-bold">Customer Email</p>
            <p>{order.customer_email}</p>
          </div>
          <div className="w-1/6">
            <p className="font-bold">Product</p>
            <p>{order.product}</p>
          </div>
          <div className="w-1/6">
            <p className="font-bold">Quantity</p>
            <p>{order.quantity}</p>
          </div>
          <div className="w-1/6">
            <p className="font-bold">Order Value</p>
            <p>${order.order_value}</p>
          </div>
          <div className="w-1/6 flex justify-between items-center">
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

interface PaginationProps {
  totalPages: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  paginate,
  currentPage,
}) => {
  const [inputPage, setInputPage] = useState(currentPage);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPage(Number(e.target.value));
  };

  const handlePageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    paginate(inputPage);
  };

  return (
    <nav className="mt-4">
      <ul className="flex justify-center items-center">
        <li className="mx-1">
          <button
            onClick={() => paginate(currentPage - 1)}
            className="px-3 py-1 border rounded"
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        <li className="mx-1">
          <form onSubmit={handlePageSubmit} className="flex items-center">
            <input
              type="number"
              value={inputPage}
              onChange={handleInputChange}
              className="w-12 text-center border rounded"
              min="1"
              max={totalPages}
            />
            <button type="submit" className="ml-2 px-3 py-1 border rounded">
              Go
            </button>
          </form>
        </li>
        <li className="mx-1">
          <button
            onClick={() => paginate(currentPage + 1)}
            className="px-3 py-1 border rounded"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default App;
