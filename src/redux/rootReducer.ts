import { combineReducers } from "@reduxjs/toolkit";
import ordersReducer from "./ordersSlice";

const rootReducer = combineReducers({
  orders: ordersReducer,
});

export default rootReducer;
