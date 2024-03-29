import { useDispatch } from "react-redux";
import {
  editTodo,
  finishTodo,
  removeTodo,
  setCur,
} from "../../features/todoSlice";
import { setShowAddModal } from "../../features/uiSlice";

const Todo = (props) => {
  const { id, text, done } = props.data;
  const dispatch = useDispatch();
  return (
    <todo-item class={done && "grayscale"}>
      <check-box>
        <check-circle></check-circle>
      </check-box>
      <div>
        {id}. {text}
      </div>
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
        <button onClick={() => dispatch(finishTodo(id))}>finish</button>
      </div>
    </todo-item>
  );
};

export default Todo;
