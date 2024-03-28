import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAddModal: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setShowAddModal: (state, action) => {
      state.showAddModal = action.payload;
    },
  },
});

export const { setShowAddModal } = uiSlice.actions;
export default uiSlice.reducer;
