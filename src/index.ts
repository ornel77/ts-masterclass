/* -------------------------------------------------------------------------- */
/*                                Generics 101                                */

import { getRandomValues } from "crypto";

/* -------------------------------------------------------------------------- */
function logAndReturnString(val: string): string {
  console.log(val);
  return val;
}
function logAndReturnNumber(val: number): number {
  console.log(val);
  return val;
}
function logAndReturnBoolean(val: boolean): boolean {
  console.log(val);
  return val;
}

// annoying to do 3 function that does the same type so we use generics : 
// Example 1
function logAndReturnValue<T>(val: T): T {
  console.log(val);
  return val
}

const result = logAndReturnValue<string>('mario')
const result1 = logAndReturnValue<number>(1)
const result2 = logAndReturnValue<boolean>(false)

// Example 2
function getRandomArrayValue<T>(values: T[]): T {
  const i = Math.floor(Math.random() * values.length)
  return values[i]
}

interface User {
  name: string,
  score: number
}

const users: User[] = [
  {name: 'mario', score: 100},
  {name: 'peach', score: 150},
  {name: 'wario', score: 20},
  {name: 'yoshi', score: 90},
]

const randomUser = getRandomArrayValue<User>(users)
console.log(randomUser);