import React, { useEffect, useState } from "react";
import ordersData from "./orders.json";
import { Order } from "./types/ordersData";
import { UserInfo } from "./types/user";
import Header from "./components/Header";
import OrderTable from "./components/OrderTable";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/userSlice";

const App: React.FC = () => {
  const [orders, setOrders] = useState<any>(ordersData);
  const [filteredOrders, setFilteredOrders] = useState<any>(ordersData);
  const { user, isAuthenticated } = useAuth0();
  const userDetails = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated && user) {
      const { email, given_name, picture } = user as UserInfo;
      dispatch(login({ email, given_name, picture }));
    } else {
      dispatch(logout());
    }
  }, [isAuthenticated, user, dispatch]);
  useEffect(() => {
    setFilteredOrders(orders);
  }, [orders]);

  if (!isAuthenticated && !userDetails.isLoggedIn) {
    return <LoginButton />;
  }

  const handleSearch = (searchTerm: string) => {
    // Filter orders based on searchTerm
    const filtered = orders?.filter((order: Order) =>
      Object.values(order).some((value) =>
        value
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase().trim())
      )
    );
    setFilteredOrders(filtered);
  };

  const handleDelete = (id: string) => {
    setOrders(orders?.filter((order: Order) => order.id !== id));
    setFilteredOrders(filteredOrders.filter((order: Order) => order.id !== id));
  };

  const handleEdit = (id: string, updatedOrder: Order) => {
    const updatedOrders = orders.map((order: Order) =>
      order.id === id ? updatedOrder : order
    );
    setOrders(updatedOrders);
    setFilteredOrders(updatedOrders);
  };

  return (
    <div className="container mx-auto p-10 overflow-hidden">
      <Header
        userName={userDetails.given_name}
        userEmail={userDetails.email}
        userPicture={userDetails.picture}
        onSearch={handleSearch}
      />
      <OrderTable
        orders={filteredOrders}
        onDelete={handleDelete}
        onEdit={handleEdit}
        setOrders={setOrders}
      />
    </div>
  );
};

export default App;
