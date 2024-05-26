import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem todoName={item.todoName} date={item.dueDate} />
      ))}
    </>
  );
};

export default TodoItems;
