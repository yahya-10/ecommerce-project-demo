import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import subscriptionReducer from "./subscriptions/subscriptionSlice";

const reducer = {
  auth: authReducer,
  cart: subscriptionReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
