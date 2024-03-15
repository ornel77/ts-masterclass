/* -------------------------- function signaturees -------------------------- */
type Calculator = (numOne: number, numTwo: number) => number

function addTwoNumbers(a: number, b: number) {
    return a + b
}

function squareNumber(num:number) {
    return num * num
}

function joinTwoNubers(numOne:number, numTwo: number) {
    return `${numOne}${numTwo}`
}
// array of function of type Calculator
let calcs: Calculator[] = []

calcs.push(addTwoNumbers, squareNumber) //no error
// calcs.push(joinTwoNubers) error

/* -------------------- function signaturees on interface ------------------- */
interface HasArea {
    name: string
    calcArea (a: number): number
}

const shapeOne: HasArea = {
    name: 'square',
    calcArea: (l: number) => {
        return l * l
    } 
}
const shapeTwo: HasArea = {
    name: 'circle',
    calcArea (radius: number) {
        return (Math.PI * radius^2)
    } 
}

shapeOne.calcArea(5)
shapeTwo.calcArea(10)

