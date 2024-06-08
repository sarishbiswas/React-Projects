import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/Counter";
import { privacyActions } from "../store/Privacy";

export const CounterButtons = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleAdd = () => {
    dispatch(counterActions.add({ num: inputRef.current.value }));
    inputRef.current.value = "";
  };
  const handleSubstract = () => {
    dispatch(counterActions.subtract({ num: inputRef.current.value }));
    inputRef.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div
        className="d-grid gap-2 d-sm-flex justify-content-sm-center"
        style={{ margin: "10px" }}
      >
        <input type="text" placeholder="Enter Number" ref={inputRef} />
        <button
          type="button"
          className="btn btn-success btn-lg px-4 gap-3"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubstract}
        >
          Substract
        </button>
      </div>
    </>
  );
};
