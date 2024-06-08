import { useSelector } from "react-redux";
import { HomeItem } from "../Components/HomeItem";

export const Home = () => {
  const itemList = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container">
        {itemList.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
