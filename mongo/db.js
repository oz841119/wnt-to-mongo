import { connect } from '../mongo/connect.js'
import { Word } from './models/index.js'
const addWords = async (words) => {
  const target = words.map(({ word, explanation, partOfSpeech, synsetOffset, relative }) => {
    return { word, explanation, partOfSpeech, synsetOffset, relative }
  })
  await connect()
  return Word.insertMany(target)
}
export {
  addWords
}