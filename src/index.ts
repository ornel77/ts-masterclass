/* -------------------------------------------------------------------------- */
/*                             CSV Writer Project                             */
/* -------------------------------------------------------------------------- */
import  {appendFileSync} from 'fs'



export class CSVWriter<T> {
  constructor(private columns: (keyof T)[]) {
    this.csv = this.columns.join(',') + '\n'
  }

  private csv: string

  // save the file
  save(filename: string): void {
    appendFileSync(filename, this.csv)
    this.csv = '\n'
    console.log("file saved to", filename);
  }

  addRows(values: T[]): void {
    let rows = values.map(v => this.formatRow(v))
    this.csv += rows.join('\n') + '\n'
    console.log(this.csv);
  }

  private formatRow(value: T): string {
    return this.columns.map(col => value[col]).join(',') 
  }
}


