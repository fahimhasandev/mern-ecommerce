import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //action --- any data inside payload
      const item = action.payload;

      // if the item already in the cart
      const existItem = state.cartItems.find((x) => x._id === item._id);

      // if exist, update the qty
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      // update cart
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      // the id will be in the action payload
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

      // update cart
      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
