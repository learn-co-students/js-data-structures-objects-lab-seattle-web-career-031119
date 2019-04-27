var driver = new Object()

function updateDriverWithKeyAndValue(driver, key, value) {
  let newDriver = JSON.parse(JSON.stringify(driver))
  newDriver[key] = value
  return newDriver
}

function  destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = JSON.parse(JSON.stringify(driver))
  delete newDriver[key]
  return newDriver
}

function  destructivelyDeleteFromDriverByKey(driver, key, value) {
  delete driver[key]
  return driver
}
