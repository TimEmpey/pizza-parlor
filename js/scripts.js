function Order() {
  this.pizzas = {}
}

function Pizza (firstName, size, toppings) {
  this.firstName = firstName;
  this.size = size;
  this.toppings = toppings;
}