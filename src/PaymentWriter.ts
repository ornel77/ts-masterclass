import { CSVWriter } from "./index";

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}




const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes'])

paymentWriter.addRows([
  {id: 1, amount: 50, to: "mario", notes: "nothing yet"},
  {id: 2, amount: 5, to: "luigi", notes: "web dev"},
  {id: 3, amount: 35, to: "kristen", notes: "javascript"},
])

paymentWriter.save('./data/payments.csv')