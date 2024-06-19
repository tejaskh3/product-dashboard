import React, { useState, useEffect } from "react";
import { Order } from "../types/ordersData";
import OrderItem from "./OrderItem";
import Pagination from "./Pagination";

interface OrderTableProps {
  orders: Order[];
  onDelete: (id: string) => void;
  onEdit: (id: string, updatedOrder: Order) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({
  orders,
  onDelete,
  onEdit,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 20;
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  // get orders for current page number
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // for changing the page
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-10 overflow-hidden">
      <h1 className="text-2xl font-bold mb-4 text-center">Orders</h1>
      {orders.length === 0 ? (
        <h1 className="text-5xl font-bold mb-4 text-center">No orders found</h1>
      ) : (
        <div className="overflow-x-auto">
          <ul className="w-full">
            {currentOrders.map((order: Order) => (
              <OrderItem
                key={order.id}
                order={order}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </ul>
        </div>
      )}
      <Pagination
        totalPages={totalPages}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default OrderTable;
