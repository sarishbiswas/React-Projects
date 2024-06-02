import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import CheckoutItems from "./components/CheckoutItems";
import { Container } from "./components/Container";
import InputFood from "./components/InputFood";
import { useState } from "react";
function App() {
  const [foodItems, setFoodItems] = useState(["Salad", "Apple"]);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [checkoutClicked, setCheckoutClicked] = useState(false);
  const onEnterClick = (event) => {
    if (event.key == "Enter") {
      setFoodItems([...foodItems, event.target.value]);
      event.target.value = "";
    }
  };
  const onCheckoutClick = () => {
    setCheckoutClicked(!checkoutClicked);
    setCheckoutItems([]);
  };
  return (
    <>
      {!checkoutClicked && (
        <Container>
          <h1 className={styles.foodHeading}>Healthy Food</h1>
          <InputFood onKeyDown={onEnterClick}></InputFood>
          <ErrorMessage items={foodItems} />
          <FoodItems
            items={foodItems}
            checkoutItems={checkoutItems}
            setCheckoutItems={setCheckoutItems}
          />
        </Container>
      )}
      {checkoutItems.length > 0 && !checkoutClicked && (
        <Container>
          <p>Added items for checkout</p>
          <CheckoutItems checkoutItems={checkoutItems} />
          <button
            type="button"
            className={`${styles.button}  btn btn-success`}
            onClick={onCheckoutClick}
          >
            Proceed to Checkout
          </button>
        </Container>
      )}
      {checkoutClicked && (
        <Container>
          <h1>Thank You For Shopping with Us.</h1>
          <button
            type="button"
            className={`${styles.button}  btn btn-danger`}
            onClick={onCheckoutClick}
          >
            Close
          </button>
        </Container>
      )}
    </>
  );
}

export default App;
