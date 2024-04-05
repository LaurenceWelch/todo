import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../../features/todoSlice.js";
import { setView } from "../../features/uiSlice.js";
import BoolInput from "../../components/boolInput.jsx";

const AddTodo = () => {
  const [todo, setTodo] = useState({ text: "", urgency: 0 });
  const [warn, setWarn] = useState({ show: false, text: "" });

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

  const handleUrgencyChange = (num) => {
    setTodo((prev) => ({ ...prev, urgency: num }));
  };

  return (
    <modal-popup>
      <div className="x-bar">
        <x-button onClick={() => dispatch(setView(0))}>X</x-button>
      </div>
      <h2>{cur ? "edit" : "add"} todo</h2>
      <input
        value={todo.text}
        name="text"
        onChange={handleChange}
        placeholder="description"
        ref={inputRef}
      />
      <BoolInput onChangeUrgency={handleUrgencyChange} si={todo.urgency} />
      {warn.show && <warning-text>{warn.text}</warning-text>}
      <div className="section">
        <button
          onClick={() => {
            if (todo.text.length < 1) {
              return setWarn({ show: true, text: `text can't be empty` });
            }
            const res = cur
              ? dispatch(editTodo(todo))
              : dispatch(addTodo(todo));
            if (res.err) {
              return setWarn({ show: true, text: res.err });
            }
            dispatch(setView(0));
          }}
        >
          {cur ? "save" : "add"}
        </button>
        <button onClick={() => dispatch(setView(0))}>cancel</button>
      </div>
    </modal-popup>
  );
};

export default AddTodo;
