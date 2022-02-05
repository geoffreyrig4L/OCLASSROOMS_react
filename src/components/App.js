import "../styles/App.css";
import Banner from "./Banner";
import QuestionForm from "./QuestionForm.js";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from "../assets/leaf.png";
import Footer from "./Footer.js";

function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <QuestionForm />
      {/*<Cart />*/}
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default App;
