const specialToppings = {
  hay: 2.99,
  carrots: 3.75, 
  peppers: 4.99, 
  lettuce: 2.99,
  pellets: 2.75
}
const regToppings = {
  ricotta: .50,
  sdtoms: .50,
  anchovies: .75,
  bacon: 1.25,
  cheese: 0,
  mozarella: .50,
  mushrooms: .50
}

const sizes = {
  12: 10.99,
  18: 15.99,
  20: 18.99,
  34: 32.00
}

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
  return parseFloat(baseCost + extraCost).toFixed(2);
}