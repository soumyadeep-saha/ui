import { configureStore } from "@reduxjs/toolkit";
import { tripReducer } from "../slice/trips";

export const store = configureStore({
  reducer: {
    trips: tripReducer,
  },
});
