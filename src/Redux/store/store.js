import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../cartSlice/cartSlice';


 const store = configureStore({
    reducer:{ cart: cartReducer},
})


export default store;


// store.subscribe(() => {
//     try {
//         const serializedState = JSON.stringify(store.getState().cart);
//         localStorage.setItem('cart', serializedState);
//       } catch (err) {
//         console.log(err)
//       }
//   });