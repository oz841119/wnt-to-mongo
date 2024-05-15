import wordnet from 'wordnet'
import { PART_OF_SPEECH } from '../enums/index.js'
import { relativeHandler } from './utils/relativeHandler.js'

export async function createEnEcdict({ path }) {
  const REGEX = /[\d\s]/
  await wordnet.init(path);
  const list = wordnet.list();
  const words = []
  for(let i = 0 ; i < list.length ; i++) {
    if(i % 10000 === 0) {
      console.log(i + '/' + list.length)
    }
    const wordStr = list[i]
    if(REGEX.test(wordStr)) continue
    const wordDefinitions = await wordnet.lookup(wordStr)
    wordDefinitions.forEach((wordInfo) => {
      const relative = relativeHandler(wordInfo.meta.pointers)
      words.push({
        word: wordStr,
        explanation: wordInfo.glossary,
        partOfSpeech: PART_OF_SPEECH[wordInfo.meta.synsetType],
        synsetOffset: wordInfo.meta.synsetOffset,
        relative: relative
      })
    })
  }
  return words
}