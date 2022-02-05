function Cart() {
  const priceMon = 8;
  const priceLierre = 10;
  const priceBouq = 15;

  return (
    <div>
      <h1>Panier 🛒</h1>
      <ul>
        <li>
          Monstera<p>Price : {priceMon}</p>
        </li>
        <li>
          Lierre<p>Price : {priceLierre}</p>
        </li>
        <li>
          Bouquet de fleurs<p>Price : {priceBouq}</p>
        </li>
      </ul>
      <p>TOTAL : {priceMon + priceLierre + priceBouq}</p>
    </div>
  );
}
export default Cart;
