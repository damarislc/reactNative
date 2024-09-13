import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "../features/counter/counterSlice";
import shopReducer from "../features/shop/shopSlice";
import { shopApi } from "../services/shop";
import cartReducer from "../features/cart/cartSlice";
import { authApi } from "../services/auth";
import authReducer from "../features/auth/authSlice";
import { ordersApi } from "../services/orders";
import { usersApi } from "../services/users";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shopApi.middleware,
      authApi.middleware,
      ordersApi.middleware,
      usersApi.middleware
    ),
});

setupListeners(store.dispatch);
