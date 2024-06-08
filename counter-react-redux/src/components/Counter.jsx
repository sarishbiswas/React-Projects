import { useSelector } from "react-redux";

const Counter = () => {
  const currentValue = useSelector((store) => store.value);
  return (
    <p className="lead mb-4">Current value of counter is: {currentValue}</p>
  );
};
export default Counter;
