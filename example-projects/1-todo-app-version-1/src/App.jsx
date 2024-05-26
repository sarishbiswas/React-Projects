import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TODOHeader from "./components/TODOHeader";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";

function App() {
  return (
    <center class="todo-container">
      <TODOHeader />
      <AddTodo />
      <TodoItem1 itemName="Buy Groceries" date="24/05/2024" />
      <TodoItem1 itemName="Buy Medicine from Appolo" date="24/05/2024" />
    </center>
  );
}

export default App;
