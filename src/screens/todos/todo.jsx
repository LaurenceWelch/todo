import { useDispatch } from "react-redux";
import { finishTodo, removeTodo, setCur } from "../../features/todoSlice";
import { setShowAddModal } from "../../features/uiSlice";

const Todo = (props) => {
  const { id, text, done } = props.data;
  const dispatch = useDispatch();
  return (
    <todo-item class={done && "done"}>
      <div>
        <check-circle
          class={done && "green"}
          onClick={() => dispatch(finishTodo(id))}
        ></check-circle>
      </div>
      <div>{text}</div>
      <div>
        <button
          onClick={() => {
            dispatch(setCur({ id, text }));
            dispatch(setShowAddModal(true));
          }}
        >
          edit
        </button>
        <button onClick={() => dispatch(removeTodo(id))}>delete</button>
      </div>
    </todo-item>
  );
};

export default Todo;
