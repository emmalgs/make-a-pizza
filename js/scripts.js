// Global Variables

let order;

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
    checkbox.setAttribute("class", "regs");
    checkbox.name = topping;
    checkbox.value = topping;

    regToppingsContainer.append(checkbox, label)
  });
}

function displaySpecialToppings() {
  const specialToppingsContainer = document.getElementById("special-toppings");
  let specialToppingNames = Object.keys(specialToppings);
  specialToppingNames.forEach(function(topping) {
    let label = document.createElement("label")
    let checkbox = document.createElement("input");

    label.for = topping;
    label.innerText = `${topping}: $${financial(specialToppings[topping])}`;
    checkbox.type = "checkbox";
    checkbox.setAttribute("class", "specials");
    checkbox.name = topping;
    checkbox.value = topping;

    specialToppingsContainer.append(checkbox, label);
  });
}

function displaySizeOptions() {
  const sizeContainer = document.getElementById("sizes");
  let sizeNames = Object.keys(sizes);
  sizeNames.forEach(function(size) {
    let label = document.createElement("label");
    let radio = document.createElement("input");

    label.for = `size${size}`;
    label.innerText = `${size}-inch`;
    radio.type = "radio";
    radio.name = `size`;
    radio.id = `size${size}`;
    radio.value = size;

    sizeContainer.append(radio, label);
  });
}

function getRegToppingValues() {
  const regToppingsContainer = document.getElementById("reg-toppings")
  const regToppings = regToppingsContainer.querySelectorAll("input[type=checkbox]:checked");
  regToppingsArray = Array.from(regToppings).map(function(selection) {
    return selection.value
  })
  return regToppingsArray
}

function getSpecialToppingValues() {
  const specialToppingsContainer = document.getElementById("special-toppings")
  const specialToppings = specialToppingsContainer.querySelectorAll("input[type=checkbox]:checked");
  specialToppingsArray = Array.from(specialToppings).map(function(selection) {
    return selection.value
  })
  return specialToppingsArray
}

function resetOrder() {
  const checked = document.querySelectorAll("input:checked")
  checked.forEach(function(item) {
    item.checked = false
  });
}

function displayOrderInfo(cost, pizza) {
  document.querySelector("#submit-final-order").removeAttribute("class");
  const orderDisplay = document.querySelector(".order-info");
  const totalCost = document.createElement("div");
  const toppingDisplay = document.createElement("div");
  const sizeDisplay = document.createElement("div")

  totalCost.setAttribute("class", "order-cost");
  totalCost.innerText = `$${cost}`;

  toppingDisplay.setAttribute("class", "order-toppings");
  toppingDisplay.innerText = `${pizza.toppings.join(", ")}`

  sizeDisplay.setAttribute("class", "order-size");
  sizeDisplay.innerText = `${pizza.size}-inch`
  orderDisplay.prepend(sizeDisplay, toppingDisplay, totalCost);
}

function startOrder() {
  document.getElementById("order-form").removeAttribute("class");
  document.getElementById("start-order").setAttribute("class", "hidden");
  order = new Order();
}

function displayReceipt() {
  const receiptDisplay = document.querySelector("#receipt");
  const orders = Object.keys(order.pizzas)
  orders.forEach(function(item) {
    let pizzaCost = document.createElement("div");
    let pizzaToppings = document.createElement("div");
    let pizzaSize = document.createElement("div");

    pizzaCost.innerText = order.pizzas[item].cost;
    pizzaToppings.innerText = order.pizzas[item].toppings.join(", ");
    pizzaSize = order.pizzas[item].size;

    receiptDisplay.append(pizzaCost, pizzaToppings, pizzaSize)
  })
}

function handleFormSubmission(e) {
  e.preventDefault();
  const regToppings = getRegToppingValues();
  const specialToppings = getSpecialToppingValues();
  const size = document.querySelector("input[name=size]:checked").value;
  const toppings = regToppings.concat(specialToppings);
  
  let pizza = new PizzaMe(toppings, size);
  const cost = pizza.cost();
  pizza.cost = cost;
  order.addPizza(pizza);

  displayOrderInfo(cost, pizza)
  resetOrder()
}

window.addEventListener("load", function() {
  displayRegToppings();
  displaySpecialToppings();
  displaySizeOptions();
  this.document.querySelector("form").addEventListener("submit", handleFormSubmission);
  this.document.querySelector("button#start-order").addEventListener("click", startOrder)
  this.document.querySelector("button#submit-final-order").addEventListener("click", displayReceipt)
})