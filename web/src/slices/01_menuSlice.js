import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
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

export default menuSlice