/* --------------------------- Reusable interfaces -------------------------- */
interface hasQuantity {
    quantity: number
}

const something: hasQuantity = {quantity: 50}

function printQuantity(item: hasQuantity) : void {
    console.log(`the quantity is: ${item.quantity}`)
}

const fruit = {
    name: 'mango',
    quantity: 50
}
const vehicle = {
    type: 'car',
    quantity: 3
}
const person = {
    name: 'mario',
    age: 30
}

printQuantity(vehicle)
printQuantity(person)

printQuantity({ quantity: 60, title: "hp" })