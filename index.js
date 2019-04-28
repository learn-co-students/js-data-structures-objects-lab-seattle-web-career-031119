const driver = {
  name: "mera"
}

function updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = []
  newObj[key] = value
  return Object.assign({}, obj, newObj)
}

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromDriverByKey(obj, key) {
  const newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  const newObj = obj
  delete newObj[key]
  return newObj
}
