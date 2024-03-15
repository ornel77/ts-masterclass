/* -------------------------------------------------------------------------- */
/*                               Generic constraints                          */
/* -------------------------------------------------------------------------- */

interface HasId {
  id: number
}

class DataCollection<T extends HasId> {
  constructor(private data: T[]) {}

  loadOne(): T {
    const i = Math.floor(Math.random() * this.data.length)
    return this.data[i]
  }
  loadAll(): T[] {
    return this.data
  }
  add(val: T): T[] {
    this.data.push(val)
    return this.data
  }
  deleteOne(id: number): void {
    this.data = this.data.filter(item => item.id !== id)
  }
}

interface User {
  name: string
  score: number
  id: number
}

const users = new DataCollection<User>([
  {id: 1, name: 'mario', score: 100},
  {id: 2, name: 'peach', score: 150},
  {id: 3, name: 'wario', score: 20},
  {id: 4, name: 'yoshi', score: 90},
])

users.add({name: "Luiji", score: 50, id: 31}) 
users.deleteOne(3)

const user = users.loadAll()

console.log('load one ', users.loadOne());
console.log('load all ', users.loadAll());