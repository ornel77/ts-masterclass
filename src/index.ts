/* -------------------------- extending interfaces -------------------------- */
interface HasFormatter {
    format(): string
}

interface Bill extends HasFormatter {
    id: string | number
    amount: number
    server: string
}

const user = {
    id: 1,
    format(): string {
        return `the user has an id of  ${this.id}`
    }
}

const bill = {
    id: 2,
    amount: 50,
    server: 'mario',
    format(): string {
        return `bill with id ${this.id} has €${this.amount}`
    }
}

function printFormatted(val: HasFormatter): void {
    console.log(val.format());
}

function printBill(bill: Bill): void {
    console.log('server:', bill.server);
    console.log(bill.format());
}

printFormatted(user)
printFormatted(bill)

printBill(bill)
// printBill(user) error because require amount and server