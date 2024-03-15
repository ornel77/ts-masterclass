"use strict";
function addIdToValue(val) {
    const id = Math.random();
    return Object.assign(Object.assign({}, val), { id });
}
const post = addIdToValue({ title: 'Marmite Rules', thumbsUp: 521 });
console.log(post);
