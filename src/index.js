import wordnet from 'wordnet'
import { addWords } from '../mongo/db.js'
import mongoose from 'mongoose'
import { PART_OF_SPEECH } from '../enums/index.js'
main()
async function main() {
  const REGEX = /\d/;
  await wordnet.init(process.env['WNT_PATH']);
  const list = wordnet.list();
  const words = []
  for(let i = 0 ; i < list.length ; i++) {
    if(i % 1000 === 0) {
      console.log(i + '/' + list.length)
    }
    const wordStr = list[i]
    if(REGEX.test(wordStr)) continue
    const wordDefinitions = await wordnet.lookup(wordStr)
    wordDefinitions.forEach((wordInfo) => {
      words.push({
        word: wordStr,
        explanation: wordInfo.glossary,
        partOfSpeech: PART_OF_SPEECH[wordInfo.meta.synsetType]
      })
    })
  }
  await addWords(words)
  mongoose.connection.close()
  return
}