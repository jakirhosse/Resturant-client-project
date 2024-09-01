import { createSlice } from '@reduxjs/toolkit';
const menusSlice = createSlice({
  name: 'carts', 
  initialState: {
    carts: [],
  },
  reducers: {
    addCart: (state, action) => {
      const item = state.carts.find((cart) => cart._id === action.payload._id);
      if (item) {
        item.quantity++;
      } else {
        state.carts.push({ ...action.payload, quantity: 1 });
      }
    },

    removeCart: (state, action) => {
      state.carts = state.carts.filter(
        (cart) => cart._id !== action.payload._id
      );
    },

    incrementQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart._id === action.payload._id);
      if (item) {
        item.quantity++;
      }
    },


    decrementQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart._id === action.payload._id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});


export const { addCart, removeCart, decrementQuantity, incrementQuantity } = menusSlice.actions; 
export default menusSlice.reducer; 






