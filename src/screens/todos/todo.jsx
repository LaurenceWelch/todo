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
      {done && <todo-item-done>yo!</todo-item-done>}
      <div>
        {id}. {text}
      </div>
      <todo-button
        onClick={() => {
          dispatch(setCur({ id, text }));
          dispatch(setShowAddModal(true));
        }}
      >
        edit
      </todo-button>
      <todo-button onClick={() => dispatch(removeTodo(id))}>delete</todo-button>
      <todo-button onClick={() => dispatch(finishTodo(id))}>finish</todo-button>
    </todo-item>
  );
};

export default Todo;
