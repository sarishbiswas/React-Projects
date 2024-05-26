import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  // [
  //   {
  //     todoName: "Buy Milk",
  //     dueDate: "25/05/2024",
  //   },
  //   {
  //     todoName: "Buy Groceries",
  //     dueDate: "25/05/2024",
  //   },
  //   {
  //     todoName: "Add another todo",
  //     dueDate: "25/05/2024",
  //   },
  // ]
  const [todoItemList, setTodoItemList] = useState([]);
  const handleAddItem = (todoName, dueDate) => {
    // Update state from previous state
    setTodoItemList((todoList) => [
      ...todoList,
      {
        todoName: todoName,
        dueDate: dueDate,
      },
    ]);
  };
  const handleDeleteItem = (todoName) => {
    const newTodoItems = todoItemList.filter(
      (item) => item.todoName != todoName
    );
    console.log(todoName);
    setTodoItemList(newTodoItems);
  };

  return (
    <center className="todo-container">
      <TodoHeader />
      <AddTodo onAddItem={handleAddItem} />
      {todoItemList.length === 0 && (
        <p className="welcome">Welcome.... Have a good day.</p>
      )}
      <TodoItems todoItems={todoItemList} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
