import Items from "./Items";

const CheckoutItems = ({ checkoutItems }) => {
  return (
    <ul className="list-group">
      {checkoutItems.map((item) => (
        <Items foodItem={item.item} key={item.item} bought={item.bought} />
      ))}
    </ul>
  );
};

export default CheckoutItems;
