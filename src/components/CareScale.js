import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

// const {scaleValue, careType} = props
// On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
// const scaleValue = props.scaleValue et
// const careType = props.careType

//Cette méthode ci-dessus est appelée la destructuration

function handleClick(scaleValue, careType) {
  var qteRequise = "";
  var requis = "";
  careType === "water" ? (requis = "d'arrosage") : (requis = "de lumière");
  switch (scaleValue) {
    case 1:
      qteRequise = "peu";
      break;
    case 2:
      qteRequise = "modérement";
      break;
    case 3:
      qteRequise = "beaucoup";
      break;
    default:
      throw console.error();
  }
  alert(`Cette plante requiert ${qteRequise} ${requis}`);
}

function CareScale({ scaleValue, careType }) {
  //on passe donc des props en param
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="sun-icon" />
    );

  return (
    <div onClick={() => handleClick(scaleValue, careType)}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
