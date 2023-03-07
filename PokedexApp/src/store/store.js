import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { pokeSlice } from "./slices/poke";
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    poke: pokeSlice.reducer,
  },
});
