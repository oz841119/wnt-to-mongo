import { model } from 'mongoose'
const Word = model('Word', {
  word: String,
  explanation: String,
  partOfSpeech: String,
})
export {
  Word
}