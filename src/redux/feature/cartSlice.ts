import { createSlice } from "@reduxjs/toolkit";

export type TCartItem = {
  _id: string;
  image: string;
  quantity: number;
  price: number;
  name: string;
};

type CartState = {
  cart: TCartItem[];
};

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    updateQuantity: (state, { payload }) => {
      const item = state.cart.find((item) => item._id === payload._id);
      if (item) {
        item.quantity = payload.quantity;
      }
    },
    deleteProduct: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item._id !== payload._id);
    },
  },
});

export const { addToCart, updateQuantity, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;
