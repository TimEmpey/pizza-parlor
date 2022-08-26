function Order() {
  this.pizzas = {}
}
Order.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.firstName] = pizza;
}

function Pizza (firstName, size, toppings) {
  this.firstName = firstName;
  this.size = size;
  this.toppings = toppings;
}