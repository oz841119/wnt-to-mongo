import { connect } from '../mongo/connect.js'
import { Word } from './models/index.js'
const addWords = async (words) => {
  const target = words.map(({ word, explanation, partOfSpeech }) => {
    return { word, explanation, partOfSpeech }
  })
  await connect()
  return Word.insertMany(target)
}
export {
  addWords
}