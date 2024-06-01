import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-context";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.todoName}
          date={item.dueDate}
          key={item.todoName}
        />
      ))}
    </>
  );
};

export default TodoItems;
