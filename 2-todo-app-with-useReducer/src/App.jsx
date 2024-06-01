import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import TodoItemContextProvider from "./store/todo-items-context";

function App() {
  return (
    <TodoItemContextProvider>
      <center className="todo-container">
        <TodoHeader />
        <AddTodo />
        <p className="welcome">Welcome.... Have a good day.</p>
        <TodoItems />
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
