import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import productsSlice from "./slice/productsSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice
    },
});

export default store