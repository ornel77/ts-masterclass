/* ---------------------------- extend type alias --------------------------- */
type Person = {
    id: string | number
    firstName: string
}

type User = Person & {
    email: string
}


const person1 = {
    id:1,
    firstName: 'mario'
}

const person2 = {
    id:1,
    firstName: 'yoshi',
    email: 'd.e@f.com'
}
const person3 = {
    email: 'ddsfsdf.e@f.com'
}

function printUser(user: User) {
    console.log(user.id, user.email, user.firstName);
}

// printUser(person1) error