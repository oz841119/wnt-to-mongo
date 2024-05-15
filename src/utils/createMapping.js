export function createMapping(source, fieldName) {
  const mapping = {}
  source.forEach(e => {
    const key = e[fieldName]
    mapping[key] = e
  });
  return mapping
}