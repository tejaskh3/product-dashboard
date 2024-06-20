import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../types/ordersData";

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    editOrder: (
      state,
      action: PayloadAction<{ id: string; updatedOrder: Order }>
    ) => {
      const { id, updatedOrder } = action.payload;
      const index = state.orders.findIndex((order) => order.id === id);
      if (index !== -1) {
        state.orders[index] = updatedOrder;
      }
    },
    deleteOrder: (state, action: PayloadAction<string>) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
  },
});

export const { setOrders, addOrder, editOrder, deleteOrder } =
  ordersSlice.actions;

export default ordersSlice.reducer;
