import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cur: null,
  nextId: 6,
  list: [
    { id: 1, text: "go to the gym", done: false },
    { id: 2, text: "study css", done: false },
    { id: 3, text: "work on app", done: false },
    { id: 4, text: "clean room", done: false },
    { id: 5, text: "work on game", done: false },
  ],
};

const isValid = (obj) => {
  if (!obj || !obj.id || !obj.text) {
    return false;
  } else {
    return true;
  }
};

const getIndexOf = (id, arr) => {
  const i = arr.findIndex((i) => i.id === id);
  return i;
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = action.payload;
      todo.id = state.nextId;
      state.nextId++;
      state.list.push(todo);
    },
    editTodo: (state, action) => {
      const todo = action.payload;
      if (isValid(todo)) {
        const i = getIndexOf(todo.id, state.list);
        if (i > -1) {
          state.list[i] = todo;
        }
      }
    },
    setCur: (state, action) => {
      const todo = action.payload;
      if (isValid(todo)) {
        state.cur = todo;
      }
    },
    nullCur: (state) => {
      state.cur = null;
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      if (id) {
        const i = getIndexOf(id, state.list);
        if (i > -1) {
          state.list.splice(i, 1);
        }
      }
    },
    finishTodo: (state, action) => {
      const id = action.payload;
      const i = getIndexOf(id, state.list);
      if (i > -1) {
        state.list[i].done = true;
      }
    },
  },
});

export const { addTodo, editTodo, setCur, nullCur, removeTodo, finishTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
