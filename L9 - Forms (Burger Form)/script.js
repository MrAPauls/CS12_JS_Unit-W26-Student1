// CONSTANTS
const TAXRATE = 0.15;
const BURGERPRICE = 6.5;
const FRIESPRICE = 3.5;
const DRINKSPRICE = 2.5;

function resetOrder() {
  document.querySelector(".orderform").reset();
  document.querySelector(".message").innerHTML = "Please place your order!";
}

function updateOrder() {
  let numBurgers = Number(document.querySelector(".burgers").value);
  let numFries = Number(document.querySelector(".fries").value);
  let numDrinks = Number(document.querySelector(".drinks").value);

  if (isNaN(numBurgers) || numBurgers < 0) numBurgers = 0;
  if (isNaN(numFries) || numFries < 0) numFries = 0;
  if (isNaN(numDrinks) || numDrinks < 0) numDrinks = 0;
  let subTotal =
    numBurgers * BURGERPRICE + numFries * FRIESPRICE + numDrinks * DRINKSPRICE;
  let tax = subTotal * TAXRATE;
  let total = subTotal + tax;
  document.querySelector(".subTotal").value = "$" + subTotal.toFixed(2);
  document.querySelector(".tax").value = "$" + tax.toFixed(2);
  document.querySelector(".total").value = "$" + total.toFixed(2);
  document.querySelector(".message").innerHTML = "Thanks for your order!";
}

// EVENT LISTENERS
// document.querySelector(".orderform").addEventListener("input", updateOrder);
document.querySelector(".makeOrder").addEventListener("click", updateOrder);
document.querySelector(".resetOrder").addEventListener("click", resetOrder);
