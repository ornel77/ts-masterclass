"use strict";
// inheretance
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - £${this.price}`;
    }
    format() {
        return `this menu item is called ${this.title} and is £${this.price}`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
        this.base = 'classic';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
    format() {
        let formatted = this.details + '\n';
        // base
        formatted += `Pizza on a ${this.base} base`;
        // toppings
        if (this.toppings.length < 1) {
            formatted += 'with no toppings';
        }
        else {
            formatted += ` with ${this.toppings.join(', ')}`;
        }
        return formatted;
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
// function printMenuItem(item: MenuItem): void {
//   console.log(item.details);
// }
// printMenuItem(pizza)
pizza.addTopping('olives');
pizza.addTopping('jam');
pizza.addTopping('burrata');
function printFormatted(val) {
    console.log(val.format());
}
printFormatted(pizza);
