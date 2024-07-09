import { createSlice } from "@reduxjs/toolkit";

type TCartItem = {
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
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
