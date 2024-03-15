/* -------------------------------- Class 101 ------------------------------- */
type Base = 'classic' | 'thick' | 'thin' | 'garlic';

// inheretance
class MenuItem {
  constructor(private title: string,private price: number) {
    
  }
  get details(): string {
    return `${this.title} - £${this.price}`
  }
}

class Pizza extends MenuItem{
  constructor(title: string,price: number) {
    super(title, price)
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
function printMenuItem(item: MenuItem): void {
  console.log(item.details);
}

printMenuItem(pizza)