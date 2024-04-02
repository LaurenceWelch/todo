import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: 0,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { setView } = uiSlice.actions;
export default uiSlice.reducer;
