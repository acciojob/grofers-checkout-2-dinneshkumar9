//your code here
// Get all the price elements
const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

// Calculate the total price
let totalPrice = 0;
priceElements.forEach(priceElement => {
  totalPrice += parseFloat(priceElement.textContent);
});

// Add the total price to the table
const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');
grandTotalElement.textContent = totalPrice.toFixed(2);
