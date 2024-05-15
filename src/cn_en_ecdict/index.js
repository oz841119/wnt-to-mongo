import { parse } from "csv-parse";
import { fileURLToPath } from 'url';
import path from 'path';
import { config } from 'dotenv'
import fs from 'fs'
config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, process.env['CN_CSV_PATH'])
const a = fs.readFile(filePath, (e, d) => {
  console.log(d);
})