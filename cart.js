/*** Declare cart object */
const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

/*** Define Functions */
function calculateTotal(cartItems) {
  let total = 0;
  if (cartItems.length <= 0) { // Check if cart is empty
    total = `Cart is empty`
  }
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <. Debugging block showed index larger than array causing returned total to be undefined
     if (isNaN(cartItems[i].price)) {
       console.log(`The given price for ${cartItems[i].name}, ${cartItems[i].price}, is not a number`)
       continue;
     } else {
      total += cartItems[i].price;
     }
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (total === `Cart is empty`) { // Check if cart is empty
    return total
  }
  else if (discountRate >= 1 || discountRate === 0 || isNaN(discountRate)) { // Bug: Missing validation for discountRate
     console.log(`Must enter decimal < 1`)
     return total
  }
  return (total - total * discountRate).toFixed(2); // Debugging showed value of discountRate
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  if (cartItems.length === 0) { // Check if cart is empty
    receipt = `Cart is empty`;
    return receipt;
  }
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`; // \n does not add new line
  });
  if (!isNaN(total)) {
  receipt += `Total: $${total}`; 
  }
  return receipt;
}

/*** Call Functions */
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.3248318); // discount 32.48318%
const receipt = generateReceipt(cart, discountedTotal);

/*** DOM Elements */
document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
