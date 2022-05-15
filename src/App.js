import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CupCakeContainer from "./components/CupCakeContainer";
import DesertContainer from "./components/DesertContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <HooksCakeContainer />
        <CupCakeContainer />
        <IceCreamContainer />
        <DesertContainer />
        <CakeContainer />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
