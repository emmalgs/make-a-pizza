# TDD

#### Describe: PizzaMe()

Test: "It should return an instance of PizzaMe with two properties for toppings and size."
Code: const newPizza = new PizzaMe(["ricotta", "sun-dried tomatoes", "mushrooms"], "18-inch");
Expected Output: newPizza { toppings: ["ricotta", "sun-dried tomatoes", "mushrooms"], size: "18-inch" };

#### Describe" PizzaMe.prototype.cost()

Test: "It should return a string that represents the cost of a pizza"
Code: 
const newPizza = new PizzaMe(["ricotta", "sdtoms", "mushrooms"], "18");
newPizza.cost();
Expected Output: "$17.09"

Test: "It should also check the price of our Buckey special toppings"
Code:
const pizza2 = new PizzaMe (["hay", "sdtoms", "mozarella", "pellets"], "20");
pizza2.cost();
Expected Output: 