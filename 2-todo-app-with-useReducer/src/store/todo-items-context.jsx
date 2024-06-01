import { useReducer } from "react";
import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addItem: () => {},
  deleteItem: () => {},
});
const TodoItemsReducer = (todoItemList, action) => {
  let newTodoItemsList = todoItemList;
  if (action.type === "ADD_ITEM") {
    newTodoItemsList = [
      ...newTodoItemsList,
      {
        todoName: action.payload.todoName,
        dueDate: action.payload.dueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItemsList = newTodoItemsList.filter(
      (item) => item.todoName != action.payload.todoName
    );
  }
  return newTodoItemsList;
};
const TodoItemContextProvider = ({ children }) => {
  const [todoItemList, dispatchTodoItems] = useReducer(TodoItemsReducer, []);

  const addItem = (todoName, dueDate) => {
    const newTodoItem = {
      type: "ADD_ITEM",
      payload: {
        todoName,
        dueDate,
      },
    };
    dispatchTodoItems(newTodoItem);
  };
  const deleteItem = (todoName) => {
    const newTodoItem = {
      type: "DELETE_ITEM",
      payload: {
        todoName,
      },
    };
    dispatchTodoItems(newTodoItem);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItemList,
        addItem: addItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemContextProvider;
