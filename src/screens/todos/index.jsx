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
  const sorted = [...todos].sort((a, b) => {
    if (a.done && !b.done) return 1;
    if (!a.done && b.done) return -1;
    if (a.urgency === 1 && b.urgency === 0) return -1;
    if (a.urgency === 0 && b.urgency === 1) return 1;
    return 0;
  });
  return (
    <div>
      <h2>todo</h2>
      <ProgressBar />
      <todos-list>
        {sorted.map((data, index) => (
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
