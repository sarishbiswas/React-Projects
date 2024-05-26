import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItemList = [
    {
      todoName: "Buy Milk",
      dueDate: "25/05/2024",
    },
    {
      todoName: "Buy Groceries",
      dueDate: "25/05/2024",
    },
    {
      todoName: "Add another todo",
      dueDate: "25/05/2024",
    },
  ];

  return (
    <center className="todo-container">
      <TodoHeader />
      <AddTodo />
      <TodoItems todoItems={todoItemList} />
    </center>
  );
}

export default App;
