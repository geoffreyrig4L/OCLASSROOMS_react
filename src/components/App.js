import "../styles/App.css";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from "../assets/leaf.png";

function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <Cart />
      <ShoppingList />
    </div>
  );
}

export default App;
