import { addWords } from '../mongo/db.js'
import mongoose from 'mongoose'
import { createEnEcdict } from './createEnEcdict.js'
import { createCnEcdict } from './createCnEcdict.js'
import { getCnEcdictPath } from './utils/getCnEcdictPath.js';
import { createMapping } from './utils/createMapping.js';

main()
async function main() {
  const ecdictPromiseList = [createEnEcdict({ path: process.env['WNT_DB_PATH'] }), createCnEcdict({ path: getCnEcdictPath() })]
  const [words, wordsWithCN] = await Promise.all(ecdictPromiseList)
  const _wordsMapping = createMapping(words, 'word')
  console.log(_wordsMapping);
  // await addWords(words)
  // mongoose.connection.close()
  return
}