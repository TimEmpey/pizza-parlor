<detail>
  <summary>Tests</summary>
  Describe: Pizza()<br>
  Test 1: Should place name, size, and toppings under new pizza object<br>
  Code: <br>
    let pizza = new Pizza("Tim", "large", "pepperoni");<br>
    pizza;<br>
  Expected Output: <br>
    firstName: 'Tim'<br>
    size: 'large'<br>
    toppings: 'pepperoni'<br>

  Test 2: Should take multiple inputs for toppings and place into an array<br>
  Code:<br>
  let pizza = new Pizza("Tim", "large", ["pepperoni", "pineapple"]);<br>
  pizza;<br>
  Expected Output:<br>
  pizza{<br>
    firstName: Tim<br>
    size: large<br>
    toppings: array = ["pepperoni", "pineapple"]<br>
  }<br>

  Describe Order()<br>
  Test 1: Should create an new blank order<br>
  Code:<br>
    let order = new Order();<br>
  Expected Output:<br>
    order {}<br>

  Describe: Order.prototype.addPizza()<br>
  Test 1: Should populate Order() with a new pizza<br>
  Code:<br>
    let order = new Order();<br>
    let pizza = new Pizza("Tim", "large", "pepperoni");<br>
    pizza.addPizza();<br>
    order();<br>
  Expected Output: <br>
    order {<br>
      pizzas:{<br>
      firstName: 'Tim'<br>
      size: 'large'<br>
      toppings: 'pepperoni'<br>
      }<br>
    }<br>

  Describe: Order.prototype.findPizza()<br>
  Test: Should allow to search for specific pizza in order<br>
  Code:<br>
    let order = new Order();<br>
    let pizza = new Pizza("Tim", "large", "pepperoni");<br>
    order.findPizza('Tim')<br>
  Expected Output:<br>
    firstName: 'Tim'<br>
    size: 'large'<br>
    toppings: 'pepperoni'<br>

  Describe: Pizza.prototype.cost()<br>
  Test: Should display cost of pizza based on selected properties for said pizza<br>
  Code:<br>
    let order = new Order();<br>
    let pizza = new Pizza("Tim", "large", "pepperoni");<br>
    order.findPizza('Tim')<br>
    newPizza.cost()
  Expected Output:<br>
    $18

</detail>