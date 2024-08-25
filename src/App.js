import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
function App() {
  return (
    <div className="">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
