import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../../features/todoSlice.js";
import { setView } from "../../features/uiSlice.js";

const AddTodo = () => {
  const [todo, setTodo] = useState({ text: "" });
  const [warn, setWarn] = useState({ show: false, text: "yo" });

  const dispatch = useDispatch();
  const cur = useSelector((state) => state.todo.cur);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    if (cur) {
      setTodo(cur);
    }
  }, [cur]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <modal-popup>
      <h2>{cur ? "edit" : "add"} todo</h2>
      <input
        value={todo.text}
        name="text"
        onChange={handleChange}
        placeholder="description"
        ref={inputRef}
      />
      {warn.show && <warning-text>{warn.text}</warning-text>}
      <button
        onClick={() => {
          if (todo.text.length < 1) {
            return setWarn({ show: true, text: `text can't be empty` });
          }
          const res = cur ? dispatch(editTodo(todo)) : dispatch(addTodo(todo));
          if (res.err) {
            return setWarn({ show: true, text: res.err });
          }
          dispatch(setView(0));
        }}
      >
        {cur ? "save" : "add"}
      </button>
      <button onClick={() => dispatch(setView(0))}>cancel</button>
    </modal-popup>
  );
};

export default AddTodo;
