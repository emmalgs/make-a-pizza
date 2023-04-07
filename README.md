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