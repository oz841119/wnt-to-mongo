export function relativeHandler(pointers) {
  const relative = {
    antonym: [],
    hypernym: [],
    instanceHypernym: [],
    hyponym: [],
    instanceHyponym: [],
    derivational: []
  }
  const symbolFn = {
    '!': (synsetOffset) => relative.antonym.push(synsetOffset),
    '@': (synsetOffset) => relative.hypernym.push(synsetOffset),
    '@i': (synsetOffset) => relative.instanceHypernym.push(synsetOffset),
    '~': (synsetOffset) => relative.hyponym.push(synsetOffset),
    '~i': (synsetOffset) => relative.instanceHyponym.push(synsetOffset),
    '+': (synsetOffset) => relative.derivational.push(synsetOffset)
  }
  pointers.forEach(pointer => {
    const symbol = pointer.pointerSymbol
    if(!(symbol in symbolFn) || isNaN(pointer.synsetOffset)) return
    symbolFn[symbol](pointer.synsetOffset)
  })
  return relative
}