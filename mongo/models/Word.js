import { model } from 'mongoose'
const Word = model('Word', {
  word: String,
  explanation: String,
  partOfSpeech: String,
  synsetOffset: Number,
  relative: {
    antonym: [Number],
    hypernym: [Number],
    instanceHypernym: [Number],
    hyponym: [Number],
    instanceHyponym: [Number],
    derivational: [Number]
  }
})
export {
  Word
}