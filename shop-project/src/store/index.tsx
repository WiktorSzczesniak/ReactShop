import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./header-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: {header: headerSlice.reducer, cart:cartSlice.reducer }
})


export default store