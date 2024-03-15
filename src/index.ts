/* -------------------------------- Class 101 ------------------------------- */
type Base = 'classic' | 'thick' | 'thin' | 'garlic';

class Pizza {
  constructor(private title: string,private price: number) {
    
  }
  private base: Base = 'classic'
  private toppings: string[] = []

  addTopping(topping: string): void {
    this.toppings.push(topping)
  } 

  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter(t => t !== topping)
  }

  selectBase(b: Base): void {
    this.base = b
  }
}

const pizza: Pizza = new Pizza('mario special', 15);
const pizza2 = new Pizza('luigi special', 17);

function addMushroomsToPizzas(pizzas: Pizza[]): void {
  pizzas.forEach((pizza: Pizza) => {
    pizza.addTopping('mushrooms')
  })
}

addMushroomsToPizzas([pizza, pizza2])


console.log(pizza);