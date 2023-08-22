import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./slices/exportSlices";

export const store = configureStore({
  reducer: {
    menuSlice: menuSlice,
  },
});
