import Banner from "./Banner";
import logo from "../assets/logo.png";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import "../styles/Layout.css";
import { useState } from "react/cjs/react.development";

function App() {
  const [cart, updateCart] = useState([]);

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart
          cart={cart /*correspond au state*/}
          updateCart={updateCart /*correspond au updateState*/}
        />
        {/*On passe les states locals de cart en props*/}
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

/*dans ce fichier on parvient a faire remonter les states de Cart pour les ajouter à l'élément ShoppingList*/

export default App;
