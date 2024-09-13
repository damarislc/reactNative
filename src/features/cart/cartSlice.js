import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart: (state, action) => {
      const { id, price, quantity } = action.payload;
      const itemFinded = state.items.find((item) => item.id === id);
      itemFinded
        ? (itemFinded.quantity += quantity)
        : state.items.push(action.payload);
      state.total += price * quantity;
    },
    deleteItemCart: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
      const totalItem = item.price * item.quantity;
      state.total -= totalItem;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItemCart, clearCart, deleteItemCart } = cartSlice.actions;

export default cartSlice.reducer;
