"use strict";
/* -------------------------------------------------------------------------- */
/*                               Generic classes                              */
/* -------------------------------------------------------------------------- */
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
}
const users = new DataCollection([
    { name: 'mario', score: 100 },
    { name: 'peach', score: 150 },
    { name: 'wario', score: 20 },
    { name: 'yoshi', score: 90 },
]);
users.add({ name: "Luiji", score: 50 });
const user = users.loadAll();
console.log('load one ', users.loadOne());
console.log('load all ', users.loadAll());
