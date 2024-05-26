import { MdDelete } from "react-icons/md";

export default function TodoItem({ todoName, date, onDeleteClick }) {
  return (
    <div className="container items-container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
