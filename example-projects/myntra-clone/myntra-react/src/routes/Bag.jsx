import { BagItem } from "../Components/BagItem";
import { BagSummary } from "../Components/BagSummary";
import { useSelector } from "react-redux";

export const Bag = () => {
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bag);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};
