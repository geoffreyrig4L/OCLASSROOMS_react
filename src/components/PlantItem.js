import "../styles/PlantItem.css";
import CareScale from "./CareScale";

/*function handleClick() {
  console.log("✨ Ceci est un clic ✨");
} 

function handleClick(e) {
  console.log("✨ Ceci est mon event :", e);
}*/

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`);
}

function PlantItem({ id, name, cover, water, light }) {
  return (
    <li
      key={id}
      className="lmj-plant-item"
      onClick={() => handleClick(name) /*() => handleClick(MouseEvent)*/}
    >
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
