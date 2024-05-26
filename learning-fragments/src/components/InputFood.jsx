import styles from "./InputFood.module.css";

const InputFood = ({ onKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter food name and hit Enter to include in Menu"
      className={styles.inputFood}
      onKeyDown={onKeyDown}
    />
  );
};

export default InputFood;
