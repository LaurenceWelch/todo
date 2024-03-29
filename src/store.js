import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice.js";
import uiReducer from "./features/uiSlice.js";
import { saveState } from "./helpers/localStorageApi.js";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type.startsWith("todo/")) {
    saveState(store.getState().todo.list);
  }
  return result;
};

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    ui: uiReducer,
  },
  middleware: (dm) => dm().concat(localStorageMiddleware),
});
