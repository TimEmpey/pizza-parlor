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

function Pizza (firstName, size, toppings) {
  this.firstName = firstName;
  this.size = size;
  this.toppings = toppings;
}
