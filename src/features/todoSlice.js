import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../helpers/localStorageApi";

const util = (function () {
  const list = loadState() ?? [];
  const max = list.reduce((acc, cur) => {
    return cur.id > acc ? cur.id : acc;
  }, 1);
  let id = max;
  return {
    getInitialList() {
      return list;
    },
    nextId() {
      id++;
      return id;
    },
  };
})();

const initialState = {
  cur: null,
  list: util.getInitialList(),
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
      todo.id = util.nextId();
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
    clearTodo: (state) => {
      state.list = [];
    },
    finishTodo: (state, action) => {
      const id = action.payload;
      const i = getIndexOf(id, state.list);
      if (i > -1) {
        state.list[i].done = !state.list[i].done;
        action.payload = state.list.every((e) => e.done);
      }
    },
  },
});

export const progressRatio = (state) => {
  let n = 0;
  let d = 0;
  state.todo.list.forEach((e) => {
    if (e.done) {
      n++;
      d++;
    } else {
      d++;
    }
  });
  return d !== 0 ? n / d : 0;
};

export const todoCount = (state) => {
  return state.todo.list.length;
};

export const {
  addTodo,
  editTodo,
  setCur,
  nullCur,
  removeTodo,
  finishTodo,
  clearTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
