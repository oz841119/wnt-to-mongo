export function createEnum(mapping) {
  const target = JSON.parse(JSON.stringify(mapping))
  const keys = Object.keys(mapping)
  try {
    keys.forEach((key) => {
      const value = mapping[key]
      if (value in mapping) {
        throw `{${key}: ${value}} cannot be used as a key in the Enum because it already exists.`
      }
      target[value] = key
    })
    return target
  } catch (err) {
    console.error(err)
  }
}