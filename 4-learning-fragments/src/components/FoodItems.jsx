import Items from "./Items";

const FoodItems = ({ items, checkoutItems, setCheckoutItems }) => {
  const onButtonClick = (item) => {
    let newItem = { item: item, bought: "true" };
    setCheckoutItems([...checkoutItems, newItem]);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Items
          foodItem={item}
          key={item}
          onButtonClick={() => onButtonClick(item)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
