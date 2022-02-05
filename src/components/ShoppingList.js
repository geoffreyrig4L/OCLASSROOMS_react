import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem.js";
import Categories from "./Categories";
import { useState } from "react";

function ShoppingList({ cart, updateCart }) {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  //reduce réduit l'ensemble des valeurs d'une liste à une seule valeur, ainsi cette fonction se répéte jusqu a avoir parcouru tout les plants
  //includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas
  //concat permet de concatener (woaw)
  //passer un array en param de reduce permet de retourner un tableau
  //<p>{categories}</p> affiche classiqueextérieurplante grasse

  const [activeCategory, setActiveCategory] = useState("");

  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    //cherche si la plante ajouter au panier est déjà dans le panier
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
        //creer un nouveau tableau sans la plante
      );
      updateCart([
        ...cartFilteredCurrentPlant, //ajoute le nouveau tableau
        { name, price, amount: currentPlantAdded.amount + 1 }, //rajoute la qte précédente +1,
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]); //on recupere le panier deja existant et on ajoute la plante ajoutée
    }
  }

  //map() permet de passer sur chaque élément d’un tableau afin de lui appliquer une fonction qu’on lui passera en paramètre.

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? ( //le !activeCategory permet d'afficher toutes les plantes si on réinitalise le activeCategory en ''
            <div key={id}>
              <PlantItem
                id={id}
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

//l51, on importe un composant enfant (PlantItem) à notre composant actuel, qui est le composant parent du composant enfant

export default ShoppingList;
