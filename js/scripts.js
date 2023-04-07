// Utility Logic

function financial(number) {
  return parseFloat(number).toFixed(2)
}

// Business Logic

const specialToppings = {
  hay: 2.99,
  carrots: 3.75, 
  peppers: 4.99, 
  lettuce: 2.99,
  pellets: 2.75
}
const regToppings = {
  ricotta: .50,
  "sun-dried tomatoes": .50,
  anchovies: .75,
  bacon: 1.25,
  cheese: 0.10,
  mozarella: .50,
  mushrooms: .50
}

const sizes = {
  12: 10.99,
  18: 15.99,
  20: 18.99,
  34: 32.00
}

function Order() {
  this.pizzas = {};
  this.pizzaId = 0;
}

Order.prototype.assignPizzaId = function() {
  this.pizzaId++;
  return this.pizzaId;
};

Order.prototype.addPizza = function(pizza) {
  this.pizzas[this.assignPizzaId()] = pizza;
};

function PizzaMe(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

PizzaMe.prototype.cost = function() {
  let baseCost = sizes[this.size];
  let extraCost = 0;
  this.toppings.forEach(function(topping) {
    if (regToppings[topping] !== undefined) {
      extraCost += regToppings[topping]
    } else { extraCost += specialToppings[topping] }
  });
  return financial(baseCost + extraCost);
};

// UI Logic

function displayRegToppings() {
  const regToppingsContainer = document.getElementById("reg-toppings");
  let regToppingNames = Object.keys(regToppings);
  regToppingNames.forEach(function(topping) {
    let label = document.createElement("label")
    let checkbox = document.createElement("input");

    label.for = topping;
    label.innerText = `${topping}: $${financial(regToppings[topping])}`;
    checkbox.type = "checkbox";
    checkbox.name = topping;
    checkbox.value = topping;

    regToppingsContainer.append(checkbox, label)
  })
}

window.addEventListener("load", function() {
  displayRegToppings();
})