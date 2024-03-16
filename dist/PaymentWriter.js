"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const paymentWriter = new index_1.CSVWriter(['id', 'amount', 'to', 'notes']);
paymentWriter.addRows([
    { id: 1, amount: 50, to: "mario", notes: "nothing yet" },
    { id: 2, amount: 5, to: "luigi", notes: "web dev" },
    { id: 3, amount: 35, to: "kristen", notes: "javascript" },
]);
paymentWriter.save('./data/payments.csv');
