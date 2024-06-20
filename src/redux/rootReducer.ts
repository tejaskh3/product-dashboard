import { combineReducers } from "@reduxjs/toolkit";
import ordersReducer from "./ordersSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  orders: ordersReducer,
  user: userReducer,
});

export default rootReducer;
