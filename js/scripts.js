// Business Logic
function Order() {
  this.pizzas = {}
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.firstName] = pizza;
}

Order.prototype.findPizza = function(firstName) {
  if(this.pizzas[firstName] !== undefined) {
    return this.pizzas[firstName];
  }
  return false;
}

function Pizza (firstName, size, toppings = []) {
  this.firstName = firstName;
  this.size = size;
  this.toppings = toppings;
}

// UI Logic

let order = new Order

function displayOrder(event) {
  const firstName = document.getElementById("first-name-input").value;
  const displayOrder = order.findPizza(firstName);
  document.querySelector(".first-name").innerText = displayOrder.firstName + (" ");
  document.querySelector(".pizza-size").innerText = displayOrder.size  + (" ");
  document.querySelector(".pizza-toppings").innerText = displayOrder.toppings  + (" ");
  document.querySelector(".total-price").innerText = displayOrder.price  + (" ");
}

function handleSubmission(event) {
  event.preventDefault();
  const firstNameInput = document.getElementById("first-name-input").value;
  const sizeInput = document.querySelector("select#size-select").value;
  const toppingsInputArray = []
  const toppingsInput = document.querySelectorAll('input[type=checkbox]:checked')
  for (let i = 0; i < toppingsInput.length; i++) {
    toppingsInputArray.push(toppingsInput[i].value)
  }
  let newPizza = new Pizza(firstNameInput, sizeInput, toppingsInputArray);
  order.addPizza(newPizza);
}

window.addEventListener("load", function() {
  this.document.querySelector("form#build-pizza").addEventListener("submit", handleSubmission)
  this.document.querySelector("form#build-pizza").addEventListener("submit", displayOrder)
});