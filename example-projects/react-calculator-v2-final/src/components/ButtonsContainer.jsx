import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
    "Del",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((item) => (
        <button
          className={styles.button}
          onClick={() => onButtonClick(item)}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
