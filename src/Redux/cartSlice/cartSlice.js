import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items: [],
    totalPrice: 0,
}
const cardSlice =createSlice({
    name:"card",
    initialState,
    reducers:{
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.quantity += 1;
              existingItem.totalPrice = existingItem.price * existingItem.quantity;
            } else {
              state.items.push({ ...action.payload, quantity: 1 ,totalPrice:action.payload.price});
            }
            state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0); // Update totalPrice for the entire cart
          },
          removeItem: (state, action) => {
           state.items = state.items.filter((item)=>item.id !== action.payload); 
          },
    }
})

export const { addItem,removeItem }=cardSlice.actions;

export default cardSlice.reducer;

