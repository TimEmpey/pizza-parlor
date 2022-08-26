<detail>
  <summary>Tests</summary>
  Describe: Pizza()<br>
  Test 1: Should place name, size, and toppings under new pizza object<br>
  Code: <br>
  let pizza = new Pizza("Tim", "large", "pepperoni");<br>
  pizza;<br>
  Expected Output: <br>
  firstName: Tim<br>
  size: large<br>
  toppings: pepperoni<br>

  Describe Order()<br>
  Test 1: Should create an new blank order<br>
  Code:<br>
  let order = new Order();<br>
  Expected Output:<br>
  order {}<br>

Describe: Order.prototype.addPizza()
  Test 1: Should populate Order() with a new pizza
  Code:
  let order = new Order();
  let pizza = new Pizza("Tim", "large", "pepperoni");<br>
  pizza.addPizza();
  order();
  Expected Output: 
  order {
    pizzas:{
    firstName: Tim
    size: large
    toppings: pepperoni
    }
  }
</detail>