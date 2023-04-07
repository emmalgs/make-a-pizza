# Buckey's One Stop Pizza Shopper

#### By _**Emma Gerigscott**_

#### _A webpage that let's you order a few awesome pizzas featuring chef Buckey's specials_

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

A mock pizza ordering webpage to practice Object-Oriented JavaScript. Select from any number of regular topping, specialty toppings, and make sure to select the pizza size! Finally, submit your final order when you have it where you like it, and view your receipt. Be warned--our chef is indeed a guinea pig.

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the directory_
* _Open index.html in your browser_

## Known Bugs

* _Not enough guinea pig pictures_
* _No individual pizza editing functionality; can only delete individual pizzas_

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023 Emma Gerigscott

# TDD

#### Describe: PizzaMe()

Test: "It should return an instance of PizzaMe with two properties for toppings and size."  
Code: const newPizza = new PizzaMe(["ricotta", "sun-dried tomatoes", "mushrooms"], "18-inch");  
Expected Output: newPizza { toppings: ["ricotta", "sun-dried tomatoes", "mushrooms"], size: "18-inch" };

#### Describe: PizzaMe.prototype.cost()

Test: "It should return a string that represents the cost of a pizza"  
Code:   
const newPizza = new PizzaMe(["ricotta", "sdtoms", "mushrooms"], "18");  
newPizza.cost();  
Expected Output: "17.09"

Test: "It should also check the price of our Buckey special toppings"  
Code:  
const pizza2 = new PizzaMe (["hay", "sdtoms", "mozarella", "pellets"], "20");  
pizza2.cost();  
Expected Output: "25.73"

#### Describe: Order()

Test: "It should return an instance of Order as an empty object with keys for pizzas and pizzaId when called"  
Code:   
const order = new Order()  
order;  
Expected Output: { pizzas: {}, pizzaId: 0 }

#### Describe: Order.prototype.addPizza()

Test: "It should add a pizza to the pizzas key, and the pizza should use the size as it's key"    
Code:   
const newPizza = new PizzaMe(["ricotta", "sdtoms", "mushrooms"], "18");  
const pizza2 = new PizzaMe (["hay", "sdtoms", "mozarella", "pellets"], "20");  
const order = new Order();  
order.addPizza(newPizza);  
order.addPizza(pizza2);  
order;  
Expected Output: { pizzas: {18: { toppings: ["ricotta", "sdtoms", "mushrooms"], size: "18" }, 20: {["hay", "sdtoms", "mozarella", "pellets"], "20"}}, pizzaId: 0; };

#### Describe: Order.prototype.assignPizzaId()

Test: "It should increment and assign each pizza added to the order an id"  
Code:  
const newPizza = new PizzaMe(["ricotta", "sdtoms", "mushrooms"], "18");  
const pizza2 = new PizzaMe (["hay", "sdtoms", "mozarella", "pellets"], "20");  
const order = new Order();  
order.addPizza(newPizza);  
order.addPizza(pizza2);  
order;  
Expected Output: { pizzas: {1: { toppings: ["ricotta", "sdtoms", "mushrooms"], size: "18" }, 2: {["hay", "sdtoms", "mozarella", "pellets"], "20"}}, pizzaId: 0; };