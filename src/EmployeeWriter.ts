import { CSVWriter } from "./index";

interface Employee {
    id: number
    name: string
    role: string
    salary: number
}

const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'role', "salary"])

employeeWriter.addRows([
    {id:1, name:'jack', salary:50000, role: 'web dev'},
    {id:2, name:'fiona', salary:65000, role: 'digital manager'},
    {id:1, name:'clara', salary:100000, role: 'director'},
])

employeeWriter.save('data/employees.csv')