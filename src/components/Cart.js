import { useState } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
  /*On applique ici la decomposition . C'est le même principe que la destructuration vu précédemment avec les props
  à la != que ça s'applique à des tableaux
  
  Nous évite de faire 
    const cartState = useState(0)
    const cart = cartState[0]
    const updateCart = cartState[1]

  */
  //const [cart, updateCart] = useState(0); / il y avait ça avant le passage des state à d'autre composant
  const [isOpen, setIsOpen] = useState(false);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  function deleteToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    const cartFilteredCurrentPlant = cart.filter(
      (plant) => plant.name !== name
    );
    if (currentPlantSaved.amount <= 1) {
      updateCart([...cartFilteredCurrentPlant]);
    } else if (currentPlantSaved) {
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount - 1 },
      ]);
    }
  }

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <h2>Panier</h2>
      {/*<div>
        Monstera : {priceMon + "€ "}
        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
      </div>*/}
      {cart.map(({ name, price, amount }, index) => (
        <div key={`${name}-${index}`}>
          {name} {price}€ x {amount}
          <br />
          <button type="submit" onClick={() => deleteToCart(name, price)}>
            Retirer
          </button>
        </div>
      ))}
      <h3>TOTAL : {total} €</h3>
      <button onClick={() => updateCart([])}>Vider de panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
