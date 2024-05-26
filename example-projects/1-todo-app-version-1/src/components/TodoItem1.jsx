export default function TodoItem1(itemName, date) {
  return (
    <div className="container items-container">
      <div className="row kg-row">
        <div className="col-6">{itemName.itemName}</div>
        <div className="col-4">{date.date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
