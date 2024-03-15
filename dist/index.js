"use strict";
const user = {
    id: 1,
    format() {
        return `the user has an id of  ${this.id}`;
    }
};
const bill = {
    id: 2,
    amount: 50,
    server: 'mario',
    format() {
        return `bill with id ${this.id} has €${this.amount}`;
    }
};
function printFormatted(val) {
    console.log(val.format());
}
function printBill(bill) {
    console.log('server:', bill.server);
    console.log(bill.format());
}
printFormatted(user);
printFormatted(bill);
printBill(bill);
// printBill(user) error because require amount and server
