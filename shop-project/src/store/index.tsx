import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./header-slice";
import cartSlice from "./cart-slice";
import RegistrationSlice from "./Registration-slice";
import AuthSlice from "./Auth-slice";
import registrationSlice from "./Registration-slice";
import authSlice from "./Auth-slice";

const store = configureStore({
  reducer: { header: headerSlice.reducer, cart: cartSlice.reducer, registration: registrationSlice.reducer, auth: authSlice.reducer},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;