import fs from 'fs'
import { parse } from 'csv-parse'
export function createCnEcdict({ path }) {
  return new Promise((resovle, reject) => {
    const words = []
    fs.createReadStream(path)
      .pipe(parse({ relax_column_count : true, columns: true }))
      .on('data', (row) => {
        words.push(row)
      })
      .on('error', (err) => {
        console.log(err);
        reject(err)
      })
      .on('end', () => {
        resovle(words)
      })
  })
}