import { useSelector } from "react-redux";
import { FetchItems } from "../Components/FetchItems";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { Outlet } from "react-router-dom";
import { Spinner } from "../Components/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const fetchingState = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchingState.fetchingDone ? <Outlet /> : <Spinner />}
      <Footer />
    </>
  );
}

export default App;
