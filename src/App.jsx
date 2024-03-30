import { useSelector } from "react-redux";
import "./App.css";
import AddTodo from "./screens/addTodo";
import TodoList from "./screens/todos";

function App() {
  const showAdd = useSelector((state) => state.ui.showAddModal);
  const content = showAdd ? <AddTodo /> : <TodoList />;
  return <main-screen>{content}</main-screen>;
}

export default App;
