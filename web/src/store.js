import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./slices/exportSlices";

const store = configureStore({
  reducer: {
    menuSlice: menuSlice.reducer,
  },
});

export default store;
