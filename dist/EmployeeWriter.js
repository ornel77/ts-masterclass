"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter(['id', 'name', 'role', "salary"]);
employeeWriter.addRows([
    { id: 1, name: 'jack', salary: 50000, role: 'web dev' },
    { id: 2, name: 'fiona', salary: 65000, role: 'digital manager' },
    { id: 1, name: 'clara', salary: 100000, role: 'director' },
]);
employeeWriter.save('data/employees.csv');
