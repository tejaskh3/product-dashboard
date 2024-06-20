import React, { useState } from "react";
import { Order } from "../types/ordersData";
import OrderItem from "./OrderItem";
import Pagination from "./Pagination";
import CreateOrderModal from "./CreateOrderModal";

interface OrderTableProps {
  orders: Order[];
  onDelete: (id: string) => void;
  onEdit: (id: string, updatedOrder: Order) => void;
  setOrders: (orders: Order[]) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({
  orders,
  onDelete,
  onEdit,
  setOrders,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 20;
  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const totalOrderValue = 10000;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleCreateOrder = () => {
    setIsModalOpen(true);
  };

  const handleSaveOrder = (newOrder: Order) => {
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    // Update the state with the new order list
    // Assuming you have a way to update the orders in the parent component or redux store
  };

  return (
    <div className="container mx-auto p-4 md:p-10 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl">Total Order Value: ${totalOrderValue}</span>
        <h1 className="text-2xl font-bold text-center flex-grow">Orders</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleCreateOrder}
        >
          Create Order
        </button>
      </div>
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
      {isModalOpen && (
        <CreateOrderModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveOrder}
        />
      )}
    </div>
  );
};

export default OrderTable;
