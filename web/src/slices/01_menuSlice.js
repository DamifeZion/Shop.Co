import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleMenu(state) {
      state.toggle = !state.toggle;
    },
  },
});
