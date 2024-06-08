import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import Counter from "./components/Counter";
import { CounterButtons } from "./components/CounterButtons";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <div className="px-4 py-5 my-5 text-center">
      <Header />
      <div className="col-lg-6 mx-auto">
        {privacy ? <PrivacyMessage /> : <Counter />}
        <CounterButtons />
      </div>
    </div>
  );
}

export default App;
