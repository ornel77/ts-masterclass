"use strict";
/* -------------------------------------------------------------------------- */
/*                                Generics 101                                */
Object.defineProperty(exports, "__esModule", { value: true });
/* -------------------------------------------------------------------------- */
function logAndReturnString(val) {
    console.log(val);
    return val;
}
function logAndReturnNumber(val) {
    console.log(val);
    return val;
}
function logAndReturnBoolean(val) {
    console.log(val);
    return val;
}
// annoying to do 3 function that does the same type so we use generics : 
// Example 1
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
const result = logAndReturnValue('mario');
const result1 = logAndReturnValue(1);
const result2 = logAndReturnValue(false);
// Example 2
function getRandomArrayValue(values) {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
const users = [
    { name: 'mario', score: 100 },
    { name: 'peach', score: 150 },
    { name: 'wario', score: 20 },
    { name: 'yoshi', score: 90 },
];
const randomUser = getRandomArrayValue(users);
console.log(randomUser);
