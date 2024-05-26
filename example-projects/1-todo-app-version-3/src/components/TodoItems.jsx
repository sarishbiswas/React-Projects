import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.todoName}
          date={item.dueDate}
          key={item.todoName}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </>
  );
};

export default TodoItems;
