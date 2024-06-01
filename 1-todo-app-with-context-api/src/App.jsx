import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-context";

function App() {
  const [todoItemList, setTodoItemList] = useState([]);
  const clickAddItem = (todoName, dueDate) => {
    // Update state from previous state
    setTodoItemList((todoList) => [
      ...todoList,
      {
        todoName: todoName,
        dueDate: dueDate,
      },
    ]);
  };
  const clickDeleteItem = (todoName) => {
    const newTodoItems = todoItemList.filter(
      (item) => item.todoName != todoName
    );
    console.log(todoName);
    setTodoItemList(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItemList,
        addItem: clickAddItem,
        deleteItem: clickDeleteItem,
      }}
    >
      <center className="todo-container">
        <TodoHeader />
        <AddTodo />
        {todoItemList.length === 0 && (
          <p className="welcome">Welcome.... Have a good day.</p>
        )}
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
