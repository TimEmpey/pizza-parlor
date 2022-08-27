# _Tony's Pizzeria_

#### By _**Tim Empey**_

## Github Pages
_https://timempey.github.io/pizza-parlor/_

#### _Pizzeria webpage with custom ordering_

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_

## Description

_Webpage allows user to make a custom made pizza and place the order, prompting a price to be presented based on combination of users pizza options. The determining factors are pizza size and weather or not theres meat._

## Setup/Installation Requirements

* _Open up your terminal and navigate to the desired landing folder_
* _In terminal enter, ' "git clone https://github.com/TimEmpey/pizza-parlor '_
* _In terminal enter 'code .' to open files in Visual Studio Code_
* _In Visual Code Studio select the 'Go Live' option on the bottom task bar_

## Known Bugs

* _No Known Bugs_

## Tests
<details>
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
</details>

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_

Copyright (c) _2022_ _Timothy Empey_

