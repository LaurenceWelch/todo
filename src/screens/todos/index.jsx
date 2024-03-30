import AddTodo from "../addTodo";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddModal } from "../../features/uiSlice.js";
import Todo from "./todo.jsx";
import { clearTodo, nullCur } from "../../features/todoSlice.js";
import ButtonWithModal from "../../components/buttonWithModal.jsx";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.list);
  const show = useSelector((state) => state.ui.showAddModal);
  const dispatch = useDispatch();
  const content = show ? (
    <AddTodo />
  ) : (
    <div>
      <h2>todo</h2>
      <todos-list>
        {todos.map((data, index) => (
          <Todo key={index} data={data} />
        ))}
      </todos-list>
      <button
        onClick={() => {
          dispatch(nullCur());
          dispatch(setShowAddModal(true));
        }}
      >
        add
      </button>
      <ButtonWithModal action={() => dispatch(clearTodo())}>
        clear
      </ButtonWithModal>
    </div>
  );
  return <div>{content}</div>;
};

export default TodoList;
