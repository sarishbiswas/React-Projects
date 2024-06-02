import styles from "./Items.module.css";

const Items = ({ foodItem, onButtonClick, bought }) => {
  return (
    <li className={`${styles.sbItem} list-group-item`}>
      <span>{foodItem}</span>
      {!bought && (
        <button
          type="button"
          className={`${styles.button}  btn btn-info`}
          onClick={onButtonClick}
        >
          Buy
        </button>
      )}
    </li>
  );
};

export default Items;
