import React, { useState } from "react";
import ordersData from "./orders.json"; //
import { Order } from "./ordersData";
import Header from "./components/Header";
import OrderItem from "./components/OrderItem";
import Pagination from "./components/Pagination";
import OrderTable from "./components/OrderTable";
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

  const handleDelete = (id: string) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const handleEdit = (id: string, updatedOrder: Order) => {
    setOrders(orders.map((order) => (order.id === id ? updatedOrder : order)));
  };

  return (
    <div className="container mx-auto p-10 overflow-hidden">
      <Header />
      <OrderTable orders={orders} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
