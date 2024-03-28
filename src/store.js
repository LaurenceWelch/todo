import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice.js";
import uiReducer from "./features/uiSlice.js";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    ui: uiReducer,
  },
});
