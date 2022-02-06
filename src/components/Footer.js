import { useState, useEffect } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  /*
  useEffect(() => {
    console.log(`Cette alerte s'affiche à chaque rendu`)
  }) 

  useEffect(() => {
    console.log(`Cette alerte s'affiche au premier rendu`)
  },[]) 

    useEffect(() => {
    console.log(`Cette alerte s'affiche au premier rendu et des que cart est mis à jour`)
  },[cart]) 

  */

  useEffect(() => {
    return () =>
      console.log(`Cette alerte s'affiche quand footer est retiré du DOM`);
  }); //quand on clique sur le bouton cacher le footer en bas de l application

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
        <textarea
          placeholder="Laissez-nous votre mail"
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value)}
        />
        <br />
        <button onClick={() => console.log(inputValue)}>
          Envoyer votre email
        </button>
      </div>
    </footer>
  );
}

function handleBlur(value) {
  if (!value.includes(`@`)) {
    //permet de verifier si la valeur contient un element
    alert(`Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.`);
  }
}

export default Footer;
