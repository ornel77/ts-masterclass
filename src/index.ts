/* -------------------------------------------------------------------------- */
/*                              Generic Interface                             */
/* -------------------------------------------------------------------------- */

interface Collection<T> {
  data:  T[]
  name: string
}

const collectionOne: Collection<string>= {
  data: ['mario', 'luigi', 'peach'],
  name: 'mario characters'
}

const collectionTwo: Collection<number>= {
  data: [56, 120, 78, 32, 400],
  name: 'winning lottery numbers'
}

function randomCollectionItem<T>(c: Collection<T>): T {
  const i = Math.floor(Math.random() * c.data.length)
  return c.data[i]
}

const resultOne = randomCollectionItem<string>(collectionOne)
// with the function declaration we are already infering the type of the argument so no need to add <number>
const resultTwo = randomCollectionItem(collectionTwo)
console.log(resultOne, resultTwo);