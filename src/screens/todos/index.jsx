import { useDispatch, useSelector } from "react-redux";
import { setView } from "../../features/uiSlice.js";
import Todo from "./todo.jsx";
import { clearTodo, nullCur } from "../../features/todoSlice.js";
import ButtonWithModal from "../../components/buttonWithModal.jsx";
import { useEffect } from "react";
import ProgressBar from "../../components/progressBar.jsx";

const isWrapped = (cur, prev) => {
  const ct = cur.getBoundingClientRect().top;
  const pt = prev.getBoundingClientRect().top;
  // safety buffer of 10
  if (ct > pt + 10) {
    return true;
  }
  return false;
};

const TodoList = () => {
  const todos = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();
  useEffect(() => {
    document.querySelectorAll("todo-item").forEach((todo) => {
      const arr = todo.querySelectorAll("div");
      let prev = arr[0];
      for (let c = 0; c < arr.length; c++) {
        const cur = arr[c];
        if (isWrapped(cur, prev)) {
          cur.style.borderLeft = "none";
        }
        prev = cur;
      }
    });
  }, []);
  return (
    <div>
      <h2>todo</h2>
      <ProgressBar />
      <todos-list>
        {todos.map((data, index) => (
          <Todo key={index} data={data} />
        ))}
      </todos-list>
      <button
        onClick={() => {
          dispatch(nullCur());
          dispatch(setView(1));
        }}
      >
        add
      </button>
      <ButtonWithModal action={() => dispatch(clearTodo())}>
        clear
      </ButtonWithModal>
    </div>
  );
};

export default TodoList;
