import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

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
