"use strict";
/* -------------------------------------------------------------------------- */
/*                               Generic constraints                          */
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
    deleteOne(id) {
        this.data = this.data.filter(item => item.id !== id);
    }
}
const users = new DataCollection([
    { id: 1, name: 'mario', score: 100 },
    { id: 2, name: 'peach', score: 150 },
    { id: 3, name: 'wario', score: 20 },
    { id: 4, name: 'yoshi', score: 90 },
]);
users.add({ name: "Luiji", score: 50, id: 31 });
users.deleteOne(3);
const user = users.loadAll();
console.log('load one ', users.loadOne());
console.log('load all ', users.loadAll());
