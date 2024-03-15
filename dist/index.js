"use strict";
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.base = 'classic';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter(t => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizza = new Pizza('mario special', 15);
const pizza2 = new Pizza('luigi special', 17);
function addMushroomsToPizzas(pizzas) {
    pizzas.forEach((pizza) => {
        pizza.addTopping('mushrooms');
    });
}
addMushroomsToPizzas([pizza, pizza2]);
console.log(pizza);
