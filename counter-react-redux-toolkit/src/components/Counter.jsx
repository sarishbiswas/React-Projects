import { useSelector } from "react-redux";

const Counter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="lead mb-4">Current value of counter is: {counterVal}</p>;
};
export default Counter;
