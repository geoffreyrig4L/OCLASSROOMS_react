import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import CareScale from "./CareScale";
import PlantItem from "./PlantItem.js";

function ShoppingList() {
  const categories = plantList.reduce(
    //reduce réduit l'ensemble des valeurs d'une liste à une seule valeur, ainsi cette fonction se répéte jusqu a avoir parcouru tout les plants
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    //includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas
    //concat permet de concatener (woaw)
    [] //passer un array en param de reduce permet de retourner un tableau
  );

  //      <p>{categories}</p> affiche classiqueextérieurplante grasse

  //map() permet de passer sur chaque élément d’un tableau afin de lui appliquer une fonction qu’on lui passera en paramètre.
  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  );
}

//l28, on importe un composant enfant (PlantItem) à notre composant actuel, qui est le composant parent du composant enfant

export default ShoppingList;
