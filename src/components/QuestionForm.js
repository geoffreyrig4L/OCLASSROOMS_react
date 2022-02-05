import { useState } from "react";

/* ___________ NON CONTROLE ___________

function QuestionForm() {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="my_input" defaultValue="Tapez votre texte" />
      <button type="submit">Entrer</button>
    </form>
  );
}

function handleSubmit(e) {
  e.preventDefault(); //permet de ne as rafraichir la page
  alert(e.target["my_input"].value);
}

___________ CONTROLE ___________ */

function QuestionForm() {
  const [inputValue, setInputValue] = useState("Posez votre question ici");
  //déclare inputValue grace à la fonction correspondante pour la modifier = setInputValue ; modifie son contenu en "Posez votre question ici"
  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
    </div>
  );
}

export default QuestionForm;
