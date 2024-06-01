import { useRef, useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-context";
export default function AddTodo() {
  const { addItem } = useContext(TodoItemsContext);
  // use of useRef
  const todoName = useRef();
  const dueDate = useRef();

  return (
    <div className="container items-container">
      {
        // Use of Form with onSubmit and preventDefault
      }
      <form
        className="row kg-row"
        onSubmit={(event) => {
          event.preventDefault();
          addItem(todoName.current.value, dueDate.current.value);
          dueDate.current.value = "";
          todoName.current.value = "";
        }}
      >
        <div className="col-6">
          <input
            ref={todoName}
            type="text"
            placeholder="Enter TODO Here"
            aria-label="Enter TODO Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDate} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
