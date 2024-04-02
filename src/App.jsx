import { useSelector } from "react-redux";
import "./App.css";
import AddTodo from "./screens/addTodo";
import TodoList from "./screens/todos";
import GratzScreen from "./screens/gratzScreen";

function App() {
  const view = useSelector((state) => state.ui.view);
  let content;
  if (view === 0) {
    content = <TodoList />;
  } else if (view === 1) {
    content = <AddTodo />;
  } else {
    content = <GratzScreen />;
  }
  return <main-screen>{content}</main-screen>;
}

export default App;
