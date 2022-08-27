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

Pizza.prototype.cost = function() {
  if (this.size === 'large' && this.toppings.includes('pepperoni')) {
    let cost =  '$18';
    return cost;
  } else if (this.size === 'medium' && this.toppings.includes('pepperoni')) {
    let cost = '$15';
    return cost;
  } else if (this.size === 'medium' && this.toppings.includes('pepperoni')) {
    let cost = '$10'
    return cost;
  } else if (this.size === 'large') {
    let cost = '$15';
    return cost;
  } else if (this.size === 'medium') {
    let cost = '$12';
    return cost;
  } else if (this.size === 'small') {
    let cost = '$8';
    return cost;
  }
};

function Pizza (firstName, size, toppings = [], price) {
  this.firstName = firstName;
  this.size = size;
  this.toppings = toppings;
  this.pizzaCost = price;
}

// UI Logic

let order = new Order

function displayOrder(event) {
  const firstName = document.getElementById("first-name-input").value;
  const displayOrder = order.findPizza(firstName);
  document.querySelector(".first-name").innerText = displayOrder.firstName + (" ");
  document.querySelector(".pizza-size").innerText = displayOrder.size  + (" ");
  document.querySelector(".pizza-toppings").innerText = displayOrder.toppings  + (" ");
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
  let cost = newPizza.cost();
  order.addPizza(newPizza);
  document.querySelector(".total-price").innerText = cost  + (" ");
}

window.addEventListener("load", function() {
  this.document.querySelector("form#build-pizza").addEventListener("submit", handleSubmission)
  this.document.querySelector("form#build-pizza").addEventListener("submit", displayOrder)
});