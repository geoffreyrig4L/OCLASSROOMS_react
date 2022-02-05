import "../styles/Banner.css";

/* premier fonctionnement 

function Banner() {
  return (
    <div className="lmj-banner">
      <img
        src={logo}
        alt="logo"
        className="lmj-maison"
        style={{
          height: 50,
        }}
      ></img>
      <h1>La Maison Jungle</h1>
    </div>
  );
  //style="" / cette facon de rédiger du code de style s'appelle inline style, elle n'est pas recommandée
}

PUIS Ajout des props children ↓ */

function Banner({ children }) {
  //children contient ce que contient la balise Banner dans le fichier App.js
  return <div className="lmj-banner">{children}</div>;
}

export default Banner;
