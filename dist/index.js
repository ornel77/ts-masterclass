"use strict";
function addTwoNumbers(a, b) {
    return a + b;
}
function squareNumber(num) {
    return num * num;
}
function joinTwoNubers(numOne, numTwo) {
    return `${numOne}${numTwo}`;
}
// array of function of type Calculator
let calcs = [];
calcs.push(addTwoNumbers, squareNumber); //no error
const shapeOne = {
    name: 'square',
    calcArea: (l) => {
        return l * l;
    }
};
const shapeTwo = {
    name: 'circle',
    calcArea(radius) {
        return (Math.PI * radius ^ 2);
    }
};
shapeOne.calcArea(5);
shapeTwo.calcArea(10);
