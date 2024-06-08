import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

export const HomeItem = ({ item }) => {
  const bagItems = useSelector((store) => store.bag);
  const itemFound = bagItems.indexOf(item.id) >= 0;
  const dispatch = useDispatch();
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {itemFound ? (
        <button
          type="button"
          class="btn btn-add-bag btn-danger"
          onClick={handleRemoveFromBag}
        >
          <MdDelete /> Remove from Bag
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-add-bag btn-success "
          onClick={handleAddToBag}
        >
          <IoAddCircleOutline /> Add to Bag
        </button>
      )}
    </div>
  );
};
