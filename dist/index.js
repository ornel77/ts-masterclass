"use strict";
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',') + '\n';
    }
    addRows(values) {
        let rows = values.map(v => this.formatRow(v));
        this.csv += rows.join('\n');
        console.log(this.csv);
    }
    formatRow(p) {
        return this.columns.map(col => p[col]).join(',');
    }
}
const writer = new CSVWriter(['id', 'amount', 'to', 'notes']);
writer.addRows([
    { id: 1, amount: 50, to: "mario", notes: "nothing yet" },
    { id: 2, amount: 5, to: "luigi", notes: "web dev" },
    { id: 3, amount: 35, to: "kristen", notes: "javascript" },
]);
